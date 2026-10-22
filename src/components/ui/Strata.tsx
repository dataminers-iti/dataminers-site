import { cn } from '@/lib/cn'

/**
 * The brand device: horizontal bands of unequal width, like rock layers.
 * Only under the hero and in the footer.
 */
export function Strata({
  variant = 'hero',
  className,
}: {
  variant?: 'hero' | 'footer'
  className?: string
}) {
  const bands =
    variant === 'hero'
      ? ['w-full bg-ink', 'w-[72%] bg-brand', 'ml-[34%] w-[38%] bg-accent']
      : ['w-full bg-brand', 'w-[64%] bg-accent', 'w-[22%] bg-cream']

  return (
    <div aria-hidden className={cn('grid gap-2', className)}>
      {bands.map((b) => (
        <i key={b} className={cn('block h-3 rounded-sm', b)} />
      ))}
    </div>
  )
}
