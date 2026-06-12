'use client'

import { useState } from 'react'

export function VideoReel() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Cinematic Film</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl">
            The 2025 Wedding Showreel
          </h2>
          <p className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed text-ink/60">
            90 seconds. Four weddings. One creative vision. See how every
            celebration becomes a film that earns its place on a cinema screen.
          </p>
        </div>

        {/* Video frame */}
        <div className="relative mt-14 overflow-hidden">
          <div
            className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden"
            style={{
              background:
                'radial-gradient(ellipse at 60% 45%, #1a2d4a 0%, #0d1b2e 55%, #050c18 100%)',
            }}
            onClick={() => setModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Play 2025 Wedding Showreel"
            onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
          >
            {/* Poster image overlay */}
            <img
              src="/placeholder.svg?height=720&width=1260"
              alt="Wedding showreel preview"
              className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
              loading="lazy"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-6 transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm lg:h-24 lg:w-24">
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  className="ml-1.5"
                >
                  <path d="M1 1.5L21 12.5L1 23.5V1.5Z" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-display text-xl italic text-white/80 lg:text-2xl">
                  Play Showreel
                </p>
                <p className="eyebrow mt-1 text-[0.6rem] text-white/35">90 sec · 2025</p>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-6 right-6 hidden lg:block">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/25">
                Lovepreet Photos &amp; Films
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 gap-px border border-ink/8 bg-ink/8 lg:grid-cols-4">
          {[
            { value: '200+', label: 'Weddings Documented' },
            { value: '4-Day', label: 'Multi-Day Capability' },
            { value: '8-12 Wk', label: 'Delivery Window' },
            { value: '1 Crew', label: 'Unified Direction' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-canvas px-6 py-8">
              <span className="font-display text-3xl italic text-ink">{stat.value}</span>
              <span className="eyebrow mt-2 text-[0.6rem] text-ink/40">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6 backdrop-blur-2xl"
          onClick={() => setModalOpen(false)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setModalOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            &times;
          </button>
          <div
            className="relative flex aspect-video w-full max-w-5xl items-center justify-center overflow-hidden"
            style={{
              background:
                'radial-gradient(ellipse at center, #1a2d4a 0%, #050c18 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <p className="font-display text-3xl italic text-white/25">
                Showreel Coming Soon
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-white/15">
                Full cinematic reel &mdash; 2025
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
