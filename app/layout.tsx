import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oluwamuyiwa Praise Oluwakanyinsayomi — Software & Data Developer",
  description: "Full Stack & Data Integration Developer specializing in Next.js, Laravel, self-hosted infrastructure, and predictive time-series systems.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-zinc-100 antialiased selection:bg-white selection:text-black">
        <div className="min-h-screen bg-black">
          {children}
        </div>
      </body>
    </html>
  )
}
