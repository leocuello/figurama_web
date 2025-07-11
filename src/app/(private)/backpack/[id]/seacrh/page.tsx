'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker
} from '@react-google-maps/api'
import LoadingCenter from '@/components/LoadingCenter'
import { Collection } from '@/types/Collections'
import { collectionById } from '@/actions/collection'

import AlbumInfo from '../AlbumInfo'
import { searchCard } from '@/actions/seacrh'

interface ClickInfo {
  lat: number
  lng: number
  time: string
}

export default function SearchPage() {
  const params = useParams()
  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [collection, setCollection] = useState<Collection>()
  const [clicks, setClicks] = useState<ClickInfo[]>([])
  const [clickLoading, setClickLoading] = useState(false)
  const [clickError, setClickError] = useState<string | null>(null)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await collectionById(id)
        setCollection(response)
      } catch (error) {
        console.error("Error loading album:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchCollection()
  }, [id])

  const handleMapClick = async (event: google.maps.MapMouseEvent) => {
    if (!event.latLng || !collection) return

    const lat = event.latLng.lat()
    const lng = event.latLng.lng()
    const time = new Date().toISOString()

    setClickError(null)
    setClickLoading(true)

    try {
      await searchCard(collection.album.ID, lat, lng)
      setClicks(prev => [...prev, { lat, lng, time }])
    } catch (err) {
      console.error('Error al buscar la carta:', err)
      setClickError('Hubo un error al buscar la carta. Intenta nuevamente.')
    } finally {
      setClickLoading(false)
    }
  }

  if (loadError) return <div>Error: Al cargar el mapa</div>
  if (!collection) return <div></div>

  const travels = collection.travels ?? []
  const combined = [...travels.map(t => ({
    lat: t.location.coordinates[0],
    lng: t.location.coordinates[1],
    time: t.DateTime
  })), ...clicks]

  return (
    <div style={{ minHeight: "100vh", padding: 20, backgroundColor: "white", color: "black" }}>
      <AlbumInfo collection={collection} />

      {loading || !isLoaded ? (
        <LoadingCenter />
      ) : (
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* Contenedor del Mapa con overlay */}
              <div className="flex-1 relative">
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '600px' }}
                  zoom={18}
                  center={{
                    lat: collection.album.location.coordinates[0],
                    lng: collection.album.location.coordinates[1]
                  }}
                  onClick={handleMapClick}
                >
                  <Marker
                    position={{
                      lat: collection.album.location.coordinates[0],
                      lng: collection.album.location.coordinates[1]
                    }}
                    icon={{
                      path: "M8 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16z",
                      fillColor: "red",
                      fillOpacity: 1,
                      strokeWeight: 0,
                      scale: 0.5,
                    }}
                  />
                  {combined.map((item, index) => (
                    <Marker
                      key={`marker-${index}`}
                      position={{ lat: item.lat, lng: item.lng }}
                      label={{
                        text: `${index + 1}`,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '14px',
                      }}
                      icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: 'blue',
                        fillOpacity: 1,
                        strokeColor: 'white',
                        strokeWeight: 2,
                        scale: 10,
                      }}
                    />
                  ))}
                </GoogleMap>

                {/* Overlay de loading solo sobre el mapa */}
                {clickLoading && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 z-10 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4 text-white">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-30 border-t-blue-500"></div>
                      <p className="text-lg font-semibold">Buscando carta...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Lista de recorrido */}
              <div
                id="recorrido-list"
                className="w-full md:w-1/3 h-[600px] overflow-y-auto border rounded-lg p-4 bg-gray-100 text-sm"
              >
                <h2 className="font-semibold mb-2">Recorrido</h2>

                {combined.length === 0 ? (
                  <p className="text-gray-500">No hay viajes ni clics aún</p>
                ) : (
                  <ul className="space-y-2">
                    {[...combined].reverse().map((item, idx) => {
                      const id = combined.length - idx
                      return (
                        <li key={idx} className="border-b pb-1">
                          <div>🆔 ID: {id}</div>
                          <div>📍 Lat: {item.lat.toFixed(5)}</div>
                          <div>📍 Lng: {item.lng.toFixed(5)}</div>
                          <div>🕒 Hora: {new Date(item.time).toLocaleTimeString()}</div>
                        </li>
                      )
                    })}
                  </ul>
                )}

                {clickError && (
                  <div className="mt-4 text-red-600 font-semibold">
                    ⚠️ {clickError}
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
