export type ContactInput = {
  name: string
  email: string
  idea: string
}

export type ContactField = keyof ContactInput

export type ContactIssue = {
  field: ContactField
  message: string
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const IDEA_MIN = 20

/** What is missing or doesn't add up, in field order. Empty = ready to send. */
export function validateContact(v: ContactInput): ContactIssue[] {
  const issues: ContactIssue[] = []
  const name = v.name.trim()
  const email = v.email.trim()
  const idea = v.idea.trim()

  if (!name) issues.push({ field: 'name', message: 'Falta tu nombre.' })
  else if (name.length < 2)
    issues.push({ field: 'name', message: 'El nombre es muy corto.' })

  if (!email) issues.push({ field: 'email', message: 'Falta tu email.' })
  else if (!EMAIL.test(email))
    issues.push({
      field: 'email',
      message: 'El email no parece válido: revisá la @ y el dominio.',
    })

  if (!idea)
    issues.push({
      field: 'idea',
      message: 'Falta contarnos qué querés resolver.',
    })
  else if (idea.length < IDEA_MIN)
    issues.push({
      field: 'idea',
      message: `Contanos un poco más: al menos ${IDEA_MIN} caracteres.`,
    })

  return issues
}

export type SendResult = 'sent' | 'mailto'

/**
 * Sends the idea. With VITE_CONTACT_ENDPOINT it POSTs JSON there; with only
 * VITE_CONTACT_EMAIL it opens the visitor's mail client. Neither: throws.
 */
export async function sendContact(
  v: ContactInput,
  env: { endpoint?: string; email?: string } = {
    endpoint: import.meta.env.VITE_CONTACT_ENDPOINT,
    email: import.meta.env.VITE_CONTACT_EMAIL,
  },
): Promise<SendResult> {
  const payload = {
    name: v.name.trim(),
    email: v.email.trim(),
    idea: v.idea.trim(),
  }

  if (env.endpoint) {
    const res = await fetch(env.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`el servidor respondió ${res.status}`)
    return 'sent'
  }

  if (env.email) {
    const subject = encodeURIComponent(`Idea de ${payload.name}`)
    const body = encodeURIComponent(
      `${payload.idea}\n\n${payload.name} · ${payload.email}`,
    )
    window.location.href = `mailto:${env.email}?subject=${subject}&body=${body}`
    return 'mailto'
  }

  throw new Error('el formulario todavía no tiene destino configurado')
}
