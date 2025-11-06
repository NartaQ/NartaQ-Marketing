'use server'

import { prisma } from '@/lib/prisma'

export async function getCohortStats() {
  try {
    const [foundersCount, investorsCount] = await Promise.all([
      prisma.founderApplication.count(),
      prisma.investorApplication.count(),
    ])

    const totalApplications = foundersCount + investorsCount
    const TARGET_LIMIT = 1000
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
        isNearCapacity: percentageFilled >= 80,
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
