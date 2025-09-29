import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Build A Store',
  description: 'Build a store page with category filters, a product grid, and local cart logic to add and remove ite...',
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