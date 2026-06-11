export function Footer() {
  return (
    <footer className="border-t border-champagne/30 bg-ink text-canvas">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr] lg:gap-10">
          {/* Col 1 - Brand */}
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-canvas">
              Lovepreet Photos &amp; Films
            </p>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-canvas/50">
              Fine-art wedding photography and heirloom cinema for luxury South
              Asian celebrations across Langley, Surrey, and Metro Vancouver,
              British Columbia.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/lovepreetphotography.ca/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-canvas/50 transition-all duration-200 hover:border-champagne/50 hover:text-canvas"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="tel:+16043657401"
                aria-label="Call us"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-canvas/50 transition-all duration-200 hover:border-champagne/50 hover:text-canvas"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <p className="eyebrow text-[0.6rem] text-champagne">Navigate</p>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                { label: 'The Offerings', href: '#offerings' },
                { label: 'The Gallery', href: '#gallery' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Logistics', href: '#logistics' },
                { label: 'Contact', href: '#inquire' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-canvas/45 transition-colors hover:text-canvas/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <p className="eyebrow text-[0.6rem] text-champagne">Get in Touch</p>
            <ul className="mt-5 flex flex-col gap-3 font-sans text-sm text-canvas/45">
              <li>
                <a
                  href="https://www.instagram.com/lovepreetphotography.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-canvas/80"
                >
                  @lovepreetphotography.ca
                </a>
              </li>
              <li>
                <a
                  href="tel:+16043657401"
                  className="transition-colors hover:text-canvas/80"
                >
                  +1 604-365-7401
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lovepreetphotos.ca"
                  className="transition-colors hover:text-canvas/80"
                >
                  hello@lovepreetphotos.ca
                </a>
              </li>
            </ul>
            <p className="mt-8 font-sans text-xs text-canvas/20">
              Consultation by private appointment only.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-canvas/25">
            &copy; 2026 Lovepreet Photos &amp; Films. All rights reserved.
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-canvas/15">
            Langley &middot; Surrey &middot; Vancouver
          </p>
        </div>
      </div>
    </footer>
  )
}
