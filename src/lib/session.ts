// lib/session.ts
import { SessionOptions } from 'iron-session'

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD || 'complex_password_at_least_32_characters_long',
  cookieName: 'myapp_session',
  // secure solo en producción
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

export type UserSession = {
  id: number
  name: string
  email: string
}