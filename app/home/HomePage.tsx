// app/home/HomePage.tsx

import React from 'react'
import Image from 'next/image'

type Props = {}

const HomePage: React.FC<Props> = () => {
  return (
    <section className='bg-white py-16'>
      <div className='container mx-auto px-6 lg:px-20'>
        {/* Hero Section */}
        <div className='flex flex-col-reverse lg:flex-row items-center mb-16'>
          {/* Text Content */}
          <div className='w-full lg:w-1/2 space-y-6'>
            <h1 className='text-5xl font-bold'>Welcome to AIIT</h1>
            <p className='text-xl text-gray-700'>
              Empowering individuals through integrated Islamic and modern
              education.
            </p>
            <a
              href='/about'
              className='inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full text-lg font-medium transition-all duration-300'
            >
              Learn More
            </a>
          </div>
          {/* Image */}
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0 relative h-64 lg:h-96'>
            <Image
              src='/frontend/css/images/Webinar_2_final.png'
              alt='AIIT Building'
              layout='fill'
              objectFit='cover'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>

        {/* Features Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <span className='text-2xl'>📚</span>
            </div>
            <h3 className='text-2xl font-semibold mb-2'>Curriculum</h3>
            <p className='text-gray-600'>
              Comprehensive programs blending traditional and modern
              disciplines.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <span className='text-2xl'>🌐</span>
            </div>
            <h3 className='text-2xl font-semibold mb-2'>Global Outreach</h3>
            <p className='text-gray-600'>
              Connecting with a worldwide community of scholars and learners.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <span className='text-2xl'>🔍</span>
            </div>
            <h3 className='text-2xl font-semibold mb-2'>Research</h3>
            <p className='text-gray-600'>
              Pioneering studies that address contemporary and timeless issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
