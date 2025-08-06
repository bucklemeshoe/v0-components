import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'V0 Components',
  description: 'Component library for Rematch Padel platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}