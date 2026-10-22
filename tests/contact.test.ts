import { describe, expect, test } from 'bun:test'
import { IDEA_MIN, sendContact, validateContact } from '../src/lib/contact'

const ok = {
  name: 'Ana Pérez',
  email: 'ana@empresa.com',
  idea: 'Clasificar los reclamos que llegan por email.',
}

describe('validateContact', () => {
  test('valid input has no issues', () => {
    expect(validateContact(ok)).toEqual([])
  })

  test('empty form lists every field as missing, in order', () => {
    const issues = validateContact({ name: '', email: '', idea: '' })
    expect(issues.map((i) => i.field)).toEqual(['name', 'email', 'idea'])
    expect(issues[0].message).toBe('Falta tu nombre.')
  })

  test('whitespace counts as empty', () => {
    const issues = validateContact({ ...ok, name: '   ' })
    expect(issues).toEqual([{ field: 'name', message: 'Falta tu nombre.' }])
  })

  test('rejects an email without @ or domain', () => {
    for (const email of [
      'ana.empresa.com',
      'ana@',
      'ana@empresa',
      'ana @x.com',
    ]) {
      expect(validateContact({ ...ok, email }).map((i) => i.field)).toEqual([
        'email',
      ])
    }
  })

  test('idea needs a minimum length', () => {
    const short = 'x'.repeat(IDEA_MIN - 1)
    expect(validateContact({ ...ok, idea: short })[0].field).toBe('idea')
    expect(validateContact({ ...ok, idea: 'x'.repeat(IDEA_MIN) })).toEqual([])
  })
})

describe('sendContact', () => {
  test('throws when nothing is configured', async () => {
    await expect(sendContact(ok, {})).rejects.toThrow('destino configurado')
  })

  test('posts trimmed JSON to the endpoint', async () => {
    const calls: Array<[string, RequestInit]> = []
    const original = globalThis.fetch
    globalThis.fetch = (async (url: string, init: RequestInit) => {
      calls.push([url, init])
      return new Response(null, { status: 204 })
    }) as typeof fetch
    try {
      const result = await sendContact(
        { ...ok, name: ' Ana ' },
        { endpoint: '/api/contacto' },
      )
      expect(result).toBe('sent')
      expect(calls[0][0]).toBe('/api/contacto')
      expect(JSON.parse(String(calls[0][1].body)).name).toBe('Ana')
    } finally {
      globalThis.fetch = original
    }
  })

  test('surfaces the server status on failure', async () => {
    const original = globalThis.fetch
    globalThis.fetch = (async () =>
      new Response(null, { status: 502 })) as unknown as typeof fetch
    try {
      await expect(sendContact(ok, { endpoint: '/x' })).rejects.toThrow('502')
    } finally {
      globalThis.fetch = original
    }
  })
})
