'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function NavBar(){
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // TODO: What other links do we need based on the task list? 
  // Hint: "true wealth", "true self", "self-actualization", "parenting" pages 
  const links = [
    { href: '/', label: 'Home' },
    { href: '/true-wealth', label: 'True Wealth' },
    { href: '/true-self', label: 'True Self' },
    { href: '/self-actualization', label: 'Self-Actualization' },
    { href: '/parenting', label: 'Parenting' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ]
  // What other links do we need based on the task list? 
  // Hint: "true wealth", "true self", "self-actualization", "parenting" pages

  return (
    <nav className="bg-background border-b w-full fixed left-0 right-0 top-0 z-50">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 bg-(--foreground)">
          <Link href="/" className="flex items-center gap-2 font-semibold text-(--background)">
            <span className="size-7 rounded-md" style={{background:'var(--accent)'}} />
            <span>Newrium Foundation Inc.</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`${open ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${open ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        <div id="nav-links" className={`${open ? 'block' : 'hidden'} md:flex gap-2 md:block`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:flex md:space-y-0 md:space-x-2">
            {links.map(l => {
              const active = pathname === l.href
              return (
                <Link 
                  key={l.href}
                  href={l.href} 
                  className={`block px-3 py-2 rounded-md text-sm font-medium 
                    text-(--background) hover:font-bold font-poppins ${
                    active 
                      ? 'text-(--background)' 
                      : 'text-(--background)'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}