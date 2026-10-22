import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** Mono label over a section title: uppercase, `//` prefix, brand-strong. */
export function Eyebrow({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <p
      className={cn(
        "m-0 font-mono text-eyebrow font-medium uppercase text-brand-strong before:content-['//_']",
        className,
      )}
    >
      {children}
    </p>
  )
}
