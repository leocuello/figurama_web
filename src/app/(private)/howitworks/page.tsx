"use client"

export default function GameInstructions() {
  const materials = [
    { name: "Madera", level: 1, color: "bg-amber-100 text-amber-800" },
    { name: "Piedra", level: 1, color: "bg-gray-100 text-gray-800" },
    { name: "Hierro", level: 1, color: "bg-slate-100 text-slate-800" },
    { name: "Cobre", level: 1, color: "bg-orange-100 text-orange-800" },
    { name: "Azufre", level: 2, color: "bg-yellow-100 text-yellow-800" },
    { name: "Litio", level: 2, color: "bg-blue-100 text-blue-800" },
    { name: "Mercurio", level: 2, color: "bg-purple-100 text-purple-800" },
    { name: "Oro", level: 2, color: "bg-yellow-200 text-yellow-900" },
    { name: "Magia", level: 3, color: "bg-violet-100 text-violet-800" },
    { name: "Cristal", level: 3, color: "bg-cyan-100 text-cyan-800" },
    { name: "Gema", level: 3, color: "bg-emerald-100 text-emerald-800" },
    { name: "Esmeralda", level: 3, color: "bg-green-100 text-green-800" },
  ]

  const accessories = [
    { name: "Brújula", icon: "🧭", description: "Te ayuda a encontrar álbumes cercanos con mayor precisión" },
    { name: "Baúl", icon: "📦", description: "Aumenta tu capacidad de almacenamiento de figuritas" },
    { name: "Pico", icon: "⛏️", description: "Determina qué materiales puedes recolectar" },
    { name: "Mochila", icon: "🎒", description: "Permite llevar más álbumes simultáneamente" },
    { name: "Suerte", icon: "🍀", description: "Aumenta las probabilidades de encontrar figuritas raras y especiales" },
    {
      name: "Amuleto",
      icon: "🧿",
      description: "Protege contra perder figuritas en eventos especiales y reduce el riesgo de daño",
    },
  ]

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Como jugar Figurama</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora el mundo real, busca álbumes, colecciona figuritas y evoluciona tu aventurero con accesorios únicos
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              📍 Geolocalización
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              🎯 Colección
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Aventura
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Evolución
            </span>
          </div>
        </div>

        {/* Objetivo del Juego */}
        <div className="bg-white rounded-lg border border-gray-400 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">🏆 Objetivo del Juego</h2>
          </div>
          <div className="px-6 pb-6">
            <p className="text-gray-700 text-lg">
              Conviértete en el mejor coleccionista explorando ubicaciones reales para encontrar{" "}
              <strong>álbumes</strong>, completar colecciones de <strong>figuritas</strong> y evolucionar tu{" "}
              <strong>aventurero</strong> con accesorios mejorados usando materiales que recolectas en tu camino. 
              Conoce la <strong>historia</strong> detras de cada album.
            </p>
          </div>
        </div>

        {/* Preparación */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">▶️ Preparación</h2>
          </div>
          <div className="px-6 pb-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Requisitos:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Dispositivo móvil con GPS</li>
                  <li>• Conexión a internet</li>
                  <li>• Ganas de explorar</li>
                  <li>• Batería cargada</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Al Comenzar Tienes:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• 1 Aventurero nivel Novato</li>
                  <li>• Hasta 4 albumes sin mochila</li>
                  <li>• Pico nivel 1 gratis</li>
                  <li>• 100 Monedas Esqueleto 💀</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pasos del Juego */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900">Pasos para Jugar</h2>
            <p className="text-sm text-gray-600 mt-1">Sigue estos pasos para dominar el GEO Catching</p>
          </div>
          <div className="px-6 pb-6">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Explora tu Entorno",
                  description: "Camina por diferentes ubicaciones para descubrir álbumes ocultos en el mapa.",
                  tip: "Los álbumes aparecen en lugares específicos del mundo real. ¡Sal y explora!",
                },
                {
                  step: 2,
                  title: "Busca Álbumes",
                  description:
                    "Cuando encuentres un álbum en el mapa, acércate a la ubicación para poder interactuar con él.",
                  tip: "Te vamos a recomendar el album más cercano",
                },
                {
                  step: 3,
                  title: "Colecciona Figuritas",
                  description: "Abre los álbumes para obtener figuritas aleatorias y completar tus colecciones.",
                  tip: "Cada álbum tiene una historia que contar y sorpresas",
                },
                {
                  step: 4,
                  title: "Recolecta Materiales",
                  description:
                    "Mientras exploras, recolecta materiales que aparecen en el mundo según tu nivel de pico.",
                  tip: "Mejora tu pico para acceder a materiales más valiosos y raros.",
                },
                {
                  step: 5,
                  title: "Mejora tus Accesorios",
                  description: "Usa los materiales recolectados para mejorar tus 4 accesorios principales.",
                  tip: "Prioriza mejorar la mochila para llevar más álbumes simultáneamente.",
                },
                {
                  step: 6,
                  title: "Evoluciona tu Aventurero",
                  description: "Con accesorios mejorados, tu aventurero se vuelve más eficiente en la exploración.",
                  tip: "Un aventurero evolucionado puede encontrar tesoros más valiosos.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                    <p className="text-gray-700">{step.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        <strong>Consejo:</strong> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sistema de Moneda Esqueleto */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              💀 Monedas Esqueleto
            </h2>
            <p className="text-sm text-gray-600 mt-1">La moneda principal del juego que se consume con cuando se buscan figuritas</p>
          </div>
          <div className="px-6 pb-6 space-y-6">
            {/* Qué es */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-gray-800">¿Qué es la Moneda Esqueleto?</h4>
              <p className="text-gray-700">
                Las <strong>Monedas Esqueleto 💀</strong> son la energía vital de tu aventurero. Cada vez que realizas
                una búsqueda de una figurita, se consume <strong>1 Moneda Esqueleto</strong>. Sin monedas, no puedes completar álbumes.
              </p>
            </div>

            {/* Cómo se usa */}
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">💀 Consumo de Monedas</h4>
              <ul className="space-y-1 text-red-700 text-sm">
                <li>
                  • <strong>Búsqueda de figuritas:</strong> 1 Moneda Esqueleto
                </li>
              </ul>
            </div>

            {/* Cómo obtener */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">✨ Cómo Obtener Monedas</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-green-700">
                <div>
                  <p>
                    <strong>🕐 Regeneración automática:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• 5 monedas gratis por día</li>
                    <li>• Máximo 20 monedas gratis almacenadas</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <strong>🎯 Mercado pago:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Compra en Mercado Pago</li>
                    <li>• 1 Moneda Esqueleto: 1 peso</li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>✨ Gratis al inicio:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• 100 Monedas al crear la cuenta</li>
                  </ul>
                </div>
              </div>
            </div>

            

            {/* Indicador visual */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">📊 Monitoreo de Monedas</h4>
              <p className="text-gray-700 text-sm">
                Tu cantidad actual de Monedas Esqueleto siempre aparece en la parte superior de la pantalla. 
                <br />El contador cambia de color según tu cantidad:
              </p>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded"> Verde (Abundante)</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded"> Amarillo (Moderado)</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded"> Rojo (Crítico)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sistema de Materiales */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">⛏️ Sistema de Materiales</h2>
            <p className="text-sm text-gray-600 mt-1">
              Los materiales que puedes recolectar dependen del nivel de tu pico
            </p>
          </div>
          <div className="px-6 pb-6">
            <div className="space-y-6">
              {[1, 2, 3].map((level) => (
                <div key={level} className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-bold ${
                        level === 1
                          ? "bg-green-100 text-green-800"
                          : level === 2
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      Pico Nivel {level}
                    </span>
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {materials
                      .filter((material) => material.level === level)
                      .map((material, index) => (
                        <div key={index} className={`px-3 py-2 rounded-lg text-center font-medium ${material.color}`}>
                          {material.name}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accesorios */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              📦 Los 6 Accesorios Principales
            </h2>
            <p className="text-sm text-gray-600 mt-1">Cada accesorio se puede mejorar para mayor efectividad</p>
          </div>
          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-2 gap-6">
              {accessories.map((accessory, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{accessory.icon}</span>
                    <h4 className="font-semibold text-lg">{accessory.name}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{accessory.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estrategias */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900">Estrategias de Juego</h2>
            <p className="text-sm text-gray-600 mt-1">Consejos para ser un mejor coleccionista</p>
          </div>
          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">🗺️ Estrategias de Exploración:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Explora diferentes tipos de ubicaciones</li>
                  <li>• Busca tu primer album donde estés</li>
                  <li>• Mejora tu brújula para mayor precisión</li>
                  <li>• Planifica rutas eficientes</li>
                  <li>• Administra bien tus Monedas Esqueleto 💀</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">⚡ Estrategias de Mejora:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Prioriza mejorar la mochila primero</li>
                  <li>• Mejora el pico para mejores materiales</li>
                  <li>• Balancea todos los accesorios</li>
                  <li>• Guarda materiales raros para mejoras importantes</li>
                  <li>• Completa logros diarios para monedas extra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Condiciones de Progreso */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">✅ Progreso y Logros</h2>
          </div>
          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">📚 Colecciones:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Completa álbumes enteros</li>
                  <li>• Encuentra figuritas raras</li>
                  <li>• Colecciona series temáticas</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🚀 Evolución:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Mejora todos los accesorios</li>
                  <li>• Alcanza el nivel máximo</li>
                  <li>• Desbloquea habilidades especiales</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🌍 Exploración:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Visita nuevas ubicaciones</li>
                  <li>• Recolecta todos los materiales</li>
                  <li>• Descubre álbumes secretos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos Adicionales */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Consejos Pro</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <div>
              <p>
                <strong>🌅 Accesorios:</strong> Una vez que consigas materiales, evalua que accesorio te conviene comprar
              </p>
            </div>
            <div>
              <p>
                <strong>🎯 Ubicaciones:</strong> Parques, centros comerciales y plazas suelen tener más álbumes
              </p>
            </div>
            <div>
              <p>
                <strong>⚡ Batería:</strong> Lleva un power bank para sesiones largas de exploración
              </p>
            </div>
            <div>
              <p>
                <strong>💀 Monedas Esqueleto:</strong> Revisa la cantidad antes de salir a explorar
              </p>
            </div>
          </div>
        </div>


        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-1">
          <p>¡Que tengas una gran aventura coleccionando! 🎮✨</p>
        </div>
      </div>
    </div>
  )
}
