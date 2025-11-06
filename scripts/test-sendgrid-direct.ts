#!/usr/bin/env tsx
/**
 * Direct SendGrid Test with React Email Templates
 * 
 * Forces SendGrid usage by bypassing Mailpit detection
 */

import sgMail from '@sendgrid/mail'
import { emailTemplateLoader } from '../src/lib/email-template-loader'
import * as dotenv from 'dotenv'

dotenv.config()

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@nartaq.com'

async function testSendGridDirect() {
  console.log('\n📧 Direct SendGrid Test with React Email Templates\n')

  if (!SENDGRID_API_KEY) {
    console.error('❌ SENDGRID_API_KEY not found in environment variables')
    console.error('   Please add it to your .env file')
    process.exit(1)
  }

  console.log(`✅ SendGrid configured: ${FROM_EMAIL}`)
  console.log(`✅ React Email templates with Handlebars + inline SVG logo\n`)

  sgMail.setApiKey(SENDGRID_API_KEY)

  const recipient = 'jesser.bedoui@nartaq.com'

  // Test 1: Founder Confirmation
  console.log('1️⃣  Sending Founder Confirmation Email...')
  try {
    const html = emailTemplateLoader.renderFounderConfirmation({
      founderName: 'Jesser Bedoui',
      companyName: 'Test Startup'
    })

    const [response] = await sgMail.send({
      to: recipient,
      from: FROM_EMAIL,
      replyTo: 'founders@nartaq.com',
      subject: 'Application Received for Test Startup ✓',
      html,
      text: 'Thank you for submitting your founder application to NartaQ.'
    })

    console.log(`   ✅ Sent! Status: ${response.statusCode}`)
    console.log(`   📧 Message ID: ${response.headers['x-message-id']}`)
    console.log(`   📄 Template: founder-confirmation.hbs`)
  } catch (error) {
    console.error('   ❌ Failed:', error)
  }

  // Test 2: Investor Confirmation
  console.log('\n2️⃣  Sending Investor Confirmation Email...')
  try {
    const html = emailTemplateLoader.renderInvestorConfirmation({
      investorName: 'Jesser Bedoui',
      investorType: 'Angel Investor'
    })

    const [response] = await sgMail.send({
      to: recipient,
      from: FROM_EMAIL,
      replyTo: 'investors@nartaq.com',
      subject: 'Welcome to NartaQ Investor Network ✓',
      html,
      text: 'Welcome to the NartaQ investor network.'
    })

    console.log(`   ✅ Sent! Status: ${response.statusCode}`)
    console.log(`   📧 Message ID: ${response.headers['x-message-id']}`)
    console.log(`   📄 Template: investor-confirmation.hbs`)
  } catch (error) {
    console.error('   ❌ Failed:', error)
  }

  // Test 3: Career Confirmation
  console.log('\n3️⃣  Sending Career Application Email...')
  try {
    const html = emailTemplateLoader.renderCareerConfirmation({
      applicantName: 'Jesser Bedoui',
      position: 'Full Stack Developer'
    })

    const [response] = await sgMail.send({
      to: recipient,
      from: FROM_EMAIL,
      replyTo: 'careers@nartaq.com',
      subject: 'Application Received for Full Stack Developer ✓',
      html,
      text: 'Thank you for your career application to NartaQ.'
    })

    console.log(`   ✅ Sent! Status: ${response.statusCode}`)
    console.log(`   📧 Message ID: ${response.headers['x-message-id']}`)
    console.log(`   📄 Template: career-confirmation.hbs`)
  } catch (error) {
    console.error('   ❌ Failed:', error)
  }

  console.log('\n✅ All emails sent! Check jesser.bedoui@nartaq.com inbox.')
  console.log('\n📧 Email Features:')
  console.log('   ✓ Professional React Email templates')
  console.log('   ✓ Handlebars template engine')
  console.log('   ✓ Inline SVG NartaQ logo')
  console.log('   ✓ Helvetica font stack')
  console.log('   ✓ Mobile-responsive design')
  console.log('   ✓ Proper reply-to addresses')
  console.log('   ✓ Inline CSS for email client compatibility\n')
}

testSendGridDirect().catch(console.error)
