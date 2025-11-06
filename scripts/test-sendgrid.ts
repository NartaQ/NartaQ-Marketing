#!/usr/bin/env tsx
/**
 * Test SendGrid Email Sending with React Email Templates
 * 
 * Sends real test emails via SendGrid API using production templates
 */

import {
  sendFounderConfirmation,
  sendInvestorConfirmation,
  sendCareerConfirmation,
} from '../src/lib/email-service'
import * as dotenv from 'dotenv'

dotenv.config()

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

async function testSendGrid() {
  console.log('\n📧 Testing SendGrid with React Email Templates\n')

  if (!SENDGRID_API_KEY) {
    console.error('❌ SENDGRID_API_KEY not found in environment variables')
    console.error('   Please add it to your .env file')
    process.exit(1)
  }

  console.log(`✅ SendGrid configured`)
  console.log(`✅ Using React Email templates with Handlebars\n`)

  const recipient = 'jesser.bedoui@nartaq.com'

  // Test 1: Founder Confirmation
  console.log('1️⃣  Sending Founder Confirmation Email...')
  try {
    const result = await sendFounderConfirmation(
      recipient,
      'Jesser Bedoui',
      'Test Startup'
    )

    if (result.success) {
      console.log(`   ✅ Sent! Template: founder-confirmation.hbs`)
    } else {
      console.error(`   ❌ Failed: ${result.error}`)
    }
  } catch (error) {
    console.error('   ❌ Error:', error)
  }

  // Test 2: Investor Confirmation
  console.log('\n2️⃣  Sending Investor Confirmation Email...')
  try {
    const result = await sendInvestorConfirmation(
      recipient,
      'Jesser Bedoui',
      'Angel Investor'
    )

    if (result.success) {
      console.log(`   ✅ Sent! Template: investor-confirmation.hbs`)
    } else {
      console.error(`   ❌ Failed: ${result.error}`)
    }
  } catch (error) {
    console.error('   ❌ Error:', error)
  }

  // Test 3: Career Confirmation
  console.log('\n3️⃣  Sending Career Application Email...')
  try {
    const result = await sendCareerConfirmation(
      recipient,
      'Jesser Bedoui',
      'Full Stack Developer'
    )

    if (result.success) {
      console.log(`   ✅ Sent! Template: career-confirmation.hbs`)
    } else {
      console.error(`   ❌ Failed: ${result.error}`)
    }
  } catch (error) {
    console.error('   ❌ Error:', error)
  }

  console.log('\n✅ SendGrid test complete! Check jesser.bedoui@nartaq.com inbox.')
  console.log('\n📧 Email Features:')
  console.log('   • Professional HTML templates with inline styles')
  console.log('   • NartaQ branding and inline SVG logo')
  console.log('   • Helvetica font stack for consistency')
  console.log('   • Mobile-responsive design')
  console.log('   • Proper reply-to addresses (founders@, investors@, careers@)\n')
}

testSendGrid().catch(console.error)
