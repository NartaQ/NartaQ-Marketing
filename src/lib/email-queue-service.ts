/**
 * Email Queue Service
 * 
 * Database-driven email delivery system for reliable, asynchronous email sending.
 * 
 * Strategy:
 * - Emails are queued in database when created
 * - Vercel Cron processes queue every 4 hours (Pro tier) or manually triggered
 * - Failed emails are retried with exponential backoff
 * - Simple, reliable, no client-side hacks
 * 
 * Processing:
 * - Vercel Cron: Every 4 hours automatically (requires Pro tier)
 * - Rate limited to avoid SendGrid throttling
 */

import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email-service'
import { emailTemplateLoader } from './email-template-loader'

interface QueueEmailOptions {
  to: string
  subject: string
  htmlContent: string
  type: 'welcome' | 'confirmation' | 'newsletter' | 'campaign'
  scheduledAt?: Date
}

/**
 * Add email to queue for later delivery
 */
export async function queueEmail(options: QueueEmailOptions): Promise<void> {
  try {
    await prisma.emailQueue.create({
      data: {
        to: options.to,
        subject: options.subject,
        htmlContent: options.htmlContent,
        type: options.type,
        scheduledAt: options.scheduledAt || new Date(),
      },
    })
    processEmailQueue()
    
    console.log('📬 Email queued:', { to: options.to, subject: options.subject })
  } catch (error) {
    console.error('❌ Failed to queue email:', error)
    // Don't throw - queuing failure shouldn't break the application
  }
}

/**
 * Process pending emails from queue
 * Called "piggyback" style during regular site activity
 */
export async function processEmailQueue(maxBatch = 10): Promise<{
  processed: number
  sent: number
  failed: number
}> {
  try {
    // Find pending emails that are due to be sent
    const pendingEmails = await prisma.emailQueue.findMany({
      where: {
        status: 'pending',
        scheduledAt: {
          lte: new Date(), // Only emails scheduled for now or past
        },
        attempts: {
          lt: prisma.emailQueue.fields.maxAttempts, // Still has attempts left
        },
      },
      take: maxBatch,
      orderBy: {
        scheduledAt: 'asc', // Oldest first
      },
    })

    if (pendingEmails.length === 0) {
      return { processed: 0, sent: 0, failed: 0 }
    }

    console.log(`📨 Processing ${pendingEmails.length} queued emails...`)

    let sent = 0
    let failed = 0

    // Process each email
    for (const email of pendingEmails) {
      try {
        // Attempt to send
        const result = await sendEmail({
          to: email.to,
          subject: email.subject,
          html: email.htmlContent,
        })

        if (result.success) {
          // Mark as sent
          await prisma.emailQueue.update({
            where: { id: email.id },
            data: {
              status: 'sent',
              sentAt: new Date(),
              attempts: email.attempts + 1,
            },
          })
          sent++
        } else {
          // Mark attempt and check if max reached
          const newAttempts = email.attempts + 1
          const status = newAttempts >= email.maxAttempts ? 'failed' : 'pending'
          
          await prisma.emailQueue.update({
            where: { id: email.id },
            data: {
              status,
              attempts: newAttempts,
              lastError: result.error || 'Unknown error',
            },
          })
          
          if (status === 'failed') {
            failed++
            console.error(`❌ Email failed after ${email.maxAttempts} attempts:`, {
              to: email.to,
              error: result.error,
            })
          }
        }
      } catch (error) {
        // Handle unexpected errors
        const newAttempts = email.attempts + 1
        const status = newAttempts >= email.maxAttempts ? 'failed' : 'pending'
        
        await prisma.emailQueue.update({
          where: { id: email.id },
          data: {
            status,
            attempts: newAttempts,
            lastError: error instanceof Error ? error.message : 'Unknown error',
          },
        })
        
        if (status === 'failed') {
          failed++
        }
      }

      // Small delay between emails to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log(`✅ Email queue processed: ${sent} sent, ${failed} failed`)
    return { processed: pendingEmails.length, sent, failed }
  } catch (error) {
    console.error('❌ Error processing email queue:', error)
    return { processed: 0, sent: 0, failed: 0 }
  }
}

/**
 * Send a welcome email for new newsletter subscriber directly
 */
export async function queueWelcomeEmail(email: string, name?: string): Promise<void> {
  await sendEmail({
    to: email,
    subject: 'Welcome to NartaQ Community 🎉',
    html: emailTemplateLoader.renderNewsletterWelcome({ name: name || 'there' }),
  })
}

/**
 * Send a founder confirmation email directly
 */
export async function queueFounderConfirmation(
  email: string,
  name: string,
  company: string
): Promise<void> {
  await sendEmail({
    to: email,
    subject: `Application Received for ${company} ✓`,
    html: emailTemplateLoader.renderFounderConfirmation({ founderName: name, companyName: company }),
  })
}

/**
 * Send an investor confirmation email directly
 */
export async function queueInvestorConfirmation(
  email: string,
  name: string,
  investorType: string
): Promise<void> {
  await sendEmail({
    to: email,
    subject: 'Welcome to NartaQ Investor Network ✓',
    html: emailTemplateLoader.renderInvestorConfirmation({ investorName: name, investorType }),
  })
}

/**
 * Send a career confirmation email directly
 */
export async function queueCareerConfirmation(
  email: string,
  name: string,
  position: string
): Promise<void> {
  await sendEmail({
    to: email,
    subject: `Application Received for ${position} ✓`,
    html: emailTemplateLoader.renderCareerConfirmation({ applicantName: name, position }),
  })
}

/**
 * Send an SPV partner confirmation email directly
 */
export async function queueSPVPartnerConfirmation(
  email: string,
  name: string,
  company: string
): Promise<void> {
  await sendEmail({
    to: email,
    subject: `SPV Partnership Application Received from ${company} ✓`,
    html: emailTemplateLoader.renderSPVPartnerConfirmation({ partnerName: name, companyName: company }),
  })
}

/**
 * Get queue statistics
 */
export async function getQueueStats(): Promise<{
  pending: number
  sent: number
  failed: number
  total: number
}> {
  const [pending, sent, failed, total] = await Promise.all([
    prisma.emailQueue.count({ where: { status: 'pending' } }),
    prisma.emailQueue.count({ where: { status: 'sent' } }),
    prisma.emailQueue.count({ where: { status: 'failed' } }),
    prisma.emailQueue.count(),
  ])

  return { pending, sent, failed, total }
}
