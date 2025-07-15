'use client'
import Link from 'next/link'



export default function SearchAlbumInfo() {

  return (
    <>
      <div className="max-w-7xl mx-auto mb-3 sm:flex sm:items-center sm:justify-between sm:space-x-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate sm:flex-1">
          Buscar algum
        </h2>

        <div className="flex gap-4 mt-3 sm:mt-0">
          <Link
            href={`/backpack`}
            className="flex items-center justify-between gap-2 px-4 py-2 rounded-md
              bg-green-200 text-gray-700 hover:bg-gray-200 hover:text-blue-600
              transition-colors"
          >
            <span>Volver</span>
          </Link>

        </div>
      </div>
    </>
  )
}
