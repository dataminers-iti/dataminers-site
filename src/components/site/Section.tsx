import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/cn'

/** Page width: content-max with a 24 / 64 px gutter. */
export function Wrap({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'mx-auto box-content max-w-content px-6 lg:px-16',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** A page section: eyebrow + display-l title, then content. */
export function Section({
  id,
  eyebrow,
  title,
  className,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  className?: string
  children: ReactNode
}) {
  const headingId = `${id}-titulo`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('py-16 lg:py-24', className)}
    >
      <Wrap>
        <div className="mb-12 grid max-w-measure gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id={headingId}
            className="m-0 font-display text-display-m font-normal lg:text-display-l"
          >
            {title}
          </h2>
        </div>
        {children}
      </Wrap>
    </section>
  )
}
