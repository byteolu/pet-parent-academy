import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Vetti',
  description: 'AI Agent for Dog owners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
