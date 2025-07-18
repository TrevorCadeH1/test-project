'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { FaRegUserCircle } from "react-icons/fa";
import { RxExit } from "react-icons/rx";


export default function AuthButton() {
  const router = useRouter()
  const { isAuthenticated, isLoading, logout } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        <span className="text-sm text-gray-600">Loading...</span>
      </div>
    )
  }

  if (isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={logout}
          className="flex items-center space-x-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded hover:cursor-pointer transition-colors"
        >
          <RxExit size={14} />
          <span>Logout</span>
        </button>
      </div>
    )
  }

  return (
    <>
    <button
      onClick={() => router.push('/signin')}
      className="flex items-center space-x-1 px-4 py-2 mr-4 bg-white text-black font-sans rounded hover:cursor-pointer transition-colors text-lg font-medium"
    >
      <FaRegUserCircle className="text-black" size={24} />
      <span className="ml-1">Sign in / Register</span>
    </button>
    </>
  )
}
