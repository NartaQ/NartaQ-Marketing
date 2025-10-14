/**
 * Email Templates for NartaQ Platform
 * 
 * Professional HTML email templates matching NartaQ's UI design.
 * Optimized for deliverability across all major email clients.
 * 
 * Design System:
 * - Colors: Gold (#a98b5d), Cream (#dcd7ce), Black (#000000)
 * - Typography: System fonts for reliability
 * - Layout: Table-based for Outlook compatibility
 * - Responsive: Mobile-first with breakpoints
 */

/**
 * Base email template with NartaQ branding
 * Uses table-based layout for maximum email client compatibility
 */
const baseTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no,address=no,email=no">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>NartaQ</title>
  <style type="text/css">
    /* Client-specific Styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    
    /* Reset Styles */
    body, #bodyTable { background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    #outlook a { padding: 0; }
    .ReadMsgBody, .ExternalClass { width: 100%; }
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
    
    /* Typography */
    h1, h2, h3, p { margin: 0; padding: 0; }
    a { color: #a98b5d; text-decoration: none; }
    a:hover { color: #dcd7ce !important; }
    
    /* Prevent auto-linking */
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
    
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .darkmode-bg { background-color: #000000 !important; }
      .darkmode-text { color: #dcd7ce !important; }
    }
    
    /* Mobile Responsive */
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding: 20px !important; }
      .mobile-text-center { text-align: center !important; }
      .mobile-stack { display: block !important; width: 100% !important; }
      .mobile-hide { display: none !important; }
      .mobile-full { width: 100% !important; max-width: 100% !important; }
    }
  </style>
  <!--[if mso]>
  <style type="text/css">
    .button { padding: 14px 32px !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #000000;">
  <!-- Hidden preheader text -->
  <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
    NartaQ - Connecting Ventures, Building Futures
  </div>
  
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" id="bodyTable" style="background-color: #000000;">
    <tr>
      <td align="center" style="padding: 40px 20px;" class="mobile-padding">
        <!-- Main Container (600px) -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="mobile-full" style="max-width: 600px; background-color: #000000;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 0 0 40px 0; border-bottom: 1px solid rgba(169, 139, 93, 0.3);">
              <h1 style="margin: 0 0 10px 0; color: #a98b5d; font-size: 42px; font-weight: 700; letter-spacing: -0.5px; text-shadow: 0 0 30px rgba(169, 139, 93, 0.4);">
                NartaQ
              </h1>
              <p style="margin: 0; color: #a98b5d; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0.9;">
                Connecting Ventures, Building Futures
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 0;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 40px 0 0 0; border-top: 1px solid rgba(169, 139, 93, 0.3);">
              <p style="margin: 0 0 8px 0; color: #dcd7ce; font-size: 13px; font-weight: 600;">
                <span style="color: #a98b5d;">NartaQ</span> - France-Tunisia Corridor
              </p>
              <p style="margin: 0 0 20px 0; color: rgba(220, 215, 206, 0.7); font-size: 12px;">
                Paris, France | Tunis, Tunisia
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                <tr>
                  <td style="padding: 0 12px;">
                    <a href="https://nartaq.com" style="color: #a98b5d; font-size: 12px; font-weight: 500;">Website</a>
                  </td>
                  <td style="padding: 0 12px; border-left: 1px solid rgba(169, 139, 93, 0.3);">
                    <a href="https://nartaq.com/about" style="color: #a98b5d; font-size: 12px; font-weight: 500;">About</a>
                  </td>
                  <td style="padding: 0 12px; border-left: 1px solid rgba(169, 139, 93, 0.3);">
                    <a href="https://nartaq.com/legal/privacy" style="color: #a98b5d; font-size: 12px; font-weight: 500;">Privacy</a>
                  </td>
                </tr>
              </table>
              <p style="margin: 20px 0 0 0; color: rgba(220, 215, 206, 0.5); font-size: 11px;">
                © ${new Date().getFullYear()} NartaQ. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim()

/**
 * Card component with subtle background
 */
const cardComponent = (content: string) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
    <tr>
      <td style="background-color: rgba(35, 36, 40, 0.6); border: 1px solid rgba(169, 139, 93, 0.2); border-radius: 16px; padding: 30px;">
        ${content}
      </td>
    </tr>
  </table>
`

/**
 * Button component with gradient effect
 */
const buttonComponent = (text: string, url: string) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 30px 0;">
    <tr>
      <td align="center" style="border-radius: 12px; background: linear-gradient(135deg, #a98b5d 0%, #dcd7ce 100%);">
        <a href="${url}" style="background: linear-gradient(135deg, #a98b5d 0%, #dcd7ce 100%); border: 2px solid rgba(169, 139, 93, 0.3); border-radius: 12px; box-shadow: 0 4px 20px rgba(169, 139, 93, 0.3); color: #000000; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 50px; text-align: center; text-decoration: none; width: 200px; -webkit-text-size-adjust: none;">
          ${text}
        </a>
      </td>
    </tr>
  </table>
`

/**
 * Badge component for status indicators
 */
const badgeComponent = (text: string, color: 'gold' | 'cream' = 'gold') => {
  const bgColor = color === 'gold' ? '#a98b5d' : '#dcd7ce'
  const textColor = '#000000'
  
  return `<span style="display: inline-block; padding: 6px 14px; background-color: ${bgColor}; color: ${textColor}; border-radius: 20px; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; margin: 5px 5px 5px 0;">${text}</span>`
}

/**
 * Highlight box component
 */
const highlightBox = (content: string) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
    <tr>
      <td style="background-color: rgba(169, 139, 93, 0.1); border-left: 4px solid #a98b5d; border-radius: 8px; padding: 20px;">
        ${content}
      </td>
    </tr>
  </table>
`

/**
 * Newsletter Welcome Email Template
 */
export const newsletterWelcomeEmail = (name?: string | null) => {
  const greeting = name ? `Hi ${name}` : 'Hello'
  
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        ${greeting}! Welcome to NartaQ 🎉
      </h1>
      <p style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for subscribing to our newsletter. You're now part of an exclusive community connecting ventures across the France-Tunisia corridor.
      </p>
      <p style="margin: 0 0 15px 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        We'll keep you updated on:
      </p>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6;">
            ${badgeComponent('Funding')} Latest funding opportunities and connections
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6;">
            ${badgeComponent('Events', 'cream')} Exclusive ecosystem events and networking
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6;">
            ${badgeComponent('Insights')} Market insights and success stories
          </td>
        </tr>
      </table>
    `)}
    
    ${buttonComponent('Explore Our Ecosystem', 'https://nartaq.com')}
    
    <p style="margin: 30px 0 0 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Questions? Reply to this email or visit our <a href="https://nartaq.com/faq" style="color: #a98b5d; text-decoration: none; font-weight: 600;">FAQ page</a>.
    </p>
  `
  
  return baseTemplate(content)
}

/**
 * Founder Application Confirmation Email
 */
export const founderApplicationConfirmation = (founderName: string, companyName: string) => {
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        Application Received, ${founderName}! 🚀
      </h1>
      <p style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for submitting your application for <strong style="color: #a98b5d;">${companyName}</strong>. We're excited to review your venture!
      </p>
      
      ${highlightBox(`
        <p style="margin: 0 0 12px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6; font-weight: 600;">
          What happens next?
        </p>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">1-2 weeks:</strong> Our team reviews your application
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">If selected:</strong> We connect you with relevant investors
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Next steps:</strong> Introductions and potential meetings
            </td>
          </tr>
        </table>
      `)}
      
      <p style="margin: 20px 0 0 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        In the meantime, explore our resources and connect with the community.
      </p>
    `)}
    
    ${buttonComponent('Founder Resources', 'https://nartaq.com/for-founders')}
    
    <p style="margin: 30px 0 0 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Questions? <a href="https://nartaq.com/faq" style="color: #a98b5d; text-decoration: none; font-weight: 600;">Check our FAQ</a> or reply to this email.
    </p>
  `
  
  return baseTemplate(content)
}

/**
 * Investor Application Confirmation Email
 */
export const investorApplicationConfirmation = (investorName: string, investorType: string) => {
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        Welcome to NartaQ, ${investorName}! 🎯
      </h1>
      <p style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for joining our investor network as a <strong style="color: #a98b5d;">${investorType}</strong>. Your profile is now active and we're matching you with promising ventures.
      </p>
      
      ${highlightBox(`
        <p style="margin: 0 0 12px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6; font-weight: 600;">
          How NartaQ works for you:
        </p>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">AI Matching:</strong> Curated deal flow based on your criteria
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Quality Vetting:</strong> Pre-screened founders and ventures
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Deal Support:</strong> SPV partners for streamlined syndication
            </td>
          </tr>
        </table>
      `)}
      
      <p style="margin: 20px 0 0 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        You'll receive deal opportunities that match your investment thesis via email.
      </p>
    `)}
    
    ${buttonComponent('Explore Deal Flow', 'https://nartaq.com/for-investors')}
    
    <p style="margin: 30px 0 0 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Want to refine your preferences? <a href="https://nartaq.com/faq" style="color: #a98b5d; text-decoration: none; font-weight: 600;">Visit your dashboard</a>
    </p>
  `
  
  return baseTemplate(content)
}


/**
 * Career Application Confirmation Email
 */
export const careerApplicationConfirmation = (applicantName: string, position: string) => {
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        Application Received, ${applicantName}! 💼
      </h1>
      <p style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for applying for the <strong style="color: #a98b5d;">${position}</strong> position at NartaQ.
      </p>
      
      ${highlightBox(`
        <p style="margin: 0 0 12px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6; font-weight: 600;">
          Our hiring process:
        </p>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">1-2 weeks:</strong> Application review and shortlisting
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">If selected:</strong> Initial phone/video screening
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Final stage:</strong> Team interviews and culture fit assessment
            </td>
          </tr>
        </table>
      `)}
      
      <p style="margin: 20px 0 0 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        We appreciate your interest in joining our mission to connect the France-Tunisia tech corridor!
      </p>
    `)}
    
    ${buttonComponent('Learn About NartaQ', 'https://nartaq.com/about')}
    
    <p style="margin: 30px 0 0 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Questions about the role? <a href="https://nartaq.com/careers" style="color: #a98b5d; text-decoration: none; font-weight: 600;">View all positions</a>
    </p>
  `
  
  return baseTemplate(content)
}


/**
 * Admin Notification Email for New Applications
 */
export const adminApplicationNotification = (
  applicationType: string,
  applicantName: string,
  applicantEmail: string,
  details: Record<string, string> = {}
) => {
  const detailsRows = Object.entries(details)
    .map(([key, value]) => `
      <tr>
        <td style="padding: 8px 0; color: rgba(220, 215, 206, 0.7); font-size: 14px; text-transform: capitalize;">
          ${key}:
        </td>
        <td style="padding: 8px 0; color: #dcd7ce; font-size: 14px; font-weight: 600;">
          ${value}
        </td>
      </tr>
    `).join('')

  const content = `
    ${cardComponent(`
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        ${badgeComponent(applicationType, 'gold')}
        <span style="margin-left: 12px; color: rgba(220, 215, 206, 0.7); font-size: 14px;">
          ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
      
      <h1 style="margin: 0 0 20px 0; color: #dcd7ce; font-size: 24px; font-weight: 700; line-height: 1.3;">
        New ${applicationType} Application
      </h1>
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
        <tr>
          <td style="padding: 8px 0; color: rgba(220, 215, 206, 0.7); font-size: 14px;">
            Name:
          </td>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 14px; font-weight: 600;">
            ${applicantName}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: rgba(220, 215, 206, 0.7); font-size: 14px;">
            Email:
          </td>
          <td style="padding: 8px 0;">
            <a href="mailto:${applicantEmail}" style="color: #a98b5d; text-decoration: none; font-weight: 600;">
              ${applicantEmail}
            </a>
          </td>
        </tr>
        ${detailsRows}
      </table>
    `)}
    
    ${highlightBox(`
      <p style="margin: 0; color: #dcd7ce; font-size: 14px; line-height: 1.6;">
        <strong>Action Required:</strong> Review this application in the admin dashboard and follow up within 24-48 hours.
      </p>
    `)}
    
    ${buttonComponent('Review Application', 'https://nartaq.com/admin')}
  `
  
  return baseTemplate(content)
}

/**
 * Email Template Type Exports
 */
export type EmailTemplate = 
  | 'newsletter-welcome'
  | 'founder-confirmation'
  | 'investor-confirmation'
  | 'career-confirmation'
  | 'admin-notification'

export interface EmailTemplateData {
  type: EmailTemplate
  data: Record<string, string | null | undefined>
}
