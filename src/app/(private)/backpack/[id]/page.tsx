"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { collectionById } from '@/actions/collection'
import { Collection } from '@/types/Collections'
import LoadingCenter from '@/components/LoadingCenter'
import CardFound from './CardFound'
import CardNotFound from './CardNotFound'
import CardModal from './CardModal'
import { Card } from '@/types/Card'
import AlbumInfo from './AlbumInfo'

export default function AlbumCards() {
  const params = useParams()
  const id = params.id as string
  const [loading, setLoading] = useState(true)
  const [collection, setCollection] = useState<Collection>()
  const [cardSelected, setCardSelected] = useState<Card | null>(null)

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

  if (loading) return <LoadingCenter />
  if (!collection) return <div>Error: Album not found</div>

  const color = collection.album.border_color

  return (
    <div style={{ minHeight: "100vh", padding: 20, backgroundColor: "white", color: "black" }}>
      <AlbumInfo collection={collection} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          gap: 20,
          maxWidth: 1400,
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: collection.album.total }, (_, i) => {
          const number = i + 1
          const card = collection.album.cards.find(card => card.number === number)

          return card ? (
            <CardFound
              key={number}
              card={card}
              color={color}
              onClick={() => setCardSelected(card)}
            />
          ) : (
            <CardNotFound key={number} number={number} color={color} />
          )
        })}
      </div>

      {cardSelected && (
        <CardModal
          card={cardSelected}
          color={color}
          onClose={() => setCardSelected(null)}
        />
      )}
    </div>
  )
}
