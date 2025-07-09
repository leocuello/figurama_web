    // app/api/auth/session/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { SessionCookieManager } from '@/lib/SessionCookieManager'
import { login } from '@/actions/auth'

export async function POST(request: NextRequest) {
  const { token } = await request.json()

  const data = await login(token)
  const t = data.token

  const response = NextResponse.json({ success: true })
  SessionCookieManager.set(response, t)

  return response
}