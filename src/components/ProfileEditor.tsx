'use client'

import React, { useState, useEffect } from 'react'
import { MdEdit } from 'react-icons/md'
import { FiUser, FiMail, FiPhone } from 'react-icons/fi'
import { IoIosBusiness } from 'react-icons/io'
import type { User } from '@/lib/auth-server'

interface ProfileData {
  name: string
  email: string
  phone: string
  company: string
}

interface ProfileEditorProps {
  user: User
}

export default function ProfileEditor({ user }: ProfileEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  useEffect(() => {
    const savedProfileData = localStorage.getItem('profileData')
    if (savedProfileData) {
      setProfileData(JSON.parse(savedProfileData))
    } else {
      const defaultData = {
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        company: user?.company || ''
      }
      setProfileData(defaultData)
      localStorage.setItem('profileData', JSON.stringify(defaultData))
    }
  }, [user])

  const handleEditToggle = () => {
    if (isEditing) {
      localStorage.setItem('profileData', JSON.stringify(profileData))
      console.log('Profile data saved:', profileData)
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCancel = () => {
    const savedProfileData = localStorage.getItem('profileData')
    if (savedProfileData) {
      setProfileData(JSON.parse(savedProfileData))
    } else {
      setProfileData({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        company: user?.company || ''
      })
    }
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-black">Profile Information</h2>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-700 hover:cursor-pointer px-3 py-1 border border-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleEditToggle}
                className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 hover:cursor-pointer px-3 py-1 rounded-md"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:cursor-pointer"
            >
              <MdEdit className="w-4 h-4" />
              Edit
            </button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiUser className="inline w-4 h-4 mr-2" />
            Full Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
            />
          ) : (
            <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
              {profileData.name || <span className="opacity-0">placeholder</span>}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiMail className="inline w-4 h-4 mr-2" />
            Email Address
          </label>
          {isEditing ? (
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
            />
          ) : (
            <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
              {profileData.email || <span className="opacity-0">placeholder</span>}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiPhone className="inline w-4 h-4 mr-2" />
            Phone Number
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
            />
          ) : (
            <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
              {profileData.phone || <span className="opacity-0">placeholder</span>}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <IoIosBusiness className="inline w-5 h-5 mr-2" />
            Company
          </label>
          {isEditing ? (
            <input
              type="text"
              value={profileData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full text-black bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[48px]"
            />
          ) : (
            <p className="text-black bg-gray-50 p-3 rounded-md min-h-[48px] flex items-center">
              {profileData.company || <span className="opacity-0">placeholder</span>}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
