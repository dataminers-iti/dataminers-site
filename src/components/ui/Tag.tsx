import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'neutral' | 'brand' | 'accent' | 'ink'

const tones: Record<Tone, string> = {
  neutral: 'bg-surface-raised border-line text-ink-muted',
  brand: 'bg-accent-soft border-transparent text-brand-strong',
  accent: 'bg-accent border-transparent text-on-accent',
  ink: 'bg-ink border-transparent text-surface',
}

export function Tag({
  tone = 'neutral',
  live = false,
  className,
  children,
}: {
  tone?: Tone
  /** Leading dot: only for something actually running. */
  live?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex h-6 items-center gap-2 whitespace-nowrap rounded-sm border px-2 font-mono text-[0.75rem] leading-4 font-medium tracking-[0.02em]',
        tones[tone],
        className,
      )}
    >
      {live && (
        <span aria-hidden className="size-1.5 rounded-full bg-current" />
      )}
      {children}
    </span>
  )
}
