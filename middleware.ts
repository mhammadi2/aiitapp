// middleware.ts

import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // You can add custom middleware logic here if needed
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Define protected routes
        const url = req.nextUrl.pathname
        if (url.startsWith('/profile')) return !!token
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/profile/:path*', '/profile'],
}
