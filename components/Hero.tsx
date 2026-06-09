'use client'

import { useState } from 'react'

export function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false)

  return (
    <section id="top" className="relative bg-canvas pt-24 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid items-center gap-10 py-12 lg:grid-cols-[55%_45%] lg:gap-16 lg:py-20">
          {/* Left column */}
          <div className="flex flex-col">
            <span className="eyebrow text-xs text-ink/70">
              Langley &middot; Surrey &middot; Vancouver
            </span>
            <h1 className="mt-6 font-display font-medium leading-[1.05] text-ink [font-size:clamp(2.25rem,5vw,4rem)]">
              One Vision. Two Mediums.
              <br />
              <em className="text-champagne">Captured as One.</em>
            </h1>
            <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ink/75">
              We handcraft fine-art imagery and heirloom cinematic films for
              luxury South Asian celebrations across Langley, Surrey, and the
              Lower Mainland. By blending timeless stillness with moving emotion
              under a single creative direction, we eliminate vendor friction —
              leaving you completely present in your moments.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="#inquire"
                className="rounded-full bg-ink px-8 py-3.5 font-sans text-sm text-canvas transition-opacity hover:opacity-90"
              >
                Start the Conversation
              </a>
              <a
                href="tel:+16043657401"
                className="group relative font-sans text-sm text-ink"
              >
                Call +1 604-365-7401
                <span className="absolute -bottom-1 left-0 h-px w-full bg-champagne transition-all duration-300 group-hover:w-0" />
              </a>
            </div>
          </div>

          {/* Right column - image frame */}
          <div className="relative">
            <div
              className="relative flex aspect-[2/3] items-end overflow-hidden bg-linen"
              role="img"
              aria-label="Regal Sikh wedding couple in traditional cream and deep red attire walking through a sun-drenched Langley forest pathway."
            >
              <p className="m-6 font-display text-lg italic leading-relaxed text-ink/40">
                Regal Sikh wedding couple in traditional cream and deep red
                attire walking through a sun-drenched Langley forest pathway.
              </p>

              {/* Play Showreel button */}
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-sans text-xs text-canvas transition-transform hover:scale-105"
              >
                <span className="text-[0.65rem]">&#9654;</span>
                Play Showreel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Showreel modal */}
      {showreelOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6 backdrop-blur-xl">
          <button
            type="button"
            aria-label="Close showreel"
            onClick={() => setShowreelOpen(false)}
            className="absolute right-6 top-6 text-4xl leading-none text-canvas"
          >
            &times;
          </button>
          <div
            className="flex aspect-video w-full max-w-4xl items-center justify-center bg-linen"
            role="img"
            aria-label="Cinematic wedding showreel placeholder."
          >
            <span className="font-display text-2xl italic text-ink/40">
              Showreel
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
