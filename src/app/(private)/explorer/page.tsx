'use client'

import { useEffect, useState } from 'react'
import { getInventory } from '@/actions/inventory'
import { Inventory } from '@/types/Inventory'
import LoadingCenter from '@/components/LoadingCenter'
import ErrorMessage from '@/components/ErrorMessage'
import Materials from '@/app/(private)/explorer/Materials'
import Adventurer from "@/app/(private)/explorer/Adventurer";
import Accessories from "@/app/(private)/explorer/Accessories";

type Gender = 'M' | 'F'


export default function CharacterCustomizer() {
    const [gender, setGender] = useState<Gender>('M')
    const [inventory, setInventory] = useState<Inventory>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const loadInventory = async () => {
            try {
                const data = await getInventory() // reemplazar con ID real si hace falta
                setInventory(data)
            } catch (err) {
                console.error('Error al obtener el inventario', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        void loadInventory()
    }, [])

    if (error) return <ErrorMessage message="Error al obtener el inventario" />
    if (loading) return <LoadingCenter />

    // Preparar niveles iniciales para AccessoryLevels
    const initialAccessoryLevels = inventory?.accessories.reduce((acc, a) => {
        acc[a.name.toLowerCase()] = a.level
        return acc
    }, {} as Record<string, number>) || {}

    return (
        <div className="p-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row">
                {/* IZQUIERDA */}
                <Adventurer gender={gender} onGenderChange={setGender} />

                {/* DERECHA */}
                <div className="w-full md:w-1/2 bg-gray-200 m-3 rounded">
                    <h3 className="text-xl font-semibold text-center mb-4">Accesorios y niveles</h3>
                    <Accessories initialLevels={initialAccessoryLevels} />
                </div>
            </div>

            {/* MATERIALES */}
            <Materials inventory={inventory} />
        </div>
    )
}
