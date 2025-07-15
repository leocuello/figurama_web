import Image from 'next/image'
import { Card } from '@/types/Card'

interface Props {
  card: Card
  color: string
  onClick: () => void
}

export default function CardFound({ card, color, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#F8F9FA",
        borderRadius: 8,
        padding: 0,
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: `8px solid ${color}`,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px)"
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* Number */}
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: color,
          color: "white",
          padding: "4px 8px",
          borderRadius: 10,
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        {card.number}
      </div>

      <div
        style={{
          width: "100%",
          height: 250,
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${color}20, ${color}10)`,
        }}
      >
        <Image
          src={card.image_url}
          alt={`Album card ${card.title}`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Title at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: `${color}33`,
            color: "white",
            padding: 10,
            fontSize: 14,
            textAlign: "center",
            textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
            zIndex: 10,
          }}
        >
          {card.title}
        </div>
      </div>
    </div>
  )
}
