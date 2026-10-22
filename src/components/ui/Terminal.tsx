import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'
import { dur, easeOut, step } from '@/lib/motion'

export type TerminalLine = {
  kind: 'cmd' | 'ok' | 'info' | 'next'
  text: string
}

const PREFIX: Record<TerminalLine['kind'], string> = {
  cmd: '$',
  ok: '[ok]',
  info: '..',
  next: '->',
}

/**
 * A process told as console output. Lines reveal once when it enters the
 * viewport; reduced motion shows them at once. The cursor does not blink
 * (house: nothing loops).
 */
export function Terminal({
  title,
  status,
  lines,
  className,
}: {
  title: string
  status?: string
  lines: TerminalLine[]
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <figure
      className={cn(
        'm-0 overflow-hidden rounded-md border border-line bg-code-surface font-mono text-code-ink',
        className,
      )}
    >
      <figcaption className="flex items-center justify-between gap-3 border-b border-code-line px-4 py-2 text-[0.75rem] leading-4 text-code-muted">
        <span>{title}</span>
        {status && (
          <span className="inline-flex items-center gap-2 text-accent">
            <span aria-hidden className="size-1.5 rounded-full bg-current" />
            {status}
          </span>
        )}
      </figcaption>
      <pre className="m-0 overflow-x-auto p-4 font-mono text-code whitespace-pre-wrap">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            className={cn(
              'flex gap-2',
              l.kind === 'info' ? 'text-code-muted' : 'text-code-ink',
            )}
            initial={reduce ? false : { opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: dur.layout,
              ease: easeOut,
              delay: i * step,
            }}
          >
            <span
              className={cn(
                'min-w-[4ch] flex-none',
                l.kind === 'info' ? 'text-code-muted' : 'text-accent',
              )}
            >
              {PREFIX[l.kind]}
            </span>
            <span>{l.text}</span>
          </motion.div>
        ))}
        <span
          aria-hidden
          className="mt-1 inline-block h-[18px] w-[9px] bg-accent align-middle"
        />
      </pre>
    </figure>
  )
}
