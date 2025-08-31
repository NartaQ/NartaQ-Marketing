import type { DeepMockProxy } from 'jest-mock-extended'
import type { PrismaClient } from '@prisma/client'

describe('Newsletter Subscription Server Action', () => {
  let prismaMock: DeepMockProxy<PrismaClient>
  let subscribeToNewsletter: any

  beforeAll(async () => {
    // Suppress console errors during testing
    jest.spyOn(console, 'error').mockImplementation(() => {})
    
    // Mock Prisma before importing the server action
    jest.doMock('@/lib/prisma', () => ({
      prisma: require('../../../lib/__mocks__/prisma').prismaMock
    }))

    // Dynamically import the server action and mock
    const [newsletterModule, { prismaMock: mockInstance }] = await Promise.all([
      import('../newsletter'),
      import('../../../lib/__mocks__/prisma')
    ])
    
    subscribeToNewsletter = newsletterModule.subscribeToNewsletter
    prismaMock = mockInstance
  })
  
  afterAll(() => {
    // Restore all mocks after tests
    jest.restoreAllMocks()
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const createValidNewsletterData = (overrides = {}) => ({
    email: 'test@example.com',
    name: 'John Doe',
    source: 'homepage',
    ...overrides,
  })

  const mockNewsletterSubscription = {
    id: '1',
    email: 'test@example.com',
    name: 'John Doe',
    source: 'homepage',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  describe('Successful Subscription', () => {
    it('should successfully subscribe a user to newsletter with all fields', async () => {
      const testData = createValidNewsletterData()
      
      prismaMock.newsletter.findUnique.mockResolvedValue(null)
      prismaMock.newsletter.create.mockResolvedValue(mockNewsletterSubscription)

      const result = await subscribeToNewsletter(testData)

      expect(result).toEqual({
        success: true,
        data: mockNewsletterSubscription,
      })
      expect(prismaMock.newsletter.findUnique).toHaveBeenCalledWith({
        where: { email: testData.email }
      })
      expect(prismaMock.newsletter.create).toHaveBeenCalledWith({
        data: {
          email: testData.email,
          name: testData.name,
          source: testData.source,
        },
      })
    })

    it('should successfully subscribe with only email', async () => {
      const testData = { email: 'minimal@example.com' }
      const minimalSubscription = {
        ...mockNewsletterSubscription,
        email: 'minimal@example.com',
        name: null,
        source: 'unknown',
      }
      
      prismaMock.newsletter.findUnique.mockResolvedValue(null)
      prismaMock.newsletter.create.mockResolvedValue(minimalSubscription)

      const result = await subscribeToNewsletter(testData)

      expect(result).toEqual({
        success: true,
        data: minimalSubscription,
      })
      expect(prismaMock.newsletter.create).toHaveBeenCalledWith({
        data: {
          email: testData.email,
          name: null,
          source: 'unknown',
        },
      })
    })

    it('should handle empty name and source gracefully', async () => {
      const testData = createValidNewsletterData({ name: '', source: '' })
      const subscription = {
        ...mockNewsletterSubscription,
        name: null,
        source: 'unknown',
      }
      
      prismaMock.newsletter.findUnique.mockResolvedValue(null)
      prismaMock.newsletter.create.mockResolvedValue(subscription)

      const result = await subscribeToNewsletter(testData)

      expect(result.success).toBe(true)
      expect(prismaMock.newsletter.create).toHaveBeenCalledWith({
        data: {
          email: testData.email,
          name: null,
          source: 'unknown',
        },
      })
    })
  })

  describe('Validation Errors', () => {
    it('should reject invalid email addresses', async () => {
      const testData = createValidNewsletterData({ email: 'invalid-email' })

      const result = await subscribeToNewsletter(testData)

      expect(result).toEqual({
        success: false,
        error: 'Validation failed',
        details: expect.arrayContaining([
          expect.objectContaining({
            code: 'invalid_format',
            path: ['email'],
            message: 'Please enter a valid email address'
          })
        ])
      })
      expect(prismaMock.newsletter.findUnique).not.toHaveBeenCalled()
      expect(prismaMock.newsletter.create).not.toHaveBeenCalled()
    })

    it('should reject empty email', async () => {
      const testData = createValidNewsletterData({ email: '' })

      const result = await subscribeToNewsletter(testData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Validation failed')
      expect(result.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            path: ['email'],
            message: 'Please enter a valid email address'
          })
        ])
      )
    })

    it('should reject undefined email', async () => {
      const testData = createValidNewsletterData()
      delete (testData as any).email

      const result = await subscribeToNewsletter(testData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Validation failed')
      expect(result.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            path: ['email'],
            code: 'invalid_type'
          })
        ])
      )
    })
  })

  describe('Database Errors', () => {
    it('should handle duplicate email subscription', async () => {
      const testData = createValidNewsletterData()
      
      prismaMock.newsletter.findUnique.mockResolvedValue(mockNewsletterSubscription)

      const result = await subscribeToNewsletter(testData)

      expect(result).toEqual({
        success: false,
        error: 'This email is already subscribed to our newsletter',
      })
      expect(prismaMock.newsletter.findUnique).toHaveBeenCalledWith({
        where: { email: testData.email }
      })
      expect(prismaMock.newsletter.create).not.toHaveBeenCalled()
    })

    it('should handle database connection error on findUnique', async () => {
      const testData = createValidNewsletterData()
      
      prismaMock.newsletter.findUnique.mockRejectedValue(new Error('Database connection failed'))

      const result = await subscribeToNewsletter(testData)

      expect(result).toEqual({
        success: false,
        error: 'Failed to subscribe to newsletter',
      })
    })

    it('should handle database error on create', async () => {
      const testData = createValidNewsletterData()
      
      prismaMock.newsletter.findUnique.mockResolvedValue(null)
      prismaMock.newsletter.create.mockRejectedValue(new Error('Database write failed'))

      const result = await subscribeToNewsletter(testData)

      expect(result).toEqual({
        success: false,
        error: 'Failed to subscribe to newsletter',
      })
    })
  })

  describe('Edge Cases', () => {
    it('should handle very long email addresses', async () => {
      const longEmail = 'a'.repeat(100) + '@example.com'
      const testData = createValidNewsletterData({ email: longEmail })
      
      prismaMock.newsletter.findUnique.mockResolvedValue(null)
      prismaMock.newsletter.create.mockResolvedValue({
        ...mockNewsletterSubscription,
        email: longEmail,
      })

      const result = await subscribeToNewsletter(testData)

      expect(result.success).toBe(true)
      expect(prismaMock.newsletter.create).toHaveBeenCalledWith({
        data: {
          email: longEmail,
          name: testData.name,
          source: testData.source,
        },
      })
    })

    it('should handle special characters in name and source', async () => {
      const specialData = createValidNewsletterData({
        name: 'John "Special" O\'Malley & Co.',
        source: 'social-media/instagram-#ad',
      })
      
      prismaMock.newsletter.findUnique.mockResolvedValue(null)
      prismaMock.newsletter.create.mockResolvedValue({
        ...mockNewsletterSubscription,
        name: specialData.name,
        source: specialData.source,
      })

      const result = await subscribeToNewsletter(specialData)

      expect(result.success).toBe(true)
      expect(prismaMock.newsletter.create).toHaveBeenCalledWith({
        data: {
          email: specialData.email,
          name: specialData.name,
          source: specialData.source,
        },
      })
    })
  })

  describe('Security Tests', () => {
    it('should handle malicious email input', async () => {
      const maliciousData = createValidNewsletterData({
        email: '<script>alert("xss")</script>@evil.com',
      })

      const result = await subscribeToNewsletter(maliciousData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Validation failed')
      expect(prismaMock.newsletter.create).not.toHaveBeenCalled()
    })

    it('should handle SQL injection attempts in name field', async () => {
      const sqlInjectionData = createValidNewsletterData({
        name: "'; DROP TABLE newsletter; --",
        source: "'; DELETE FROM newsletter; --",
      })
      
      prismaMock.newsletter.findUnique.mockResolvedValue(null)
      prismaMock.newsletter.create.mockResolvedValue({
        ...mockNewsletterSubscription,
        name: sqlInjectionData.name,
        source: sqlInjectionData.source,
      })

      const result = await subscribeToNewsletter(sqlInjectionData)

      // Should still work as Prisma handles SQL injection protection
      expect(result.success).toBe(true)
      expect(prismaMock.newsletter.create).toHaveBeenCalledWith({
        data: {
          email: sqlInjectionData.email,
          name: sqlInjectionData.name,
          source: sqlInjectionData.source,
        },
      })
    })
  })
})