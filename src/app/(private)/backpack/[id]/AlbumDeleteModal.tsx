'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AlertTriangle } from 'lucide-react'
import { collectionDeleteById } from '@/actions/collection'

interface AlbumDeleteModalProps {
  id: string
  onClose: () => void
}

export default function AlbumDeleteModal({ id, onClose }: AlbumDeleteModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleDelete = async () => {
    setLoading(true)
    setError('')
    try {
      await collectionDeleteById(id)
      router.push('/backpack')
    } catch (err: any) {
      setError(err?.message || 'Error eliminando el álbum.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md animate-fade-in">
        <div className="flex items-center gap-3 mb-4 text-yellow-600">
          <AlertTriangle className="w-6 h-6" />
          <h3 className="text-lg font-semibold">¿Estás seguro?</h3>
        </div>

        <p className="text-gray-700 mb-4">
          Esta acción eliminará el álbum.
        </p>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
            disabled={loading}
          >
            {loading ? 'Eliminando...' : 'Eliminar'}
          </button>
        </div>
      </div>
    </div>
  )
}
