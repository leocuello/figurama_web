import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figurama",
  description: "Tu próxima aventura",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
          {children}
      </body>
    </html>
  )
}