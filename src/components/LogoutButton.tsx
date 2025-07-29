'use client'

import React from 'react'
import { MdLogout } from 'react-icons/md'
import { useAuth } from '@/contexts/AuthContext'

export default function LogoutButton() {
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <button
      onClick={handleLogout}
      className="mt-4 md:mt-0 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-red-700 transition"
    >
      <MdLogout />
      Sign Out
    </button>
  )
}
