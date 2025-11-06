/**
 * Enhanced Email Templates for NartaQ Platform
 * 
 * Professional HTML email templates matching NartaQ's sophisticated UI design.
 * Optimized for deliverability and email client compatibility.
 * 
 * Design System:
 * - Colors: Gold (#a98b5d), Cream (#dcd7ce), Black (#000000)
 * - Typography: System fonts for reliability across email clients
 * - Layout: Table-based for Outlook compatibility, 600px max-width
 * - Spacing: 20px base unit for consistent rhythm
 * - Gradients: Implemented with fallbacks for limited clients
 * 
 * Deliverability Best Practices:
 * - Inline CSS for maximum compatibility
 * - Semantic HTML structure
 * - Proper DOCTYPE and meta tags
 * - Dark mode support with color-scheme meta
 * - Mobile responsive with media queries
 * - Accessibility improvements
 * - No spam trigger words or excessive images
 */

/**
 * Base email template with NartaQ branding
 * Uses table-based layout for Outlook and other limited email clients
 */
const baseTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>NartaQ</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    /* Reset & Base Styles */
    body {
      margin: 0 !important;
      padding: 0 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #000000 !important;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    td {
      padding: 0;
      vertical-align: top;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      display: block;
    }
    p {
      margin: 0;
      padding: 0;
    }
    a {
      color: #a98b5d;
      text-decoration: none;
    }
    a:hover {
      color: #dcd7ce !important;
    }
    /* Prevent auto-linking */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .dark-bg { background-color: #000000 !important; }
      .dark-text { color: #dcd7ce !important; }
      .dark-border { border-color: rgba(169, 139, 93, 0.3) !important; }
    }
    /* Mobile responsive */
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .mobile-text-center { text-align: center !important; }
      .mobile-full-width { width: 100% !important; max-width: 100% !important; }
      .mobile-hide { display: none !important; }
      .mobile-button { padding: 12px 24px !important; font-size: 14px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000;" bgcolor="#000000">
  <!-- Preheader text (hidden from view, appears in inbox preview) -->
  <div style="display: none; font-size: 1px; color: #000000; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
    NartaQ - Connecting Ventures, Building Futures in the France-Tunisia Corridor
  </div>
  
  <!-- Main container -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;" bgcolor="#000000" class="dark-bg">
    <tr>
      <td style="padding: 40px 20px;" class="mobile-padding">
        <!-- Content wrapper (600px max) -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #000000;" bgcolor="#000000" align="center">
          
          <!-- Header with gradient logo -->
          <tr>
            <td style="padding: 0 0 40px 0; text-align: center; border-bottom: 1px solid rgba(169, 139, 93, 0.3);" class="dark-border">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    <!-- Logo with gradient effect (uses span for gradient fallback in Outlook) -->
                    <h1 style="margin: 0 0 10px 0; padding: 0; font-size: 42px; font-weight: 700; line-height: 1.2; letter-spacing: -0.5px;">
                      <span style="color: #a98b5d; text-shadow: 0 0 30px rgba(169, 139, 93, 0.4);">NartaQ</span>
                    </h1>
                    <p style="margin: 0; padding: 0; color: #a98b5d; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0.9;">
                      Connecting Ventures, Building Futures
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main content area -->
          <tr>
            <td style="padding: 40px 0;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 40px 0 0 0; text-align: center; border-top: 1px solid rgba(169, 139, 93, 0.3);" class="dark-border">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center; padding: 0 0 20px 0;">
                    <p style="margin: 0 0 8px 0; padding: 0; color: #dcd7ce; font-size: 13px; line-height: 20px; font-weight: 600;" class="dark-text">
                      <span style="color: #a98b5d;">NartaQ</span> - France-Tunisia Venture Ecosystem
                    </p>
                    <p style="margin: 0; padding: 0; color: rgba(220, 215, 206, 0.7); font-size: 12px; line-height: 18px;">
                      Paris, France | Tunis, Tunisia
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding: 0 0 20px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tr>
                        <td style="padding: 0 12px;">
                          <a href="https://nartaq.com" style="color: #a98b5d; text-decoration: none; font-size: 12px; font-weight: 500;">Website</a>
                        </td>
                        <td style="padding: 0 12px; border-left: 1px solid rgba(169, 139, 93, 0.3);">
                          <a href="https://nartaq.com/about" style="color: #a98b5d; text-decoration: none; font-size: 12px; font-weight: 500;">About</a>
                        </td>
                        <td style="padding: 0 12px; border-left: 1px solid rgba(169, 139, 93, 0.3);">
                          <a href="https://nartaq.com/faq" style="color: #a98b5d; text-decoration: none; font-size: 12px; font-weight: 500;">FAQ</a>
                        </td>
                        <td style="padding: 0 12px; border-left: 1px solid rgba(169, 139, 93, 0.3);">
                          <a href="https://nartaq.com/blog" style="color: #a98b5d; text-decoration: none; font-size: 12px; font-weight: 500;">Blog</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding: 0;">
                    <p style="margin: 0; padding: 0; color: rgba(220, 215, 206, 0.5); font-size: 11px; line-height: 16px;">
                      © ${new Date().getFullYear()} NartaQ. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

/**
 * Premium button component with gradient effect
 * Uses table structure for Outlook compatibility with VML fallback
 */
const buttonComponent = (text: string, url: string) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 30px 0;">
    <tr>
      <td align="center" style="border-radius: 12px; background: linear-gradient(135deg, #a98b5d 0%, #dcd7ce 100%);" bgcolor="#a98b5d">
        <!--[if mso]>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="24%" strokecolor="#a98b5d" fillcolor="#a98b5d">
        <w:anchorlock/>
        <center style="color:#000000;font-family:sans-serif;font-size:16px;font-weight:bold;">${text}</center>
        </v:roundrect>
        <![endif]-->
        <!--[if !mso]><!-->
        <a href="${url}" style="background: linear-gradient(135deg, #a98b5d 0%, #dcd7ce 100%); border: 2px solid rgba(169, 139, 93, 0.3); border-radius: 12px; box-shadow: 0 4px 20px rgba(169, 139, 93, 0.3); color: #000000; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 50px; text-align: center; text-decoration: none; width: 200px; -webkit-text-size-adjust: none; mso-hide: all;" class="mobile-button">
          ${text}
        </a>
        <!--<![endif]-->
      </td>
    </tr>
  </table>
`;

/**
 * Content card component with subtle background and gold border
 */
const cardComponent = (content: string) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
    <tr>
      <td style="background-color: rgba(35, 36, 40, 0.6); border: 1px solid rgba(169, 139, 93, 0.2); border-radius: 16px; padding: 30px;" bgcolor="rgba(35, 36, 40, 0.6)">
        ${content}
      </td>
    </tr>
  </table>
`;

/**
 * Badge component for status indicators
 */
const badgeComponent = (text: string, color: 'gold' | 'cream' = 'gold') => {
  const bgColor = color === 'gold' ? '#a98b5d' : '#dcd7ce';
  const textColor = color === 'gold' ? '#000000' : '#000000';
  
  return `
    <span style="display: inline-block; padding: 6px 14px; background-color: ${bgColor}; color: ${textColor}; border-radius: 20px; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; margin: 5px 5px 5px 0;">
      ${text}
    </span>
  `;
};

/**
 * Highlight box component for important information
 */
const highlightBox = (content: string) => `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
    <tr>
      <td style="background-color: rgba(169, 139, 93, 0.1); border-left: 4px solid #a98b5d; border-radius: 8px; padding: 20px;">
        ${content}
      </td>
    </tr>
  </table>
`;

/**
 * Newsletter welcome email
 */
export function newsletterWelcomeEmail(name?: string): string {
  const greeting = name ? `Hi ${name}` : 'Hello';
  
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        ${greeting}! Welcome to NartaQ 🎉
      </h1>
      <p style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for subscribing to our newsletter! You're now part of an exclusive community connecting ventures across the France-Tunisia corridor.
      </p>
      <p style="margin: 0; padding: 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        We'll keep you updated on:
      </p>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 15px;">
        <tr>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6;">
            ${badgeComponent('Funding')} Latest funding opportunities and investor connections
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6;">
            ${badgeComponent('Events', 'cream')} Exclusive ecosystem events and networking sessions
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6;">
            ${badgeComponent('Insights')} Market insights and success stories from our community
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #dcd7ce; font-size: 15px; line-height: 1.6;">
            ${badgeComponent('Resources', 'cream')} Resources and guides for founders and investors
          </td>
        </tr>
      </table>
    `)}
    
    ${buttonComponent('Explore Our Ecosystem', 'https://nartaq.com')}
    
    <p style="margin: 30px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Questions? Reply to this email or visit our <a href="https://nartaq.com/faq" style="color: #a98b5d; text-decoration: none; font-weight: 600;">FAQ page</a>.
    </p>
  `;
  
  return baseTemplate(content);
}

/**
 * Founder application confirmation email
 */
export function founderApplicationConfirmation(name: string, company: string): string {
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        Application Received, ${name}! 🚀
      </h1>
      <p style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for submitting your application for <strong style="color: #a98b5d;">${company}</strong>. We're excited to learn more about your venture!
      </p>
      
      ${highlightBox(`
        <p style="margin: 0 0 12px 0; padding: 0; color: #dcd7ce; font-size: 15px; line-height: 1.6; font-weight: 600;">
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
              <strong style="color: #a98b5d;">If selected:</strong> We'll connect you with relevant investors
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Next steps:</strong> Introductions and potential meetings
            </td>
          </tr>
        </table>
      `)}
      
      <p style="margin: 20px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        In the meantime, explore our resources and connect with the community.
      </p>
    `)}
    
    ${buttonComponent('Visit Dashboard', 'https://nartaq.com/for-founders')}
    
    <p style="margin: 30px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Have questions? <a href="https://nartaq.com/faq" style="color: #a98b5d; text-decoration: none; font-weight: 600;">Check our FAQ</a> or reply to this email.
    </p>
  `;
  
  return baseTemplate(content);
}

/**
 * Investor application confirmation email
 */
export function investorApplicationConfirmation(name: string, investorType: string): string {
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        Welcome to NartaQ, ${name}! 💼
      </h1>
      <p style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for joining as ${badgeComponent(investorType, 'cream')} We're building a curated ecosystem of top ventures and strategic investors.
      </p>
      
      ${highlightBox(`
        <p style="margin: 0 0 12px 0; padding: 0; color: #dcd7ce; font-size: 15px; line-height: 1.6; font-weight: 600;">
          Your Investment Journey
        </p>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Profile Review:</strong> We'll verify your investor profile
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Deal Flow:</strong> Get matched with relevant startups
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Network:</strong> Connect with co-investors and founders
            </td>
          </tr>
        </table>
      `)}
      
      <p style="margin: 20px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        We focus on quality over quantity, ensuring every connection has strategic value.
      </p>
    `)}
    
    ${buttonComponent('View Opportunities', 'https://nartaq.com/for-investors')}
    
    <p style="margin: 30px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Questions about our process? <a href="https://nartaq.com/faq" style="color: #a98b5d; text-decoration: none; font-weight: 600;">Visit our FAQ</a> or reach out directly.
    </p>
  `;
  
  return baseTemplate(content);
}

/**
 * Career application confirmation email
 */
export function careerApplicationConfirmation(name: string, position: string): string {
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        Application Received, ${name}! 🌟
      </h1>
      <p style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for your interest in the <strong style="color: #a98b5d;">${position}</strong> position at NartaQ. We're excited to review your application!
      </p>
      
      ${highlightBox(`
        <p style="margin: 0 0 12px 0; padding: 0; color: #dcd7ce; font-size: 15px; line-height: 1.6; font-weight: 600;">
          What to expect
        </p>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Review:</strong> Our team carefully reviews all applications
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Timeline:</strong> We'll respond within 1-2 weeks
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">If selected:</strong> We'll schedule an interview
            </td>
          </tr>
        </table>
      `)}
      
      <p style="margin: 20px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        We're building a team of passionate individuals who believe in the power of cross-border collaboration.
      </p>
    `)}
    
    ${buttonComponent('Learn About Us', 'https://nartaq.com/about')}
    
    <p style="margin: 30px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Have questions? <a href="https://nartaq.com/careers" style="color: #a98b5d; text-decoration: none; font-weight: 600;">Visit our careers page</a> or reply to this email.
    </p>
  `;
  
  return baseTemplate(content);
}

/**
 * SPV Partner application confirmation email
 */
export function spvPartnerApplicationConfirmation(name: string, company: string): string {
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 28px; font-weight: 700; line-height: 1.3;">
        Partnership Application Received, ${name}! 🤝
      </h1>
      <p style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 16px; line-height: 1.7;">
        Thank you for <strong style="color: #a98b5d;">${company}</strong>'s interest in becoming an SPV partner with NartaQ. We're excited to explore this partnership opportunity.
      </p>
      
      ${highlightBox(`
        <p style="margin: 0 0 12px 0; padding: 0; color: #dcd7ce; font-size: 15px; line-height: 1.6; font-weight: 600;">
          Next steps in our partnership process
        </p>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Initial Review:</strong> We'll evaluate your SPV capabilities and experience
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Technical Assessment:</strong> Our team will review your API integration capabilities
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Partnership Call:</strong> If qualified, we'll schedule a detailed discussion
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: rgba(220, 215, 206, 0.9); font-size: 14px; line-height: 1.6;">
              <strong style="color: #a98b5d;">Integration:</strong> We'll work together on API integration and testing
            </td>
          </tr>
        </table>
      `)}
      
      <p style="margin: 20px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.9); font-size: 15px; line-height: 1.7;">
        Our SPV-as-a-Service platform enables clean cap tables and institutional-grade infrastructure for cross-border ventures. We're looking for partners who share our vision of making global venture capital accessible to all entrepreneurs.
      </p>
      
      <p style="margin: 12px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7;">
        We typically respond to partnership applications within <strong style="color: #a98b5d;">3-5 business days</strong>.
      </p>
    `)}
    
    ${buttonComponent('Learn About Our Platform', 'https://nartaq.com/about')}
    
    <p style="margin: 30px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.8); font-size: 14px; line-height: 1.7; text-align: center;">
      Have questions about the partnership? <a href="mailto:partners@nartaq.com" style="color: #a98b5d; text-decoration: none; font-weight: 600;">partners@nartaq.com</a>
    </p>
  `;
  
  return baseTemplate(content);
}

/**
 * Admin notification email for new applications
 */
export function adminApplicationNotification(
  applicationType: 'founder' | 'investor' | 'career',
  details: Record<string, string>
): string {
  const typeLabels = {
    founder: 'Founder Application',
    investor: 'Investor Application',
    career: 'Career Application'
  };
  
  const typeBadges = {
    founder: badgeComponent('Founder', 'gold'),
    investor: badgeComponent('Investor', 'cream'),
    career: badgeComponent('Career')
  };
  
  const detailsHtml = Object.entries(details)
    .map(([key, value]) => `
      <tr>
        <td style="padding: 10px 15px; border-bottom: 1px solid rgba(169, 139, 93, 0.1); color: #a98b5d; font-size: 13px; font-weight: 600; text-transform: capitalize;">
          ${key}
        </td>
        <td style="padding: 10px 15px; border-bottom: 1px solid rgba(169, 139, 93, 0.1); color: #dcd7ce; font-size: 14px;">
          ${value}
        </td>
      </tr>
    `)
    .join('');
  
  const content = `
    ${cardComponent(`
      <h1 style="margin: 0 0 20px 0; padding: 0; color: #dcd7ce; font-size: 24px; font-weight: 700; line-height: 1.3;">
        ${typeBadges[applicationType]} New ${typeLabels[applicationType]}
      </h1>
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border: 1px solid rgba(169, 139, 93, 0.2); border-radius: 8px; overflow: hidden;">
        ${detailsHtml}
      </table>
      
      <p style="margin: 20px 0 0 0; padding: 0; color: rgba(220, 215, 206, 0.8); font-size: 13px; line-height: 1.6;">
        <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
          timeZone: 'Europe/Paris',
          dateStyle: 'full',
          timeStyle: 'short'
        })}
      </p>
    `)}
    
    ${buttonComponent('View in Dashboard', 'https://nartaq.com/admin')}
  `;
  
  return baseTemplate(content);
}
