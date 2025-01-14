// app/layout.tsx

'use client'

import '@/app/globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { UserProvider } from '@/context/UserContext'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children: ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body className='font-sans'>
        <SessionProvider>
          <UserProvider>
            <Header />
            <main className='mt-20 mb-12'>{children}</main>
            <Footer />
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout
