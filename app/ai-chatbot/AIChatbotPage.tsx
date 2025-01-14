// app/ai-chatbot/AIChatbotPage.tsx

import React from 'react'
import Image from 'next/image'

type Props = {}

const AIChatbotPage: React.FC<Props> = () => {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-20'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-6'>AI Chatbot</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Engage with our AI-powered chatbot for instant assistance and
            information.
          </p>
        </div>

        {/* Chatbot Demo */}
        <div className='flex flex-col items-center'>
          <div className='w-full max-w-xl bg-white p-8 rounded-lg shadow-md'>
            <div className='flex flex-col space-y-4'>
              {/* Chatbot Interface Placeholder */}
              <div className='h-64 bg-gray-100 rounded-md flex items-center justify-center'>
                <span className='text-gray-500'>
                  Chatbot Interface Coming Soon...
                </span>
              </div>
              {/* Information */}
              <p className='text-gray-700'>
                Coming soon: Interact with our intelligent chatbot to get
                answers to your queries, schedule events, and more!
              </p>
              {/* Call to Action */}
              <a
                href='#'
                className='inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full text-lg font-medium transition-all duration-300'
              >
                Get Notified
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIChatbotPage
