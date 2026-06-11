const TIERS = [
  {
    name: 'Essential',
    subtitle: 'Single-Day Celebration',
    price: '$2,800',
    note: 'Starting at',
    description:
      'Perfect for intimate ceremonies and receptions. One photographer, one cinematographer, and a unified creative direction for your most important day.',
    features: [
      '8 hours of coverage',
      'Fine-art photo gallery (350+ images)',
      '3-minute highlight film',
      'Sneak peek within 7 days',
      'Online gallery delivery',
    ],
    cta: 'Inquire About Essential',
    highlight: false,
  },
  {
    name: 'Premium',
    subtitle: 'Multi-Day Celebration',
    price: '$5,200',
    note: 'Starting at',
    description:
      'Designed for the full South Asian wedding experience — Sangeet, Baraat, Ceremony, and Reception. One crew, seamlessly across multiple days.',
    features: [
      'Up to 3 days of coverage',
      'Fine-art photo gallery (700+ images)',
      '6-minute cinematic feature film',
      'Ceremony + reception highlight reels',
      'Sneak peek within 7 days',
      'Premium heirloom USB delivery',
    ],
    cta: 'Inquire About Premium',
    highlight: true,
  },
  {
    name: 'The Full Experience',
    subtitle: 'Multi-Day + Live Streaming',
    price: '$7,500',
    note: 'Starting at',
    description:
      'The complete creative package for families who want every moment preserved — and every loved one present, regardless of where they are in the world.',
    features: [
      'Up to 4 days of full coverage',
      'Unlimited fine-art gallery delivery',
      '8-minute cinematic feature film',
      'HD live streaming of ceremonies',
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
    <section id="pricing" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Investment</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish">
            Your Legacy Collection
          </h2>
          <p className="mt-8 max-w-xl text-center font-sans text-base leading-relaxed text-ink/60">
            Every collection is custom-tailored. The prices below are starting
            points — final investment reflects your specific itinerary and vision.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`group relative flex flex-col border transition-all duration-300 ${
                tier.highlight
                  ? 'border-champagne/60 bg-ink text-canvas shadow-[0_20px_80px_rgba(0,0,0,0.22),0_0_0_1px_rgba(197,168,130,0.2)] hover:shadow-[0_24px_100px_rgba(0,0,0,0.28),0_0_40px_rgba(197,168,130,0.12)]'
                  : 'border-ink/12 bg-canvas hover:border-ink/25 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
              }`}
            >
              {/* Premium glow ring */}
              {tier.highlight && (
                <div
                  className="absolute -inset-px rounded-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(197,168,130,0.3) 0%, transparent 50%, rgba(197,168,130,0.15) 100%)',
                    animation: 'pulseGlow 3s ease-in-out infinite',
                  }}
                />
              )}

              {/* Card header */}
              <div
                className={`relative border-b px-8 py-8 ${
                  tier.highlight ? 'border-white/10' : 'border-ink/8'
                }`}
              >
                {tier.highlight && (
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-px w-4 bg-champagne" />
                    <span className="eyebrow text-[0.6rem] text-champagne">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3
                  className={`font-display text-2xl ${
                    tier.highlight ? 'text-canvas' : 'text-ink'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`eyebrow mt-1 text-[0.6rem] ${
                    tier.highlight ? 'text-canvas/40' : 'text-ink/40'
                  }`}
                >
                  {tier.subtitle}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`font-sans text-xs ${
                      tier.highlight ? 'text-canvas/40' : 'text-ink/40'
                    }`}
                  >
                    {tier.note}
                  </span>
                  <span
                    className={`font-display text-4xl ${
                      tier.highlight ? 'text-champagne' : 'text-ink'
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                {/* Flourish separator */}
                <div className="mt-4 flex items-center gap-3">
                  <div className={`h-px w-8 ${tier.highlight ? 'bg-champagne/40' : 'bg-ink/15'}`} />
                </div>
                <p
                  className={`mt-3 font-sans text-sm leading-relaxed ${
                    tier.highlight ? 'text-canvas/55' : 'text-ink/55'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="relative flex flex-1 flex-col px-8 py-8">
                <ul className="flex flex-1 flex-col gap-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      {/* Feature icon — champagne diamond */}
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 ${
                          tier.highlight ? 'bg-champagne' : 'bg-champagne/70'
                        }`}
                      />
                      <span
                        className={`font-sans text-sm leading-relaxed ${
                          tier.highlight ? 'text-canvas/70' : 'text-ink/65'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#inquire"
                  className={`mt-8 block w-full py-4 text-center font-sans text-sm transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-champagne text-ink hover:bg-[#d4b896] hover:shadow-[0_8px_32px_rgba(197,168,130,0.35)] hover:-translate-y-0.5'
                      : 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-canvas hover:-translate-y-0.5'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Flourish divider + note */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4" aria-hidden="true">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-champagne/40" />
            <div className="h-1 w-1 rounded-full bg-champagne/40" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-champagne/40" />
          </div>
          <p className="text-center font-sans text-sm text-ink/40">
            All collections include a private consultation. Final pricing confirmed after we
            map your specific itinerary.
          </p>
        </div>
      </div>
    </section>
  )
}
