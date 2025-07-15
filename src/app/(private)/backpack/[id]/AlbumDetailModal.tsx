// components/AlbumDetailModal.tsx
'use client'

import { useEffect, useState } from 'react'
import { Collection } from '@/types/Collections'
import { X } from 'lucide-react'
import { collectionById } from '@/actions/collection'
import TimeProgressBar from './TimeProgressBar'

interface Props {
    id: string
    onClose: () => void
}

export default function AlbumDetailModal({ id, onClose }: Props) {
    const [collection, setCollection] = useState<Collection | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const collection: Collection = await collectionById(id)
                setCollection(collection)
            } catch (error) {
                console.error('Error loading album:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCollection()
    }, [id])

    if (!collection || loading) {
        return (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full min-h-[520px] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
        )
    }

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
            <div
                className="bg-white rounded-lg p-6 pt-10 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-5 right-3 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                    <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                        <h4 className="text-sm text-gray-500 mb-1">Álbum lleno</h4>
                        <p className="text-2xl font-bold text-center">{collection.full ? 'Sí' : 'No'}</p>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                        <h4 className="text-sm text-gray-500 mb-1">Monedas Esqueleto</h4>
                        <p className="text-2xl font-bold text-center">{collection.total_search}</p>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                        <h4 className="text-sm text-gray-500 mb-1">Figuritas</h4>
                        <p className="text-2xl font-bold text-center">
                            {collection.album.cards.length} / {collection.album.total}
                        </p>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center items-center">
                        <h4 className="text-sm text-gray-500 mb-1">Progreso</h4>
                        <p className="text-2xl font-bold text-center">
                            {Math.round((collection.album.cards.length / collection.album.total) * 100)}%
                        </p>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex justify-between items-center col-span-1 sm:col-span-2">
                        <h4 className="text-sm text-gray-500">Rate</h4>
                        <p className="text-2xl font-bold text-right">
                            {collection.total_credits > 0
                                ? (collection.album.cards.length / collection.total_search).toFixed(2)
                                : '0.00'}
                        </p>
                    </div>
                    <TimeProgressBar collection={collection} />
                </div>
            </div>
        </div>
    )
}
