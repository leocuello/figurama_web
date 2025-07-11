import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import {
  Backpack,
  Repeat,
  Compass
} from "lucide-react"

export default function News() {

  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const options = [
    {
      id: 1,
      icon: Backpack,
      title: "Mochila",
      description: "Guardá y organizá todas tus figuritas en un solo lugar.",
    },
    {
      id: 2,
      icon: Repeat,
      title: "Intercambio",
      description: "Intercambiá figuritas con otros usuarios y completá tu colección.",
    },
    {
      id: 3,
      icon: Compass,
      title: "Explorador",
      description: "Evoluciona tu explorador xon accesorios para mejorar la busqueda",
    }
  ]


  return (
    <main className="bg-white text-black p-8">
      {/* Hero / Banner */}
      <section className="text-center py-8">

  

        <h1 className="text-3xl md:text-6xl mb-10">¡Bienvenidos a Figurama!</h1>


        <p className="text-xl md:text-2xl mb-10">Descubrí tu próxima aventura</p>

        <div className="mt-4">
          <Link
            href="/howitworks"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-300 transition"
          >
            ¡Empieza tu aventura!
          </Link>
        </div>
      </section>


      <div className="w-full max-w-3xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {options.map((option) => {
            const IconComponent = option.icon
            const isSelected = selectedCard === option.id

            return (
              <div
                key={option.id}
                className={`
                bg-white rounded-lg border-2 shadow-sm
                cursor-pointer transition-all duration-300 ease-in-out
                hover:shadow-xl hover:-translate-y-2 hover:scale-105
                ${isSelected
                    ? "ring-2 ring-gray-500 shadow-lg bg-gray-50 border-gray-200"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }
              `}
                onClick={() => setSelectedCard(option.id)}
              >
                <div className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div
                      className={`
                    mx-auto w-16 h-16 rounded-full flex items-center justify-center
                    transition-colors duration-300
                    ${isSelected
                          ? "bg-gray-500 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-100 group-hover:text-gray-600"
                        }
                  `}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <div>
                      <h3
                        className={`
                      font-semibold text-lg mb-2 transition-colors duration-300
                      ${isSelected ? "text-gray-700" : "text-gray-900"}
                    `}
                      >
                        {option.title}
                      </h3>

                      <p
                        className={`
                      text-sm leading-relaxed transition-colors duration-300
                      ${isSelected ? "text-gray-600" : "text-gray-600"}
                    `}
                      >
                        {option.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>

    </main>
  );
}
