import type { Metadata } from 'next'
import './globals.css'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Poppins, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: 'Student Template',
  description: 'Next.js + Tailwind team template with clear TODOs',
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",        // <-- ADD THIS
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-1 rounded"
        >
          Skip to content
        </a>

        {/* NavBar */}
        <NavBar />
        <div className="pt-3">
        </div>
        {/* Main page content */}
        <main id="main" className="container my-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
