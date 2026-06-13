import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.png"
          alt="Lovepreet Photos & Films"
          width={200}
          height={64}
          priority
          className="mb-8 h-12 w-auto object-contain opacity-80"
        />
        <div className="flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
