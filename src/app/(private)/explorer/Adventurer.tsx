'use client'

import { Mars, Venus, Pencil } from 'lucide-react'

type Gender = 'M' | 'F'

interface AdventurerCardProps {
    gender: Gender
    onGenderChange: (gender: Gender) => void
}

const getCharacterImage = (gender: Gender) =>
    gender === 'F' ? '/avatar/avatar02.png' : '/avatar/avatar01.png'

export default function Adventurer({ gender, onGenderChange }: AdventurerCardProps) {
    return (
        <div className="w-full md:w-1/2 flex flex-col items-center rounded bg-gray-200 m-3">
            <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold mb-4">Aventurero</h2>
                <button className="text-gray-500 hover:text-gray-800 mb-4">
                    <Pencil className="w-4 h-4" />
                </button>
            </div>

            <div className="p-5 rounded w-75 flex flex-col justify-center items-center">
                <img
                    src={getCharacterImage(gender)}
                    alt={`Character ${gender}`}
                    className="h-[320px] object-contain drop-shadow-lg"
                />
                <div className="flex gap-4 justify-center pt-2">
                    <button
                        onClick={() => onGenderChange('M')}
                        className={`rounded-full p-2 ${gender === 'M' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    >
                        <Mars className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => onGenderChange('F')}
                        className={`rounded-full p-2 ${gender === 'F' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
                    >
                        <Venus className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
