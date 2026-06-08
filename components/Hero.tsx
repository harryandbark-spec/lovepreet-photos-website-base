'use client'

import { useState } from 'react'

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-bleed placeholder image background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      />

      {/* Gradient overlay (bottom to transparent) for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content container - bottom-left and bottom-right positioning */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
        {/* Bottom-left content */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-0">
          <div className="flex flex-col gap-4 max-w-md text-white">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              One Vision. <br />
              Two Mediums.
            </h1>

            {/* Subline */}
            <p className="text-xl sm:text-2xl font-light text-gray-100">
              Captured as One.
            </p>

            {/* Location */}
            <p className="text-sm sm:text-base text-gray-300 font-medium tracking-wide">
              Langley · Surrey · Vancouver
            </p>

            {/* CTAs - bottom-left */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 active:scale-95"
              >
                Start the Conversation
              </a>

              {/* Phone CTA */}
              <a
                href="tel:+16043657401"
                className="inline-flex items-center gap-2 px-4 py-3 text-white font-medium hover:text-accent transition-colors duration-200"
              >
                <span>+1 604-365-7401</span>
              </a>
            </div>
          </div>

          {/* Play Showreel button - bottom-right */}
          <button
            onClick={() => setIsPlaying(true)}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/80 text-accent-foreground hover:bg-accent transition-all duration-200 active:scale-95 flex-shrink-0"
            aria-label="Play showreel"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
