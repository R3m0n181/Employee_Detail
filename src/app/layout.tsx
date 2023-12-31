import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen font-sans '>
        <div className='relative flex min-h-screen flex-col'>
          <Navbar/>
          <div className='flex-1 '>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
