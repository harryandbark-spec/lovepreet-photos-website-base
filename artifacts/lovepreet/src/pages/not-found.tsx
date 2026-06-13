import { Link } from 'wouter'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <span className="font-display text-8xl italic" style={{ color: 'rgba(198,168,124,0.3)' }}>404</span>
      <h1 className="mt-4 font-display text-3xl italic text-ink">Page not found</h1>
      <p className="mt-4 font-sans text-base" style={{ color: 'rgba(31,29,26,0.6)' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full px-8 py-3 font-sans text-sm transition-all duration-300 hover:-translate-y-0.5"
        style={{ backgroundColor: 'var(--accent-secondary)', color: 'var(--canvas)' }}
      >
        Back to home
      </Link>
    </div>
  )
}
