import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type ProcessStep = {
  /** Mono label after the number: "01 / relevar". */
  label: string
  title: ReactNode
  body?: ReactNode
}

const pad = (n: number) => String(n).padStart(2, '0')

export function ProcessSteps({
  steps,
  className,
}: {
  steps: ProcessStep[]
  className?: string
}) {
  return (
    <ol
      className={cn(
        'm-0 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4',
        className,
      )}
    >
      {steps.map((s, i) => (
        <li
          key={s.label}
          className="grid content-start gap-3 border-t-2 border-ink pt-4"
        >
          <span className="font-mono text-data font-medium text-brand-strong tabular-nums">
            {pad(i + 1)} / {s.label}
          </span>
          <h3 className="m-0 font-display text-display-s font-normal">
            {s.title}
          </h3>
          {s.body && <p className="m-0 text-body-s text-ink-muted">{s.body}</p>}
        </li>
      ))}
    </ol>
  )
}
