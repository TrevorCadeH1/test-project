// Authentication utilities and types
export interface AuthTokens {
  token: string
  expiresAt: number
}

export interface LoginResponse {
  success: boolean
  message?: string
  tokens?: AuthTokens
  user?: any
}

export interface LoginCheckResponse {
  success: boolean
  status_code: number
  message?: string
}

export interface PriceCheckRequest {
  products: {
    productid: string
    qty: number
  }[]
}

export interface PriceCheckResponse {
  success: boolean
  prices: {
    productid: string
    price: string
    unit: string
    full_price?: string
    qty?: number
  }[]
  message?: string
}

export const AUTH_API = {
  LOGIN: '/api/auth/login',
  LOGIN_CHECK: '/api/auth/login-check',
  PRICE_CHECK: '/api/auth/price-check'
} as const

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'wurth_auth_token',
  AUTH_EXPIRES: 'wurth_auth_expires'
} as const

export const tokenStorage = {
  save: (tokens: AuthTokens) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, tokens.token)
      localStorage.setItem(STORAGE_KEYS.AUTH_EXPIRES, tokens.expiresAt.toString())
    }
  },
  
  load: (): AuthTokens | null => {
    if (typeof window === 'undefined') return null
    
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
    const expiresAt = localStorage.getItem(STORAGE_KEYS.AUTH_EXPIRES)
    
    if (!token || !expiresAt) return null
    
    //Token expires
    const expires = parseInt(expiresAt, 10)
    if (Date.now() > expires) {
      tokenStorage.clear()
      return null
    }
    
    return { token, expiresAt: expires }
  },
  
  clear: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
      localStorage.removeItem(STORAGE_KEYS.AUTH_EXPIRES)
    }
  },
  
  isValid: (): boolean => {
    const tokens = tokenStorage.load()
    return tokens !== null && Date.now() < tokens.expiresAt
  }
}
