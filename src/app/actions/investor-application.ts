'use server'

import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const investorApplicationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  workEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(1, 'Company/Firm name is required'),
  title: z.string().min(1, 'Title is required'),
  investmentFocus: z
    .array(z.string())
    .min(1, 'Please select at least one investment focus'),
  otherFocus: z.string().optional(),
  ticketSize: z.string().min(1, 'Please select a ticket size'),
  targetGeography: z
    .array(z.string())
    .min(1, 'Please select at least one target geography'),
  referralSource: z.string().min(1, 'Please select a referral source'),
  otherSource: z.string().optional(),
})

export type InvestorApplicationData = z.infer<typeof investorApplicationSchema>

export async function submitInvestorApplication(data: InvestorApplicationData) {
  try {
    // Validate the data
    const validatedData = investorApplicationSchema.parse(data)

    // Save to database
    const application = await prisma.investorApplication.create({
      data: {
        fullName: validatedData.fullName,
        workEmail: validatedData.workEmail,
        companyName: validatedData.companyName,
        title: validatedData.title,
        investmentFocus: validatedData.investmentFocus,
        otherFocus: validatedData.otherFocus,
        ticketSize: validatedData.ticketSize,
        targetGeography: validatedData.targetGeography,
        referralSource: validatedData.referralSource,
        otherSource: validatedData.otherSource,
      },
    })

    return {
      success: true,
      data: application,
    }
  } catch (error) {
    console.error('Error submitting investor application:', error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error.issues,
      }
    }

    return {
      success: false,
      error: 'Failed to submit application',
    }
  }
}
