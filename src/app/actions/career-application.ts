'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const careerApplicationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  motivation: z.string().optional(),
  portfolioUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  cvUrl: z.string().optional(),
})

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>

export async function submitCareerApplication(data: CareerApplicationData) {
  try {
    // Validate the data
    const validatedData = careerApplicationSchema.parse(data)

    // Check for existing application by email
    const existingApplication = await prisma.careerApplication.findFirst({
      where: {
        email: validatedData.email,
      },
    })

    if (existingApplication) {
      return {
        success: false,
        error: 'Application already exists',
        message:
          'You have already submitted an application. Please contact us if you need to update your application.',
      }
    }

    // Save to database
    const application = await prisma.careerApplication.create({
      data: {
        fullName: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        phone: validatedData.phone,
        motivation: validatedData.motivation || '',
        portfolioUrl: validatedData.portfolioUrl,
        cvUrl: validatedData.cvUrl,
      },
    })

    return {
      success: true,
      data: application,
    }
  } catch (error) {
    console.error('Error submitting career application:', error)

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
