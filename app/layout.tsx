import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Crimson_Text } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson-text",
})

export const metadata: Metadata = {
  title: "Portfolio - Two Sides, One Mind",
  description: "Explore what I build. Discover what I write.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${crimsonText.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
