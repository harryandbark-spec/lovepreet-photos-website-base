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
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl">
            Your Legacy Collection
          </h2>
          <p className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed text-ink/60">
            Every collection is custom-tailored. The prices below are starting
            points — final investment reflects your specific itinerary and vision.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col border ${
                tier.highlight
                  ? 'border-champagne bg-ink text-canvas shadow-[0_16px_64px_rgba(0,0,0,0.18)]'
                  : 'border-ink/12 bg-canvas'
              }`}
            >
              {/* Card header */}
              <div
                className={`border-b px-8 py-8 ${
                  tier.highlight ? 'border-white/10' : 'border-ink/8'
                }`}
              >
                {tier.highlight && (
                  <span className="eyebrow mb-4 block text-[0.6rem] text-champagne">
                    Most Popular
                  </span>
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
                      tier.highlight ? 'text-canvas' : 'text-ink'
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p
                  className={`mt-4 font-sans text-sm leading-relaxed ${
                    tier.highlight ? 'text-canvas/55' : 'text-ink/55'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col px-8 py-8">
                <ul className="flex flex-1 flex-col gap-3.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                      <span
                        className={`font-sans text-sm leading-relaxed ${
                          tier.highlight ? 'text-canvas/65' : 'text-ink/65'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#inquire"
                  className={`mt-8 block w-full py-3.5 text-center font-sans text-sm transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-champagne text-ink hover:bg-[#d4b896]'
                      : 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-canvas'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-sm text-ink/40">
          All collections include a private consultation. Final pricing confirmed after we
          map your specific itinerary.
        </p>
      </div>
    </section>
  )
}
