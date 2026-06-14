import { useState, useEffect } from 'react'
import { useInquiry } from '@/components/InquiryContext'

export function StickyMobileCTA() {
  const { open } = useInquiry()
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const showAfter = 400 // Show after scrolling 400px
      setScrolled(window.scrollY > showAfter)
      setIsVisible(window.scrollY > showAfter)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div
        className="mx-auto max-w-[1440px] px-4 py-3 transition-all duration-300"
        style={{
          background: 'linear-gradient(to top, rgba(31,29,26,0.98), rgba(31,29,26,0.95))',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(184,150,95,0.2)',
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="eyebrow text-[0.5rem] text-champagne">Limited 2026 Dates</span>
            <span className="font-sans text-xs text-white/80">Secure your date today</span>
          </div>
          <button
            onClick={open}
            className="rounded-full px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--accent-secondary)',
              color: 'var(--canvas)',
              boxShadow: '0 4px 20px rgba(166,103,116,0.4)',
            }}
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  )
}
