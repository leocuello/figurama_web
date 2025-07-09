'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth, provider } from '@/lib/firebase'
import { signInWithPopup } from 'firebase/auth'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loginWithGoogle = async () => {
    setLoading(true)
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      if (user) {
        const token = await user.getIdToken()
        await fetch('/api/auth/session', {
          method: 'POST',
          body: JSON.stringify({ token }),
          headers: { 'Content-Type': 'application/json' },
        })

        document.cookie = `token=${token}; path=/`
        router.push('/')
      }
    } catch (err: any) {
      console.error('Error en login:', err)
      setError(err.message || 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background2.jpg')" }}
    >
      <div className="bg-white/20 backdrop-blur-md p-8 mt-100 rounded-2xl shadow-lg space-y-6 text-center max-w-sm w-full">
        <Image
          src="/logo_default.png"
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <button
          onClick={loginWithGoogle}
          disabled={loading}
          className={`w-full px-6 py-3 rounded-xl text-white font-medium ${
            loading ? 'bg-gray-900 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800'
          } transition-colors duration-200`}
        >
          {loading ? 'Cargando...' : 'Iniciar sesión con Google'}
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </div>
  )
}
