'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { MdShoppingCart, MdOutlinePayment, MdLocationPin, MdHistory, MdSettings } from 'react-icons/md'

export default function ClientNavigation() {
  const router = useRouter()

  return (
    <>
      <button
        onClick={() => router.push('/cart')}
        className="flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 text-black transition w-full bg-white"
      >
        <MdShoppingCart className="w-5 h-5" />
        Shopping Cart
      </button>
      <button
        onClick={() => router.push('/paymentinformation')}
        className="flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 text-black transition w-full bg-white"
      >
        <MdOutlinePayment className="w-5 h-5" />
        Payment Information
      </button>
      <button
        onClick={() => router.push('/ordertracking')}
        className="flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 text-black transition w-full bg-white"
      >
        <MdLocationPin className="w-5 h-5" />
        Order Tracking
      </button>
    </>
  )
}

interface QuickActionsProps {}

export function QuickActions({}: QuickActionsProps) {
  const router = useRouter()

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          onClick={() => router.push('/cart')}
          className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition hover:cursor-pointer"
        >
          <MdShoppingCart className="w-8 h-8 text-red-600 mb-2" />
          <span className="text-sm font-medium text-black">View Cart</span>
        </button>
        <button
          onClick={() => router.push('/orderhistory')}
          className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition hover:cursor-pointer"
        >
          <MdHistory className="w-8 h-8 text-black mb-2" />
          <span className="text-sm font-medium text-black">Order History</span>
        </button>
        <button
          onClick={() => router.push('/settings')}
          className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition hover:cursor-pointer"
        >
          <MdSettings className="w-8 h-8 text-neutral-600 mb-2" />
          <span className="text-sm font-medium text-black">Settings</span>
        </button>
      </div>
    </div>
  )
}
