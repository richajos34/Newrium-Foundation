'use client'
import { useState } from 'react'

interface CollapsibleItem {
  id: string
  title: string
  content?: React.ReactNode
}

interface StaticItem {
  id: string
  width?: string // e.g., 'w-1/3', 'w-full', etc.
}

interface CollapsibleListProps {
  staticItems?: StaticItem[]
  collapsibleItems?: CollapsibleItem[]
}

export default function CollapsibleList({ 
  staticItems = [
    { id: '1', width: 'w-1/3' },
    { id: '2', width: 'w-11/12' },
    { id: '3', width: 'w-11/12' },
  ],
  collapsibleItems = [
    { id: '4', title: 'Item 4', content: <div className="p-4">Content for item 4</div> },
    { id: '5', title: 'Item 5', content: <div className="p-4">Content for item 5</div> },
    { id: '6', title: 'Item 6', content: <div className="p-4">Content for item 6</div> },
    { id: '7', title: 'Item 7', content: <div className="p-4">Content for item 7</div> },
    { id: '8', title: 'Item 8', content: <div className="p-4">Content for item 8</div> },
    { id: '9', title: 'Item 9', content: <div className="p-4">Content for item 9</div> },
  ]
}: CollapsibleListProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="w-full bg-white border border-black">
      {/* Static items */}
      {staticItems.map((item, index) => (
        <div key={item.id}>
          <div className={`h-12 bg-black mx-auto ${item.width || 'w-full'}`} />
          {index < staticItems.length - 1 || collapsibleItems.length > 0 ? (
            <div className="h-px bg-black" />
          ) : null}
        </div>
      ))}

      {/* Collapsible items */}
      {collapsibleItems.map((item, index) => {
        const isOpen = openItems.has(item.id)
        return (
          <div key={item.id}>
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full h-12 bg-black flex items-center justify-end pr-2 hover:opacity-80 transition-opacity relative"
              aria-expanded={isOpen}
            >
              <svg
                className={`w-3 h-3 text-white transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="currentColor"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9L1 4h10L6 9z" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-white border-t border-black">
                {item.content}
              </div>
            </div>
            {index < collapsibleItems.length - 1 ? (
              <div className="h-px bg-black" />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

