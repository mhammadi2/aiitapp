// app/events/new/page.tsx

'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreateEventPage: React.FC = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, date }),
    })

    if (res.ok) {
      router.push('/events')
    } else {
      alert('Failed to create event.')
    }
  }

  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold mb-8'>Create New Event</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label htmlFor='title' className='block text-gray-700'>
            Event Title
          </label>
          <input
            type='text'
            id='title'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='mt-2 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
          />
        </div>
        <div>
          <label htmlFor='description' className='block text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='mt-2 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
          ></textarea>
        </div>
        <div>
          <label htmlFor='date' className='block text-gray-700'>
            Date
          </label>
          <input
            type='date'
            id='date'
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='mt-2 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
          />
        </div>
        <button
          type='submit'
          className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full'
        >
          Create Event
        </button>
      </form>
    </div>
  )
}

export default CreateEventPage
