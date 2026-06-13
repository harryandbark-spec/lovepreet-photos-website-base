import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInquiry } from './InquiryContext'

type FormData = {
  name: string
  date: string
  venue: string
}

export function InquiryDrawer() {
  const { isOpen, close } = useInquiry()
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<FormData>({
    name: '',
    date: '',
    venue: '',
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    setSubmitted(false)
    setData({ name: '', date: '', venue: '' })
    close()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' }}
            onClick={handleClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-full w-full flex-col overflow-y-auto sm:max-w-[540px]"
            style={{ backgroundColor: 'var(--canvas)' }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-ink/5"
              aria-label="Close inquiry"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--ink)' }} />
              </svg>
            </button>

            <div className="flex flex-1 flex-col px-8 py-20 sm:px-12 lg:px-16">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-1 flex-col justify-center"
                >
                  <span className="font-display text-6xl italic" style={{ color: 'rgba(184,150,95,0.25)' }}>
                    &ldquo;
                  </span>
                  <p className="mt-2 font-display text-3xl italic text-ink" style={{ fontWeight: 500 }}>
                    Thank you.
                  </p>
                  <p className="mt-6 max-w-sm font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.6)' }}>
                    Your inquiry has been received. We&apos;ll be in touch within 48 hours to schedule your private consultation.
                  </p>
                  <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(31,29,26,0.06)' }}>
                    <p className="eyebrow text-xs tracking-[0.2em]" style={{ color: 'rgba(31,29,26,0.3)' }}>
                      Lovepreet Photos &amp; Films
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="flex flex-1 flex-col"
                >
                  <span className="eyebrow text-[0.65rem] text-champagne">Private Inquiry</span>
                  <h2 className="mt-4 font-display text-3xl italic text-ink lg:text-4xl" style={{ fontWeight: 500 }}>
                    Start the Conversation
                  </h2>
                  <p className="mt-4 max-w-sm font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.55)' }}>
                    Dates across the Lower Mainland book up to a year in advance. Let us know a few details and we&apos;ll be in touch.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="inquiry-name"
                        className="font-display text-sm italic"
                        style={{ color: 'rgba(31,29,26,0.4)' }}
                      >
                        Name
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                        placeholder="Your name"
                        required
                        className="w-full border-0 border-b bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-ink/20 transition-colors duration-300 focus:border-ink/40 focus:outline-none"
                        style={{ borderBottomWidth: '1px', borderBottomColor: 'rgba(31,29,26,0.15)' }}
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="inquiry-date"
                        className="font-display text-sm italic"
                        style={{ color: 'rgba(31,29,26,0.4)' }}
                      >
                        Wedding Date
                      </label>
                      <input
                        id="inquiry-date"
                        type="text"
                        value={data.date}
                        onChange={(e) => setData((d) => ({ ...d, date: e.target.value }))}
                        placeholder="e.g. June 20, 2026"
                        required
                        className="w-full border-0 border-b bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-ink/20 transition-colors duration-300 focus:border-ink/40 focus:outline-none"
                        style={{ borderBottomWidth: '1px', borderBottomColor: 'rgba(31,29,26,0.15)' }}
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="inquiry-venue"
                        className="font-display text-sm italic"
                        style={{ color: 'rgba(31,29,26,0.4)' }}
                      >
                        Venue Location
                      </label>
                      <input
                        id="inquiry-venue"
                        type="text"
                        value={data.venue}
                        onChange={(e) => setData((d) => ({ ...d, venue: e.target.value }))}
                        placeholder="e.g. Vancouver, Langley, Surrey"
                        required
                        className="w-full border-0 border-b bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-ink/20 transition-colors duration-300 focus:border-ink/40 focus:outline-none"
                        style={{ borderBottomWidth: '1px', borderBottomColor: 'rgba(31,29,26,0.15)' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="magnetic-hover mt-6 w-full rounded-full px-8 py-4 font-sans text-[0.85rem] font-medium tracking-wide transition-all duration-500"
                      style={{
                        backgroundColor: 'var(--accent-secondary)',
                        color: 'var(--canvas)',
                      }}
                    >
                      Send Inquiry
                    </button>
                  </form>

                  <div className="mt-auto pt-12">
                    <p className="font-sans text-xs" style={{ color: 'rgba(31,29,26,0.3)' }}>
                      Prefer to talk?{' '}
                      <a
                        href="tel:+16043657401"
                        className="transition-colors duration-300 hover:text-ink"
                        style={{ color: 'rgba(31,29,26,0.5)' }}
                      >
                        +1 604-365-7401
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
