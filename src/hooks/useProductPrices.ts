'use client'

import { useState, useCallback } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { PriceCheckResponse } from '@/lib/auth'

export interface ProductPriceData {
  productid: string
  price: string
  unit: string
  full_price?: string
  qty?: number
}

export interface UseProductPricesReturn {
  prices: Record<string, ProductPriceData>
  isLoading: boolean
  error: string | null
  fetchPrices: (products: { productid: string; qty: number }[]) => Promise<void>
  clearPrices: () => void
}

export function useProductPrices(): UseProductPricesReturn {
  const [prices, setPrices] = useState<Record<string, ProductPriceData>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { isAuthenticated, token } = useAuth()

  const fetchPrices = useCallback(async (products: { productid: string; qty: number }[]) => {
    if (!products.length) return

    setIsLoading(true)
    setError(null)

    try {
      // Use token from auth context
      const response = await fetch('/api/auth/price-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          products,
          token: isAuthenticated ? token : null
        })
      })

      const data: PriceCheckResponse = await response.json()

      if (data.success && data.prices) {
        // Convert array to objects by productid
        const priceMap = data.prices.reduce((acc, price) => {
          acc[price.productid] = price
          return acc
        }, {} as Record<string, ProductPriceData>)

        setPrices(prev => ({ ...prev, ...priceMap }))
      } else {
        setError(data.message || 'Failed to fetch prices')
      }
    } catch (err) {
      console.error('Price fetch error:', err)
      setError('Network error occurred while fetching prices')
    } finally {
      setIsLoading(false)
    }
  }, [isAuthenticated, token])

  const clearPrices = useCallback(() => {
    setPrices({})
    setError(null)
  }, [])

  return {
    prices,
    isLoading,
    error,
    fetchPrices,
    clearPrices
  }
}
