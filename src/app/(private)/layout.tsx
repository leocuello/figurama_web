'use client'

// app/(private)/layout.tsx

import NavMenu from '@/components/NavMenu'

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMenu />
      <main>{children}</main>
    </>
  )
}