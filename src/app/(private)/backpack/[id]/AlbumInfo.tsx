import { useState } from 'react'
import { Collection } from '@/types/Collections'
import { Search, Info, Trash2, X } from 'lucide-react'
import TimeProgressBar from './TimeProgressBar'
import AlbumHistory from './AlbumHistory'
import Link from 'next/link'

interface AlbumInfoProps {
    collection: Collection
}

export default function AlbumButtons({ collection }: AlbumInfoProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div className="max-w-7xl mx-auto mb-3 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                {/* Título */}
                <h2 className="text-xl font-semibold text-gray-800 truncate sm:flex-1">
                    {collection.album.title}
                </h2>

                {/* Botones */}
                <div className="flex gap-4 mt-3 sm:mt-0">

                    <Link
                        href={`/backpack/${collection.ID}/seacrh`}
                        className="flex items-center justify-between gap-2 px-4 py-2 rounded-md
                        bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600
                        transition-colors"
                    >
                        
                        <span>Buscar</span>
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

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-lg p-6 pt-10 max-w-md w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón de cierre */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Cerrar modal"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Grid de cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                                <h4 className="text-sm text-gray-500 mb-1">Álbum lleno</h4>
                                <p className="text-2xl font-bold text-center">
                                    {collection.full ? 'Sí' : 'No'}
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                                <h4 className="text-sm text-gray-500 mb-1">Monedas Esqueleto</h4>
                                <p className="text-2xl font-bold text-center">
                                    {collection.total_credits}
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                                <h4 className="text-sm text-gray-500 mb-1">Figuritas</h4>
                                <p className="text-2xl font-bold text-center">
                                    {collection.album.cards.length} / {collection.album.total}
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                                <h4 className="text-sm text-gray-500 mb-1">Progreso</h4>
                                <p className="text-2xl font-bold text-center">
                                    {Math.round((collection.album.cards.length / collection.album.total) * 100)}%
                                </p>
                            </div>

                            {/* Card Rate - ocupa 2 columnas */}
                            <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex justify-between items-center col-span-1 sm:col-span-2">
                                <h4 className="text-sm text-gray-500">Rate</h4>
                                <p className="text-2xl font-bold text-right">
                                    {collection.total_credits > 0
                                        ? (collection.album.cards.length / collection.total_credits).toFixed(2)
                                        : '0.00'}
                                </p>
                            </div>

                            <TimeProgressBar collection={collection} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
