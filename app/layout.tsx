import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oluwamuyiwa Praise Oluwakanyinsayomi | Software Developer",
  description: "Full Stack & Data Integration Developer specializing in Laravel, Next.js, and time-series forecasting systems.",
  icons: {
    icon: "data:,",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-200 antialiased">
        {children}
      </body>
    </html>
  )
}
