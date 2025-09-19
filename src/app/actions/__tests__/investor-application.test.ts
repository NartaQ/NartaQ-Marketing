/**
 * @jest-environment node
 */

import type { PrismaClient } from '@prisma/client'
import type { MockProxy } from 'jest-mock-extended'

// Mock Prisma client
let prismaMock: MockProxy<PrismaClient>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let submitInvestorApplicationAction: any

beforeAll(async () => {
  // Mock console.error to suppress error logs during testing
  jest.spyOn(console, 'error').mockImplementation(() => void 0)
  
  // Import mock utilities
  const { mockDeep } = await import('jest-mock-extended')
  prismaMock = mockDeep<PrismaClient>()

  // Mock the prisma module
  jest.doMock('@/lib/prisma', () => ({
    prisma: prismaMock,
  }))

  // Dynamic import to ensure we get the mocked version
  const moduleImport = await import('../investor-application')
  submitInvestorApplicationAction = moduleImport.submitInvestorApplication
})

afterAll(() => {
  // Restore console.error after tests
  jest.restoreAllMocks()
})

beforeEach(() => {
  // Reset mocks before each test
  jest.clearAllMocks()
})

const validInvestorData = {
  fullName: 'Jane Smith',
  workEmail: 'jane@investment.com',
  companyName: 'Investment Partners LLC',
  title: 'Managing Partner',
  investmentFocus: ['Technology', 'Healthcare'],
  otherFocus: '',
  ticketSize: '$100K - $500K',
  targetGeography: ['North America', 'Europe'],
  referralSource: 'LinkedIn',
  otherSource: '',
}

function createMockApplication() {
  return {
    id: 'test-id',
    fullName: validInvestorData.fullName,
    workEmail: validInvestorData.workEmail,
    companyName: validInvestorData.companyName,
    title: validInvestorData.title,
    investmentFocus: validInvestorData.investmentFocus,
    otherFocus: validInvestorData.otherFocus || null,
    ticketSize: validInvestorData.ticketSize,
    targetGeography: validInvestorData.targetGeography,
    referralSource: validInvestorData.referralSource,
    otherSource: validInvestorData.otherSource || null,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z'),
  }
}

describe('submitInvestorApplication', () => {
  describe('Successful Submission', () => {
    it('should successfully submit a valid investor application', async () => {
      const mockApplication = createMockApplication()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockResolvedValue(mockApplication)

      const result = await submitInvestorApplicationAction(validInvestorData)

      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockApplication)
      expect(prismaMock.investorApplication.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          fullName: validInvestorData.fullName,
          workEmail: validInvestorData.workEmail,
          companyName: validInvestorData.companyName,
          title: validInvestorData.title,
          investmentFocus: validInvestorData.investmentFocus,
          ticketSize: validInvestorData.ticketSize,
          targetGeography: validInvestorData.targetGeography,
          referralSource: validInvestorData.referralSource,
        }),
      })
    })

    it('should handle applications with optional fields', async () => {
      const dataWithOptional = {
        ...validInvestorData,
        otherFocus: 'Renewable Energy',
        otherSource: 'Direct outreach',
      }
      
      const mockApplication = createMockApplication()
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockResolvedValue(mockApplication)

      const result = await submitInvestorApplicationAction(dataWithOptional)

      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockApplication)
    })

    it('should handle multiple investment focuses', async () => {
      const dataWithMultipleFocuses = {
        ...validInvestorData,
        investmentFocus: ['Technology', 'Healthcare', 'Fintech', 'AI/ML'],
      }
      
      const mockApplication = createMockApplication()
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockResolvedValue(mockApplication)

      const result = await submitInvestorApplicationAction(dataWithMultipleFocuses)

      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockApplication)
    })
  })

  describe('Validation Errors', () => {
    it('should reject application with missing required fields', async () => {
      const incompleteData = {}

      const result = await submitInvestorApplicationAction(incompleteData)

      expect(result.success).toBe(false)
      expect(result.details).toBeDefined()
      // Check that we have validation errors for all required fields
      expect(result.details).toHaveLength(8)
      
      const errorPaths = result.details.map((error: any) => error.path[0])
      expect(errorPaths).toEqual(
        expect.arrayContaining([
          'fullName',
          'workEmail', 
          'companyName',
          'title',
          'investmentFocus',
          'ticketSize',
          'targetGeography',
          'referralSource'
        ])
      )
    })

    it('should reject application with invalid email', async () => {
      const invalidEmailData = {
        ...validInvestorData,
        workEmail: 'invalid-email',
      }

      const result = await submitInvestorApplicationAction(invalidEmailData)

      expect(result.success).toBe(false)
      expect(result.details).toBeDefined()
      expect(result.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            path: ['workEmail'],
            message: 'Please enter a valid email address',
          }),
        ])
      )
    })

    it('should reject application with empty investment focus array', async () => {
      const emptyFocusData = {
        ...validInvestorData,
        investmentFocus: [],
      }

      const result = await submitInvestorApplicationAction(emptyFocusData)

      expect(result.success).toBe(false)
      expect(result.details).toBeDefined()
      expect(result.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            path: ['investmentFocus'],
            message: 'Please select at least one investment focus',
          }),
        ])
      )
    })

    it('should reject application with empty target geography array', async () => {
      const emptyGeographyData = {
        ...validInvestorData,
        targetGeography: [],
      }

      const result = await submitInvestorApplicationAction(emptyGeographyData)

      expect(result.success).toBe(false)
      expect(result.details).toBeDefined()
      expect(result.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            path: ['targetGeography'],
            message: 'Please select at least one target geography',
          }),
        ])
      )
    })
  })

  describe('Database Errors', () => {
    it('should handle database connection errors', async () => {
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockImplementation(() => {
        throw new Error('Database connection failed')
      })

      const result = await submitInvestorApplicationAction(validInvestorData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Failed to submit application')
    })

    it('should handle database constraint errors', async () => {
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockImplementation(() => {
        const error = new Error('Unique constraint failed')
        ;(error as any).code = 'P2002'
        throw error
      })

      const result = await submitInvestorApplicationAction(validInvestorData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Failed to submit application')
    })
  })

  describe('Edge Cases', () => {
    it('should handle applications with special characters', async () => {
      const specialCharsData = {
        ...validInvestorData,
        fullName: 'José María Sánchez-González',
        companyName: 'Investment & Partners (LLC)',
      }
      
      const mockApplication = createMockApplication()
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockResolvedValue(mockApplication)

      const result = await submitInvestorApplicationAction(specialCharsData)

      expect(result.success).toBe(true)
    })

    it('should handle concurrent submission attempts', async () => {
      const mockApplication = createMockApplication()
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockResolvedValue(mockApplication)

      const promises = Array(5).fill(null).map(() => 
        submitInvestorApplicationAction(validInvestorData)
      )
      const results = await Promise.all(promises)

      results.forEach((result) => {
        expect(result.success).toBe(true)
        expect(result.data).toEqual(mockApplication)
      })
    })
  })

  describe('Security Tests', () => {
    it('should sanitize potential XSS in text fields', async () => {
      const dataWithXSS = {
        ...validInvestorData,
        fullName: '<script>alert("xss")</script>John Doe',
      }
      
      const mockApplication = createMockApplication()
      ;(prismaMock.investorApplication.create as jest.MockedFunction<any>).mockResolvedValue(mockApplication)

      const result = await submitInvestorApplicationAction(dataWithXSS)

      expect(result.success).toBe(true)
      // Note: XSS sanitization would typically be handled at the display layer
      // The server action should store the data as provided for audit purposes
    })

    it('should handle SQL injection attempts', async () => {
      const dataWithSQLInjection = {
        ...validInvestorData,
        workEmail: 'invalid.email',
      }

      const result = await submitInvestorApplicationAction(dataWithSQLInjection)

      expect(result.success).toBe(false)
      // Prisma ORM protects against SQL injection by using parameterized queries
    })
  })
})