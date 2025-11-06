'use server'

import { prisma } from '@/lib/prisma'
import { queueInvestorConfirmation } from '@/lib/email-queue-service'
import { z } from 'zod'

const investorApplicationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  workEmail: z.string().email('Please enter a valid email address'),
  investorType: z.string().min(1, 'Please select an investor type'),
  personalLinkedIn: z.string().optional().or(z.literal('')),
  companyName: z.string().optional().or(z.literal('')),
  title: z.string().optional().or(z.literal('')),
  website: z.string().optional().or(z.literal('')),
  companyLinkedIn: z.string().optional().or(z.literal('')),
  investmentFocus: z
    .array(z.string())
    .min(1, 'Please select at least one investment focus'),
  otherFocus: z.string().optional(),
  ticketSize: z.string().min(1, 'Please select a ticket size'),
  targetGeography: z
    .array(z.string())
    .min(1, 'Please select at least one target geography'),
  otherGeography: z.string().optional(),
  referralSource: z.string().min(1, 'Please select a referral source'),
  otherSource: z.string().optional(),
}).superRefine((data, ctx) => {
  // If investor type is NOT Angel Investor, require company details
  if (data.investorType !== 'Angel Investor') {
    if (!data.companyName || data.companyName.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Company/Firm name is required for institutional investors',
        path: ['companyName'],
      })
    }
    if (!data.title || data.title.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Title is required for institutional investors',
        path: ['title'],
      })
    }
  }
})

export type InvestorApplicationData = z.infer<typeof investorApplicationSchema>

export async function checkExistingInvestorApplication(email: string) {
  try {
    // Check if there's already an application with this email
    const existingApplication = await prisma.investorApplication.findFirst({
      where: {
        workEmail: email
      }
    })

    return {
      success: true,
      exists: !!existingApplication,
      message: existingApplication 
        ? 'An application with this email has already been submitted. Please contact us if you need to update your application.'
        : 'Email is available for new application'
    }
  } catch (error) {
    console.error('Error checking existing investor application:', error)
    return {
      success: false,
      exists: false,
      message: 'Unable to verify email availability. Please try again.'
    }
  }
}

export async function submitInvestorApplication(data: InvestorApplicationData) {
  try {
    // Validate the data
    const validatedData = investorApplicationSchema.parse(data)

    // Check for existing application by name+company combination (final safeguard)
    // Only check company name if investor is institutional (has company)
    const whereClause = validatedData.companyName
      ? {
          AND: [
            { fullName: validatedData.fullName },
            { companyName: validatedData.companyName }
          ]
        }
      : { fullName: validatedData.fullName }
    
    const existingApplication = await prisma.investorApplication.findFirst({
      where: whereClause
    })

    if (existingApplication) {
      return {
        success: false,
        error: 'Application already exists',
        message: 'An application with this investor/company combination has already been submitted. Please contact us if you need to update your application.',
      }
    }

    // Save to database
    const application = await prisma.investorApplication.create({
      data: {
        fullName: validatedData.fullName,
        workEmail: validatedData.workEmail,
        investorType: validatedData.investorType,
        personalLinkedIn: validatedData.personalLinkedIn || undefined,
        companyName: validatedData.companyName || undefined,
        title: validatedData.title || undefined,
        website: validatedData.website || undefined,
        companyLinkedIn: validatedData.companyLinkedIn || undefined,
        investmentFocus: validatedData.investmentFocus,
        otherFocus: validatedData.otherFocus,
        ticketSize: validatedData.ticketSize,
        targetGeography: validatedData.targetGeography,
        otherGeography: validatedData.otherGeography,
        referralSource: validatedData.referralSource,
        otherSource: validatedData.otherSource,
      },
    })

    // Fire completion event for successful application (this is the LinkedIn conversion!)
    try {
      const { trackFormComplete } = await import('@/lib/analytics/unified-tracker')
      await trackFormComplete('investor', application.id, {
        email: validatedData.workEmail,
        companyName: validatedData.companyName,
      })
    } catch (analyticsError) {
      console.warn('Analytics tracking failed for investor application completion:', analyticsError)
    }

    // Queue confirmation email for investor
    await queueInvestorConfirmation(
      validatedData.workEmail,
      validatedData.fullName,
      validatedData.investorType
    ).catch(error => {
      console.error('Failed to queue investor confirmation email:', error)
    })

    return {
      success: true,
      message: 'Application submitted successfully',
    }
  } catch (error) {
    console.error('Error submitting investor application:', error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error.issues,
      }
    }

    return {
      success: false,
      error: 'Failed to submit application',
    }
  }
}
