'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'
import { PriceCheckResponse } from '@/lib/auth'

export interface ProductPriceData {
  productid: string
  price: string
  unit: string
  full_price?: string
  qty?: number
}

type PriceCheckProduct = {
  productid: string
  qty: number
}

const fetchProductPrices = async (
  products: PriceCheckProduct[], 
  token: string | null
): Promise<Record<string, ProductPriceData>> => {
  const response = await fetch('/api/auth/price-check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      products,
      token
    })
  })

  if (!response.ok) {
    throw new Error('Failed to fetch prices')
  }

  const data: PriceCheckResponse = await response.json()
  
  if (!data.success) {
    throw new Error(data.message || 'Failed to fetch prices')
  }

  if (!data.prices) {
    throw new Error('No price data received')
  }

  const pricesMap: Record<string, ProductPriceData> = {}
  data.prices.forEach((item: ProductPriceData) => {
    pricesMap[item.productid] = item
  })
  
  return pricesMap
}

export const useProductPrices = (products: PriceCheckProduct[], enabled = true) => {
  const queryClient = useQueryClient()
  const { token, isAuthenticated } = useAuth()
  const queryKey = ['productPrices', JSON.stringify(products), token || 'guest', isAuthenticated]
  
  const {
    data: prices = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: () => {
      console.log('Fetching prices with token:', token, 'authenticated:', isAuthenticated)
      return fetchProductPrices(products, token)
    },
    enabled: enabled && products.length > 0,
    staleTime: 1000 * 60 * 5, // 5 minutes - prevent unnecessary refetches for pricing data
    gcTime: 1000 * 60 * 15, // 15 minutes - keep pricing data cached longer
    retry: 2,
  })

  const clearPrices = () => {
    queryClient.removeQueries({ queryKey: ['productPrices'] })
  }

  const fetchPrices = (newProducts: PriceCheckProduct[]) => {
    const newQueryKey = ['productPrices', JSON.stringify(newProducts), token || 'guest', isAuthenticated]
    queryClient.invalidateQueries({ queryKey: newQueryKey })
  }

  return {
    prices,
    isLoading,
    error: error?.message || null,
    refetch,
    clearPrices,
    fetchPrices,
  }
}
