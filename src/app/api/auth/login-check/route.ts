import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    let token = null
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7)
    } else {
      const cookieHeader = request.headers.get('cookie')
      if (cookieHeader) {
        const match = cookieHeader.match(/xid_00924=([^;]+)/)
        if (match) {
          token = match[1]
        }
      }
    }

    if (!token) {
      return Response.json(
        { success: false, status_code: 401, message: 'No valid authorization token provided' },
        { status: 401 }
      )
    }

    const response = await fetch(
      `${process.env.WURTH_API_BASE_URL}/rest/auth/login-check`,
      {
        method: 'GET',
        headers: {
          'X-AUTH-TOKEN': process.env.WURTH_API_TOKEN!,
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const data = await response.json()

    return Response.json({
      success: response.ok,
      status_code: data.status_code || response.status,
      message: data.message,
      data
    })

  } catch (error) {
    return Response.json(
      { success: false, status_code: 500, message: 'Server error' },
      { status: 500 }
    )
  }
}
