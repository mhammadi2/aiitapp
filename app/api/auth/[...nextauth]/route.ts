// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google' // Example provider
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  // Optional: Customize pages
  pages: {
    signIn: '/auth/signin',
    // You can add more custom pages here
  },
})

export { handler as GET, handler as POST }
