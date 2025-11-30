#!/usr/bin/env tsx
/**
 * Test Email Sending with Mailpit
 * 
 * This script tests all email types to verify the email service is working.
 * Emails will be visible at http://localhost:8025
 */

import {
  sendNewsletterWelcome,
  sendFounderConfirmation,
  sendInvestorConfirmation,
  sendCareerConfirmation,
  sendTestEmail,
  verifyEmailConfig,
} from '../src/lib/email-service'

async function testEmails() {
  console.log('🧪 Testing NartaQ Email Service\n')

  // Check configuration
  const config = verifyEmailConfig()
  console.log('📧 Email Configuration:', {
    mode: config.mode,
    configured: config.configured,
    apiKeySet: config.apiKeySet,
    fromEmailSet: config.fromEmailSet,
  })

  console.log(`\n${config.mode === 'mailpit' ? '📬 Using Mailpit - view emails at http://localhost:8025' : '📨 Using SendGrid'}\n`)

  const testEmail = 'test@example.com'
  const results = []

  // Test 1: Test Email
  console.log('1️⃣  Sending test email...')
  const test1 = await sendTestEmail(testEmail)
  results.push({ name: 'Test Email', ...test1 })
  console.log(test1.success ? '   ✅ Success' : `   ❌ Failed: ${test1.error}`)

  // Test 2: Newsletter Welcome
  console.log('\n2️⃣  Sending newsletter welcome email...')
  const test2 = await sendNewsletterWelcome(testEmail, 'John Doe')
  results.push({ name: 'Newsletter Welcome', ...test2 })
  console.log(test2.success ? '   ✅ Success' : `   ❌ Failed: ${test2.error}`)

  // Test 3: Founder Confirmation
  console.log('\n3️⃣  Sending founder confirmation email...')
  const test3 = await sendFounderConfirmation(testEmail, 'Jane Founder', 'TechStartup Inc', 1)
  results.push({ name: 'Founder Confirmation', ...test3 })
  console.log(test3.success ? '   ✅ Success' : `   ❌ Failed: ${test3.error}`)

  // Test 4: Investor Confirmation
  console.log('\n4️⃣  Sending investor confirmation email...')
  const test4 = await sendInvestorConfirmation(testEmail, 'Bob Investor', 'Angel Investor', 1)
  results.push({ name: 'Investor Confirmation', ...test4 })
  console.log(test4.success ? '   ✅ Success' : `   ❌ Failed: ${test4.error}`)

  // Test 5: Career Confirmation
  console.log('\n5️⃣  Sending career confirmation email...')
  const test5 = await sendCareerConfirmation(testEmail, 'Alice Applicant', 'Software Engineer')
  results.push({ name: 'Career Confirmation', ...test5 })
  console.log(test5.success ? '   ✅ Success' : `   ❌ Failed: ${test5.error}`)

  // Summary
  console.log('\n' + '═'.repeat(60))
  console.log('📊 Test Summary')
  console.log('═'.repeat(60))

  const passed = results.filter(r => r.success).length
  const failed = results.filter(r => !r.success).length

  console.log(`\nTotal Tests: ${results.length}`)
  console.log(`✅ Passed: ${passed}`)
  console.log(`❌ Failed: ${failed}`)

  if (failed > 0) {
    console.log('\n❌ Failed Tests:')
    results.filter(r => !r.success).forEach(r => {
      console.log(`   • ${r.name}: ${r.error}`)
    })
  }

  if (config.mode === 'mailpit') {
    console.log('\n📬 View all emails at: http://localhost:8025')
    console.log('   You should see 5 emails in your Mailpit inbox.')
  }

  console.log('')

  // Exit with error code if any tests failed
  process.exit(failed > 0 ? 1 : 0)
}

// Run tests
testEmails().catch(error => {
  console.error('\n❌ Test execution failed:', error)
  process.exit(1)
})
