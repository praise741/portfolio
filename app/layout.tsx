import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oluwamuyiwa Praise Oluwakanyinsayomi — Software & Data Developer",
  description:
    "Full Stack & Data Integration Developer specializing in Next.js, Laravel, self-hosted infrastructure, and predictive time-series systems.",
  icons: [
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  metadataBase: "https://praise741.github.io/portfolio/",
  openGraph: {
    title: "Oluwamuyiwa Praise Oluwakanyinsayomi — Software & Data Developer",
    description:
      "Full Stack & Data Integration Developer specializing in Next.js, Laravel, self-hosted infrastructure, and predictive time-series systems.",
    url: "https://praise741.github.io/portfolio/",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Praise.dev — Software & Data Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwamuyiwa Praise Oluwakanyinsayomi — Software & Data Developer",
    description:
      "Full Stack & Data Integration Developer specializing in Next.js, Laravel, self-hosted infrastructure, and predictive time-series systems.",
    creator: "@praise741",
    site: "@praise741",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Praise.dev — Software & Data Developer",
      },
    ],
  },
  alternates: {
    canonical: "https://praise741.github.io/portfolio/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
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
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-white selection:text-black">
        <div className="min-h-screen bg-zinc-950">
          {children}
        </div>
      </body>
    </html>
  )
}
