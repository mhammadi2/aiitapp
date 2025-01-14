// components/Footer.tsx

'use client'

import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer
      className='bg-gray-800 text-white py-12 mt-20'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='container mx-auto px-6 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* About AIIT */}
          <section>
            <h3 className='text-2xl font-semibold mb-4'>AIIT</h3>
            <p className='text-gray-400'>
              Dedicated to fostering intellectual growth through the harmonious
              integration of Islamic wisdom and contemporary knowledge.
            </p>
          </section>

          {/* Quick Links */}
          <nav aria-label='Footer Navigation'>
            <h3 className='text-2xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/home'
                  className='text-gray-400 hover:text-yellow-500 transition-colors duration-300'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-yellow-500 transition-colors duration-300'
                >
                  About
                </Link>
              </li>
              {/* Additional links */}
            </ul>
          </nav>

          {/* Contact Us */}
          <address className='not-italic'>
            <h3 className='text-2xl font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='flex items-center text-gray-400'>
                {/* Icon */}
                <span>info@aiit.org</span>
              </li>
              {/* Additional contact info */}
            </ul>
          </address>
        </div>

        {/* Divider */}
        <hr className='my-8 border-gray-700' />

        {/* Footer Bottom */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} AIIT. All rights reserved.
          </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            {/* Social Media Links */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
