'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function NavBar(){
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // TODO: We've implemented some of the routes but why are some not working?
  // Try looking in the /app directory and do reaserch on how next work. Some of these links might not work...
  const links = [
    { href: '/', label: 'Home' },
    { href: '/example-page', label: 'Example' },
    {/* 
    What other links do we need based on the task list? 
    Hint: "true wealth", "true self", "self-actualization", "parenting" pages 
  */}
  ]

  return (
    <nav className="sticky top-0 z-20 border-b" style={{borderColor:'var(--border)'}}>
      <div className="container flex items-center justify-between py-3 backdrop-blur">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="size-7 rounded-md" style={{background:'var(--accent)'}} />
          <span>Newrium</span>
        </Link>

        <button className="md:hidden btn-secondary border rounded-xl px-3 py-1" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls="nav-links">Menu</button>

        <div id="nav-links" className={`md:flex gap-2 ${open? 'block' : 'hidden'} md:block`}>
          {links.map(l => {
            const active = pathname === l.href
            return (
              <div>
                {/*What do we want to return? Maybe a Link? Look at the one above! */}
               </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}