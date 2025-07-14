'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

const CATEGORY_OPTIONS = [
  { id: 'sport', label: 'Deportivas' },
  { id: 'animated', label: 'Animadas' },
  { id: 'history', label: 'Históricas' },
  { id: 'fiction', label: 'Ficción' },
]

const STATUS_OPTIONS = [
  { id: 'all', label: 'Todos' },
  { id: 'complete', label: 'Completos' },
  { id: 'incomplete', label: 'Incompletos' },
]

export default function CollectionInfo() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const applyFilters = () => {
    setIsModalOpen(false)
    console.log('Categorías:', selectedCategories)
    console.log('Estado:', selectedStatus)
    // Aquí podrías hacer fetch o filtrar tu listado
  }

  return (
    <>
      <div className="max-w-7xl mx-auto mb-3 sm:flex sm:items-center sm:justify-between sm:space-x-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate sm:flex-1">
          Mis álbumes
        </h2>

        <div className="flex gap-4 mt-3 sm:mt-0">
          <Link
            href={`/backpack/search`}
            className="flex items-center gap-2 px-4 py-2 rounded-md
              bg-green-200 text-gray-700 hover:bg-gray-200 hover:text-blue-600
              transition-colors"
          >
            <span>Buscar álbum</span>
            <Search className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <span>Filtros</span>
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">Filtrar álbumes</h2>

            {/* Filtros por categoría */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Categorías</h3>
              <div className="space-y-2">
                {CATEGORY_OPTIONS.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(opt.id)}
                      onChange={() => toggleCategory(opt.id)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro por estado */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Estado del álbum</h3>
              <div className="space-y-2">
                {STATUS_OPTIONS.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      value={opt.id}
                      checked={selectedStatus === opt.id}
                      onChange={() => setSelectedStatus(opt.id)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Botones */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={applyFilters}
                className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
