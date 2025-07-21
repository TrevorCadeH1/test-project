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

export const renewToken = async (credentials: { username: string; password: string }): Promise<AuthTokens | null> => {
  try {
    const response = await fetch(AUTH_API.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error('Token renewal failed')
    }

    const data: LoginResponse = await response.json()
    
    if (data.success && data.tokens) {
      tokenStorage.save(data.tokens)
      return data.tokens
    }
    
    return null
  } catch (error) {
    console.error('Token renewal error:', error)
    tokenStorage.clear()
    return null
  }
}

export const needsRenewal = (): boolean => {
  return !tokenStorage.isValid()
}
