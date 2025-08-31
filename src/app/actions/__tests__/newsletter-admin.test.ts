import type { DeepMockProxy } from 'jest-mock-extended'
import type { PrismaClient } from '@prisma/client'

describe('Newsletter Admin Server Actions', () => {
  let prismaMock: DeepMockProxy<PrismaClient>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let getNewsletterSubscribers: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let getSubscriberStats: any

  beforeAll(async () => {
    // Suppress console errors during testing
    jest.spyOn(console, 'error').mockImplementation(() => {})
    
    // Mock Prisma before importing the server action
    const { prismaMock: mockInstance } = await import('../../../lib/__mocks__/prisma')
    jest.doMock('@/lib/prisma', () => ({
      prisma: mockInstance
    }))

    // Dynamically import the server actions and mock
    const [newsletterAdminModule, { prismaMock: mockInstanceAgain }] = await Promise.all([
      import('../newsletter-admin'),
      import('../../../lib/__mocks__/prisma')
    ])
    
    getNewsletterSubscribers = newsletterAdminModule.getNewsletterSubscribers
    getSubscriberStats = newsletterAdminModule.getSubscriberStats
    prismaMock = mockInstanceAgain
  })
  
  afterAll(() => {
    // Restore all mocks after tests
    jest.restoreAllMocks()
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockNewsletterData = [
    {
      id: '1',
      email: 'user1@example.com',
      name: 'John Doe',
      source: 'homepage',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      email: 'user2@example.com',
      name: 'Jane Smith',
      source: 'social-media',
      createdAt: new Date('2024-01-02'),
      updatedAt: new Date('2024-01-02'),
    },
  ]

  describe('getNewsletterSubscribers', () => {
    describe('Successful Operations', () => {
      it('should successfully fetch all newsletter subscribers', async () => {
        prismaMock.newsletter.findMany.mockResolvedValue(mockNewsletterData)

        const result = await getNewsletterSubscribers()

        expect(result).toEqual({
          success: true,
          data: mockNewsletterData,
        })
        expect(prismaMock.newsletter.findMany).toHaveBeenCalledWith({
          orderBy: {
            createdAt: 'desc'
          }
        })
      })

      it('should return empty array when no subscribers exist', async () => {
        prismaMock.newsletter.findMany.mockResolvedValue([])

        const result = await getNewsletterSubscribers()

        expect(result).toEqual({
          success: true,
          data: [],
        })
      })

      it('should order subscribers by creation date descending', async () => {
        const orderedData = [...mockNewsletterData].reverse()
        prismaMock.newsletter.findMany.mockResolvedValue(orderedData)

        const result = await getNewsletterSubscribers()

        expect(result.success).toBe(true)
        expect(prismaMock.newsletter.findMany).toHaveBeenCalledWith({
          orderBy: {
            createdAt: 'desc'
          }
        })
      })
    })

    describe('Database Errors', () => {
      it('should handle database connection error', async () => {
        prismaMock.newsletter.findMany.mockRejectedValue(new Error('Database connection failed'))

        const result = await getNewsletterSubscribers()

        expect(result).toEqual({
          success: false,
          error: 'Failed to fetch subscribers',
        })
      })

      it('should handle database timeout error', async () => {
        prismaMock.newsletter.findMany.mockRejectedValue(new Error('Query timeout'))

        const result = await getNewsletterSubscribers()

        expect(result).toEqual({
          success: false,
          error: 'Failed to fetch subscribers',
        })
      })
    })
  })

  describe('getSubscriberStats', () => {
    const mockStats = {
      totalSubscribers: 100,
      todaySubscribers: 5,
      weekSubscribers: 25,
      subscribersBySource: [
        { source: 'homepage', count: 40 },
        { source: 'social-media', count: 30 },
        { source: 'unknown', count: 30 },
      ]
    }

    describe('Successful Operations', () => {
      it('should successfully fetch subscriber stats', async () => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        
        const weekStart = new Date()
        weekStart.setDate(weekStart.getDate() - 7)

        prismaMock.newsletter.count
          .mockResolvedValueOnce(100) // total count
          .mockResolvedValueOnce(5)   // today count
          .mockResolvedValueOnce(25)  // week count

        prismaMock.newsletter.groupBy.mockResolvedValue([
          { source: 'homepage', _count: { source: 40 } },
          { source: 'social-media', _count: { source: 30 } },
          { source: null, _count: { source: 30 } },
        ] as any)

        const result = await getSubscriberStats()

        expect(result).toEqual({
          success: true,
          data: mockStats,
        })

        expect(prismaMock.newsletter.count).toHaveBeenCalledTimes(3)
        expect(prismaMock.newsletter.groupBy).toHaveBeenCalledWith({
          by: ['source'],
          _count: {
            source: true
          }
        })
      })

      it('should handle zero subscribers', async () => {
        prismaMock.newsletter.count
          .mockResolvedValueOnce(0)
          .mockResolvedValueOnce(0)
          .mockResolvedValueOnce(0)

        prismaMock.newsletter.groupBy.mockResolvedValue([] as any)

        const result = await getSubscriberStats()

        expect(result).toEqual({
          success: true,
          data: {
            totalSubscribers: 0,
            todaySubscribers: 0,
            weekSubscribers: 0,
            subscribersBySource: []
          },
        })
      })

      it('should map null sources to "unknown"', async () => {
        prismaMock.newsletter.count
          .mockResolvedValueOnce(50)
          .mockResolvedValueOnce(2)
          .mockResolvedValueOnce(10)

        prismaMock.newsletter.groupBy.mockResolvedValue([
          { source: 'homepage', _count: { source: 20 } },
          { source: null, _count: { source: 30 } },
        ] as any)

        const result = await getSubscriberStats()

        expect(result.success).toBe(true)
        expect(result.data?.subscribersBySource).toEqual([
          { source: 'homepage', count: 20 },
          { source: 'unknown', count: 30 },
        ])
      })
    })

    describe('Database Errors', () => {
      it('should handle database error on count operation', async () => {
        prismaMock.newsletter.count.mockRejectedValue(new Error('Database error'))

        const result = await getSubscriberStats()

        expect(result).toEqual({
          success: false,
          error: 'Failed to fetch stats',
        })
      })

      it('should handle database error on groupBy operation', async () => {
        prismaMock.newsletter.count
          .mockResolvedValueOnce(100)
          .mockResolvedValueOnce(5)
          .mockResolvedValueOnce(25)

        prismaMock.newsletter.groupBy.mockRejectedValue(new Error('Group by failed'))

        const result = await getSubscriberStats()

        expect(result).toEqual({
          success: false,
          error: 'Failed to fetch stats',
        })
      })

      it('should handle partial database failures', async () => {
        prismaMock.newsletter.count
          .mockResolvedValueOnce(100)
          .mockRejectedValueOnce(new Error('Today count failed'))

        const result = await getSubscriberStats()

        expect(result).toEqual({
          success: false,
          error: 'Failed to fetch stats',
        })
      })
    })

    describe('Edge Cases', () => {
      it('should handle date boundary edge cases', async () => {
        // Mock current time to a specific date for consistent testing
        const fixedDate = new Date('2024-01-15T23:59:59.999Z')
        jest.useFakeTimers()
        jest.setSystemTime(fixedDate)

        prismaMock.newsletter.count
          .mockResolvedValueOnce(100)
          .mockResolvedValueOnce(5)
          .mockResolvedValueOnce(25)

        prismaMock.newsletter.groupBy.mockResolvedValue([
          { source: 'homepage', _count: { source: 100 } }
        ] as any)

        const result = await getSubscriberStats()

        expect(result.success).toBe(true)
        
        // Verify the date calculations were called correctly
        expect(prismaMock.newsletter.count).toHaveBeenCalledWith({
          where: {
            createdAt: {
              gte: expect.any(Date)
            }
          }
        })

        jest.useRealTimers()
      })

      it('should handle very large numbers', async () => {
        const largeNumber = 999999999
        
        prismaMock.newsletter.count
          .mockResolvedValueOnce(largeNumber)
          .mockResolvedValueOnce(largeNumber)
          .mockResolvedValueOnce(largeNumber)

        prismaMock.newsletter.groupBy.mockResolvedValue([
          { source: 'homepage', _count: { source: largeNumber } }
        ] as any)

        const result = await getSubscriberStats()

        expect(result.success).toBe(true)
        expect(result.data?.totalSubscribers).toBe(largeNumber)
        expect(result.data?.todaySubscribers).toBe(largeNumber)
        expect(result.data?.weekSubscribers).toBe(largeNumber)
      })
    })

    describe('Security Tests', () => {
      it('should handle malicious source values in database', async () => {
        prismaMock.newsletter.count
          .mockResolvedValueOnce(50)
          .mockResolvedValueOnce(2)
          .mockResolvedValueOnce(10)

        prismaMock.newsletter.groupBy.mockResolvedValue([
          { source: '<script>alert("xss")</script>', _count: { source: 10 } },
          { source: "'; DROP TABLE newsletter; --", _count: { source: 20 } },
          { source: null, _count: { source: 20 } },
        ] as any)

        const result = await getSubscriberStats()

        expect(result.success).toBe(true)
        expect(result.data?.subscribersBySource).toEqual([
          { source: '<script>alert("xss")</script>', count: 10 },
          { source: "'; DROP TABLE newsletter; --", count: 20 },
          { source: 'unknown', count: 20 },
        ])
      })

      it('should handle unexpected data types from database', async () => {
        prismaMock.newsletter.count
          .mockResolvedValueOnce(100)
          .mockResolvedValueOnce(5)
          .mockResolvedValueOnce(25)

        // Simulate unexpected data structure
        prismaMock.newsletter.groupBy.mockResolvedValue([
          { source: 123, _count: { source: 40 } } as any,
          { source: {}, _count: { source: 30 } } as any,
        ] as any)

        const result = await getSubscriberStats()

        expect(result.success).toBe(true)
        // Should handle unexpected types gracefully
        expect(result.data?.subscribersBySource).toHaveLength(2)
      })
    })
  })
})