// context/UserContext.tsx

'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type User = {
  name: string
  role: 'user' | 'admin'
}

type UserContextType = {
  user: User | null
  loginAsUser: () => void
  loginAsAdmin: () => void
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

type Props = {
  children: ReactNode
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const loginAsUser = () => {
    setUser({ name: 'John Doe', role: 'user' })
  }

  const loginAsAdmin = () => {
    setUser({ name: 'Admin Jane', role: 'admin' })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, loginAsUser, loginAsAdmin, logout }}>
      {children}
    </UserContext.Provider>
  )
}
