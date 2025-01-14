// components/Header.tsx

'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Header: React.FC = () => {
  const { data: session, status } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className='bg-gray-900 text-white'>
      <div className='container mx-auto px-6 lg:px-20'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/home' className='text-2xl font-bold'>
              AIIT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex space-x-4'>
            <Link href='/home' className='hover:text-yellow-500'>
              Home
            </Link>
            <Link href='/about' className='hover:text-yellow-500'>
              About
            </Link>
            <Link href='/ai-chatbot' className='hover:text-yellow-500'>
              AI Chatbot
            </Link>
            <Link href='/donate' className='hover:text-yellow-500'>
              Donate
            </Link>
            <Link href='/events' className='hover:text-yellow-500'>
              Events
            </Link>
            <Link href='/post' className='hover:text-yellow-500'>
              Posts
            </Link>
            {session && (
              <Link href='/dashboard' className='hover:text-yellow-500'>
                Dashboard
              </Link>
            )}
            {session && (
              <Link href='/profile' className='hover:text-yellow-500'>
                Profile
              </Link>
            )}
          </div>

          {/* Authentication Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            {status === 'authenticated' ? (
              <>
                <span className='text-gray-300'>
                  Hello, {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-300'
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className='bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full transition-colors duration-300'
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-gray-300 hover:text-white focus:outline-none focus:text-white'
              aria-label={
                isMobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls='mobile-menu'
            >
              {isMobileMenuOpen ? (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          id='mobile-menu'
          className='lg:hidden bg-gray-800'
          aria-label='Mobile Navigation'
        >
          <div className='container mx-auto px-6 py-4 space-y-4'>
            <Link
              href='/home'
              className='block text-gray-300 hover:text-yellow-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/about'
              className='block text-gray-300 hover:text-yellow-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/ai-chatbot'
              className='block text-gray-300 hover:text-yellow-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Chatbot
            </Link>
            <Link
              href='/donate'
              className='block text-gray-300 hover:text-yellow-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              href='/events'
              className='block text-gray-300 hover:text-yellow-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href='/post'
              className='block text-gray-300 hover:text-yellow-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Posts
            </Link>
            {session && (
              <Link
                href='/dashboard'
                className='block text-gray-300 hover:text-yellow-500'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {session && (
              <Link
                href='/profile'
                className='block text-gray-300 hover:text-yellow-500'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
            )}
            {/* Authentication Buttons */}
            <div className='mt-4'>
              {status === 'authenticated' ? (
                <button
                  onClick={() => {
                    signOut()
                    setIsMobileMenuOpen(false)
                  }}
                  className='w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-300'
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    signIn()
                    setIsMobileMenuOpen(false)
                  }}
                  className='w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full transition-colors duration-300'
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
