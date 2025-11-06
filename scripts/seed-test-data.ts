/**
 * Seed Test Data
 * 
 * Creates test founder and investor applications to populate cohort stats
 * Usage: tsx scripts/seed-test-data.ts [count]
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SECTORS = [
  'Fintech',
  'Healthtech',
  'EdTech',
  'SaaS',
  'E-commerce',
  'AI/ML',
  'Blockchain',
  'Cleantech',
  'Biotech',
  'Cybersecurity'
]

const COUNTRIES = [
  'United States',
  'United Kingdom',
  'France',
  'Germany',
  'Kenya',
  'Nigeria',
  'South Africa',
  'India',
  'Singapore',
  'Brazil'
]

const STAGES = [
  'Idea',
  'MVP',
  'Pre-seed',
  'Seed',
  'Series A'
]

async function generateFounder(index: number) {
  const sectors = [SECTORS[Math.floor(Math.random() * SECTORS.length)], SECTORS[Math.floor(Math.random() * SECTORS.length)]]
  const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
  const stage = STAGES[Math.floor(Math.random() * STAGES.length)]
  
  return prisma.founderApplication.create({
    data: {
      fullName: `Test Founder ${index}`,
      workEmail: `founder${index}@test-nartaq.com`,
      founderLinkedIn: `https://linkedin.com/in/founder${index}`,
      companyName: `Startup ${index}`,
      website: `https://startup${index}.example.com`,
      companyLinkedIn: `https://linkedin.com/company/startup${index}`,
      sector: sectors,
      otherSector: null,
      fundingStage: stage,
      location: country,
      shortPitch: `We are revolutionizing ${sectors[0]} with innovative solutions. Test application #${index}.`,
      pitchDeckUrl: null,
    }
  })
}

async function generateInvestor(index: number) {
  const investorTypes = ['Angel Investor', 'VC Firm', 'Family Office', 'Corporate VC']
  const type = investorTypes[Math.floor(Math.random() * investorTypes.length)]
  const isAngel = type === 'Angel Investor'
  const focuses = [SECTORS[Math.floor(Math.random() * SECTORS.length)], SECTORS[Math.floor(Math.random() * SECTORS.length)]]
  const geographies = [COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)], COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]]
  
  return prisma.investorApplication.create({
    data: {
      fullName: `Test Investor ${index}`,
      workEmail: `investor${index}@test-nartaq.com`,
      investorType: type,
      personalLinkedIn: `https://linkedin.com/in/investor${index}`,
      companyName: isAngel ? null : `${type} Fund ${index}`,
      title: isAngel ? null : 'Partner',
      website: isAngel ? null : `https://fund${index}.example.com`,
      companyLinkedIn: isAngel ? null : `https://linkedin.com/company/fund${index}`,
      investmentFocus: focuses,
      otherFocus: null,
      ticketSize: isAngel ? '$10K - $50K' : '$500K - $2M',
      targetGeography: geographies,
      otherGeography: null,
      referralSource: 'Test Seed',
      otherSource: null,
    }
  })
}

async function main() {
  const count = parseInt(process.argv[2] || '50', 10)
  
  console.log(`🌱 Seeding ${count} test applications...`)
  
  const foundersCount = Math.floor(count * 0.6) // 60% founders
  const investorsCount = count - foundersCount  // 40% investors
  
  console.log(`   Creating ${foundersCount} founder applications...`)
  const founderPromises = []
  for (let i = 1; i <= foundersCount; i++) {
    founderPromises.push(generateFounder(i))
  }
  await Promise.all(founderPromises)
  
  console.log(`   Creating ${investorsCount} investor applications...`)
  const investorPromises = []
  for (let i = 1; i <= investorsCount; i++) {
    investorPromises.push(generateInvestor(i))
  }
  await Promise.all(investorPromises)
  
  // Get final counts
  const totalFounders = await prisma.founderApplication.count()
  const totalInvestors = await prisma.investorApplication.count()
  const totalApplications = totalFounders + totalInvestors
  
  console.log('\n✅ Seeding complete!')
  console.log(`   Total founders: ${totalFounders}`)
  console.log(`   Total investors: ${totalInvestors}`)
  console.log(`   Total applications: ${totalApplications}`)
  console.log(`   Spots remaining: ${1000 - totalApplications}/1000`)
  console.log(`   Percentage filled: ${Math.round((totalApplications / 1000) * 100)}%`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
