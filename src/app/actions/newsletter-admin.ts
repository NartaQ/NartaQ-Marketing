'use server'

import { prisma } from '@/lib/prisma'

export async function getNewsletterSubscribers() {
  try {
    const subscribers = await prisma.newsletter.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return {
      success: true,
      data: subscribers,
    }
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error)
    return {
      success: false,
      error: 'Failed to fetch subscribers',
    }
  }
}

export async function getSubscriberStats() {
  try {
    const totalSubscribers = await prisma.newsletter.count()
    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)
    
    const todaySubscribers = await prisma.newsletter.count({
      where: {
        createdAt: {
          gte: todayStart
        }
      }
    })

    const weekStart = new Date()
    weekStart.setDate(weekStart.getDate() - 7)
    
    const weekSubscribers = await prisma.newsletter.count({
      where: {
        createdAt: {
          gte: weekStart
        }
      }
    })

    const subscribersBySource = await prisma.newsletter.groupBy({
      by: ['source'],
      _count: {
        source: true
      }
    })

    return {
      success: true,
      data: {
        totalSubscribers,
        todaySubscribers,
        weekSubscribers,
        subscribersBySource: subscribersBySource.map(item => ({
          source: item.source || 'unknown',
          count: item._count.source
        }))
      }
    }
  } catch (error) {
    console.error('Error fetching subscriber stats:', error)
    return {
      success: false,
      error: 'Failed to fetch stats',
    }
  }
}