export function Footer() {
  return (
    <footer className="border-t-2 border-champagne bg-ink text-canvas">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {/* Col 1 - Studio Heritage */}
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.25em]">
              Lovepreet Photos &amp; Films
            </p>
            <p className="mt-5 max-w-xs font-sans text-base leading-relaxed text-canvas/70">
              Documenting love stories across Langley, Surrey, and Metro
              Vancouver, British Columbia.
            </p>
          </div>

          {/* Col 2 - Digital Channels */}
          <div>
            <p className="eyebrow text-xs text-champagne">Digital Channels</p>
            <ul className="mt-5 flex flex-col gap-3 font-sans text-base text-canvas/80">
              <li>
                <a
                  href="https://www.instagram.com/lovepreetphotography.ca/"
                  className="transition-colors hover:text-canvas"
                >
                  Instagram: @lovepreetphotography.ca
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-canvas">
                  Facebook: Portfolio Portal
                </a>
              </li>
              <li>
                <a
                  href="tel:+16043657401"
                  className="transition-colors hover:text-canvas"
                >
                  Direct Line: +1 604-365-7401
                </a>
              </li>
              <li className="text-canvas/50">Email: [To be updated before launch]</li>
            </ul>
          </div>

          {/* Col 3 - Studio Operations */}
          <div>
            <p className="eyebrow text-xs text-champagne">Studio Operations</p>
            <p className="mt-5 max-w-xs font-sans text-base leading-relaxed text-canvas/70">
              Consultation windows by private appointment only.
            </p>
            <p className="mt-5 font-sans text-sm text-canvas/50">
              &copy; 2026 Lovepreet Photos &amp; Films. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
