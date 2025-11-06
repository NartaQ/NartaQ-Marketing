'use server'

import { prisma } from '@/lib/prisma'
import { queueWelcomeEmail } from '@/lib/email-queue-service'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  source: z.string().optional(),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

export async function subscribeToNewsletter(data: NewsletterData) {
  try {
    // Validate the data
    const validatedData = newsletterSchema.parse(data)

    // Check if email already exists
    const existingSubscription = await prisma.newsletter.findUnique({
      where: { email: validatedData.email }
    })

    if (existingSubscription) {
      return {
        success: false,
        error: 'This email is already subscribed to our newsletter',
      }
    }

    // Save to database
    const subscription = await prisma.newsletter.create({
      data: {
        email: validatedData.email,
        name: validatedData.name || null,
        source: validatedData.source || 'unknown',
      },
    })

    // Queue welcome email for background processing
    await queueWelcomeEmail(subscription.email, subscription.name || undefined).catch(error => {
      console.error('Failed to queue welcome email:', error)
      // Continue execution - queuing failure shouldn't block subscription
    })

    return {
      success: true,
      data: subscription,
    }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error.issues,
      }
    }

    return {
      success: false,
      error: 'Failed to subscribe to newsletter',
    }
  }
}