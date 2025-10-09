'use client'
import { useState } from 'react'

const items = [
  {/* 
    What type of data shoud be in this list?
*/}
]

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">FAQ</h2>
      <ul className="grid gap-3">
        {/*

            Should we call items.map to map out what we put int the items list?
        
        */}
      </ul>
    </section>
  )
}