/**
 * Cleanup Test Data
 * 
 * Removes all test applications created by the seed script
 * Usage: tsx scripts/cleanup-test-data.ts
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🧹 Cleaning up test data...')
  
  // Delete test founder applications
  const deletedFounders = await prisma.founderApplication.deleteMany({
    where: {
      workEmail: { contains: '@test-nartaq.com' }
    }
  })
  
  // Delete test investor applications
  const deletedInvestors = await prisma.investorApplication.deleteMany({
    where: {
      workEmail: { contains: '@test-nartaq.com' }
    }
  })
  
  console.log('\n✅ Cleanup complete!')
  console.log(`   Deleted ${deletedFounders.count} founder applications`)
  console.log(`   Deleted ${deletedInvestors.count} investor applications`)
  console.log(`   Total removed: ${deletedFounders.count + deletedInvestors.count}`)
  
  // Show remaining counts
  const remainingFounders = await prisma.founderApplication.count()
  const remainingInvestors = await prisma.investorApplication.count()
  const totalRemaining = remainingFounders + remainingInvestors
  
  console.log('\n📊 Current stats:')
  console.log(`   Remaining founders: ${remainingFounders}`)
  console.log(`   Remaining investors: ${remainingInvestors}`)
  console.log(`   Total applications: ${totalRemaining}`)
}

main()
  .catch((e) => {
    console.error('❌ Error cleaning up data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
