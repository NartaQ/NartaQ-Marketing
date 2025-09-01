#!/usr/bin/env tsx
/**
 * Health Check Script
 * Verifies that the deployed application is running correctly
 * Checks database connectivity, server actions, and critical endpoints
 */

import { PrismaClient } from '@prisma/client'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

interface HealthCheckResult {
  name: string
  status: 'PASS' | 'FAIL'
  message: string
  duration: number
}

class HealthChecker {
  private results: HealthCheckResult[] = []
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient({
      log: ['error']
    })
  }

  private async runCheck(name: string, checkFn: () => Promise<void>): Promise<void> {
    const startTime = Date.now()
    try {
      await checkFn()
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

  async checkDatabaseConnection(): Promise<void> {
    await this.runCheck('Database Connection', async () => {
      // Test basic database connectivity
      await this.prisma.$connect()
      await this.prisma.$queryRaw`SELECT 1`
    })
  }

  async checkDatabaseModels(): Promise<void> {
    await this.runCheck('Database Models', async () => {
      // Test that all models are accessible
      const founderCount = await this.prisma.founderApplication.count()
      const investorCount = await this.prisma.investorApplication.count()
      const newsletterCount = await this.prisma.newsletter.count()
      
      console.log(`   📊 Database stats: ${founderCount} founders, ${investorCount} investors, ${newsletterCount} subscribers`)
    })
  }

  async checkAppRoutes(): Promise<void> {
    await this.runCheck('App Routes', async () => {
      const routes = ['/', '/about', '/faq', '/for-founders', '/for-investors', '/apply']
      
      for (const route of routes) {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)
        
        try {
          const response = await fetch(`${SITE_URL}${route}`, {
            method: 'HEAD',
            signal: controller.signal
          })
          
          clearTimeout(timeoutId)
          
          if (!response.ok) {
            throw new Error(`Route ${route} returned ${response.status}`)
          }
        } catch (error) {
          clearTimeout(timeoutId)
          throw error
        }
      }
    })
  }

  async checkStaticAssets(): Promise<void> {
    await this.runCheck('Static Assets', async () => {
      const assets = [
        '/favicon.ico',
        '/robots.txt',
        '/sitemap.xml'
      ]
      
      for (const asset of assets) {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000)
        
        try {
          const response = await fetch(`${SITE_URL}${asset}`, {
            method: 'HEAD',
            signal: controller.signal
          })
          
          clearTimeout(timeoutId)
          
          if (!response.ok) {
            throw new Error(`Asset ${asset} returned ${response.status}`)
          }
        } catch (error) {
          clearTimeout(timeoutId)
          throw error
        }
      }
    })
  }

  async checkServerActions(): Promise<void> {
    await this.runCheck('Server Actions Validation', async () => {
      // Test that server actions can be imported without errors
      // This verifies Prisma client is properly initialized
      const { submitFounderApplication } = await import('../src/app/actions/founder-application')
      const { subscribeToNewsletter } = await import('../src/app/actions/newsletter')
      
      if (typeof submitFounderApplication !== 'function') {
        throw new Error('submitFounderApplication is not a function')
      }
      
      if (typeof subscribeToNewsletter !== 'function') {
        throw new Error('subscribeToNewsletter is not a function')
      }
    })
  }

  async checkEnvironmentVariables(): Promise<void> {
    await this.runCheck('Environment Variables', async () => {
      const requiredVars = ['DATABASE_URL', 'NEXT_PUBLIC_SITE_URL']
      const missingVars: string[] = []
      
      for (const varName of requiredVars) {
        if (!process.env[varName]) {
          missingVars.push(varName)
        }
      }
      
      if (missingVars.length > 0) {
        throw new Error(`Missing environment variables: ${missingVars.join(', ')}`)
      }
    })
  }

  async runAllChecks(): Promise<boolean> {
    console.log('🔍 Starting health checks...\n')
    
    // Run all health checks
    await this.checkEnvironmentVariables()
    await this.checkDatabaseConnection()
    await this.checkDatabaseModels()
    await this.checkServerActions()
    await this.checkAppRoutes()
    await this.checkStaticAssets()
    
    // Close database connection
    await this.prisma.$disconnect()
    
    // Summary
    const totalChecks = this.results.length
    const passedChecks = this.results.filter(r => r.status === 'PASS').length
    const failedChecks = totalChecks - passedChecks
    
    console.log('\n📋 Health Check Summary:')
    console.log(`✅ Passed: ${passedChecks}`)
    console.log(`❌ Failed: ${failedChecks}`)
    console.log(`📊 Total: ${totalChecks}`)
    
    if (failedChecks > 0) {
      console.log('\n💥 Failed checks:')
      this.results
        .filter(r => r.status === 'FAIL')
        .forEach(r => console.log(`   - ${r.name}: ${r.message}`))
    }
    
    const allPassed = failedChecks === 0
    console.log(`\n🎯 Overall Status: ${allPassed ? '✅ HEALTHY' : '❌ UNHEALTHY'}`)
    
    return allPassed
  }
}

// Run health checks if this script is executed directly
if (require.main === module) {
  const checker = new HealthChecker()
  
  checker.runAllChecks()
    .then((success) => {
      process.exit(success ? 0 : 1)
    })
    .catch((error) => {
      console.error('💥 Health check failed with error:', error)
      process.exit(1)
    })
}

export { HealthChecker }