import { ArrowRight } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type Common = {
  /** primary = accent fill, one per area. */
  variant?: Variant
  /** lg only in the hero and CTA bands. */
  size?: Size
  /** Appends Lucide arrow-right: the button leads somewhere. */
  arrow?: boolean
  className?: string
  children: ReactNode
}

type AsButton = Common &
  Omit<ComponentProps<'button'>, keyof Common> & { href?: undefined }
type AsLink = Common &
  Omit<ComponentProps<'a'>, keyof Common> & { href: string }

const base =
  'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border-2 font-semibold no-underline cursor-pointer ' +
  'transition-[translate,scale,box-shadow,background-color,border-color] duration-120 ease-out active:scale-[0.98] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent border-accent text-on-accent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-press',
  secondary:
    'bg-ink border-ink text-surface hover:bg-brand-strong hover:border-brand-strong',
  ghost: 'bg-transparent border-line-strong text-ink hover:bg-accent-soft',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-body-s',
  lg: 'h-13 px-6 text-body',
}

export function Button(props: AsButton | AsLink) {
  const {
    variant = 'primary',
    size = 'md',
    arrow = false,
    className,
    children,
    ...rest
  } = props
  const cls = cn(base, variants[variant], sizes[size], className)
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-[18px] transition-transform duration-120 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      )}
    </>
  )

  if (rest.href !== undefined) {
    return (
      <a {...(rest as ComponentProps<'a'>)} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <button
      type="button"
      {...(rest as ComponentProps<'button'>)}
      className={cls}
    >
      {inner}
    </button>
  )
}
