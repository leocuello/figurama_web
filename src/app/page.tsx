'use client'

import NavMenu from "@/components/NavMenu"
import News from "@/components/News"


export default function Home({ children }: { children: React.ReactNode }) {

  return (

    <>
      <NavMenu />
      <News />
      <main className="p-6">{children}</main>
    </>

  )
}
