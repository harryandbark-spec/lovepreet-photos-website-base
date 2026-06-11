'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 65% 35%, #1a2d4a 0%, #0d1b2e 50%, #050c18 100%)',
      }}
    >
      {/* Film grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Edge vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.6)_100%)]" />

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pb-20 pt-36 lg:px-10 lg:pb-24">
        <div className="flex flex-1 flex-col justify-end max-w-3xl">
          <p
            className={`font-mono text-xs uppercase tracking-[0.28em] text-white/40 transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            style={{ transitionDelay: '80ms' }}
          >
            Langley &middot; Surrey &middot; Vancouver
          </p>

          <h1
            className={`mt-5 font-display leading-[1.02] text-white transition-all duration-800 ease-out [font-size:clamp(3.2rem,7.5vw,7rem)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '180ms', fontWeight: 400 }}
          >
            One Vision.
            <br />
            Two Mediums.
            <br />
            <em className="text-champagne">Captured as One.</em>
          </h1>

          <p
            className={`mt-7 max-w-lg font-sans text-base leading-relaxed text-white/55 transition-all duration-700 ease-out lg:text-lg ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ transitionDelay: '320ms' }}
          >
            Fine-art photography and heirloom cinema for luxury South Asian
            celebrations — crafted under one creative direction, so you stay
            completely present in every moment.
          </p>

          <div
            className={`mt-10 flex flex-col items-start gap-4 transition-all duration-700 ease-out sm:flex-row sm:items-center ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ transitionDelay: '440ms' }}
          >
            <a
              href="#inquire"
              className="rounded-full bg-champagne px-8 py-3.5 font-sans text-sm font-medium text-ink transition-all duration-300 hover:bg-[#d4b896] hover:shadow-[0_8px_32px_rgba(197,168,130,0.35)]"
            >
              Start the Conversation
            </a>
            <a
              href="tel:+16043657401"
              className="font-mono text-sm tracking-widest text-white/50 transition-colors duration-200 hover:text-white/80"
            >
              +1 604-365-7401
            </a>
          </div>
        </div>
      </div>

      {/* Play Showreel — bottom right corner */}
      <button
        type="button"
        onClick={() => setShowreelOpen(true)}
        aria-label="Play showreel"
        className={`absolute bottom-20 right-6 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur-md transition-all duration-700 ease-out hover:scale-110 hover:border-white/30 hover:bg-white/15 lg:bottom-24 lg:right-10 lg:h-[72px] lg:w-[72px] ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '560ms', background: 'rgba(255,255,255,0.07)' }}
      >
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="ml-0.5">
          <path d="M1 1.5L15 9L1 16.5V1.5Z" fill="white" fillOpacity="0.9" />
        </svg>
      </button>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-7 left-1/2 z-10 -translate-x-1/2 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '700ms' }}
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 pt-2">
          <div
            className="h-2 w-0.5 rounded-full bg-white/35"
            style={{ animation: 'scrollDot 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* Showreel modal */}
      {showreelOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6 backdrop-blur-2xl"
          onClick={() => setShowreelOpen(false)}
        >
          <button
            type="button"
            aria-label="Close showreel"
            onClick={() => setShowreelOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-colors hover:bg-white/10"
          >
            &times;
          </button>
          <div
            className="relative flex aspect-video w-full max-w-5xl items-center justify-center overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse at center, #1a2d4a 0%, #050c18 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <p className="font-display text-3xl italic text-white/25">
                Showreel Coming Soon
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-white/15">
                Cinematic highlight reel &mdash; 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
