import AuthGuard from '@/components/AuthGuard'


export default function ConfigurationPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold mb-4">Configuración</h1>
          <p>Aquí van los ajustes y preferencias de tu aplicación.</p>
        </div>
      </div>
    </AuthGuard>
  )
}
