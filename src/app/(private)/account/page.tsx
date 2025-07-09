'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function AccountPage() {
  const [user, setUser] = useState<any>(null)
  const [friendCode] = useState("120249")
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
      } else {
        window.location.href = '/login' // Redirigir si no está logueado
      }
    })

    return () => unsubscribe()
  }, [])

  const copyFriendCode = () => {
    navigator.clipboard.writeText(friendCode)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  const userData = {
    name: user?.displayName ?? "Usuario",
    email: user?.email ?? "sin-email",
    avatar: user?.photoURL ?? "/placeholder.svg",
    level: 15,
    experience: 2450,
    nextLevelExp: 3000,
    albums: 1250,
    repeated: 89,
    totalGames: 156,
    friends: 23,
    students: 12,
  }

  // Resto del componente igual al tuyo, con estas diferencias:
  // - Usá `userData.name`, `userData.email`, `userData.avatar`
  // - Quitá todo lo relacionado a `session`
  // - Para logout: `signOut(auth)`

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

          {/* Resto del contenido (tu código original) */}
          {/* Donde antes usabas `session?.user` ahora usás `userData` */}
          {/* ... */}

        </div>
      </div>
    </div>
  )
}
