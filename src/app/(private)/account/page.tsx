'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { motion } from 'framer-motion'
import LoadingCenter from '@/components/LoadingCenter'
import Link from 'next/link'

export default function AccountPage() {
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [copied, setCopied] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [friendCode] = useState('120249')
  const [skeletonCoins] = useState('450')

  function getInitials(name?: string | null): string {
    if (!name) return 'U'
    const parts = name.trim().split(' ').filter(Boolean)
    if (parts.length === 0) return 'U'
    return parts.slice(0, 2).map((p) => p[0].toUpperCase()).join('')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const copyFriendCode = () => {
    navigator.clipboard.writeText(friendCode)
    setCopied(true)
    setShowToast(true)
    setTimeout(() => setCopied(false), 2000)
    setTimeout(() => setShowToast(false), 2000)
  }

  if (!user) {
    return (
      <LoadingCenter />
    )
  }

  const initials = getInitials(user.displayName)

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col items-center space-y-8">
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg border border-gray-600 z-50 shadow-lg"
        >
          ¡Código copiado al portapapeles!
        </motion.div>
      )}
      <div className="max-w-7xl w-full space-y-6">
        {/* Card con imagen o iniciales */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded p-8 min-h-[200px]"
        >
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-white mr-8"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-5xl mr-8 select-none">
              {initials}
            </div>
          )}

          <div className="text-gray-900">
            <h2 className="text-3xl font-bold">{user.displayName ?? 'Usuario'}</h2>
            <p className="text-lg mt-1">{user.email ?? 'sin-email'}</p>
          </div>
        </motion.div>

        {/* Código de amigo  */}
        <div className="w-full flex space-x-4">
          {/* Tarjeta de Código de Amigo */}
          <div className="w-1/2 bg-gray-900 rounded-xl px-6 py-4 text-white flex justify-between items-center">
            <div className="text-sm uppercase tracking-wider font-semibold text-gray-400">
              Tu código de amigo
            </div>

            <div className="flex items-center space-x-3">
              <p className="font-mono text-lg tracking-widest">{friendCode}</p>
              <button
                onClick={copyFriendCode}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded transition"
              >
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>

          {/* Tarjeta de Monedas Esqueleto */}
          <div className="w-1/2 bg-gray-900 rounded-xl px-6 py-4 text-white flex justify-between items-center">
            <div className="text-sm uppercase tracking-wider font-semibold text-yellow-300">
              Monedas Esqueleto
            </div>

            <div className="flex items-center space-x-2">
              {/* Icono o Emoji de moneda */}
              <span className="text-yellow-300 text-xl">💀</span>
              <p className="text-lg font-bold">{skeletonCoins}</p>
              <Link
                href="/credit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded transition"
              >
                Comprar
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
