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

interface ClickInfo {
  id: number
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

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat()
      const lng = event.latLng.lng()
      const time = new Date().toLocaleTimeString()

      const newClick: ClickInfo = {
        id: clicks.length + 1,
        lat,
        lng,
        time,
      }

      setClicks(prev => [...prev, newClick])
    }
  }

  if (loadError) return <div>Error al cargar el mapa</div>
  if (!collection) return <div></div>

  return (
    <div style={{ minHeight: "100vh", padding: 20, backgroundColor: "white", color: "black" }}>
      <AlbumInfo collection={collection} />

      {loading || !isLoaded ? (
        <LoadingCenter />
      ) : collection ? (
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Mapa */}
              <div className="flex-1">
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '600px' }}
                  zoom={18}
                  center={{
                    lat: collection.album.location.coordinates[0],
                    lng: collection.album.location.coordinates[1]
                  }}
                  onClick={handleMapClick}
                >
                  {/* Marcador del álbum */}
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

                  {/* Marcadores numerados */}
                  {clicks.map((click) => (
                    <Marker
                      key={click.id}
                      position={{ lat: click.lat, lng: click.lng }}
                      label={{
                        text: click.id.toString(),
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
              </div>

              {/* Lista de recorrido */}
              <div
                id="recorrido-list"
                className="w-full md:w-1/3 h-[600px] overflow-y-auto border rounded-lg p-4 bg-gray-100 text-sm"
              >
                <h2 className="font-semibold mb-2">Recorrido</h2>

                {clicks.length === 0 ? (
                  <p className="text-gray-500">No hay clics aún</p>
                ) : (
                  <ul className="space-y-2">
                    {[...clicks].reverse().map((click) => (
                      <li key={click.id} className="border-b pb-1">
                        <div>🆔 ID: {click.id}</div>
                        <div>📍 Lat: {click.lat.toFixed(5)}</div>
                        <div>📍 Lng: {click.lng.toFixed(5)}</div>
                        <div>🕒 Hora: {click.time}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Error: Álbum no encontrado</div>
      )}
    </div>
  )
}
