const TIERS = [
  {
    name: 'The Essential',
    subtitle: 'Photography Only',
    note: 'Starting from',
    price: '$4,200',
    description: 'Perfect for intimate ceremonies and single-day celebrations seeking fine-art photography coverage.',
    features: [
      '8 hours photography coverage',
      '350+ professionally edited images',
      'Private online gallery delivery',
      'Print release included',
      'Engagement session add-on available',
    ],
    cta: 'Inquire About Essentials',
    highlight: false,
  },
  {
    name: 'The Legacy',
    subtitle: 'Photos + Cinema',
    note: 'Starting from',
    price: '$8,500',
    description: 'Our most popular collection — unified photography and cinema under one creative direction.',
    features: [
      '2 days photography + cinema',
      '500+ curated fine-art images',
      '5–8 minute cinematic feature film',
      'Same-day highlight reel',
      'Private family streaming link',
      'Engagement session included',
    ],
    cta: 'Reserve Your Date',
    highlight: true,
  },
  {
    name: 'The Full Experience',
    subtitle: 'Multi-Day + Live Stream',
    note: 'Starting from',
    price: '$14,000',
    description: 'The complete Lovepreet experience for grand multi-day South Asian celebrations across the Lower Mainland.',
    features: [
      '3–4 day full coverage',
      '700+ fine-art images',
      '8–12 minute cinematic masterpiece',
      'HD live streaming all ceremonies',
      'Private stream link for global family',
      'Engagement session included',
      'Same-day sneak peek edit',
    ],
    cta: 'Inquire About Full Experience',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28" style={{ backgroundColor: 'var(--linen)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Investment</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish">
            Your Legacy Collection
          </h2>
          <p className="mt-8 max-w-xl text-center font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.6)' }}>
            Every collection is custom-tailored. The prices below are starting
            points — final investment reflects your specific itinerary and vision.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="group relative flex flex-col border transition-all duration-300"
              style={tier.highlight ? {
                borderColor: 'rgba(198,168,124,0.6)',
                backgroundColor: 'var(--ink)',
                color: 'var(--canvas)',
                boxShadow: '0 20px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(197,168,130,0.2)',
              } : {
                borderColor: 'rgba(31,29,26,0.12)',
                backgroundColor: 'var(--canvas)',
              }}
            >
              {tier.highlight && (
                <div
                  className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(197,168,130,0.3) 0%, transparent 50%, rgba(197,168,130,0.15) 100%)',
                    animation: 'pulseGlow 3s ease-in-out infinite',
                  }}
                />
              )}

              <div
                className="relative border-b px-8 py-8"
                style={{ borderColor: tier.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(31,29,26,0.08)' }}
              >
                {tier.highlight && (
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-px w-4" style={{ backgroundColor: 'var(--champagne)' }} />
                    <span className="eyebrow text-[0.6rem] text-champagne">Most Popular</span>
                  </div>
                )}
                <h3
                  className="font-display text-2xl"
                  style={{ color: tier.highlight ? 'var(--canvas)' : 'var(--ink)' }}
                >
                  {tier.name}
                </h3>
                <p
                  className="eyebrow mt-1 text-[0.6rem]"
                  style={{ color: tier.highlight ? 'rgba(252,251,250,0.4)' : 'rgba(31,29,26,0.4)' }}
                >
                  {tier.subtitle}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="font-sans text-xs"
                    style={{ color: tier.highlight ? 'rgba(252,251,250,0.4)' : 'rgba(31,29,26,0.4)' }}
                  >
                    {tier.note}
                  </span>
                  <span
                    className="font-display text-4xl"
                    style={{ color: tier.highlight ? 'var(--champagne)' : 'var(--ink)' }}
                  >
                    {tier.price}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="h-px w-8"
                    style={{ backgroundColor: tier.highlight ? 'rgba(198,168,124,0.4)' : 'rgba(31,29,26,0.15)' }}
                  />
                </div>
                <p
                  className="mt-3 font-sans text-sm leading-relaxed"
                  style={{ color: tier.highlight ? 'rgba(252,251,250,0.55)' : 'rgba(31,29,26,0.55)' }}
                >
                  {tier.description}
                </p>
              </div>

              <div className="relative flex flex-1 flex-col px-8 py-8">
                <ul className="flex flex-1 flex-col gap-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45"
                        style={{ backgroundColor: tier.highlight ? 'var(--champagne)' : 'rgba(198,168,124,0.7)' }}
                      />
                      <span
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: tier.highlight ? 'rgba(252,251,250,0.7)' : 'rgba(31,29,26,0.65)' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#inquire"
                  className="mt-8 block w-full py-4 text-center font-sans text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={tier.highlight ? {
                    backgroundColor: 'var(--champagne)',
                    color: 'var(--ink)',
                  } : {
                    border: '1px solid rgba(31,29,26,0.2)',
                    color: 'var(--ink)',
                  }}
                  onMouseEnter={e => {
                    if (!tier.highlight) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--ink)'
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--canvas)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!tier.highlight) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = ''
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)'
                    }
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4" aria-hidden="true">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.4))' }} />
            <div className="h-1 w-1 rounded-full" style={{ backgroundColor: 'rgba(198,168,124,0.4)' }} />
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(198,168,124,0.4))' }} />
          </div>
          <p className="text-center font-sans text-sm" style={{ color: 'rgba(31,29,26,0.4)' }}>
            All collections include a private consultation. Final pricing confirmed after we
            map your specific itinerary.
          </p>
        </div>
      </div>
    </section>
  )
}
