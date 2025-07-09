import React from 'react'

interface Card {
  found_at: string | null
}

interface Album {
  cards: Card[]
  total: number
}

interface Collection {
  full: boolean
  album: Album
}

interface TimeProgressBarProps {
  collection: Collection
}

export default function TimeProgressBar({ collection }: TimeProgressBarProps) {
  const { album, full } = collection
  const cardsWithFoundAt = album.cards.filter(card => !!card.found_at)

  if (cardsWithFoundAt.length === 0) return null

  const sortedByDate = cardsWithFoundAt.sort(
    (a, b) => new Date(a.found_at!).getTime() - new Date(b.found_at!).getTime()
  )

  const oldest = sortedByDate[0].found_at!

  const startDate = new Date(oldest)
  const now = new Date()

  const foundCount = album.cards.length
  const progress = album.total > 0 ? Math.min(100, (foundCount / album.total) * 100) : 0

  const start = startDate.getTime()
  const end = now.getTime()
  const durationMs = end - start
  let remaining = durationMs / 1000

  const years = Math.floor(remaining / (3600 * 24 * 365))
  remaining %= 3600 * 24 * 365

  const months = Math.floor(remaining / (3600 * 24 * 30))
  remaining %= 3600 * 24 * 30

  const days = Math.floor(remaining / (3600 * 24))
  remaining %= 3600 * 24

  const hours = Math.floor(remaining / 3600)
  remaining %= 3600

  const minutes = Math.floor(remaining / 60)

  const durationString = [
    years ? `${years} año${years > 1 ? 's' : ''}` : null,
    months ? `${months} mes${months > 1 ? 'es' : ''}` : null,
    days ? `${days} día${days > 1 ? 's' : ''}` : null,
    hours ? `${hours} hs` : null,
    minutes ? `${minutes} min` : null,
  ]
    .filter(Boolean)
    .join(', ')

  return (
    <div className="border border-gray-300 rounded-lg p-4 min-h-[80px] flex flex-col justify-center col-span-1 sm:col-span-2">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <div className="text-left">
          <div className="font-semibold">Inicio</div>
          <div>
            {startDate.toLocaleDateString()}{' '}
            {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>

        <div className="text-right">
          <div className="font-semibold">Fin</div>
          <div>{full ? 'Completo' : 'En progreso'}</div>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
        <div
          className="bg-blue-500 h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-center font-bold text-gray-700">Tiempo transcurrido</p>
      <p className="text-sm text-gray-600 italic text-center">{durationString}</p>
    </div>
  )
}
