'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'The Offerings', href: '#offerings' },
  { label: 'The Gallery', href: '#gallery' },
  { label: 'The Experience', href: '#experience' },
  { label: 'Logistics', href: '#logistics' },
  { label: 'Start the Conversation', href: '#inquire' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-[#050c18]/90 backdrop-blur-xl shadow-[0_2px_32px_rgba(0,0,0,0.4)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
        {/* Wordmark */}
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white">
            Lovepreet
          </span>
          <span className="font-mono text-[0.55rem] font-light uppercase tracking-[0.38em] text-white/45">
            Photos &amp; Films
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/55 transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#inquire"
          className="hidden rounded-full border border-white/20 px-5 py-2.5 font-sans text-xs text-white/80 transition-all duration-300 hover:border-champagne/60 hover:text-white lg:inline-block"
        >
          Check Availability
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+16043657401"
            className="rounded-full border border-white/20 px-4 py-2 font-sans text-xs text-white/80"
          >
            Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
          >
            <span className="h-px w-5 bg-white/70" />
            <span className="h-px w-5 bg-white/70" />
            <span className="h-px w-3 self-start bg-white/70" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className="absolute right-0 top-0 h-full w-[80%] max-w-sm px-8 py-8 shadow-2xl transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            background: '#0a1628',
          }}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-white/60">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-2xl leading-none text-white/60 transition-colors hover:text-white"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl italic text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+16043657401"
            className="mt-12 block rounded-full border border-champagne/50 px-6 py-3 text-center font-mono text-xs uppercase tracking-widest text-champagne"
          >
            +1 604-365-7401
          </a>
        </div>
      </div>
    </header>
  )
}
