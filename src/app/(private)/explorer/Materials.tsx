'use client'

import {JSX, useEffect, useState} from 'react'
import { Inventory } from '@/types/Inventory'
import LoadingCenter from '@/components/LoadingCenter'
import ErrorMessage from '@/components/ErrorMessage'
import {
    TreePine, Mountain, Hammer, Cog, Flame, BatteryCharging, Droplet,
    Coins, Sparkles, Diamond, Gem, CircleDollarSign
} from 'lucide-react'

import { getMaterialTypes } from '@/actions/inventory'

type MaterialType = {
    name: string
}

type MaterialWithAmount = {
    name: string
    amount: number
    icon: JSX.Element
}

interface MaterialListProps {
    inventory: Inventory | null
}

export default function Materials({ inventory }: MaterialListProps) {
    const [materialTypes, setMaterialTypes] = useState<MaterialType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // Mapa rápido para cantidades en inventario
    const inventoryMaterialMap: Record<string, number> = {}
    inventory?.materials.forEach((mat) => {
        inventoryMaterialMap[mat.type.name] = mat.total
    })

    // Iconos para materiales
    const getMaterialIcon = (name: string) => {
        const icons: Record<string, JSX.Element> = {
            Wood: <TreePine size={18} />,
            Stone: <Mountain size={18} />,
            Iron: <Hammer size={18} />,
            Copper: <Cog size={18} />,
            Sulfur: <Flame size={18} />,
            Lithium: <BatteryCharging size={18} />,
            Mercury: <Droplet size={18} />,
            Gold: <Coins size={18} />,
            Magic: <Sparkles size={18} />,
            Crystal: <Diamond size={18} />,
            Gem: <Gem size={18} />,
            Emerald: <CircleDollarSign size={18} />,
        }
        return icons[name] || <Gem size={18} />
    }

    useEffect(() => {
        const loadMaterialTypes = async () => {
            try {
                const types = await getMaterialTypes()
                setMaterialTypes(types)
            } catch (e) {
                console.error('Error al cargar tipos de materiales', e)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        void loadMaterialTypes()
    }, [])

    if (loading) return <LoadingCenter />
    if (error) return <ErrorMessage message="Error al cargar los materiales" />

    const materials: MaterialWithAmount[] = materialTypes.map((type) => ({
        name: type.name,
        amount: inventoryMaterialMap[type.name] || 0,
        icon: getMaterialIcon(type.name),
    }))

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 dark:bg-gray-800 m-3">
            {materials.map(({ name, amount, icon }) => (
                <div key={name} className="flex items-center gap-3 p-2 bg-gray-200 rounded">
                    <div className="text-blue-600 dark:text-blue-400">{icon}</div>
                    <div className="flex flex-col text-sm">
                        <span className="font-semibold text-gray-800 dark:text-white">{name}</span>
                        <span className="text-gray-600 dark:text-gray-300">{amount} unidades</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
