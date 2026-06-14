import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anurag | Interior Designer',
  description: 'Award-winning interior designer crafting timeless, soulful spaces that reflect your story.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
