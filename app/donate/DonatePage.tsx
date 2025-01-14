// app/donate/DonatePage.tsx

import React from 'react'
import Image from 'next/image'

type Props = {}

const DonatePage: React.FC<Props> = () => {
  return (
    <section className='bg-white py-16'>
      <div className='container mx-auto px-6 lg:px-20'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-6'>Support AIIT</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Your contributions help us continue our mission of integrating
            Islamic wisdom with contemporary education.
          </p>
        </div>

        {/* Donation Options */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <span className='text-2xl'>💰</span>
            </div>
            <h3 className='text-2xl font-semibold mb-2'>One-Time Donation</h3>
            <p className='text-gray-600 mb-4'>
              Make a single contribution to support our initiatives.
            </p>
            <a
              href='#'
              className='inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full'
            >
              Donate Now
            </a>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <span className='text-2xl'>📅</span>
            </div>
            <h3 className='text-2xl font-semibold mb-2'>Monthly Support</h3>
            <p className='text-gray-600 mb-4'>
              Become a monthly donor to provide ongoing support.
            </p>
            <a
              href='#'
              className='inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full'
            >
              Subscribe
            </a>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <span className='text-2xl'>🎁</span>
            </div>
            <h3 className='text-2xl font-semibold mb-2'>
              Corporate Sponsorship
            </h3>
            <p className='text-gray-600 mb-4'>
              Partner with us to make a larger impact.
            </p>
            <a
              href='#'
              className='inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full'
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonatePage
