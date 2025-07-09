import { useState, useEffect, useRef } from 'react'
import { Clock, X, Play, Pause } from 'lucide-react'
import { Collection } from '@/types/Collections'

interface AlbumHistoryProps {
  collection: Collection
}

export default function AlbumHistory({ collection }: AlbumHistoryProps) {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // progreso 0 a 1
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const durationRef = useRef<number>(0)
  const intervalRef = useRef<number | null>(null)

  // Estimar duración basada en cantidad de caracteres (~150 cpm)
  useEffect(() => {
    const words = collection.album.description.length
    durationRef.current = (words / 15) * 1000 // aprox en ms (15 chars por segundo)
  }, [collection.album.description])

  const startProgressInterval = () => {
    startTimeRef.current = Date.now()
    intervalRef.current = window.setInterval(() => {
      if (!startTimeRef.current) return
      const elapsed = Date.now() - startTimeRef.current
      const prog = Math.min(elapsed / durationRef.current, 1)
      setProgress(prog)
      if (prog >= 1) {
        stopPlayback()
      }
    }, 100)
  }

  const stopPlayback = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setProgress(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback()
    } else {
      const utterance = new SpeechSynthesisUtterance(collection.album.description)
      utteranceRef.current = utterance
      utterance.onend = () => {
        stopPlayback()
      }
      window.speechSynthesis.speak(utterance)
      setIsPlaying(true)
      setProgress(0)
      startProgressInterval()
    }
  }

  // Formatear ms a mm:ss
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    // Cuando se cierra modal, parar audio
    if (!isHistoryModalOpen && isPlaying) {
      stopPlayback()
    }
  }, [isHistoryModalOpen, isPlaying])

  return (
    <>
      <button
        onClick={() => setIsHistoryModalOpen(true)}
        className="flex items-center justify-between gap-2 px-4 py-2 rounded-md
          bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600
          transition-colors"
        aria-label="Ver historia del álbum"
      >
        <span>Historia</span>
        <Clock className="w-5 h-5" />
      </button>

      {isHistoryModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setIsHistoryModalOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsHistoryModalOpen(false)}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsHistoryModalOpen(false)}
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-lg font-semibold mb-4">{collection.album.title}</h3>

            {/* Reproductor */}
            <div className="mb-6">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-blue-600" />
                ) : (
                  <Play className="w-6 h-6 text-blue-600" />
                )}
              </button>

              <div className="mt-2 h-2 w-full bg-gray-300 rounded overflow-hidden">
                <div
                  className="h-2 bg-blue-600 rounded"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-1 select-none">
                <span>{formatTime(progress * durationRef.current)}</span>
                <span>{formatTime(durationRef.current)}</span>
              </div>
            </div>

            {/* Texto con scroll */}
            <div className="max-h-100 overflow-y-auto pr-2">
              <p className="text-gray-700 whitespace-pre-line">{collection.album.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
