'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Landing() {
  const router = useRouter()

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
  {/* Contenedor con posicionamiento relativo */}
  <div className="relative" style={{ width: '1000px' }}>
    {/* Imagen principal */}
    <img
      src="/background2.jpg"
      alt="Figurama"
      className="object-cover w-full mb-8 bg-white border border-gray-300 rounded-lg"
    />

    {/* Logo solapado */}
    <motion.img
        src="/logo_color.png"
        alt="Logo"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1 }}
        className="absolute top-4 right-4 w-[100px] h-[100px]"
        />
    </div>



  {/* Botón debajo */}
  <button
    onClick={() => router.push('/login')}
    className="bg-white text-black px-6 py-3 rounded shadow hover:bg-gray-200 transition"
  >
    Entra a Figurama
  </button>
</div>
  )
}