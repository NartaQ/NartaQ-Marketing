#!/usr/bin/env tsx
/**
 * Smoke Tests Script
 * Runs critical end-to-end tests to verify core functionality works
 * Tests form submissions, database operations, and user flows
 */

import { PrismaClient } from '@prisma/client'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

interface SmokeTestResult {
  name: string
  status: 'PASS' | 'FAIL'
  message: string
  duration: number
}

class SmokeTestRunner {
  private results: SmokeTestResult[] = []
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient({
      log: ['error']
    })
  }

  private async runTest(name: string, testFn: () => Promise<void>): Promise<void> {
    const startTime = Date.now()
    try {
      await testFn()
      const duration = Date.now() - startTime
      this.results.push({
        name,
        status: 'PASS',
        message: 'OK',
        duration
      })
      console.log(`✅ ${name} - PASS (${duration}ms)`)
    } catch (error) {
      const duration = Date.now() - startTime
      const message = error instanceof Error ? error.message : 'Unknown error'
      this.results.push({
        name,
        status: 'FAIL',
        message,
        duration
      })
      console.log(`❌ ${name} - FAIL (${duration}ms): ${message}`)
    }
  }

  async testNewsletterSubscription(): Promise<void> {
    await this.runTest('Newsletter Subscription', async () => {
      const { subscribeToNewsletter } = await import('../src/app/actions/newsletter')
      
      const testEmail = `test+${Date.now()}@smoke-test.com`
      
      // Test subscription with unique email
      const result = await subscribeToNewsletter({
        email: testEmail,
        name: 'Smoke Test User',
        source: 'smoke-test'
      })
      
      if (!result.success) {
        throw new Error(`Newsletter subscription failed: ${result.error}`)
      }
      
      // Verify the subscription was created
      const subscription = await this.prisma.newsletter.findUnique({
        where: { email: testEmail }
      })
      
      if (!subscription) {
        throw new Error('Newsletter subscription not found in database')
      }
      
      // Clean up - delete the test subscription
      await this.prisma.newsletter.delete({
        where: { email: testEmail }
      })
    })
  }

  async testFounderApplicationValidation(): Promise<void> {
    await this.runTest('Founder Application Validation', async () => {
      const { submitFounderApplication } = await import('../src/app/actions/founder-application')
      
      // Test with invalid data to ensure validation works
      const invalidResult = await submitFounderApplication({
        fullName: '', // Invalid: empty
        workEmail: 'invalid-email', // Invalid: not an email
        companyName: 'Test Company',
        website: 'https://test.com',
        sector: ['fintech'],
        fundingStage: 'seed',
        location: 'US',
        shortPitch: 'Test pitch'
      })
      
      if (invalidResult.success) {
        throw new Error('Validation should have failed for invalid data')
      }
      
      if (!invalidResult.details || invalidResult.details.length === 0) {
        throw new Error('Validation errors should be provided')
      }
    })
  }

  async testInvestorApplicationValidation(): Promise<void> {
    await this.runTest('Investor Application Validation', async () => {
      const { submitInvestorApplication } = await import('../src/app/actions/investor-application')
      
      // Test with invalid data
      const invalidResult = await submitInvestorApplication({
        fullName: '', // Invalid: empty
        workEmail: 'invalid-email', // Invalid: not an email
        investorType: 'angel', // Required field
        companyName: 'Test Firm',
        title: 'Partner',
        investmentFocus: [], // Invalid: empty array
        ticketSize: '100k-500k',
        targetGeography: ['US'],
        referralSource: 'other'
      })
      
      if (invalidResult.success) {
        throw new Error('Validation should have failed for invalid data')
      }
      
      if (!invalidResult.details || invalidResult.details.length === 0) {
        throw new Error('Validation errors should be provided')
      }
    })
  }

  async testDuplicateSubscriptionPrevention(): Promise<void> {
    await this.runTest('Duplicate Subscription Prevention', async () => {
      const { subscribeToNewsletter } = await import('../src/app/actions/newsletter')
      
      const testEmail = `duplicate-test+${Date.now()}@smoke-test.com`
      
      // First subscription should succeed
      const firstResult = await subscribeToNewsletter({
        email: testEmail,
        name: 'First User',
        source: 'smoke-test'
      })
      
      if (!firstResult.success) {
        throw new Error(`First subscription failed: ${firstResult.error}`)
      }
      
      // Second subscription should fail
      const secondResult = await subscribeToNewsletter({
        email: testEmail,
        name: 'Second User',
        source: 'smoke-test'
      })
      
      if (secondResult.success) {
        throw new Error('Duplicate subscription should have been prevented')
      }
      
      if (!secondResult.error?.includes('already subscribed')) {
        throw new Error('Expected duplicate subscription error message')
      }
      
      // Clean up
      await this.prisma.newsletter.delete({
        where: { email: testEmail }
      })
    })
  }

  async testDuplicateApplicationPrevention(): Promise<void> {
    await this.runTest('Duplicate Application Prevention', async () => {
      const { submitFounderApplication } = await import('../src/app/actions/founder-application')
      
      const testEmail = `app-test+${Date.now()}+${Math.random()}@smoke-test.com`
      const testData = {
        fullName: 'Test Founder',
        workEmail: testEmail,
        companyName: 'Test Startup',
        website: 'https://teststartup.com',
        sector: ['fintech'],
        fundingStage: 'seed',
        location: 'US',
        shortPitch: 'We are revolutionizing the testing industry with our innovative smoke testing platform.'
      }
      
      // Clean up any existing test data first
      const existingApp = await this.prisma.founderApplication.findFirst({
        where: { workEmail: testEmail }
      })
      
      if (existingApp) {
        await this.prisma.founderApplication.delete({
          where: { id: existingApp.id }
        })
      }
      
      // First application should succeed
      const firstResult = await submitFounderApplication(testData)
      
      if (!firstResult.success) {
        throw new Error(`First application failed: ${firstResult.error}`)
      }
      
      // Second application should fail
      const secondResult = await submitFounderApplication(testData)
      
      if (secondResult.success) {
        throw new Error('Duplicate application should have been prevented')
      }
      
      if (!secondResult.error?.includes('already exists')) {
        throw new Error('Expected duplicate application error message')
      }
      
      // Clean up
      const applicationToDelete = await this.prisma.founderApplication.findFirst({
        where: { workEmail: testEmail }
      })
      
      if (applicationToDelete) {
        await this.prisma.founderApplication.delete({
          where: { id: applicationToDelete.id }
        })
      }
    })
  }

  async testDatabaseQueries(): Promise<void> {
    await this.runTest('Database Queries', async () => {
      // Test complex queries work
      const stats = await this.prisma.$transaction(async (tx) => {
        const founderCount = await tx.founderApplication.count()
        const investorCount = await tx.investorApplication.count()
        const newsletterCount = await tx.newsletter.count()
        
        // Test date filtering works
        const recentApplications = await tx.founderApplication.findMany({
          where: {
            createdAt: {
              gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
            }
          },
          take: 5
        })
        
        return {
          founders: founderCount,
          investors: investorCount,
          subscribers: newsletterCount,
          recentApps: recentApplications.length
        }
      })
      
      console.log(`   📊 Query results: ${JSON.stringify(stats)}`)
    })
  }

  async testPrismaClientGeneration(): Promise<void> {
    await this.runTest('Prisma Client Generation', async () => {
      // Test that Prisma client was generated correctly with all models
      const client = this.prisma
      
      // Verify all models are available
      if (!client.founderApplication) {
        throw new Error('FounderApplication model not available')
      }
      
      if (!client.investorApplication) {
        throw new Error('InvestorApplication model not available')
      }
      
      if (!client.newsletter) {
        throw new Error('Newsletter model not available')
      }
      
      // Test that model methods work
      await client.founderApplication.findMany({ take: 1 })
      await client.investorApplication.findMany({ take: 1 })
      await client.newsletter.findMany({ take: 1 })
    })
  }

  async runAllTests(): Promise<boolean> {
    console.log('🔥 Starting smoke tests...\n')
    
    // Run all smoke tests
    await this.testPrismaClientGeneration()
    await this.testDatabaseQueries()
    await this.testNewsletterSubscription()
    await this.testFounderApplicationValidation()
    await this.testInvestorApplicationValidation()
    await this.testDuplicateSubscriptionPrevention()
    await this.testDuplicateApplicationPrevention()
    
    // Close database connection
    await this.prisma.$disconnect()
    
    // Summary
    const totalTests = this.results.length
    const passedTests = this.results.filter(r => r.status === 'PASS').length
    const failedTests = totalTests - passedTests
    
    console.log('\n📋 Smoke Test Summary:')
    console.log(`✅ Passed: ${passedTests}`)
    console.log(`❌ Failed: ${failedTests}`)
    console.log(`📊 Total: ${totalTests}`)
    
    if (failedTests > 0) {
      console.log('\n💥 Failed tests:')
      this.results
        .filter(r => r.status === 'FAIL')
        .forEach(r => console.log(`   - ${r.name}: ${r.message}`))
    }
    
    const allPassed = failedTests === 0
    console.log(`\n🎯 Overall Status: ${allPassed ? '✅ ALL TESTS PASS' : '❌ SOME TESTS FAILED'}`)
    
    return allPassed
  }
}

// Run smoke tests if this script is executed directly
if (require.main === module) {
  const runner = new SmokeTestRunner()
  
  runner.runAllTests()
    .then((success) => {
      process.exit(success ? 0 : 1)
    })
    .catch((error) => {
      console.error('💥 Smoke tests failed with error:', error)
      process.exit(1)
    })
}

export { SmokeTestRunner }