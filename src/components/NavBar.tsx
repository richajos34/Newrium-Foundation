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
    { href: '/true-wealth', label: 'True Wealth' },
    { href: '/true-self', label: 'True Self'},
    { href: '/self-actualization', label: 'Self-Actualization' },
    {/* 
    What other links do we need based on the task list? 
    Hint: "true wealth", "true self", "self-actualization", "parenting" pages 
  */}
  ]

  return (
    <nav>
      <div>
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="size-7 rounded-md" style={{background:'var(--accent)'}} />
          <span>Newrium</span>
        </Link>

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