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
      'https://wbscdev.wurthbaersupply.com/rest/auth/login-check',
      {
        method: 'GET',
        headers: {
          'X-AUTH-TOKEN': 'e89d6c2370505652668abf9cc40194bc',
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
