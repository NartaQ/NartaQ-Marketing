'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const founderApplicationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  workEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  website: z.string().url('Please enter a valid website URL'),
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

export async function submitFounderApplication(
  data: FounderApplicationData
) {
  try {
    // Validate the data
    const validatedData = founderApplicationSchema.parse(data)

    // Save to database
    const application = await prisma.founderApplication.create({
      data: {
        fullName: validatedData.fullName,
        workEmail: validatedData.workEmail,
        companyName: validatedData.companyName,
        website: validatedData.website,
        sector: validatedData.sector,
        otherSector: validatedData.otherSector,
        fundingStage: validatedData.fundingStage,
        location: validatedData.location,
        shortPitch: validatedData.shortPitch,
        pitchDeckUrl: validatedData.pitchDeckUrl,
      },
    })

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
