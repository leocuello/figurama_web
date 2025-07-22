'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function DraggableMapBackground() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [start, setStart] = useState({ x: 0, y: 0 })
    const [dragging, setDragging] = useState(false)
    const [scale, setScale] = useState(1)

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragging(true)
        setStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging) return
        setPosition({
            x: e.clientX - start.x,
            y: e.clientY - start.y,
        })
    }

    const handleMouseUp = () => setDragging(false)

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault()
        const zoomSpeed = 0.001
        const newScale = scale - e.deltaY * zoomSpeed
        setScale(Math.max(0.2, Math.min(newScale, 5))) // límite entre 0.2x y 5x
    }

    return (
        <div
            className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
        >
            <Image
                src="/map/treasure-map.png"
                alt="Mapa del tesoro"
                width={2000}
                height={2000}
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    cursor: dragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    pointerEvents: 'auto',
                }}
                onMouseDown={handleMouseDown}
                draggable={false}
            />
        </div>
    )
}
