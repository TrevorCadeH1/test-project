'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {LoginResponse, LoginCheckResponse, tokenStorage } from '@/lib/auth'

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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const checkAuthStatus = async () => {
    const tokens = tokenStorage.load()
    
    if (!tokens) {
      setIsAuthenticated(false)
      setUser(null)
      setToken(null)
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/login-check', {
        headers: {
          'Authorization': `Bearer ${tokens.token}`
        }
      })

      const data: LoginCheckResponse = await response.json()

      if (data.success && data.status_code === 200) {
        setIsAuthenticated(true)
        setToken(tokens.token)
        const userData = localStorage.getItem('wurth_user_data')
        if (userData) {
          setUser(JSON.parse(userData))
        }
      } else {
        // Token is invalid
        tokenStorage.clear()
        localStorage.removeItem('wurth_user_data')
        setIsAuthenticated(false)
        setUser(null)
        setToken(null)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      tokenStorage.clear()
      localStorage.removeItem('wurth_user_data')
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
      })

      const data: LoginResponse = await response.json()

      if (data.success && data.tokens) {
        tokenStorage.save(data.tokens)
        setToken(data.tokens.token)
      
        if (data.user) {
          localStorage.setItem('wurth_user_data', JSON.stringify(data.user))
          setUser(data.user)
        }
        
        setIsAuthenticated(true)
        return { success: true }
      } else {
        return { success: false, message: data.message || 'Login failed' }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'Network error occurred' }
    }
  }

  const logout = () => {
    tokenStorage.clear()
    localStorage.removeItem('wurth_user_data')
    setIsAuthenticated(false)
    setUser(null)
    setToken(null)
  }

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    user,
    token,
    login,
    logout,
    checkAuthStatus
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
