import { useRef, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Field } from '@/components/ui/Field'
import { Tag } from '@/components/ui/Tag'
import { contact } from '@/content/es'
import {
  sendContact,
  validateContact,
  type ContactField,
  type ContactInput,
} from '@/lib/contact'
import { Wrap } from './Section'

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'mailto' }
  | { kind: 'error'; reason: string }

const FIELDS: ContactField[] = ['name', 'email', 'idea']
const EMPTY: ContactInput = { name: '', email: '', idea: '' }
const NONE: Record<ContactField, boolean> = {
  name: false,
  email: false,
  idea: false,
}

export function Contact() {
  const [values, setValues] = useState<ContactInput>(EMPTY)
  const [touched, setTouched] = useState(NONE)
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const refs = useRef<
    Partial<Record<ContactField, HTMLInputElement | HTMLTextAreaElement | null>>
  >({})

  const issues = validateContact(values)
  const errorOf = (f: ContactField) =>
    touched[f] ? issues.find((i) => i.field === f)?.message : undefined

  const bind = (f: ContactField) => ({
    name: f,
    value: values[f],
    onChange: (e: { target: { value: string } }) => {
      setValues((v) => ({ ...v, [f]: e.target.value }))
      setStatus((s) => (s.kind === 'sending' ? s : { kind: 'idle' }))
      // Validate while typing once the visitor has started on the field.
      if (e.target.value.length > 0) setTouched((t) => ({ ...t, [f]: true }))
    },
    onBlur: () => setTouched((t) => ({ ...t, [f]: true })),
    error: errorOf(f),
  })

  const focusField = (f: ContactField) => refs.current[f]?.focus()

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status.kind === 'sending') return
    if (issues.length > 0) {
      setTouched({ name: true, email: true, idea: true })
      focusField(issues[0].field)
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const result = await sendContact(values)
      setStatus({ kind: result })
      if (result === 'sent') {
        setValues(EMPTY)
        setTouched(NONE)
      }
    } catch (err) {
      setStatus({
        kind: 'error',
        reason: err instanceof Error ? err.message : 'error desconocido',
      })
    }
  }

  const f = contact.fields

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="py-16 lg:py-24"
    >
      <Wrap className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-6">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2
            id="contacto-titulo"
            className="m-0 font-display text-display-m font-normal text-balance"
          >
            {contact.title}
          </h2>
          <p className="m-0 max-w-[27.5rem] text-ink-muted">{contact.body}</p>
          <div className="flex flex-wrap gap-3">
            <Tag tone="brand">{contact.tags[0]}</Tag>
            <Tag>{contact.tags[1]}</Tag>
          </div>
        </div>

        <form
          noValidate
          onSubmit={onSubmit}
          className="grid gap-5 rounded-lg border border-line bg-surface-raised p-6 sm:p-8"
        >
          <Field
            label={f.name.label}
            placeholder={f.name.placeholder}
            hint={f.name.hint}
            autoComplete="name"
            ref={(el) => {
              refs.current.name = el
            }}
            {...bind('name')}
          />
          <Field
            label={f.email.label}
            placeholder={f.email.placeholder}
            hint={f.email.hint}
            type="email"
            inputMode="email"
            autoComplete="email"
            ref={(el) => {
              refs.current.email = el
            }}
            {...bind('email')}
          />
          <Field
            multiline
            label={f.idea.label}
            placeholder={f.idea.placeholder}
            hint={f.idea.hint}
            ref={(el) => {
              refs.current.idea = el
            }}
            {...bind('idea')}
          />

          <div aria-live="polite" className="text-label">
            {status.kind === 'sent' ? (
              <p className="m-0 font-semibold text-brand-strong">
                {contact.sent}
              </p>
            ) : status.kind === 'mailto' ? (
              <p className="m-0 font-semibold text-brand-strong">
                {contact.mailto}
              </p>
            ) : status.kind === 'error' ? (
              <p className="m-0 font-semibold text-danger">
                {contact.failed(status.reason)}
              </p>
            ) : issues.length === 0 ? (
              <p className="m-0 text-ink-muted">{contact.ready}</p>
            ) : (
              <div className="grid gap-1">
                <p className="m-0 font-semibold text-ink">
                  {contact.summaryTitle}
                </p>
                <ul className="m-0 grid list-none gap-1 p-0">
                  {FIELDS.flatMap((field) =>
                    issues
                      .filter((i) => i.field === field)
                      .map((i) => (
                        <li key={i.field}>
                          <button
                            type="button"
                            onClick={() => focusField(i.field)}
                            className="cursor-pointer text-left text-ink-muted underline decoration-line-strong underline-offset-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                          >
                            {i.message}
                          </button>
                        </li>
                      )),
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" arrow aria-busy={status.kind === 'sending'}>
              {status.kind === 'sending'
                ? contact.sending
                : status.kind === 'error'
                  ? contact.retry
                  : contact.submit}
            </Button>
          </div>
          <p className="m-0 text-label text-ink-muted">{contact.privacy}</p>
        </form>
      </Wrap>
    </section>
  )
}
