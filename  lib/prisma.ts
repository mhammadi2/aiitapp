// lib/prisma.ts

import { PrismaClient } from '@prisma/client'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined
    }
  }
}

// Prevent multiple instances of Prisma Client in development
const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma // Default export
