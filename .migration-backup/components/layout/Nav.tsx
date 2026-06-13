'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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
          ? 'border-b border-ink/5 bg-white/80 backdrop-blur-xl shadow-[0_2px_32px_rgba(0,0,0,0.04)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
        {/* Wordmark — signature logo */}
        <a href="#top" aria-label="Lovepreet Photos & Films — home" className="group flex flex-col items-start justify-center">
          <span className="font-display text-2xl italic tracking-wide text-ink transition-colors duration-500 group-hover:text-champagne lg:text-3xl">
            Lovepreet
          </span>
          <span className="mt-1 font-mono text-[0.45rem] uppercase tracking-[0.4em] text-ink/50 transition-colors duration-500 group-hover:text-ink/70">
            Photos & Films
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <a
                key={link.href}
                href={link.href}
                className="group relative font-display text-xl italic text-accent transition-colors duration-300 hover:text-accent"
            >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
            <a
              href="#inquire"
              className="hidden rounded-full bg-accent px-6 py-2 font-display text-xl italic text-canvas transition-all duration-300 hover:shadow-[0_10px_30px_rgba(58,142,159,0.3)] hover:-translate-y-1 lg:inline-block"
            >
              Check Availability
            </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+16043657401"
            className="rounded-full border border-ink/20 px-4 py-2 font-sans text-xs text-ink/80"
          >
            Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
          >
            <span className="h-px w-5 bg-accent/70" />
            <span className="h-px w-5 bg-accent/70" />
            <span className="h-px w-3 self-start bg-accent/70" />
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
          className="absolute right-0 top-0 h-full w-[80%] max-w-sm px-8 py-8 shadow-2xl transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] bg-linen"
          style={{
            transform: open ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-ink/40">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-2xl leading-none text-ink/50 transition-colors hover:text-ink"
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
                className="font-display text-2xl italic text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+16043657401"
            className="mt-12 block rounded-full border border-ink/20 px-6 py-3 text-center font-mono text-xs uppercase tracking-widest text-ink/70"
          >
            +1 604-365-7401
          </a>
        </div>
      </div>
    </header>
  )
}
