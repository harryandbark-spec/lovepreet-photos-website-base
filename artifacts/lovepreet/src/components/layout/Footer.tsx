import { useInquiry } from '@/components/InquiryContext'

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

function FooterLink({ link }: { link: any }) {
  const { open } = useInquiry()
  if (link.href === '#inquire') {
    return (
      <button
        onClick={open}
        className="group relative inline-block font-sans text-[0.8125rem] font-light leading-relaxed tracking-wide transition-colors duration-300 hover:text-ink"
        style={{ color: 'rgba(31,29,26,0.6)' }}
      >
        {link.label}
        <span
          className="absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
          style={{ backgroundColor: 'var(--accent-secondary)' }}
        />
      </button>
    )
  }
  return (
    <a
      href={link.href}
      target={'external' in link && link.external ? '_blank' : undefined}
      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
      className="group relative inline-block font-sans text-[0.8125rem] font-light leading-relaxed tracking-wide transition-colors duration-300 hover:text-ink"
      style={{ color: 'rgba(31,29,26,0.6)' }}
    >
      {link.label}
      <span
        className="absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: 'var(--accent-secondary)' }}
      />
    </a>
  )
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#faf9f7', color: 'var(--ink)' }}>
      <div className="h-px w-full opacity-60" style={{ background: 'linear-gradient(to right, transparent, var(--ink), transparent)' }} />

      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16 xl:px-24">
        <div className="mb-16 flex justify-center">
          <a href="#top" aria-label="Lovepreet Photos & Films — home" className="group flex flex-col items-center">
            <span
              className="font-display text-5xl italic tracking-wide transition-colors duration-500 group-hover:text-champagne md:text-6xl lg:text-7xl"
              style={{ color: 'var(--ink)', fontWeight: 500 }}
            >
              Lovepreet
            </span>
            <span
              className="mt-4 eyebrow text-[0.65rem] tracking-[0.5em] transition-colors duration-500 group-hover:text-ink/60"
              style={{ color: 'rgba(31,29,26,0.5)' }}
            >
              Photos &amp; Films
            </span>
          </a>
        </div>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-0">
          {NAV_COLUMNS.map((col, colIdx) => (
            <div key={col.heading} className="relative">
              {colIdx > 0 && (
                <div
                  className="absolute -left-px top-0 hidden h-full w-px md:block"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(31,29,26,0.1), transparent)' }}
                />
              )}

              <div className="md:px-8">
                <p
                  className="mb-4 font-display text-sm italic md:text-base"
                  style={{ fontWeight: 500, letterSpacing: '0.01em', color: 'var(--accent-secondary)' }}
                >
                  {col.heading}
                </p>

                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 h-px w-full md:my-14" style={{ background: 'linear-gradient(to right, transparent, rgba(31,29,26,0.15), transparent)' }} />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-5">
          <p className="font-sans text-[0.7rem] font-light tracking-widest text-center sm:text-left" style={{ color: 'rgba(31,29,26,0.5)' }}>
            &copy; 2026 Lovepreet Photos &amp; Films. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="h-3 w-px" style={{ backgroundColor: 'rgba(198,168,124,0.3)' }} />
                )}
                <a
                  href={link.href}
                  className="font-sans text-[0.7rem] font-light tracking-widest transition-colors duration-300 hover:text-accent-secondary"
                  style={{ color: 'rgba(31,29,26,0.5)' }}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-5" style={{ backgroundColor: 'rgba(31,29,26,0.2)' }} />
            <a
              href="https://www.instagram.com/lovepreetphotography.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-[0.55rem] tracking-[0.25em] transition-colors duration-300 hover:text-accent-secondary"
              style={{ color: 'rgba(31,29,26,0.5)' }}
            >
              @lovepreetphotography.ca
            </a>
            <span className="h-px w-5" style={{ backgroundColor: 'rgba(31,29,26,0.2)' }} />
          </div>
        </div>

        <p className="mt-6 text-center font-display text-[0.65rem] italic md:mt-8 md:text-xs" style={{ color: 'rgba(31,29,26,0.4)' }}>
          Consultation by private appointment only &mdash; Langley &middot; Surrey &middot; Vancouver
        </p>
      </div>
    </footer>
  )
}
