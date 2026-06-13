export function CTABanner() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: 'var(--canvas)' }}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--champagne), transparent)' }} />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <div className="mb-4 flex flex-col items-center gap-2">
          <h2 className="font-display text-4xl italic text-ink md:text-5xl lg:text-6xl" style={{ fontWeight: 500 }}>
            Ready to Capture
            <br />
            Your Story?
          </h2>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--champagne)' }} />
            <div
              className="h-2 w-2 rotate-45"
              style={{ backgroundColor: 'var(--champagne)' }}
            />
            <div className="h-px w-8" style={{ backgroundColor: 'var(--champagne)' }} />
          </div>
        </div>

        <p className="mb-10 font-sans text-base font-light tracking-wide md:text-lg" style={{ color: 'rgba(31,29,26,0.65)' }}>
          Let&apos;s discuss your vision and find the perfect photography package for your special day.
        </p>

        <a
          href="#inquire"
          className="magnetic-hover group inline-flex items-center gap-2 rounded-full border px-8 py-3.5 font-sans text-sm font-light uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:text-canvas"
          style={{ borderColor: 'var(--champagne)' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--champagne)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <span>Check Availability</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-4 md:px-8 md:mt-16">
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--champagne), transparent)' }} />
      </div>
    </section>
  )
}
