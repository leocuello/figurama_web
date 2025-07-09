'use client'

import AuthGuard from '@/components/AuthGuard'
import NavMenu from '@/components/NavMenu'
import News from '@/components/News'

export default function Home({ children }: { children: React.ReactNode }) {

  return (
    <AuthGuard>
      {/* Navbar */}
      <NavMenu />
      <News />
      {/* Contenido principal */}
      <main>{children}</main>
    </AuthGuard>
  )
}
