import { useId, type ComponentProps, type ReactNode, type Ref } from 'react'
import { cn } from '@/lib/cn'

type Base = {
  label: ReactNode
  /** Why we ask, not the field's name. */
  hint?: ReactNode
  /** Replaces the hint and marks the control aria-invalid. */
  error?: ReactNode
  className?: string
}

type InputProps = Base & {
  multiline?: false
  ref?: Ref<HTMLInputElement>
} & Omit<ComponentProps<'input'>, keyof Base | 'ref'>

type TextareaProps = Base & {
  multiline: true
  ref?: Ref<HTMLTextAreaElement>
} & Omit<ComponentProps<'textarea'>, keyof Base | 'ref'>

const control =
  'w-full rounded-sm border-2 bg-surface-sunken px-4 font-sans text-body text-ink placeholder:text-ink-muted ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring'

export function Field(props: InputProps | TextareaProps) {
  const autoId = useId()
  const { label, hint, error, className, id = autoId } = props
  const msgId = `${id}-msg`
  const aria = {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error || hint ? msgId : undefined,
  }
  const border = error ? 'border-danger' : 'border-line-strong'

  let el: ReactNode
  if (props.multiline) {
    const {
      label: _l,
      hint: _h,
      error: _e,
      className: _c,
      multiline: _m,
      ...rest
    } = props
    el = (
      <textarea
        {...rest}
        {...aria}
        className={cn(control, border, 'min-h-32 resize-y py-3')}
      />
    )
  } else {
    const {
      label: _l,
      hint: _h,
      error: _e,
      className: _c,
      multiline: _m,
      ...rest
    } = props
    el = <input {...rest} {...aria} className={cn(control, border, 'h-11')} />
  }

  return (
    <div className={cn('grid gap-2', className)}>
      <label htmlFor={id} className="text-label font-semibold text-ink">
        {label}
      </label>
      {el}
      {error ? (
        <p id={msgId} className="m-0 text-label font-semibold text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={msgId} className="m-0 text-label text-ink-muted">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
