import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Swagat Gautam — Fullstack Developer',
  description:
    'Swagat Gautam crafts beautiful, scalable web applications with React, Next.js, Angular, Laravel and .NET. Explore the work of a fullstack developer based in Kathmandu.',
  generator: 'Next.js',
  icons: {
    icon: '/swagat.png',
    apple: '/swagat.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${display.variable} font-sans antialiased noise`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
