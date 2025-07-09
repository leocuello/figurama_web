'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCollections } from "@/actions/collection"
import { Collection } from "@/types/Collections"
import Image from 'next/image'
import LoadingCenter from "@/components/LoadingCenter"
import { useDataStore } from '@/lib/store'
import ErrorMessage from "@/components/ErrorMessage"

export default function AlbumesClient() {
  const [collections, setCollections] = useState<Collection[]>([])
  const setData = useDataStore((s) => s.setData)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAlbumes = async () => {
      try {
        const data = await getCollections()
        setCollections(data)
      } catch (error) {
        console.error("Error cargando álbumes:", error)
        setError("Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    fetchAlbumes()
  }, [])


  const handleAlbumClick = (collectionId: string) => {
    router.push(`/backpack/${collectionId}`)
  }

  const getProgreso = (coleccionadas: number, total: number) => {
    return Math.round((coleccionadas / total) * 100)
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (loading) {
    return (
      <LoadingCenter />
    )
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white", color: "black", padding: "20px" }}>

      {/* Filtros */}
      

      {/* Grid de álbumes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          gap: "20px",
          maxWidth: "1400px",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {collections.map((collection) => {
          const total = collection.album.total
          const found = collection.album.cards.length
          const progreso = getProgreso(found, total)
          const color = collection.album.border_color
          return (
            <div
              key={collection.ID}
              onClick={() => handleAlbumClick(collection.ID)}
              style={{
                backgroundColor: "#F8F9FA",
                borderRadius: "8px",
                padding: "0",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: `10px solid ${color}`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              {/* Progreso en esquina */}
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  backgroundColor: color,
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {progreso}%
              </div>

              {/* Imagen del álbum */}
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  position: "relative",
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                }}
              >
                <Image
                  src={collection.album.image_url}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={`Imagen del álbum ${collection.album.title}`}
                />

                {/* Progreso en esquina superior derecha */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    backgroundColor: color,
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    zIndex: 10,
                  }}
                >
    {progreso}%
  </div>

  {/* Título sobre la imagen abajo */}
  <div
    style={{
      position: "absolute",
      bottom: "0",
      width: "100%",
      backgroundColor: `${color}33`, // más transparente
      color: "white",
      padding: "10px",
      fontWeight: "bold",
      fontSize: "14px",
      textAlign: "center",
      textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
      zIndex: 10,
    }}
  >
    {collection.album.title}
  </div>
</div>
              {/* Información del álbum */}
              <div style={{ padding: "12px",    backgroundColor: `${color}`  }}>

                {/* Contador de figuritas */}
                <p style={{ fontSize: "16px",color: "#AAAAAA", }}>
                  {total} 
                </p>
              </div>

              {/* Estado de completado */}
              {progreso === 100 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(16, 185, 129, 0.9)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ✓ COMPLETADO
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}