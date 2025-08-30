'use server'
import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from '@/generated/prisma'
import { z } from 'zod'
import { azureBlobService } from '@/lib/azure-blob-service'

const prisma = new PrismaClient()

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
  data: FounderApplicationData,
  pitchDeckFile?: File
) {
  try {
    // Validate the data
    const validatedData = founderApplicationSchema.parse(data)

    let pitchDeckUrl = validatedData.pitchDeckUrl

    // Upload pitch deck if provided
    if (pitchDeckFile) {
      try {
        const bytes = await pitchDeckFile.arrayBuffer()
        const buffer = Buffer.from(bytes)
        pitchDeckUrl = await azureBlobService.uploadFile(
          buffer,
          pitchDeckFile.name,
          pitchDeckFile.type
        )
      } catch (uploadError) {
        console.error('Error uploading pitch deck:', uploadError)
        // Continue with submission even if file upload fails
      }
    }

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
        pitchDeckUrl: pitchDeckUrl,
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
