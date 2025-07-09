import AuthGuard from '@/components/AuthGuard'


export default function ConfigurationPage() {
  return (
    <AuthGuard>
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Configuración</h1>
        <p>Aquí van los ajustes y preferencias de tu aplicación.</p>
        </div>
    </AuthGuard>
  )
}
