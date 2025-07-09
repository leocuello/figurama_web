import AuthGuard from "@/components/AuthGuard";

export default function ExplorerPage() {
  return (
    <AuthGuard>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Explorador</h1>
        <p>Contenido de la página de Explorador.</p>
      </div>
    </AuthGuard>
  )
}