import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const cookieHeader = request.headers.get('cookie')
  let token = null
  if (cookieHeader) {
    const match = cookieHeader.match(/xid_00924=([^;]+)/)
    if (match) {
      token = match[1]
    }
  }
  if (!token) {
    return Response.json({ authenticated: false }, { status: 200 })
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
  if (!response.ok) {
    return Response.json({ authenticated: false }, { status: 200 })
  }
  const data = await response.json()
  return Response.json({ authenticated: true, user: data }, { status: 200 })
} 