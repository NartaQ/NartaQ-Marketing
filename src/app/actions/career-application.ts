'use server'

import { prisma } from '@/lib/prisma'
import { queueCareerConfirmation } from '@/lib/email-queue-service'
import { sendAdminNotification } from '@/lib/email-service'
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
  position: z.string().optional().default('General'),
})

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>

export async function checkExistingCareerApplication(email: string) {
  try {
    const existingApplication = await prisma.careerApplication.findFirst({
      where: {
        email: email,
      },
    })

    if (existingApplication) {
      return {
        success: false,
        exists: true,
        error: 'Application already exists',
        message:
          'You have already submitted an application. Please contact us if you need to update your application.',
      }
    }

    return {
      success: true,
      exists: false,
    }
  } catch (error) {
    console.error('Error checking existing application:', error)
    return {
      success: false,
      exists: false,
      error: 'Failed to check existing application',
    }
  }
}

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
        position: validatedData.position || 'General',
      },
    })

    // Fire completion event for successful application (this is the LinkedIn conversion!)
    try {
      const { trackFormComplete } = await import('@/lib/analytics/unified-tracker')
      await trackFormComplete('career', application.id, {
        email: validatedData.email,
      })
    } catch (analyticsError) {
      console.warn('Analytics tracking failed for career application completion:', analyticsError)
    }

    // Queue confirmation email for applicant (processed in background)
    queueCareerConfirmation(
      validatedData.email,
      `${validatedData.firstName} ${validatedData.lastName}`,
      validatedData.position || 'General'
    ).catch(error => {
      console.error('Failed to queue career confirmation email:', error)
    })

    // Send admin notification (non-blocking)
    sendAdminNotification('career', {
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      position: validatedData.position || 'General',
    }).catch(error => {
      console.error('Failed to send admin notification:', error)
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
