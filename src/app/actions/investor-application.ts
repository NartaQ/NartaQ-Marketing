'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const investorApplicationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  workEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(1, 'Company/Firm name is required'),
  title: z.string().min(1, 'Title is required'),
  investmentFocus: z
    .array(z.string())
    .min(1, 'Please select at least one investment focus'),
  otherFocus: z.string().optional(),
  ticketSize: z.string().min(1, 'Please select a ticket size'),
  targetGeography: z
    .array(z.string())
    .min(1, 'Please select at least one target geography'),
  referralSource: z.string().min(1, 'Please select a referral source'),
  otherSource: z.string().optional(),
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
    const existingApplication = await prisma.investorApplication.findFirst({
      where: {
        AND: [
          { fullName: validatedData.fullName },
          { companyName: validatedData.companyName }
        ]
      }
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
        companyName: validatedData.companyName,
        title: validatedData.title,
        investmentFocus: validatedData.investmentFocus,
        otherFocus: validatedData.otherFocus,
        ticketSize: validatedData.ticketSize,
        targetGeography: validatedData.targetGeography,
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

    return {
      success: true,
      data: application,
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
