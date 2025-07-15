'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    OverlayView,
} from '@react-google-maps/api'
import LoadingCenter from '@/components/LoadingCenter'
import ErrorMessage from '@/components/ErrorMessage'
import { getAllAlbums } from '@/actions/album'
import React from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'
import { searchAlbum } from '@/actions/seacrh'
import { Album } from '@/types/Album'
import Image from 'next/image'
import SearchAlbumInfo from './SearchAlbumInfo'

function haversineDistance(coord1: { lat: number; lng: number }, coord2: { lat: number; lng: number }): number {
    const toRad = (x: number) => (x * Math.PI) / 180
    const R = 6371
    const dLat = toRad(coord2.lat - coord1.lat)
    const dLon = toRad(coord2.lng - coord1.lng)
    const lat1 = toRad(coord1.lat)
    const lat2 = toRad(coord2.lat)
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
}

export default function SearchPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [mapLoading, setMapLoading] = useState(false)
    const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null)
    const [selectedPosition, setSelectedPosition] = useState<{ lat: number; lng: number } | null>(null)
    const [albums, setAlbums] = useState<Album[]>([])
    const [error, setError] = useState<string | null>(null)
    const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null)
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
    const [albumDistance, setAlbumDistance] = useState<number | null>(null)
    const [searchError, setSearchError] = useState<string | null>(null)
    const [album, setAlbum] = useState<Album | null>(null)
    const [showModal, setShowModal] = useState(false)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setFirebaseUser(user)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                    setUserPosition(pos)
                    setSelectedPosition(pos)
                    setLoading(false)
                },
                () => {
                    router.push('/backpack')
                }
            )
        } else {
            router.push('/backpack')
        }
    }, [router])

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const data = await getAllAlbums()
                setAlbums(data)
                setError(null)
            } catch {
                setError('No se pudieron cargar las colecciones. Intente más tarde.')
            }
        }
        fetchAlbums()
    }, [])

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        const lat = event.latLng?.lat()
        const lng = event.latLng?.lng()
        if (lat && lng) setSelectedPosition({ lat, lng })
    }

    const handleAlbumClick = (alb: Album, lat: number, lng: number) => {
        setSelectedAlbum(alb)
        if (selectedPosition) {
            const distance = haversineDistance(selectedPosition, { lat, lng })
            setAlbumDistance(distance)
        }
    }

    const handleSearchHere = async () => {
        if (!selectedPosition) return
        setMapLoading(true)
        setSearchError(null)
        try {
            const result = await searchAlbum('0', selectedPosition.lat, selectedPosition.lng)
            setAlbum(result)
            setShowModal(true)
        } catch {
            setSearchError('No se pudo realizar la búsqueda. Intente nuevamente.')
        } finally {
            setMapLoading(false)
        }
    }

    if (!isLoaded || loading) return <LoadingCenter />

    return (
        <div className="min-h-screen p-4 bg-white text-black">
            <div className="max-w-7xl mx-auto space-y-6">
                <SearchAlbumInfo />
                {error && <ErrorMessage message={error} />}

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Mapa */}
                    <div className="flex-1 relative">
                        {mapLoading && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
                                <span className="text-lg text-gray-700">Buscando...</span>
                            </div>
                        )}
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '600px' }}
                            zoom={18}
                            center={selectedPosition || userPosition!}
                            onClick={handleMapClick}
                        >
                            {selectedPosition && (
                                <>
                                    <Marker
                                        position={selectedPosition}
                                        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
                                        draggable
                                        onDragEnd={(event) => {
                                            const newLat = event.latLng?.lat()
                                            const newLng = event.latLng?.lng()
                                            if (newLat && newLng) setSelectedPosition({ lat: newLat, lng: newLng })
                                        }}
                                    />
                                    {firebaseUser?.photoURL && (
                                        <OverlayView
                                            position={selectedPosition}
                                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                        >
                                            <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                                                <Image
                                                    src={firebaseUser.photoURL}
                                                    alt="avatar"
                                                    width={50}
                                                    height={50}
                                                    className="w-full h-full object-cover"
                                                    />
                                            </div>
                                        </OverlayView>
                                    )}
                                </>
                            )}

                            {albums.map((alb) => {
                                const coords = alb.location?.coordinates
                                if (!coords || coords.length < 2) return null
                                const lat = coords[0]
                                const lng = coords[1]
                                return (
                                    <React.Fragment key={alb.ID}>
                                        <Marker
                                            position={{ lat, lng }}
                                            icon={{
                                                url: alb.active
                                                    ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                                                    : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                            }}
                                            onClick={() => handleAlbumClick(alb, lat, lng)}
                                        />
                                        <OverlayView
                                            position={{ lat, lng }}
                                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                        >
                                            <div className={`absolute -bottom-[60px] left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded shadow bg-white whitespace-nowrap pointer-events-none`} style={{ color: alb.active ? 'green' : 'red' }}>
                                                {alb.title}
                                            </div>
                                        </OverlayView>
                                    </React.Fragment>
                                )
                            })}
                        </GoogleMap>
                    </div>

                    {/* Panel lateral */}
                    <div className="w-full md:w-[300px] p-4 border rounded shadow bg-gray-50 space-y-4">
                        <h2 className="text-lg font-semibold">Coordenadas seleccionadas</h2>
                        {selectedPosition ? (
                            <div className="space-y-2">
                                <p><strong>Latitud:</strong> {selectedPosition.lat.toFixed(6)}</p>
                                <p><strong>Longitud:</strong> {selectedPosition.lng.toFixed(6)}</p>
                                <button
                                    className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                    onClick={handleSearchHere}
                                >
                                    Buscar acá
                                </button>
                                {searchError && (
                                    <p className="text-sm text-red-500 mt-2">{searchError}</p>
                                )}
                            </div>
                        ) : (
                            <p>Hacé clic en el mapa para seleccionar una ubicación.</p>
                        )}

                        {selectedAlbum && (
                            <div className="mt-6 border-t pt-4">
                                <h2 className="text-lg font-semibold mb-2">Álbum seleccionado</h2>
                                <p><strong>Título:</strong> {selectedAlbum.title}</p>
                                <p><strong>Estado:</strong> {selectedAlbum.active ? 'Activo' : 'Inactivo'}</p>
                                {albumDistance !== null && (
                                    <p><strong>Distancia:</strong> {albumDistance.toFixed(2)} km</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal con Tailwind */}
            {showModal && album && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
                        <h2 className="text-xl font-bold mb-4">Resultado de búsqueda</h2>

                        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">

                            <div
                                style={{
                                    width: "300px",
                                    height: "400px",
                                    position: "relative",
                                    overflow: "hidden",
                                    background: `linear-gradient(135deg, ${album.border_color}20, ${album.border_color}10)`,
                                }}
                            >
                                <Image
                                    src={album.image_url}
                                    alt="Imagen del álbum"
                                    fill
                                    className="object-cover"
                                    style={{ objectFit: "cover" }}
                                /> </div>
                        </div>

                        <div className="space-y-2">
                            <p><strong>Álbum:</strong> {album.title}</p>
                            <p><strong>Categoría:</strong> {album.category}</p>
                            <p><strong>Total de cartas:</strong> {album.total}</p>
                        </div>

                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

