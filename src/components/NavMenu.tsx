'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Backpack, Repeat, Compass, Home } from 'lucide-react'
import UserMenu from './UserMenu'

export default function NavMenu() {
  const pathname = usePathname()

  const items = [
    { href: '/backpack', label: 'Mochila', icon: Backpack },
    { href: '/change', label: 'Intercambio', icon: Repeat },
    { href: '/explorer', label: 'Explorador', icon: Compass },
  ]

  const isHomeActive = pathname === '/'

  return (
    <nav className="flex justify-between items-center px-8 py-2 bg-gray-50 border-b border-gray-800">
      {/* Izquierda: ícono Home separado */}
      <div className="flex-shrink-0">
        <Link
          href="/"
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors
            ${isHomeActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'}`}
          aria-label="Inicio"
        >
          <Home className="w-6 h-6" />
          <span className="sr-only">Inicio</span>
        </Link>
      </div>

      {/* Centro: menú principal */}
      <ul className="flex space-x-6 text-lg font-medium">
        {items.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors
                  ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 hover:text-blue-600 text-gray-600'}`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Derecha: menú usuario */}
      <UserMenu />
    </nav>
  )
}
