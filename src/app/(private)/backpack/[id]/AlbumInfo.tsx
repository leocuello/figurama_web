'use client'

import { useState } from 'react'
import { Collection } from '@/types/Collections'
import { Search, Info, Trash2 } from 'lucide-react'
import AlbumHistory from './AlbumHistory'
import AlbumDetailModal from './AlbumDetailModal'
import AlbumDeleteModal from './AlbumDeleteModal'
import Link from 'next/link'

interface AlbumInfoProps {
  collection: Collection
}

export default function AlbumInfo({ collection }: AlbumInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)

  return (
    <>
      <div className="max-w-7xl mx-auto mb-3 sm:flex sm:items-center sm:justify-between sm:space-x-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate sm:flex-1">
          {collection.album.title}
        </h2>

        <div className="flex gap-4 mt-3 sm:mt-0">
          <Link
            href={`/backpack/${collection.ID}/seacrh`}
            className="flex items-center justify-between gap-2 px-4 py-2 rounded-md
              bg-green-200 text-gray-700 hover:bg-gray-200 hover:text-blue-600
              transition-colors"
          >
            <span>Buscar figurita</span>
            <Search className="w-5 h-5" />
          </Link>

          <AlbumHistory collection={collection} />

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-between gap-2 px-4 py-2 rounded-md
              bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600
              transition-colors"
            aria-label="Ver detalle del álbum"
          >
            <span>Detalle</span>
            <Info className="w-5 h-5" />
          </button>

          <button
            onClick={() => setConfirmDeleteOpen(true)}
            className="flex items-center justify-between gap-2 px-4 py-2 rounded-md
              bg-red-100 text-red-700 hover:bg-red-200 hover:text-red-900
              transition-colors"
            aria-label="Eliminar álbum"
          >
            <span>Eliminar álbum</span>
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <AlbumDetailModal id={collection.ID} onClose={() => setIsModalOpen(false)} />
      )}

      {confirmDeleteOpen && (
        <AlbumDeleteModal
          id={collection.ID}
          onClose={() => setConfirmDeleteOpen(false)}
        />
      )}
    </>
  )
}
