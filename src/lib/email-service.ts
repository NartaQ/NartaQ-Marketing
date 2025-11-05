/**
 * Email Service for NartaQ Platform
 * 
 * Provides email sending functionality with templates,
 * error handling, and comprehensive logging.
 * Uses SendGrid in production and Mailpit for local development.
 */

import sgMail from '@sendgrid/mail'
import nodemailer from 'nodemailer'
import { emailTemplateLoader } from './email-template-loader'

// Email configuration from environment
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@nartaq.com'

// SMTP configuration for local development (Mailpit)
const SMTP_HOST = process.env.SMTP_HOST || 'localhost'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '1025', 10)

// Initialize SendGrid if API key is available (production)
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY)
  console.log('📧 Email service: SendGrid (production)')
} else {
  console.log(
    `📧 Email service: Mailpit (development) at ${SMTP_HOST}:${SMTP_PORT}\n` +
    `   View emails at http://localhost:8025`
  )
}

// Create nodemailer transporter for local development
const smtpTransporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // Mailpit doesn't use TLS
  tls: {
    rejectUnauthorized: false
  }
})

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
  try {
    // Use SendGrid in production, Mailpit in development
    if (SENDGRID_API_KEY) {
      return await sendViaSendGrid(options)
    } else {
      return await sendViaMailpit(options)
    }
  } catch (error) {
    console.error('❌ Error sending email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    }
  }
}

/**
 * Send email via SendGrid (production)
 */
async function sendViaSendGrid(options: EmailOptions): Promise<{
  success: boolean
  error?: string
  messageId?: string
}> {
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

    console.log('✅ Email sent via SendGrid:', {
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
    console.error('❌ SendGrid error:', error)
    
    let errorMessage = 'Failed to send email via SendGrid'
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
 * Send email via Mailpit (local development)
 */
async function sendViaMailpit(options: EmailOptions): Promise<{
  success: boolean
  error?: string
  messageId?: string
}> {
  try {
    const info = await smtpTransporter.sendMail({
      from: options.from || FROM_EMAIL,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || stripHtml(options.html),
      replyTo: options.replyTo,
    })

    console.log('✅ Email sent via Mailpit:', {
      to: options.to,
      subject: options.subject,
      messageId: info.messageId,
      preview: `http://localhost:8025`,
    })

    return {
      success: true,
      messageId: info.messageId,
    }
  } catch (error) {
    console.error('❌ Mailpit error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email via Mailpit',
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
  name?: string
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: email,
    subject: 'Welcome to NartaQ Community 🎉',
    html: emailTemplateLoader.renderNewsletterWelcome({ name: name || 'there' }),
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
    html: emailTemplateLoader.renderFounderConfirmation({ founderName, companyName }),
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
    html: emailTemplateLoader.renderInvestorConfirmation({ investorName, investorType }),
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
    html: emailTemplateLoader.renderCareerConfirmation({ applicantName, position }),
    replyTo: 'careers@nartaq.com',
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
 * Verify email service configuration
 */
export function verifyEmailConfig(): {
  configured: boolean
  apiKeySet: boolean
  fromEmailSet: boolean
  mode: 'sendgrid' | 'mailpit'
} {
  return {
    configured: true, // Always configured (either SendGrid or Mailpit)
    apiKeySet: !!SENDGRID_API_KEY,
    fromEmailSet: !!FROM_EMAIL,
    mode: SENDGRID_API_KEY ? 'sendgrid' : 'mailpit',
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
      <h1 style="color: #a98b5d;">Email Service Test ✓</h1>
      <p>This is a test email from NartaQ platform.</p>
      <p>If you received this, the email service is configured correctly!</p>
      <p style="color: #888; font-size: 12px; margin-top: 30px;">
        Sent at: ${new Date().toISOString()}
      </p>
    </div>
  `

  return sendEmail({
    to: toEmail,
    subject: 'NartaQ Email Service Test',
    html: testHtml,
  })
}

// Export the base sendEmail function for custom use cases
export { sendEmail }
