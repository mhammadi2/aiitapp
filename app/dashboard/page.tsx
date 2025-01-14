// app/dashboard/page.tsx

'use client'

import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

const DashboardPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className='container mx-auto px-6 py-16'>
        <h1 className='text-4xl font-bold mb-4'>Dashboard</h1>
        <p className='text-gray-700'>Welcome to your dashboard!</p>
        {/* Dashboard content */}
      </div>
    </ProtectedRoute>
  )
}

export default DashboardPage
