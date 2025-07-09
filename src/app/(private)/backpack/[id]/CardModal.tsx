import Image from 'next/image'
import { Card } from '@/types/Card'

interface Props {
  card: Card
  color: string
  onClose: () => void
}

export default function CardModal({ card, color, onClose }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 12,
          padding: 30,
          maxWidth: 500,
          width: "100%",
          border: `5px solid ${color}`,
          position: "relative",
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 15,
            right: 15,
            backgroundColor: "transparent",
            border: "none",
            color: "black",
            fontSize: 22,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 200,
              height: 250,
              position: "relative",
              borderRadius: 8,
              margin: "0 auto 20px",
              overflow: "hidden",
              backgroundColor: "#334155",
              background: color,
            }}
          >
            <Image
              src={card.image_url}
              alt={`Card image ${card.title}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div
            style={{
              display: "inline-block",
              backgroundColor: color,
              color: "white",
              padding: "8px 16px",
              borderRadius: 15,
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            #{card.number}
          </div>

          <h2
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 10,
              color: color,
            }}
          >
            {card.title}
          </h2>

          <p
            style={{
              color: "#475569",
              fontSize: 16,
              lineHeight: 1.5,
              marginBottom: 25,
            }}
          >
            {card.description}
          </p>
        </div>
      </div>
    </div>
  )
}
