'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    Circle,
    OverlayView,
} from '@react-google-maps/api'
import LoadingCenter from '@/components/LoadingCenter'
import ErrorMessage from '@/components/ErrorMessage'
import { getAllAlbums } from '@/actions/album'
import React from 'react'

import { auth } from '@/lib/firebase'
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'

// Función para calcular la distancia entre dos coordenadas
function haversineDistance(
    coord1: { lat: number; lng: number },
    coord2: { lat: number; lng: number }
): number {
    const toRad = (x: number) => (x * Math.PI) / 180

    const R = 6371 // km
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
    const params = useParams()
    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null)
    const [selectedPosition, setSelectedPosition] = useState<{ lat: number; lng: number } | null>(null)
    const [albums, setAlbums] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null)
    const [selectedAlbum, setSelectedAlbum] = useState<any | null>(null)
    const [albumDistance, setAlbumDistance] = useState<number | null>(null)

    const { isLoaded, loadError } = useLoadScript({
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
                (error) => {
                    console.error("Permiso de geolocalización denegado:", error)
                    router.push('/backpack')
                }
            )
        } else {
            console.error("Geolocalización no soportada.")
            router.push('/backpack')
        }
    }, [router])

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const data = await getAllAlbums()
                setAlbums(data)
                setError(null)
            } catch (e) {
                console.error('Error cargando colecciones:', e)
                setError('No se pudieron cargar las colecciones. Por favor, intente más tarde.')
            }
        }
        fetchAlbums()
    }, [])

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        const lat = event.latLng?.lat()
        const lng = event.latLng?.lng()
        if (lat && lng) {
            setSelectedPosition({ lat, lng })
        }
    }

    const handleSearchHere = () => {
        if (selectedPosition) {
            console.log("Buscar en:", selectedPosition)
        }
    }

    const handleAlbumClick = (alb: any, lat: number, lng: number) => {
    setSelectedAlbum(alb)
    if (selectedPosition) {
        const distance = haversineDistance(selectedPosition, { lat, lng })
        setAlbumDistance(distance)
    }
}

    if (!isLoaded || loading) return <LoadingCenter />

    return (
        <div style={{ minHeight: "100vh", padding: 20, backgroundColor: "white", color: "black" }}>
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto space-y-6">

                    {error && <ErrorMessage message={error} />}

                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Mapa */}
                        <div className="flex-1 relative">
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
                                            icon={{
                                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                                            }}
                                            draggable={true}
                                            onDragEnd={(event) => {
                                                const newLat = event.latLng?.lat()
                                                const newLng = event.latLng?.lng()
                                                if (newLat && newLng) {
                                                    setSelectedPosition({ lat: newLat, lng: newLng })
                                                }
                                            }}
                                        />

                                        {firebaseUser?.photoURL && (
                                            <OverlayView
                                                position={selectedPosition}
                                                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                            >
                                                <div
                                                    style={{
                                                        position: 'relative',
                                                        bottom: '90px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        borderRadius: '9999px',
                                                        overflow: 'hidden',
                                                        width: '48px',
                                                        height: '48px',
                                                        boxShadow: '0 0 6px rgba(0,0,0,0.4)',
                                                        border: '2px solid white',
                                                        backgroundColor: 'white',
                                                    }}
                                                >
                                                    <img
                                                        src={firebaseUser.photoURL}
                                                        alt="Avatar del usuario"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                        }}
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
                                                <div style={{
                                                    position: 'relative',
                                                    bottom: '60px',
                                                    left: '50%',
                                                    color: 'purple',
                                                    transform: 'translateX(-50%)',
                                                    backgroundColor: 'white',
                                                    padding: '2px 6px',
                                                    borderRadius: 4,
                                                    boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                                                    fontSize: 12,
                                                    whiteSpace: 'nowrap',
                                                    userSelect: 'none',
                                                    display: 'inline-block',
                                                    pointerEvents: 'none',
                                                }}>
                                                    {alb.title}
                                                </div>
                                            </OverlayView>
                                        </React.Fragment>
                                    )
                                })}
                            </GoogleMap>

                    
                        </div>

                        {/* Panel lateral */}
                        <div className="w-full md:w-[300px] p-4 border rounded shadow-md bg-gray-50 space-y-4">
                            <h2 className="text-lg font-semibold">Coordenadas seleccionadas</h2>
                            {selectedPosition ? (
                                <div className="space-y-2">
                                    <div>
                                        <strong>Latitud:</strong> {selectedPosition.lat.toFixed(6)}
                                    </div>
                                    <div>
                                        <strong>Longitud:</strong> {selectedPosition.lng.toFixed(6)}
                                    </div>
                                    <button
                                        className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                        onClick={handleSearchHere}
                                    >
                                        Buscar acá
                                    </button>
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
            </div>
        </div>
    )
}
