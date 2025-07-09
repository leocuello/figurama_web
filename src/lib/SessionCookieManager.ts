// lib/session.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export class SessionCookieManager {
  private static readonly COOKIE_NAME = 'session-token'

  static async get(): Promise<string | undefined> {
    const cookieStore = await cookies()
    return cookieStore.get(SessionCookieManager.COOKIE_NAME)?.value
  }

  static clear(response: NextResponse) {
    response.cookies.set(SessionCookieManager.COOKIE_NAME, '', {
      maxAge: 0,
      path: '/',
    })
  }

  static set(response: NextResponse, token: string) {
    response.cookies.set(this.COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    })
  }
}