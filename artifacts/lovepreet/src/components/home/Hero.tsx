import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 lg:pt-0"
      style={{ backgroundColor: 'var(--linen)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col lg:flex-row lg:items-center px-6 lg:px-10">
        <div className="relative z-10 flex flex-1 flex-col justify-center pt-10 pb-16 lg:py-0 lg:pr-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow text-[0.65rem]"
            style={{ color: 'rgba(31,29,26,0.4)' }}
          >
            Langley &middot; Surrey &middot; Vancouver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6"
          >
            <h1
              className="font-display leading-[1.05]"
              style={{
                color: 'var(--ink)',
                fontSize: 'clamp(3.5rem,7vw,7rem)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              One Vision.
              <br />
              Two Mediums.
              <br />
              <em style={{ color: 'var(--champagne)', paddingRight: '1rem' }}>Captured as One.</em>
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12" style={{ backgroundColor: 'rgba(198,168,124,0.6)' }} />
              <div
                className="h-px flex-1 max-w-[160px]"
                style={{ background: 'linear-gradient(to right, rgba(198,168,124,0.6), transparent)' }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-8 max-w-md font-sans text-base leading-relaxed lg:text-lg text-balance"
            style={{ color: 'rgba(31,29,26,0.6)' }}
          >
            Fine-art photography and heirloom cinema for luxury South Asian
            celebrations — crafted under one creative direction, so you stay
            completely present in every moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            <a
              href="#inquire"
              className="group relative overflow-hidden rounded-full px-10 py-4 font-sans text-[0.8rem] font-medium tracking-wide transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--canvas)',
                boxShadow: '0 0 0 rgba(58,142,159,0)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(58,142,159,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 rgba(58,142,159,0)')}
            >
              <span className="relative z-10">Start the Conversation</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            </a>

            <a
              href="#gallery"
              className="group flex items-center gap-3 eyebrow text-[0.65rem] transition-colors hover:text-ink"
              style={{ color: 'rgba(31,29,26,0.5)' }}
            >
              <span className="relative">
                View Portfolio
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--ink)' }}
                />
              </span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors group-hover:border-ink/30"
                style={{ borderColor: 'rgba(31,29,26,0.1)' }}
              >
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mt-10 w-full lg:mt-0 lg:w-[45%] xl:w-[50%] h-[60vh] lg:h-[85vh] rounded-t-[100px] lg:rounded-t-none lg:rounded-l-[150px] overflow-hidden shadow-2xl"
        >
          <img
            src="/hero-couple.jpg"
            alt="Luxury South Asian Wedding Couple"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[20s] ease-out hover:scale-110"
          />
          <div
            className="absolute inset-0 rounded-t-[100px] lg:rounded-t-none lg:rounded-l-[150px] pointer-events-none"
            style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.1)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{ backgroundColor: 'rgba(197,168,130,0.1)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
