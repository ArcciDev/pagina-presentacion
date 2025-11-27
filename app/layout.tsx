import type React from "react"
import type { Metadata, Viewport } from "next"
import { Press_Start_2P, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ARCCIDEV | Junior Developer Portfolio",
  description:
    "Portfolio de desarrollador junior con temática RPG. Especializado en Python, JavaScript y desarrollo de aplicaciones.",
  keywords: ["desarrollador", "portfolio", "python", "javascript", "react", "developer"],
  authors: [{ name: "ARCCIDEV" }],
  openGraph: {
    title: "ARCCIDEV | Junior Developer",
    description: "Portfolio de desarrollador junior con temática RPG",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${spaceMono.variable} ${pressStart2P.variable} font-sans antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
