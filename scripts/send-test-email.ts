#!/usr/bin/env tsx
/**
 * Interactive Email Testing Script
 * 
 * Send individual test emails to verify templates and delivery.
 * View emails at http://localhost:8025 (Mailpit)
 * 
 * Usage:
 *   npm run send-email <type> <email> [name] [company]
 * 
 * Examples:
 *   npm run send-email test test@example.com
 *   npm run send-email newsletter john@example.com "John Doe"
 *   npm run send-email founder jane@startup.com "Jane Smith" "TechCo"
 *   npm run send-email investor bob@vc.com "Bob Investor" "Angel"
 *   npm run send-email career alice@dev.com "Alice Dev" "Software Engineer"
 */

import {
  sendTestEmail,
  sendNewsletterWelcome,
  sendFounderConfirmation,
  sendInvestorConfirmation,
  sendCareerConfirmation,
  verifyEmailConfig,
} from '../src/lib/email-service'

// Parse command line arguments
const args = process.argv.slice(2)
const emailType = args[0]?.toLowerCase()
const recipientEmail = args[1]
const name = args[2]
const extraParam = args[3]

// Email type configurations
const EMAIL_TYPES = {
  test: {
    name: 'Test Email',
    description: 'Basic test email to verify service',
    usage: 'npm run send-email test <email>',
    minArgs: 2,
  },
  newsletter: {
    name: 'Newsletter Welcome',
    description: 'Welcome email for newsletter subscribers',
    usage: 'npm run send-email newsletter <email> [name]',
    minArgs: 2,
  },
  founder: {
    name: 'Founder Confirmation',
    description: 'Confirmation email for founder applications',
    usage: 'npm run send-email founder <email> <name> <company>',
    minArgs: 4,
  },
  investor: {
    name: 'Investor Confirmation',
    description: 'Confirmation email for investor applications',
    usage: 'npm run send-email investor <email> <name> <type>',
    minArgs: 4,
  },
  career: {
    name: 'Career Confirmation',
    description: 'Confirmation email for career applications',
    usage: 'npm run send-email career <email> <name> <position>',
    minArgs: 4,
  },
}

function showHelp() {
  console.log('\n📧 NartaQ Email Testing Tool\n')
  console.log('Send individual test emails to verify templates and delivery.\n')
  console.log('Available email types:\n')
  
  Object.entries(EMAIL_TYPES).forEach(([type, config]) => {
    console.log(`  ${type.padEnd(18)} ${config.description}`)
    console.log(`  ${' '.repeat(18)} ${config.usage}\n`)
  })
  
  console.log('Examples:')
  console.log('  npm run send-email test test@example.com')
  console.log('  npm run send-email newsletter john@example.com "John Doe"')
  console.log('  npm run send-email founder jane@startup.com "Jane Smith" "TechCo"')
  console.log('  npm run send-email investor bob@vc.com "Bob Investor" "Angel"')
  console.log('  npm run send-email career alice@dev.com "Alice" "Software Engineer"\n')
}

async function sendEmail() {
  // Validate arguments
  if (!emailType || emailType === 'help' || emailType === '--help' || emailType === '-h') {
    showHelp()
    process.exit(0)
  }

  const config = EMAIL_TYPES[emailType as keyof typeof EMAIL_TYPES]
  if (!config) {
    console.error(`\n❌ Error: Unknown email type "${emailType}"\n`)
    showHelp()
    process.exit(1)
  }

  if (args.length < config.minArgs) {
    console.error(`\n❌ Error: Not enough arguments for ${config.name}\n`)
    console.log(`Usage: ${config.usage}\n`)
    process.exit(1)
  }

  // Show email service configuration
  const serviceConfig = verifyEmailConfig()
  console.log('\n📧 Email Service Configuration:')
  console.log(`   Mode: ${serviceConfig.mode}`)
  console.log(`   Configured: ${serviceConfig.configured}`)
  
  if (serviceConfig.mode === 'mailpit') {
    console.log(`   📬 View at: http://localhost:8025\n`)
  } else {
    console.log(`   📨 Using SendGrid\n`)
  }

  console.log(`📤 Sending: ${config.name}`)
  console.log(`   To: ${recipientEmail}`)
  if (name) console.log(`   Name: ${name}`)
  if (extraParam) console.log(`   Extra: ${extraParam}`)
  console.log('')

  let result

  try {
    switch (emailType) {
      case 'test':
        result = await sendTestEmail(recipientEmail)
        break

      case 'newsletter':
        result = await sendNewsletterWelcome(recipientEmail, name)
        break

      case 'founder':
        if (!name || !extraParam) {
          console.error('❌ Error: Founder email requires name and company')
          process.exit(1)
        }
        result = await sendFounderConfirmation(recipientEmail, name, extraParam)
        break

      case 'investor':
        if (!name || !extraParam) {
          console.error('❌ Error: Investor email requires name and investor type')
          process.exit(1)
        }
        result = await sendInvestorConfirmation(recipientEmail, name, extraParam)
        break

      case 'career':
        if (!name || !extraParam) {
          console.error('❌ Error: Career email requires name and position')
          process.exit(1)
        }
        result = await sendCareerConfirmation(recipientEmail, name, extraParam)
        break

      default:
        console.error(`❌ Error: Unknown email type "${emailType}"`)
        process.exit(1)
    }

    if (result.success) {
      console.log('✅ Email sent successfully!')
      if (result.messageId) {
        console.log(`   Message ID: ${result.messageId}`)
      }
      
      if (serviceConfig.mode === 'mailpit') {
        console.log('\n📬 View email at: http://localhost:8025')
      }
      
      console.log('')
      process.exit(0)
    } else {
      console.error(`\n❌ Failed to send email: ${result.error}\n`)
      process.exit(1)
    }
  } catch (error) {
    console.error('\n❌ Error sending email:', error)
    process.exit(1)
  }
}

// Run the script
sendEmail()
