'use client'

import { useEffect, useRef } from 'react'

export default function TopFooter() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100')
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-canvas py-16 opacity-0 transition-opacity duration-1000 md:py-24"
    >
      {/* Top champagne gradient divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-canvas via-champagne/40 to-canvas" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Champagne flourish — top diamond line */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-champagne/60" />
          <div className="h-2.5 w-2.5 rotate-45 border-2 border-champagne/60" />
          <div className="h-px w-8 bg-champagne/60" />
        </div>

        {/* Signature italic heading */}
        <h2 className="mb-3 font-serif text-4xl italic text-ink md:text-5xl">
          Lovepreet
        </h2>

        {/* Subheading — light tracking serif */}
        <p className="mb-8 font-serif text-lg tracking-widest text-ink/70">
          Photos &amp; Films
        </p>

        {/* Body text — elegant call to action */}
        <p className="mx-auto mb-8 max-w-2xl font-sans text-sm leading-relaxed tracking-wide text-ink/60">
          Capturing the essence of your story through intimate, artfully composed moments. 
          Every frame is a celebration of love, tradition, and the beauty of your unique journey together.
        </p>

        {/* Champagne flourish — bottom diamond line */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-champagne/60" />
          <div className="h-2.5 w-2.5 rotate-45 border-2 border-champagne/60" />
          <div className="h-px w-8 bg-champagne/60" />
        </div>
      </div>

      {/* Bottom champagne gradient divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-canvas via-champagne/40 to-canvas" />
    </section>
  )
}
