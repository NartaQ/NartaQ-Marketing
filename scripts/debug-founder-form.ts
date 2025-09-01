#!/usr/bin/env tsx
/**
 * Debug Script for Founder Application Form
 * Tests the form submission manually to identify issues
 */

import { submitFounderApplication } from '../src/app/actions/founder-application'

async function testFounderSubmission() {
  console.log('🧪 Testing Founder Application Submission...')
  
  const testData = {
    fullName: 'Debug Test Founder',
    workEmail: 'debug@test.com',
    companyName: 'Debug Test Company',
    website: 'https://debugtest.com',
    sector: ['fintech'],
    fundingStage: 'seed',
    location: 'US',
    shortPitch: 'This is a debug test pitch for the founder application form to ensure the submission works correctly.',
    pitchDeckUrl: ''
  }
  
  try {
    console.log('📤 Submitting test data:', JSON.stringify(testData, null, 2))
    
    const result = await submitFounderApplication(testData)
    
    if (result.success) {
      console.log('✅ Submission successful!')
      console.log('📄 Result:', JSON.stringify(result, null, 2))
    } else {
      console.log('❌ Submission failed!')
      console.log('🚨 Error:', result.error)
      if (result.details) {
        console.log('📋 Validation details:', JSON.stringify(result.details, null, 2))
      }
    }
  } catch (error) {
    console.log('💥 Unexpected error:', error)
  }
}

// Run the test
if (require.main === module) {
  testFounderSubmission()
    .then(() => {
      console.log('🏁 Debug test completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('💥 Debug test failed:', error)
      process.exit(1)
    })
}