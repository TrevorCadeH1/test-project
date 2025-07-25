'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { LoginResponse, LoginCheckResponse, tokenStorage } from '@/lib/auth'

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user: any | null
  token: string | null
  login: (userName: string, password: string) => Promise<LoginResponse>
  logout: () => void
  checkAuthStatus: () => void
}

const checkAuthStatus = async (): Promise<{ authenticated: boolean; user: any | null }> => {
  const response = await fetch('/api/auth/session')
  if (!response.ok) {
    throw new Error('Auth check failed')
  }
  return response.json()
}

const loginUser = async ({ userName, password }: { userName: string; password: string }): Promise<LoginResponse> => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, password })
  })
  
  if (!response.ok) {
    throw new Error('Login request failed')
  }
  
  return response.json()
}

const logoutUser = async (): Promise<void> => {
  const response = await fetch('/api/auth/logout', { method: 'POST' })
  if (!response.ok) {
    throw new Error('Logout failed')
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({
  children,
  initialAuth = false
}: {
  children: ReactNode
  initialAuth?: boolean
}) {
  const queryClient = useQueryClient()
  const router = useRouter()

  // Query for authorization status
  const {
    data: authData,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['authStatus'],
    queryFn: checkAuthStatus,
    retry: 1,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    initialData: initialAuth ? { authenticated: true, user: null } : undefined,
  })

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ['authStatus'] })
        queryClient.invalidateQueries({ queryKey: ['productPrices'] })
      }
    },
  })

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onMutate: () => {
      queryClient.setQueryData(['authStatus'], { authenticated: false, user: null })
      queryClient.clear()
    },
    onSuccess: () => {
      // Clear all queries to force fresh data
      queryClient.clear()
      // Redirect to home page after successful logout
      router.push('/home')
    },
    onError: () => {
      queryClient.setQueryData(['authStatus'], { authenticated: false, user: null })
      queryClient.clear()
      router.push('/home')
    }
  })

  const login = async (userName: string, password: string): Promise<LoginResponse> => {
    try {
      const result = await loginMutation.mutateAsync({ userName, password })
      return result
    } catch (error) {
      return { success: false, message: 'Network error occurred' }
    }
  }

  const logout = async () => {
    try {
      await logoutMutation.mutateAsync()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleCheckAuthStatus = () => {
    refetch()
  }

  const value: AuthContextType = {
    isAuthenticated: authData?.authenticated || false,
    isLoading,
    user: authData?.user || null,
    token: authData?.authenticated ? 'session' : null,
    login,
    logout,
    checkAuthStatus: handleCheckAuthStatus
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
