import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "10 na Bola - Escola de Futebol",
  description: "Escola de futebol na Zona Sul de São Paulo. Educação, valores e esporte para crianças e adolescentes.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Lightbox core styles */}
        <link rel="stylesheet" href="https://unpkg.com/yet-another-react-lightbox@2/dist/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
