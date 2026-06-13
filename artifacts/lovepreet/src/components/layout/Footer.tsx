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
      { label: 'FAQ', href: '#logistics' },
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
    <footer style={{ backgroundColor: 'var(--ink)', color: 'var(--canvas)' }}>
      <div className="h-px w-full opacity-60" style={{ background: 'linear-gradient(to right, transparent, var(--champagne), transparent)' }} />

      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16 xl:px-24">
        <div className="mb-16 flex justify-center">
          <a href="#top" aria-label="Lovepreet Photos & Films — home" className="group flex flex-col items-center">
            <span
              className="font-display text-5xl italic tracking-wide transition-colors duration-500 group-hover:text-champagne md:text-6xl lg:text-7xl"
              style={{ color: 'var(--canvas)', fontWeight: 500 }}
            >
              Lovepreet
            </span>
            <span
              className="mt-4 eyebrow text-[0.65rem] tracking-[0.5em] transition-colors duration-500 group-hover:text-canvas/60"
              style={{ color: 'rgba(252,251,250,0.4)' }}
            >
              Photos &amp; Films
            </span>
          </a>
        </div>

        <div className="relative grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-0">
          {NAV_COLUMNS.map((col, colIdx) => (
            <div key={col.heading} className="relative">
              {colIdx > 0 && (
                <div
                  className="absolute -left-px top-0 hidden h-full w-px md:block"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(198,168,124,0.25), transparent)' }}
                />
              )}

              <div className="md:px-8">
                <p
                  className="mb-5 font-display text-base italic text-champagne"
                  style={{ fontWeight: 500, letterSpacing: '0.01em' }}
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
                        className="group relative inline-block font-sans text-[0.8125rem] font-light leading-relaxed tracking-wide transition-colors duration-300 hover:text-canvas"
                        style={{ color: 'rgba(252,251,250,0.5)' }}
                      >
                        {link.label}
                        <span
                          className="absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: 'var(--champagne)' }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="my-14 h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.3), transparent)' }} />

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="font-sans text-xs font-light tracking-widest" style={{ color: 'rgba(252,251,250,0.3)' }}>
            &copy; 2026 Lovepreet Photos &amp; Films. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="h-3 w-px" style={{ backgroundColor: 'rgba(198,168,124,0.3)' }} />
                )}
                <a
                  href={link.href}
                  className="font-sans text-xs font-light tracking-widest transition-colors duration-300 hover:text-champagne"
                  style={{ color: 'rgba(252,251,250,0.3)' }}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-5" style={{ backgroundColor: 'rgba(198,168,124,0.4)' }} />
            <a
              href="https://www.instagram.com/lovepreetphotography.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-[0.6rem] tracking-[0.25em] transition-colors duration-300 hover:text-champagne"
              style={{ color: 'rgba(252,251,250,0.3)' }}
            >
              @lovepreetphotography.ca
            </a>
            <span className="h-px w-5" style={{ backgroundColor: 'rgba(198,168,124,0.4)' }} />
          </div>
        </div>

        <p className="mt-8 text-center font-display text-xs italic" style={{ color: 'rgba(252,251,250,0.2)' }}>
          Consultation by private appointment only &mdash; Langley &middot; Surrey &middot; Vancouver
        </p>
      </div>
    </footer>
  )
}
