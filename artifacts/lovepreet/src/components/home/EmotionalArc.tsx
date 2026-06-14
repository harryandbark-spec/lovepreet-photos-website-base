import { RevealOnScroll } from '@/components/RevealOnScroll'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const PHASES = [
  {
    number: '01',
    phase: 'Morning Preparation',
    title: 'Anticipation & Intimacy',
    body: 'The quiet moments before the ceremony begins. The getting ready rituals, the family gatherings, the nervous laughter and the tears that haven\'t fallen yet. We document this chapter without intrusion.',
    img: 'placeholder',
    align: 'left',
  },
  {
    number: '02',
    phase: 'The Ceremony',
    title: 'Reverence & Joy',
    body: 'From the sacred vows to the dancing baraat, we move fluidly between meditative stillness and kinetic energy. The ceremony is captured with the gravity it deserves — every ritual, every emotion.',
    img: 'placeholder',
    align: 'right',
  },
  {
    number: '03',
    phase: 'The Portraits',
    title: 'Editorial & Eternal',
    body: 'Golden-hour light, architectural frames, and the natural chemistry between you two. Our portrait sessions are short, intentional, and designed to create heirloom images — not just photographs.',
    img: 'placeholder',
    align: 'left',
  },
  {
    number: '04',
    phase: 'The Reception',
    title: 'Celebration & Release',
    body: 'The night unfolds into pure celebration. First dances, speeches that bring the room to tears, the floor erupting with the entire family. We are everywhere and nowhere — present but invisible.',
    img: 'placeholder',
    align: 'right',
  },
]

export function EmotionalArc() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={sectionRef} className="py-20 lg:py-28" style={{ backgroundColor: 'var(--linen)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <RevealOnScroll className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-[0.65rem] text-champagne"
          >
            The Story Arc
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl"
            style={{ fontWeight: 500 }}
          >
            The Emotional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed"
            style={{ color: 'rgba(31,29,26,0.6)' }}
          >
            A wedding day has a natural rhythm — a sequence of emotions that builds,
            peaks, and settles into something deeply felt. We follow that arc deliberately.
          </motion.p>
        </RevealOnScroll>

        <div className="mt-16 flex flex-col gap-0">
          {PHASES.map((phase, i) => {
            const phaseRef = useRef<HTMLDivElement>(null)
            const { scrollYProgress: phaseScroll } = useScroll({
              target: phaseRef,
              offset: ["start end", "end start"]
            })
            const y = useTransform(phaseScroll, [0, 1], [0, -20])
            const scale = useTransform(phaseScroll, [0, 0.5, 1], [1, 1.02, 1])

            return (
              <motion.div
                key={phase.number}
                ref={phaseRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="grid items-center gap-0 border-t lg:grid-cols-2"
                style={{
                  borderColor: 'rgba(31,29,26,0.08)',
                  borderBottom: i === PHASES.length - 1 ? '1px solid rgba(31,29,26,0.08)' : undefined,
                }}
              >
                <motion.div
                  style={{ y, scale, order: phase.align === 'right' ? 2 : 1 }}
                  className="relative overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden film-grain warm-tint">
                    {phase.img === 'placeholder' ? (
                      <div className="flex h-full w-full items-center justify-center" style={{ backgroundColor: 'var(--linen)' }}>
                        <span className="font-display text-2xl italic" style={{ color: 'rgba(31,29,26,0.3)' }}>
                          Placeholder Image
                        </span>
                      </div>
                    ) : (
                      <motion.img
                        src={phase.img}
                        alt={phase.phase}
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: phase.align === 'right' ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-center px-0 py-10"
                  style={{
                    order: phase.align === 'right' ? 1 : 2,
                    paddingLeft: phase.align === 'right' ? undefined : '3.5rem',
                    paddingRight: phase.align === 'right' ? '3.5rem' : undefined,
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                      className="font-display text-4xl italic"
                      style={{ color: 'rgba(198,168,124,0.4)' }}
                    >
                      {phase.number}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 + 0.4 }}
                      className="eyebrow text-[0.6rem]"
                      style={{ color: 'rgba(31,29,26,0.4)' }}
                    >
                      {phase.phase}
                    </motion.span>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.5 }}
                    className="mt-4 font-display text-2xl text-ink lg:text-3xl"
                    style={{ fontWeight: 500 }}
                  >
                    {phase.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.6 }}
                    className="mt-4 max-w-md font-sans text-base leading-relaxed"
                    style={{ color: 'rgba(31,29,26,0.65)' }}
                  >
                    {phase.body}
                  </motion.p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
