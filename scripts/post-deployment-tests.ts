#!/usr/bin/env tsx
/**
 * Post-Deployment Test Runner
 * Comprehensive testing suite that runs after deployment to ensure everything works correctly
 * Combines health checks and smoke tests for full verification
 */

import { HealthChecker } from './health-check'
import { SmokeTestRunner } from './smoke-tests'

interface TestSuiteResult {
  name: string
  passed: boolean
  duration: number
  error?: string
}

class PostDeploymentTester {
  private results: TestSuiteResult[] = []

  private async runTestSuite(
    name: string, 
    runner: () => Promise<boolean>
  ): Promise<boolean> {
    const startTime = Date.now()
    
    console.log(`\n🚀 Starting ${name}...`)
    console.log('=' .repeat(50))
    
    try {
      const success = await runner()
      const duration = Date.now() - startTime
      
      this.results.push({
        name,
        passed: success,
        duration
      })
      
      console.log('=' .repeat(50))
      console.log(`📊 ${name} completed in ${duration}ms - ${success ? '✅ PASSED' : '❌ FAILED'}`)
      
      return success
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      this.results.push({
        name,
        passed: false,
        duration,
        error: errorMessage
      })
      
      console.log('=' .repeat(50))
      console.log(`💥 ${name} failed in ${duration}ms: ${errorMessage}`)
      
      return false
    }
  }

  async runFullTestSuite(): Promise<boolean> {
    console.log('🎯 Post-Deployment Test Suite Starting...')
    console.log(`🌐 Target URL: ${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`)
    console.log(`📅 Started at: ${new Date().toISOString()}`)
    
    // Run health checks first
    const healthChecker = new HealthChecker()
    const healthPassed = await this.runTestSuite(
      'Health Checks',
      () => healthChecker.runAllChecks()
    )
    
    // Only run smoke tests if health checks pass
    let smokePassed = false
    if (healthPassed) {
      const smokeRunner = new SmokeTestRunner()
      smokePassed = await this.runTestSuite(
        'Smoke Tests',
        () => smokeRunner.runAllTests()
      )
    } else {
      console.log('\n⚠️  Skipping smoke tests due to health check failures')
      this.results.push({
        name: 'Smoke Tests',
        passed: false,
        duration: 0,
        error: 'Skipped due to health check failures'
      })
    }
    
    // Generate final report
    this.generateReport()
    
    const allPassed = healthPassed && smokePassed
    return allPassed
  }

  private generateReport(): void {
    console.log('\n' + '=' .repeat(60))
    console.log('📋 FINAL POST-DEPLOYMENT TEST REPORT')
    console.log('=' .repeat(60))
    
    const totalDuration = this.results.reduce((sum, r) => sum + r.duration, 0)
    const passedSuites = this.results.filter(r => r.passed).length
    const totalSuites = this.results.length
    
    console.log(`📅 Completed at: ${new Date().toISOString()}`)
    console.log(`⏱️  Total Duration: ${totalDuration}ms (${(totalDuration / 1000).toFixed(2)}s)`)
    console.log(`📊 Test Suites: ${passedSuites}/${totalSuites} passed`)
    
    console.log('\n📋 Suite Results:')
    this.results.forEach(result => {
      const status = result.passed ? '✅ PASS' : '❌ FAIL'
      const duration = `${result.duration}ms`
      console.log(`   ${status} ${result.name.padEnd(20)} (${duration})`)
      
      if (result.error) {
        console.log(`      Error: ${result.error}`)
      }
    })
    
    const overallStatus = passedSuites === totalSuites
    console.log(`\n🎯 Overall Status: ${overallStatus ? '✅ DEPLOYMENT SUCCESSFUL' : '❌ DEPLOYMENT ISSUES DETECTED'}`)
    
    if (!overallStatus) {
      console.log('\n⚠️  Deployment Recommendations:')
      console.log('   - Check environment variables are properly set')
      console.log('   - Verify database connectivity and migrations')
      console.log('   - Review server logs for additional error details')
      console.log('   - Test manually in browser to confirm issues')
    } else {
      console.log('\n🎉 All tests passed! Deployment is ready for production traffic.')
    }
    
    console.log('=' .repeat(60))
  }
}

// Utility function for CI/CD integration
export function getTestCommand(): string {
  return 'npm run test:post-deployment'
}

// Run tests if this script is executed directly
if (require.main === module) {
  const tester = new PostDeploymentTester()
  
  tester.runFullTestSuite()
    .then((success) => {
      process.exit(success ? 0 : 1)
    })
    .catch((error) => {
      console.error('💥 Post-deployment tests failed with critical error:', error)
      process.exit(1)
    })
}

export { PostDeploymentTester }