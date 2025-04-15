import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { ViewProvider } from '@/context/view'
import HeroUIProvider from '@/context/heroui'
import './globals.css'

export const metadata: Metadata = {
  title: 'FliteWatch',
  description: 'Soar to new heights with every flight',
  authors: [
    { name: 'Agence Malo', url: 'https://agencemalo.com' },
    { name: 'Gregory Buffard', url: 'https://www.gregory-buffard.com' },
  ],
  keywords: ['flitewatch', 'boutique aviation', 'private jet', 'luxury'],
}

export const viewport: Viewport = {
  themeColor: '#fff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={'scroll-smooth bg-white'}>
      <body className={'font-gothic'}>
        <HeroUIProvider>
          <ViewProvider>
            {children}
            <Analytics />
          </ViewProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
