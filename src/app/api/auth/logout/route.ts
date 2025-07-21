import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const response = Response.json({ success: true })
  response.headers.set('Set-Cookie', 'xid_00924=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict')
  return response
} 