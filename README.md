# dataminers-site

Sitio de Dataminers: estudio de software de iteración rápida, PoCs y procesos con AI. Una sola página (hero, servicios, proceso, manifiesto, contacto) en React 19 + Vite + Tailwind v4.

## Uso

```bash
bun install
bun run dev      # http://localhost:5173
bun run check    # formato, lint, typecheck y tests (obligatorio antes de commitear)
bun run build    # dist/ estático
```

## Contacto

El formulario valida en el cliente y envía según la configuración (`.env.local`, nunca commiteado):

| Variable                | Efecto                                                |
| ----------------------- | ----------------------------------------------------- |
| `VITE_CONTACT_ENDPOINT` | `POST` JSON `{ name, email, idea }` a esa URL         |
| `VITE_CONTACT_EMAIL`    | Sin endpoint: abre un `mailto:` con el mensaje armado |

Sin ninguna de las dos, el formulario muestra "No se pudo enviar (el formulario todavía no tiene destino configurado)".

## Documentación

- [`DESIGN.md`](DESIGN.md): tokens, tipografía y reglas visuales.
- [`CLAUDE.md`](CLAUDE.md): qué leer antes de trabajar y reglas de entrega.
- [`docs/`](docs/README.md): visión y roadmap.
