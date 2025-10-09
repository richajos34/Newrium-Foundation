import type { Metadata } from 'next'
import './globals.css'
import NavBarComponent from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Student Template',
  description: 'Next.js + Tailwind team template with clear TODOs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-1 rounded">Skip to content</a>
        <NavBarComponent />
        <main id="main" className="container my-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}