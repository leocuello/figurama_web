import AuthGuard from "@/components/AuthGuard";

export default function ChangePage() {
  return (
    <AuthGuard>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Intercambio</h1>
        <p>Contenido de la página de Intercambio.</p>
      </div>
    </AuthGuard>
  )
}