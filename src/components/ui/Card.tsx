import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Eyebrow } from './Eyebrow'
import { Tag } from './Tag'

export function Card({
  eyebrow,
  title,
  tags,
  featured = false,
  className,
  children,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  tags?: string[]
  /** 2px ink border + shadow-block. One per grid. */
  featured?: boolean
  className?: string
  children?: ReactNode
}) {
  return (
    <article
      className={cn(
        'grid content-start gap-3 rounded-md bg-surface-raised p-6',
        featured ? 'border-2 border-ink shadow-block' : 'border border-line',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h3 className="m-0 font-display text-display-s font-normal">{title}</h3>
      {children && <p className="m-0 text-body-s text-ink-muted">{children}</p>}
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </article>
  )
}
