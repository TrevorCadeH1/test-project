'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { LoginResponse, LoginCheckResponse, tokenStorage } from '@/lib/auth'

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user: any | null
  token: string | null
  login: (userName: string, password: string) => Promise<LoginResponse>
  logout: () => void
  checkAuthStatus: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({
  children,
  initialAuth = false
}: {
  children: ReactNode
  initialAuth?: boolean
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth)
  const [isLoading, setIsLoading] = useState(!initialAuth)
  const [user, setUser] = useState<any | null>(null)
  const [token, setToken] = useState<string | null>(initialAuth ? 'session' : null)

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/session')
      const data = await response.json()
      if (data.authenticated) {
        setIsAuthenticated(true)
        setUser(data.user)
        setToken('session')
      } else {
        setIsAuthenticated(false)
        setUser(null)
        setToken(null)
      }
    } catch (error) {
      setIsAuthenticated(false)
      setUser(null)
      setToken(null)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (userName: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password })
      })
      const data: LoginResponse = await response.json()
      if (data.success && data.user) {
        setUser(data.user)
        setIsAuthenticated(true)
        return { success: true }
      } else {
        return { success: false, message: data.message || 'Login failed' }
      }
    } catch (error) {
      return { success: false, message: 'Network error occurred' }
    }
  }

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setIsAuthenticated(false)
    setUser(null)
    setToken(null)
  }

  useEffect(() => {
    if (!initialAuth) {
      checkAuthStatus()
    } else {
      setIsLoading(false)
    }
  }, [initialAuth])

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    user,
    token,
    login,
    logout,
    checkAuthStatus
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
