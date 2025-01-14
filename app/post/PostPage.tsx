// app/post/page.tsx

import React from 'react'
import Link from 'next/link'
import { prisma } from '../../lib/prisma'

type Post = {
  id: number
  title: string
  content: string
  published: boolean
  createdAt: string
}

const PostsPage: React.FC = async () => {
  const posts: Post[] = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold mb-8'>Latest Posts</h1>
      {posts.length === 0 ? (
        <p className='text-gray-700'>No posts available.</p>
      ) : (
        <ul className='space-y-4'>
          {posts.map((post) => (
            <li key={post.id} className='bg-white p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-2'>{post.title}</h2>
              <p className='text-gray-600 mb-4'>{post.content}</p>
              <p className='text-gray-500'>
                Published on: {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
      <Link
        href='/post/new'
        className='mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full'
      >
        Create New Post
      </Link>
    </div>
  )
}

export default PostsPage
