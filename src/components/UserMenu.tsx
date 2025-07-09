'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function UserMenu() {
  const [open, setOpen] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Detectar usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email || 'Usuario')
      } else {
        setUserName(null)
      }
    })

    return () => unsubscribe()
  }, [])

  // Cierra el menú si clickeás afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    window.location.href = '/login'
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <span className="font-semibold cursor-pointer">
          {userName ?? 'Usuario'}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
          <Link href="/account" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
            Cuenta
          </Link>
          <Link href="/credit" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
            Créditos
          </Link>
          <Link href="/configuration" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
            Configuración
          </Link>
          <Link href="/howitworks" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
            Como jugar
          </Link>
          <Link href="/version" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">
            Versión
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}
