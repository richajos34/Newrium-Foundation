'use client'
import React, { useState } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  itemsToShow?: number;
}

export default function Carousel({ children, itemsToShow = 3 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const slides = React.Children.toArray(children);
  const itemWidth = 100 / itemsToShow;

  return (
    <div className="relative w-full">
      <button
        onClick={() => setCurrent(Math.max(0, current - 1))}
        className="absolute right-12 top-5 z-10 text-2xl cursor-pointer disabled:opacity-30"
        disabled={current === 0}
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent(Math.min(slides.length - itemsToShow, current + 1))}
        className="absolute right-5 top-5 z-10 text-2xl cursor-pointer disabled:opacity-30"
        disabled={current >= slides.length - itemsToShow}
      >
        ›
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * itemWidth}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} style={{ minWidth: `${itemWidth}%` }}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}