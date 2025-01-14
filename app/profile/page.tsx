// app/profile/page.tsx

'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ProfilePage: React.FC = () => {
  const { data: session, status } = useSession()
  const [userData, setUserData] = useState<{
    name?: string
    email?: string
    image?: string
  }>({})
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Do nothing while loading
    if (!session) {
      router.push('/api/auth/signin') // Redirect to sign-in if not authenticated
    } else {
      // Fetch user data from the database
      const fetchUserData = async () => {
        const res = await fetch(`/api/user/${session.user?.id}`)
        if (res.ok) {
          const data = await res.json()
          setUserData({ name: data.name, email: data.email, image: data.image })
        } else {
          // Handle error
          console.error('Failed to fetch user data.')
        }
      }
      fetchUserData()
    }
  }, [session, status, router])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const updatedData = {
      name: formData.get('name') as string,
      image: formData.get('image') as string,
    }

    const res = await fetch(`/api/user/${session?.user?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })

    if (res.ok) {
      alert('Profile updated successfully!')
      router.refresh()
    } else {
      alert('Failed to update profile.')
    }
  }

  if (status === 'loading') {
    return <div className='container mx-auto px-6 py-16'>Loading...</div>
  }

  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold mb-8'>Your Profile</h1>
      <form onSubmit={handleUpdate} className='space-y-6 max-w-md'>
        <div>
          <label htmlFor='name' className='block text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            defaultValue={userData.name || ''}
            className='mt-2 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-gray-700'>
            Email (read-only)
          </label>
          <input
            type='email'
            id='email'
            name='email'
            defaultValue={userData.email || ''}
            className='mt-2 w-full border border-gray-300 rounded-md p-3 bg-gray-100'
            readOnly
          />
        </div>
        <div>
          <label htmlFor='image' className='block text-gray-700'>
            Profile Image URL
          </label>
          <input
            type='url'
            id='image'
            name='image'
            defaultValue={userData.image || ''}
            className='mt-2 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
          />
        </div>
        <button
          type='submit'
          className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full'
        >
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default ProfilePage
