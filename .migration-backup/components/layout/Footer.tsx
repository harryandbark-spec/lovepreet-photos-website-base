'use client'

import Image from 'next/image'

const NAV_COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Wedding Photography', href: '#offerings' },
      { label: 'Wedding Films', href: '#offerings' },
      { label: 'Engagement Sessions', href: '#offerings' },
      { label: 'Pre-Wedding Portraits', href: '#offerings' },
      { label: 'Family Portraits', href: '#offerings' },
    ],
  },
  {
    heading: 'Portfolio',
    links: [
      { label: 'The Gallery', href: '#gallery' },
      { label: 'Sikh Ceremonies', href: '#showcase' },
      { label: 'Hindu Ceremonies', href: '#showcase' },
      { label: 'Reception Evenings', href: '#showcase' },
      { label: 'Featured Couples', href: '#gallery' },
    ],
  },
  {
    heading: 'Process',
    links: [
      { label: 'Investment', href: '#pricing' },
      { label: 'Our Approach', href: '#logistics' },
      { label: 'Timeline & Logistics', href: '#logistics' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Begin Your Story', href: '#inquire' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: '@lovepreetphotography.ca', href: 'https://www.instagram.com/lovepreetphotography.ca/', external: true },
      { label: '+1 604-365-7401', href: 'tel:+16043657401' },
      { label: 'hello@lovepreetphotos.ca', href: 'mailto:hello@lovepreetphotos.ca' },
      { label: 'Langley · Surrey · Vancouver', href: '#' },
    ],
  },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-canvas text-ink">
      {/* Champagne top rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60" />

      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16 xl:px-24">

        {/* Typographic Logo centred */}
        <div className="mb-16 flex justify-center">
          <a href="#top" aria-label="Lovepreet Photos & Films — home" className="group flex flex-col items-center">
            <span className="font-display text-4xl italic tracking-wide text-ink transition-colors duration-500 group-hover:text-champagne md:text-5xl lg:text-6xl">
              Lovepreet
            </span>
            <span className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.5em] text-ink/40 transition-colors duration-500 group-hover:text-ink/60">
              Photos & Films
            </span>
          </a>
        </div>

        {/* 4-column grid */}
        <div className="relative grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-0">

          {NAV_COLUMNS.map((col, colIdx) => (
            <div key={col.heading} className="relative">
              {/* Vertical divider between columns (desktop only) */}
              {colIdx > 0 && (
                <div className="absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-champagne/25 to-transparent md:block" />
              )}

              <div className="md:px-8">
                {/* Column heading — italic serif script feel */}
                <p
                  className="mb-5 font-display text-base italic text-champagne"
                  style={{ fontWeight: 400, letterSpacing: '0.01em' }}
                >
                  {col.heading}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={'external' in link && link.external ? '_blank' : undefined}
                        rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                        className="group relative inline-block font-sans text-[0.8125rem] font-light leading-relaxed tracking-wide text-ink/50 transition-colors duration-300 hover:text-ink"
                      >
                        {link.label}
                        {/* Underline fade-in on hover */}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Thin champagne rule */}
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="font-sans text-xs font-light tracking-widest text-ink/30">
            &copy; 2026 Lovepreet Photos &amp; Films. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="h-3 w-px bg-champagne/30" />
                )}
                <a
                  href={link.href}
                  className="font-sans text-xs font-light tracking-widest text-ink/30 transition-colors duration-300 hover:text-champagne"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          {/* Social handle */}
          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-champagne/40" />
            <a
              href="https://www.instagram.com/lovepreetphotography.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/30 transition-colors duration-300 hover:text-champagne"
            >
              @lovepreetphotography.ca
            </a>
            <span className="h-px w-5 bg-champagne/40" />
          </div>
        </div>

        {/* Consultation note */}
        <p className="mt-8 text-center font-display text-xs italic text-ink/20">
          Consultation by private appointment only &mdash; Langley &middot; Surrey &middot; Vancouver
        </p>
      </div>
    </footer>
  )
}
