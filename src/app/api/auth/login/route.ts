import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { userName, password } = await request.json()
    
    if (!userName || !password) {
      return Response.json(
        { success: false, message: 'Username and password are required' },
        { status: 400 }
      )
    }

    const response = await fetch(
      'https://wbscdev.wurthbaersupply.com/rest/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': 'e89d6c2370505652668abf9cc40194bc'
        },
        body: JSON.stringify({
          userName,
          password
        })
      }
    )

    if (!response.ok) {
      return Response.json(
        { success: false, message: 'Login failed' },
        { status: response.status }
      )
    }

    const setCookieHeader = response.headers.get('set-cookie')
    let token = null
    
    if (setCookieHeader) {
      const tokenMatch = setCookieHeader.match(/xid_00924=([^;]+)/)
      if (tokenMatch) {
        token = tokenMatch[1]
      }
    }

    if (!token) {
      return Response.json(
        { success: false, message: 'No authentication token received' },
        { status: 400 }
      )
    }

    const expiresAt = Date.now() + (48 * 60 * 60 * 1000)

    const loginData = await response.json()

    return Response.json({
      success: true,
      tokens: {
        token,
        expiresAt
      },
      user: loginData
    })

  } catch (error) {
    return Response.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
