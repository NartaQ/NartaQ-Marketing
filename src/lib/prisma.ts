import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
    // Add connection pooling for better Vercel performance
    datasourceUrl: process.env.DATABASE_URL,
    // Configure for serverless environments
    ...(process.env.NODE_ENV === 'production' && {
      // Disable connection pooling in serverless environments
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    }),
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
