import { useState } from 'react'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function VideoReel() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative py-24 lg:py-32" style={{ backgroundColor: 'var(--ink)', color: 'var(--canvas)' }}>
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }} />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 relative z-10">
        <RevealOnScroll className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Cinematic Film</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-canvas lg:text-5xl" style={{ fontWeight: 500 }}>
            The 2025 Wedding Showreel
          </h2>
          <p className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed" style={{ color: 'rgba(252,251,250,0.55)' }}>
            90 seconds. Four weddings. One creative vision. See how every
            celebration becomes a film that earns its place on a cinema screen.
          </p>
        </RevealOnScroll>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse at 60% 45%, #1a2d4a 0%, #0d1b2e 55%, #050c18 100%)',
            }}
            onClick={() => setModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Play 2025 Wedding Showreel"
            onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
          >
            <div
              className="absolute inset-0 h-full w-full flex items-center justify-center opacity-30 transition-opacity duration-500 group-hover:opacity-40"
              style={{ backgroundColor: 'var(--linen)' }}
            >
              <span className="font-display text-2xl italic" style={{ color: 'rgba(31,29,26,0.3)' }}>
                Placeholder Image
              </span>
            </div>

            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)' }} />

            <div className="relative z-10 flex flex-col items-center gap-6 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 120px rgba(0,0,0,0.5)' }} />
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full lg:h-24 lg:w-24"
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" className="ml-1.5">
                  <path d="M1 1.5L21 12.5L1 23.5V1.5Z" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-display text-xl italic lg:text-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Play Showreel
                </p>
                <p className="eyebrow mt-1 text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.35)' }}>90 sec · 2025</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 hidden lg:block">
              <p className="eyebrow text-xs tracking-[0.25em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Lovepreet Photos &amp; Films
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px border lg:grid-cols-4" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.08)' }}>
          {[
            { value: '200+', label: 'Weddings Documented' },
            { value: '4-Day', label: 'Multi-Day Capability' },
            { value: '8-12 Wk', label: 'Delivery Window' },
            { value: '1 Crew', label: 'Unified Direction' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-6 py-8" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <AnimatedCounter value={stat.value} duration={2500} />
              <span className="eyebrow mt-2 text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)' }}
          onClick={() => setModalOpen(false)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setModalOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border text-white transition-colors hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            &times;
          </button>
          <div
            className="relative flex aspect-video w-full max-w-5xl items-center justify-center overflow-hidden"
            style={{ background: 'radial-gradient(ellipse at center, #2a1d2a 0%, #0a0a0a 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <p className="font-display text-3xl italic" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Showreel Coming Soon
              </p>
              <p className="mt-3 eyebrow text-xs tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.15)' }}>
                Full cinematic reel &mdash; 2025
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
