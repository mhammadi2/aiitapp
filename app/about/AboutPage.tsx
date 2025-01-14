// app/about/AboutPage.tsx

import React from 'react'
import Image from 'next/image'

type Props = {}

const AboutPage: React.FC<Props> = () => {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-20'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-6'>About AIIT</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Dedicated to fostering intellectual growth through the harmonious
            integration of Islamic wisdom and contemporary knowledge
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold mb-4'>Our Story</h2>
              <p className='text-gray-700 leading-relaxed'>
                Founded with a vision to bridge the gap between Islamic
                teachings and modern academic discourse, AIIT has emerged as a
                leading institution in integrated Islamic thought. Our journey
                began with the recognition that contemporary challenges require
                solutions that draw from both traditional wisdom and modern
                innovation.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold mb-4'>Our Approach</h2>
              <ul className='space-y-4 text-gray-700'>
                <li className='flex items-start'>
                  <span className='h-6 w-6 rounded-full bg-yellow-500 mr-3 flex-shrink-0'></span>
                  <p>
                    Integration of Islamic principles with contemporary
                    knowledge
                  </p>
                </li>
                <li className='flex items-start'>
                  <span className='h-6 w-6 rounded-full bg-yellow-500 mr-3 flex-shrink-0'></span>
                  <p>Research-driven methodology and critical analysis</p>
                </li>
                <li className='flex items-start'>
                  <span className='h-6 w-6 rounded-full bg-yellow-500 mr-3 flex-shrink-0'></span>
                  <p>Practical application of theoretical frameworks</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Image and Values */}
          <div className='space-y-8'>
            <div className='relative aspect-video mb-8'>
              <Image
                src='/frontend/css/images/Webinar_2_final.png'
                alt='AIIT Campus'
                layout='fill'
                objectFit='cover'
                className='rounded-lg shadow-lg'
              />
            </div>

            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold mb-6'>Our Values</h2>
              <div className='grid grid-cols-2 gap-6'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
                    <span className='text-2xl'>🎓</span>
                  </div>
                  <h3 className='font-semibold mb-2'>Excellence</h3>
                  <p className='text-sm text-gray-600'>
                    Pursuing the highest standards in education and research
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
                    <span className='text-2xl'>🤝</span>
                  </div>
                  <h3 className='font-semibold mb-2'>Integration</h3>
                  <p className='text-sm text-gray-600'>
                    Bridging traditional and modern knowledge systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className='text-center bg-gray-900 text-white p-12 rounded-lg'>
          <h2 className='text-3xl font-bold mb-4'>Join Our Community</h2>
          <p className='mb-8 max-w-2xl mx-auto'>
            Be part of our mission to develop integrated solutions for
            contemporary challenges
          </p>
          <div className='space-x-4'>
            <a
              href='#'
              className='inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300'
            >
              Contact Us
            </a>
            <a
              href='#'
              className='inline-block border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
