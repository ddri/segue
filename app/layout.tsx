import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEGUE',
  description: 'Australian electronic live act',
  generator: 'Humans',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
