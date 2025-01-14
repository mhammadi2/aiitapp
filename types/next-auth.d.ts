// types/next-auth.d.ts

import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: number
  }

  interface Session {
    user: {
      id: number
      name?: string | null
      email?: string | null
      image?: string | null
    }
    accessToken?: string
  }
}
