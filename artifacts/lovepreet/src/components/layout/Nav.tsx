import { useState, useEffect } from 'react'
import { useInquiry } from '@/components/InquiryContext'

const NAV_LINKS = [
  { label: 'Our Work', href: '#gallery' },
  { label: 'Ceremonies', href: '#cultural' },
  { label: 'Investment', href: '#pricing' },
  { label: 'Experience', href: '#experience' },
]

export function Nav() {
  const { open: openDrawer } = useInquiry()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handleMq = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handleMq)
    return () => mq.removeEventListener('change', handleMq)
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const desktopHeaderStyle = isDesktop
    ? scrolled
      ? {
          borderBottom: '1px solid rgba(31,29,26,0.05)',
          backgroundColor: 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 2px 32px rgba(0,0,0,0.04)',
        }
      : {
          borderBottom: '1px solid transparent',
          backgroundColor: 'transparent',
        }
    : {}

  const mobileScrolled = !isDesktop && scrolled

  return (
    <header
      className={[
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out',
        !isDesktop && scrolled
          ? 'bg-stone-900/80 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.25)] border-b border-white/10'
          : !isDesktop && !scrolled
          ? 'bg-transparent border-b border-transparent'
          : '',
      ].join(' ')}
      style={desktopHeaderStyle}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" aria-label="Lovepreet Photos & Films — home" className="group flex flex-col items-start justify-center">
          <span
            className="font-display text-2xl italic tracking-wide transition-colors duration-300 group-hover:text-champagne lg:text-3xl"
            style={{ color: mobileScrolled ? 'rgba(255,255,255,0.95)' : 'var(--ink)' }}
          >
            Lovepreet
          </span>
          <span
            className="mt-1 eyebrow text-[0.45rem] tracking-[0.4em] transition-colors duration-300"
            style={{ color: mobileScrolled ? 'rgba(255,255,255,0.45)' : 'rgba(31,29,26,0.5)' }}
          >
            Photos &amp; Films
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-display text-xl italic transition-colors duration-300"
              style={{ color: 'var(--accent-secondary)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: 'var(--accent-secondary)' }}
              />
            </a>
          ))}
        </nav>

        <button
          onClick={openDrawer}
          className="hidden rounded-full px-6 py-2 font-display text-xl italic transition-all duration-300 hover:-translate-y-1 lg:inline-block"
          style={{
            backgroundColor: 'var(--accent-secondary)',
            color: 'var(--canvas)',
          }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 10px 30px rgba(166,103,116,0.35)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
        >
          Check Availability
        </button>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+16043657401"
            className="rounded-full border px-4 py-2 font-sans text-xs transition-colors duration-300"
            style={mobileScrolled
              ? { borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }
              : { borderColor: 'rgba(31,29,26,0.2)', color: 'rgba(31,29,26,0.8)' }
            }
          >
            Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className="h-px w-5 transition-colors duration-300"
              style={{ backgroundColor: mobileScrolled ? 'rgba(255,255,255,0.85)' : 'var(--accent-secondary)' }}
            />
            <span
              className="h-px w-5 transition-colors duration-300"
              style={{ backgroundColor: mobileScrolled ? 'rgba(255,255,255,0.85)' : 'var(--accent-secondary)' }}
            />
            <span
              className="h-px w-3 self-start transition-colors duration-300"
              style={{ backgroundColor: mobileScrolled ? 'rgba(255,255,255,0.85)' : 'var(--accent-secondary)' }}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            opacity: menuOpen ? 1 : 0,
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-[80%] max-w-sm px-8 py-8 shadow-2xl"
          style={{
            backgroundColor: 'var(--linen)',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 420ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="eyebrow text-xs font-medium tracking-[0.28em]" style={{ color: 'rgba(31,29,26,0.4)' }}>
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="text-2xl leading-none transition-colors hover:text-ink"
              style={{ color: 'rgba(31,29,26,0.5)' }}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl italic transition-colors hover:text-ink"
                style={{ color: 'rgba(31,29,26,0.8)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => { setMenuOpen(false); openDrawer() }}
            className="mt-10 w-full rounded-full py-3.5 font-sans text-sm font-light uppercase tracking-[0.15em] transition-all duration-300"
            style={{ backgroundColor: 'var(--accent-secondary)', color: 'var(--canvas)' }}
          >
            Check Availability
          </button>

          <a
            href="tel:+16043657401"
            className="mt-4 block rounded-full border px-6 py-3 text-center eyebrow text-xs tracking-widest"
            style={{
              borderColor: 'rgba(31,29,26,0.2)',
              color: 'rgba(31,29,26,0.7)',
            }}
          >
            +1 604-365-7401
          </a>
        </div>
      </div>
    </header>
  )
}
