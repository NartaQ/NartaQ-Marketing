'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const founderApplicationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  workEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  sector: z.array(z.string()).min(1, 'Please select at least one sector'),
  otherSector: z.string().optional(),
  fundingStage: z.string().min(1, 'Please select a funding stage'),
  location: z.string().min(1, 'Please select a location'),
  shortPitch: z
    .string()
    .min(10, 'Please provide a short pitch (minimum 10 characters)')
    .max(300, 'Pitch must be under 300 characters'),
  pitchDeckUrl: z.string().optional(),
})

export type FounderApplicationData = z.infer<typeof founderApplicationSchema>

export async function checkExistingFounderApplication(email: string) {
  try {
    // Check if there's already an application with this email
    const existingApplication = await prisma.founderApplication.findFirst({
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
    console.error('Error checking existing founder application:', error)
    return {
      success: false,
      exists: false,
      message: 'Unable to verify email availability. Please try again.'
    }
  }
}

export async function submitFounderApplication(
  data: FounderApplicationData
) {
  try {
    // Validate the data
    const validatedData = founderApplicationSchema.parse(data)

    // Check for existing application by name+company combination (final safeguard)
    const existingApplication = await prisma.founderApplication.findFirst({
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
        message: 'An application with this founder/company combination has already been submitted. Please contact us if you need to update your application.',
      }
    }

    // Save to database
    const application = await prisma.founderApplication.create({
      data: {
        fullName: validatedData.fullName,
        workEmail: validatedData.workEmail,
        companyName: validatedData.companyName,
        website: validatedData.website || undefined,
        sector: validatedData.sector,
        otherSector: validatedData.otherSector,
        fundingStage: validatedData.fundingStage,
        location: validatedData.location,
        shortPitch: validatedData.shortPitch,
        pitchDeckUrl: validatedData.pitchDeckUrl,
      },
    })

    // Fire completion event for successful application (this is the LinkedIn conversion!)
    try {
      const { trackFormComplete } = await import('@/lib/analytics/unified-tracker')
      await trackFormComplete('founder', application.id, {
        email: validatedData.workEmail,
        companyName: validatedData.companyName,
        sector: validatedData.sector,
        fundingStage: validatedData.fundingStage,
      })
    } catch (analyticsError) {
      console.warn('Analytics tracking failed for founder application completion:', analyticsError)
    }

    return {
      success: true,
      data: application,
    }
  } catch (error) {
    console.error('Error submitting founder application:', error)

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
