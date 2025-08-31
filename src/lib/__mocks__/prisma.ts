import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { PrismaClient } from '@prisma/client'

export type MockPrisma = DeepMockProxy<PrismaClient>

const prismaMock = mockDeep<PrismaClient>()

export const prisma = prismaMock
export { prismaMock }