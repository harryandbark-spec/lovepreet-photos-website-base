'use client'

import { useState } from 'react'

const NAV_LINKS = [
  { label: 'The Offerings', href: '#offerings' },
  { label: 'The Gallery', href: '#gallery' },
  { label: 'The Experience', href: '#experience' },
  { label: 'Logistics', href: '#logistics' },
  { label: 'Start the Conversation', href: '#inquire' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/5 bg-canvas/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        {/* Wordmark */}
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-mono text-base font-semibold uppercase tracking-[0.25em] text-ink">
            Lovepreet
          </span>
          <span className="font-mono text-[0.6rem] font-light uppercase tracking-[0.35em] text-ink/60">
            Photos &amp; Films
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#inquire"
          className="hidden rounded-full bg-ink px-6 py-2.5 font-sans text-sm text-canvas transition-opacity hover:opacity-90 lg:inline-block"
        >
          Check Availability
        </a>

        {/* Mobile: tap-to-call + burger */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="tel:+16043657401"
            className="rounded-full bg-ink px-5 py-2 font-sans text-sm text-canvas"
          >
            Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Panel */}
        <div
          className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-canvas px-8 py-8 shadow-2xl transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em]">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-2xl leading-none text-ink"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl italic text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+16043657401"
            className="mt-10 block rounded-full bg-ink px-6 py-3 text-center font-sans text-sm text-canvas"
          >
            Call +1 604-365-7401
          </a>
        </div>
      </div>
    </header>
  )
}
