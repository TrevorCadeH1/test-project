'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

interface ViewAllButtonProps {
  href: string
  children: React.ReactNode
}

export default function ViewAllButton({ href, children }: ViewAllButtonProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(href)}
      className="text-red-600 hover:text-red-700 font-medium hover:cursor-pointer hover:underline transition"
    >
      {children}
    </button>
  )
}
