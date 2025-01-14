// app/post/new/page.tsx

'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreatePostPage: React.FC = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })

    if (res.ok) {
      router.push('/post')
    } else {
      alert('Failed to create post.')
    }
  }

  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold mb-8'>Create New Post</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label htmlFor='title' className='block text-gray-700'>
            Post Title
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
          <label htmlFor='content' className='block text-gray-700'>
            Content
          </label>
          <textarea
            id='content'
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='mt-2 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full'
        >
          Create Post
        </button>
      </form>
    </div>
  )
}

export default CreatePostPage
