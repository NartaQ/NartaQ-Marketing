'use server'

import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

const getCachedStats = unstable_cache(
  async () => {
    return Promise.all([
      prisma.founderApplication.count(),
      prisma.investorApplication.count(),
    ])
  },
  ['cohort-stats'],
  { revalidate: 60 }
)

export async function getCohortStats() {
  try {
    const [foundersCount, investorsCount] = await getCachedStats()

    const totalApplications = foundersCount + investorsCount
    const TARGET_LIMIT = 250
    const spotsRemaining = Math.max(0, TARGET_LIMIT - totalApplications)
    const percentageFilled = Math.min(100, (totalApplications / TARGET_LIMIT) * 100)

    return {
      success: true,
      data: {
        foundersCount,
        investorsCount,
        totalApplications,
        spotsRemaining,
        percentageFilled: Math.round(percentageFilled),
        targetLimit: TARGET_LIMIT,
        isNearCapacity: percentageFilled >= 50,
        isFull: totalApplications >= TARGET_LIMIT,
      },
    }
  } catch (error) {
    console.error('Error fetching cohort stats:', error)
    return {
      success: false,
      error: 'Failed to fetch cohort statistics',
      data: null,
    }
  }
}
