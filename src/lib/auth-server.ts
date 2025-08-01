import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export interface User {
  name?: string
  email?: string
  phone?: string
  company?: string
  user_id?: string
}

export interface AuthResult {
  authenticated: boolean
  user: User | null
}

export async function getServerAuth(): Promise<AuthResult> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('xid_00924')?.value

    if (!token) {
      return { authenticated: false, user: null }
    }

    const response = await fetch(
      `${process.env.WURTH_API_BASE_URL}/rest/auth/login-check`,
      {
        method: 'GET',
        headers: {
          'X-AUTH-TOKEN': process.env.WURTH_API_TOKEN!,
          'Authorization': `Bearer ${token}`
        },
        cache: 'no-store'
      }
    )

    if (!response.ok) {
      return { authenticated: false, user: null }
    }

    const userData = await response.json()
    return { 
      authenticated: true, 
      user: userData as User 
    }
  } catch (error) {
    console.error('Server auth check failed:', error)
    return { authenticated: false, user: null }
  }
}

export async function requireAuth(): Promise<User> {
  const { authenticated, user } = await getServerAuth()
  
  if (!authenticated) {
    redirect('/signin')
  }
  
  return user!
}
