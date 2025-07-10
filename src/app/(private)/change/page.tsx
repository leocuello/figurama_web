import AuthGuard from "@/components/AuthGuard";

export default function ChangePage() {
  return (
    <AuthGuard>
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold mb-4">Intercambio</h1>
          <p>Contenido de la página de Intercambio.</p>
        </div>   
      </div>
    </AuthGuard>
  )
}