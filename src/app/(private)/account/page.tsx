'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null)
  const [friendCode] = useState("120249")
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) setUser(firebaseUser)
      else window.location.href = '/login'
    })
    return () => unsubscribe()
  }, [])

  const copyFriendCode = () => {
    navigator.clipboard.writeText(friendCode)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  if (!user) return null

  return (
    <div className="min-h-screen">
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg border border-gray-600 z-50 animate-pulse">
          ¡Código copiado al portapapeles!
        </div>
      )}

      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Cuenta</h1>
              <p className="text-gray-600">Estado de tu cuenta</p>
            </div>
            <button
              onClick={() => signOut(auth)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <img
              src={user.photoURL ?? "/placeholder.svg"}
              alt="Avatar"
              className="w-20 h-20 rounded-full border-2 border-gray-300"
            />
            <h2 className="text-xl font-semibold">{user.displayName ?? "Usuario"}</h2>
            <p className="text-gray-500">{user.email ?? "sin-email"}</p>
            <button
              onClick={copyFriendCode}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Copiar código de amigo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
