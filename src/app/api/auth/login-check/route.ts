import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return Response.json(
        { success: false, status_code: 401, message: 'No valid authorization token provided' },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7)

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
