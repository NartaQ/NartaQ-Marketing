/**
 * SendGrid Email Service for NartaQ Platform
 * 
 * Provides email sending functionality with templates,
 * error handling, and comprehensive logging.
 */

import sgMail from '@sendgrid/mail'
import {
  newsletterWelcomeEmail,
  founderApplicationConfirmation,
  investorApplicationConfirmation,
  careerApplicationConfirmation,
  adminApplicationNotification,
} from './email-templates'

// Initialize SendGrid with API key from environment
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@nartaq.com'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@nartaq.com'

// Only initialize if API key is available
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY)
} else {
  console.warn(
    '⚠️  SendGrid API key not configured. Email sending will be disabled. ' +
    'Set SENDGRID_API_KEY environment variable to enable emails.'
  )
}

interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
  from?: string
  replyTo?: string
}

/**
 * Base email sending function
 */
async function sendEmail(options: EmailOptions): Promise<{
  success: boolean
  error?: string
  messageId?: string
}> {
  // Check if SendGrid is configured
  if (!SENDGRID_API_KEY) {
    console.log('📧 Email sending skipped (SendGrid not configured):', {
      to: options.to,
      subject: options.subject,
    })
    return {
      success: false,
      error: 'SendGrid API key not configured',
    }
  }

  try {
    const msg = {
      to: options.to,
      from: options.from || FROM_EMAIL,
      subject: options.subject,
      html: options.html,
      text: options.text || stripHtml(options.html),
      replyTo: options.replyTo,
    }

    const [response] = await sgMail.send(msg)

    console.log('✅ Email sent successfully:', {
      to: options.to,
      subject: options.subject,
      statusCode: response.statusCode,
      messageId: response.headers['x-message-id'],
    })

    return {
      success: true,
      messageId: response.headers['x-message-id'] as string,
    }
  } catch (error) {
    console.error('❌ Error sending email:', error)
    
    let errorMessage = 'Failed to send email'
    if (error && typeof error === 'object' && 'response' in error) {
      const sgError = error as { response?: { body?: { errors?: Array<{ message: string }> } } }
      errorMessage = sgError.response?.body?.errors?.[0]?.message || errorMessage
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}

/**
 * Strip HTML tags for plain text version
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Send newsletter welcome email
 */
export async function sendNewsletterWelcome(
  email: string,
  name?: string | null
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: email,
    subject: 'Welcome to NartaQ Community 🎉',
    html: newsletterWelcomeEmail(name),
    replyTo: 'contact@nartaq.com',
  })
}

/**
 * Send founder application confirmation
 */
export async function sendFounderConfirmation(
  email: string,
  founderName: string,
  companyName: string
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: email,
    subject: `Application Received for ${companyName} ✓`,
    html: founderApplicationConfirmation(founderName, companyName),
    replyTo: 'founders@nartaq.com',
  })
}

/**
 * Send investor application confirmation
 */
export async function sendInvestorConfirmation(
  email: string,
  investorName: string,
  investorType: string
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: email,
    subject: 'Welcome to NartaQ Investor Network ✓',
    html: investorApplicationConfirmation(investorName, investorType),
    replyTo: 'investors@nartaq.com',
  })
}

/**
 * Send career application confirmation
 */
export async function sendCareerConfirmation(
  email: string,
  applicantName: string,
  position: string
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: email,
    subject: `Application Received for ${position} ✓`,
    html: careerApplicationConfirmation(applicantName, position),
    replyTo: 'careers@nartaq.com',
  })
}

/**
 * Send admin notification for new applications
 */
export async function sendAdminNotification(
  type: 'founder' | 'investor' | 'career',
  details: {
    name: string
    email: string
    company?: string
    position?: string
    investorType?: string
  }
): Promise<{ success: boolean; error?: string }> {
  const subjects = {
    founder: `New Founder Application: ${details.company || details.name}`,
    investor: `New Investor Application: ${details.name}`,
    career: `New Career Application: ${details.position || details.name}`,
  }

  // Extract relevant details for template
  const additionalDetails: Record<string, string> = {}
  if (details.company) additionalDetails.company = details.company
  if (details.position) additionalDetails.position = details.position
  if (details.investorType) additionalDetails['investor type'] = details.investorType

  return sendEmail({
    to: ADMIN_EMAIL,
    subject: subjects[type],
    html: adminApplicationNotification(type, details.name, details.email, additionalDetails),
    replyTo: details.email,
  })
}

/**
 * Send bulk emails (for newsletters or announcements)
 */
export async function sendBulkEmails(
  recipients: Array<{ email: string; name?: string }>,
  subject: string,
  htmlTemplate: (name?: string) => string
): Promise<{
  success: boolean
  sent: number
  failed: number
  errors: Array<{ email: string; error: string }>
}> {
  if (!SENDGRID_API_KEY) {
    return {
      success: false,
      sent: 0,
      failed: recipients.length,
      errors: recipients.map(r => ({
        email: r.email,
        error: 'SendGrid not configured',
      })),
    }
  }

  const results = await Promise.allSettled(
    recipients.map(recipient =>
      sendEmail({
        to: recipient.email,
        subject,
        html: htmlTemplate(recipient.name),
      })
    )
  )

  const sent = results.filter(r => r.status === 'fulfilled' && r.value.success).length
  const failed = results.length - sent
  const errors = results
    .map((r, i) => ({
      email: recipients[i].email,
      error:
        r.status === 'rejected'
          ? r.reason
          : r.status === 'fulfilled' && !r.value.success
          ? r.value.error || 'Unknown error'
          : null,
    }))
    .filter(e => e.error !== null) as Array<{ email: string; error: string }>

  console.log('📨 Bulk email results:', { total: recipients.length, sent, failed })

  return {
    success: failed === 0,
    sent,
    failed,
    errors,
  }
}

/**
 * Verify SendGrid configuration
 */
export function verifySendGridConfig(): {
  configured: boolean
  apiKeySet: boolean
  fromEmailSet: boolean
} {
  return {
    configured: !!SENDGRID_API_KEY,
    apiKeySet: !!SENDGRID_API_KEY,
    fromEmailSet: !!FROM_EMAIL,
  }
}

/**
 * Test email sending (for development)
 */
export async function sendTestEmail(
  toEmail: string
): Promise<{ success: boolean; error?: string }> {
  const testHtml = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h1 style="color: #a98b5d;">SendGrid Test Email ✓</h1>
      <p>This is a test email from NartaQ platform.</p>
      <p>If you received this, SendGrid is configured correctly!</p>
      <p style="color: #888; font-size: 12px; margin-top: 30px;">
        Sent at: ${new Date().toISOString()}
      </p>
    </div>
  `

  return sendEmail({
    to: toEmail,
    subject: 'NartaQ SendGrid Test Email',
    html: testHtml,
  })
}

// Export the base sendEmail function for custom use cases
export { sendEmail }
