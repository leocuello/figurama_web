'use client'

import { useState } from 'react'

type AccessoryLevelMap = {
    [key: string]: number
}

interface AccessoryLevelsProps {
    initialLevels: AccessoryLevelMap
    onLevelChange?: (key: string, level: number) => void
}

const allAccessories = [
    { key: 'compass', label: 'Brújula' },
    { key: 'backpack', label: 'Mochila' },
    { key: 'flashlight', label: 'Linterna' },
    { key: 'friend', label: 'Friend' },
    { key: 'storage', label: 'Baúl' },
    { key: 'pickaxe', label: 'Pico' },
]

export default function Accessories({ initialLevels, onLevelChange }: AccessoryLevelsProps) {
    const [levels, setLevels] = useState<AccessoryLevelMap>(initialLevels)

    const setLevel = (key: string, level: number) => {
        setLevels((prev) => {
            const updated = { ...prev, [key]: level }
            if (onLevelChange) onLevelChange(key, level)
            return updated
        })
    }

    return (
        <div className="flex flex-col gap-4 p-6 rounded">
            {allAccessories.map(({ key, label }) => {
                const activeLevel = levels[key] ?? 0
                return (
                    <div key={key} className="flex items-center gap-4">
                        <div className="w-28 font-semibold">{label}</div>
                        {[0, 1, 2, 3].map((level) => {
                            const imgSrc = `/accesories/${key}_${level.toString().padStart(2, '0')}.png`
                            const isActive = level === activeLevel
                            return (
                                <img
                                    key={level}
                                    src={imgSrc}
                                    alt={`${label} nivel ${level}`}
                                    className={`w-12 h-12 object-contain cursor-pointer transition-opacity duration-200 ${
                                        isActive ? 'opacity-100 border-3 border-green-500 rounded-lg' : 'opacity-30'
                                    }`}
                                    onClick={() => setLevel(key, level)}
                                    title={`Nivel ${level}`}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
