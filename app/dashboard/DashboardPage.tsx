// app/dashboard/DashboardPage.tsx

'use client'

import React from 'react'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

type Props = {}

const DashboardPage: React.FC<Props> = () => {
  const { user } = useUser()
  const router = useRouter()

  React.useEffect(() => {
    if (!user) {
      // Redirect to Home if not logged in
      router.push('/')
    }
  }, [user, router])

  if (!user) {
    return null // Optionally, return a loading indicator
  }

  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-20'>
        {/* Dashboard Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-4'>Dashboard</h1>
          <p className='text-xl text-gray-600'>
            Welcome, {user.name}! Manage your activities below.
          </p>
        </div>

        {/* Dashboard Content */}
        {user.role === 'admin' ? (
          <div className='space-y-8'>
            {/* Admin Panel */}
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold mb-4'>Admin Panel</h2>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Manage Events, Posts, and Users.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300'
                >
                  Manage Events
                </a>
                <a
                  href='#'
                  className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300'
                >
                  Manage Posts
                </a>
                <a
                  href='#'
                  className='bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300'
                >
                  Manage Users
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className='space-y-8'>
            {/* User Dashboard */}
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold mb-4'>Your Activities</h2>
              <p className='text-gray-700 leading-relaxed mb-6'>
                View and manage your events and posts.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300'
                >
                  My Events
                </a>
                <a
                  href='#'
                  className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300'
                >
                  My Posts
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DashboardPage
