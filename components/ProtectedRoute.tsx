// components/ProtectedRoute.tsx

'use client'

import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Do nothing while loading
    if (!session) signIn() // Redirect to sign in if not authenticated
  }, [session, status, router])

  if (session) {
    return <>{children}</>
  }

  // Optionally, render a loading state
  return <div>Loading...</div>
}

export default ProtectedRoute
