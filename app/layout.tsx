import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Swagat Gautam - Fullstack Developer',
  description: 'Portfolio of Swagat Gautam, a fullstack developer specializing in modern web applications with React, Next.js, and Node.js.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/swagat.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/swagat.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/swagat.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/swagat.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
