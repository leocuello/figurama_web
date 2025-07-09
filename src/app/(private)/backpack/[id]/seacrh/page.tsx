'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import LoadingCenter from '@/components/LoadingCenter'
import { Collection } from '@/types/Collections'
import { collectionById } from '@/actions/collection'

export default function SearchPage() {
  const params = useParams()
  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [collection, setCollection] = useState<Collection>()

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
      console.log('Click en mapa:', { lat, lng })
    }
  }

  if (loadError) return <div>Error al cargar el mapa</div>

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      {loading || !isLoaded ? (
        <LoadingCenter />
      ) : collection ? (
        <>
          <div>Álbum: {collection.album.title}</div>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '600px' }}
            zoom={18}
            center={{
              lat: collection.album.location.coordinates[0],
              lng: collection.album.location.coordinates[1]
            }}
            onClick={handleMapClick}  // <-- Aquí agregas el evento onClick
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
          </GoogleMap>
        </>
      ) : (
        <div>Error: Álbum no encontrado</div>
      )}
    </div>
  )
}
