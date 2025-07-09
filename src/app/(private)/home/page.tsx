import AuthGuard from '@/components/AuthGuard'
import { Download } from 'lucide-react'
import Link from 'next/link'

export default function VersionPage() {
  return (
    <AuthGuard>
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
        {/* Versiones */}
        
          <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">Versiones</h2>
          <ul className="space-y-4">
          

            <li className="bg-gray-100 p-4 rounded hover:bg-gray-200 transition flex justify-between items-center">
              <div>
                  <h3 className="text-xl font-bold">Nueva versión 0.1.0</h3>
                  <p>Listado de albumes, búsqueda de albumes, búsqueda de figuritas, detalle de un album</p>
              </div>
            <Link
                href="/descargas/argentina"
                className="ml-4 p-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
                title="Descargar"
              >
                  <Download size={20} />
              </Link>
            </li>

            <li className="bg-gray-100 p-4 rounded hover:bg-gray-200 transition">
              <h3 className="text-xl font-bold">Desarrolo</h3>
              <p>Comenzamos con el desarrollo.</p>
            </li>
          </ul>
    
      </div>
     </div>
    </AuthGuard>
  )
}