import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'


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
    <html lang="en"> 
    
    <body>
    <ClerkProvider>
      <ChakraProvider>
        <Navbar />
        {children}
        <Footer />
      </ChakraProvider>
      </ClerkProvider>
    </body>
    </html>
  )
}
///



