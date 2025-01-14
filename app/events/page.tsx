// app/events/page.tsx

import React from 'react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

type Event = {
  id: number
  title: string
  description: string
  date: string
}

const EventsPage: React.FC = async () => {
  const events: Event[] = await prisma.event.findMany({
    orderBy: { date: 'asc' },
  })
  // console.log(events)
  return (
    <div className='container mx-auto px-6 py-16 border-red-100'>
      <h1 className='text-4xl font-bold mb-8'>Upcoming Events</h1>
      {events.length === 0 ? (
        <p className='text-gray-700'>No events found.</p>
      ) : (
        <ul className='space-y-4'>
          {events.map((event) => (
            <li key={event.id} className='bg-white p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-2'>{event.title}</h2>
              <p className='text-gray-600 mb-4'>{event.description}</p>
              <p className='text-gray-500'>
                Date: {new Date(event.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
      <Link
        href='/events/new'
        className='mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full'
      >
        Create New Event
      </Link>
    </div>
  )
}

export default EventsPage
