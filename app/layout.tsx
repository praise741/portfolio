import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oluwamuyiwa Praise Oluwakanyinsayomi | Full Stack & Data Integration Developer",
  description: "Senior Full Stack & Data Integration Developer specializing in Next.js, Laravel, Appwrite, time-series market forecasting, and scalable logistics software.",
  keywords: [
    "Oluwamuyiwa Praise Oluwakanyinsayomi",
    "Praise741",
    "Full Stack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Data Integration",
    "Meta Prophet",
    "Logistics Software",
    "Akure Nigeria Developer"
  ],
  authors: [{ name: "Oluwamuyiwa Praise Oluwakanyinsayomi" }],
  openGraph: {
    title: "Oluwamuyiwa Praise Oluwakanyinsayomi | Full Stack & Data Integration Developer",
    description: "Building production-grade web applications, predictive time-series AI platforms, and real-time logistics systems.",
    type: "website",
    url: "https://portfolio.lonnecapp.com.ng",
  },
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
      <body className="bg-[#080c14] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <div className="relative min-h-screen overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="ambient-glow bg-cyan-500/20 top-[-100px] left-[-100px] pointer-events-none" />
          <div className="ambient-glow bg-indigo-600/20 top-[40%] right-[-150px] pointer-events-none" />
          <div className="ambient-glow bg-purple-600/15 bottom-[-100px] left-[20%] pointer-events-none" />
          
          {children}
        </div>
      </body>
    </html>
  )
}
