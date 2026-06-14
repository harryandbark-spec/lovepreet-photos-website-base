export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-stone-200 rounded" style={{ width: '40%' }} />
      <div className="mt-4 h-8 bg-stone-200 rounded" style={{ width: '70%' }} />
      <div className="mt-3 h-4 bg-stone-200 rounded" style={{ width: '90%' }} />
      <div className="mt-2 h-4 bg-stone-200 rounded" style={{ width: '60%' }} />
    </div>
  )
}

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-stone-200 ${className}`} />
  )
}

export function ButtonSkeleton() {
  return (
    <div className="h-12 w-32 animate-pulse rounded-full bg-stone-200" />
  )
}
