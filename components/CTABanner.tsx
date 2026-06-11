'use client';

export default function CTABanner() {
  return (
    <section className="w-full bg-canvas py-16 md:py-24 lg:py-32">
      {/* Top champagne divider */}
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        {/* Heading with flourish */}
        <div className="mb-4 flex flex-col items-center gap-2">
          <h2 className="font-display text-4xl italic text-ink md:text-5xl lg:text-6xl">
            Ready to Capture
          </h2>
          <h2 className="font-display text-4xl italic text-ink md:text-5xl lg:text-6xl">
            Your Story?
          </h2>
          {/* Decorative flourish underline */}
          <div className="mt-3 flex items-center gap-3">
            <div className="h-px w-8 bg-champagne" />
            <svg
              className="h-3 w-3 fill-champagne"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <diamond points="5,0 10,5 5,10 0,5" />
            </svg>
            <div className="h-px w-8 bg-champagne" />
          </div>
        </div>

        {/* Subheading */}
        <p className="mb-10 font-sans text-base font-light tracking-wide text-ink/70 md:text-lg">
          Let&apos;s discuss your vision and find the perfect photography package for your special day.
        </p>

        {/* CTA Button */}
        <a
          href="#inquire"
          className="group inline-flex items-center gap-2 rounded-full border border-champagne bg-transparent px-8 py-3.5 font-sans text-sm font-light uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-champagne hover:text-canvas"
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

      {/* Bottom champagne divider */}
      <div className="mx-auto mt-12 max-w-6xl px-4 md:px-8 md:mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </div>
    </section>
  );
}
