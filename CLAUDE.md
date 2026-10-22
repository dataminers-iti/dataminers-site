# dataminers-site

Marketing site for Dataminers. Static SPA: React 19 + React Compiler, Vite 8, Tailwind v4, motion, lucide-react.

## Read before working

| Touching…            | Read first                                            |
| -------------------- | ----------------------------------------------------- |
| Any UI, copy, colors | `DESIGN.md`, then the design system artifact it links |
| Contact form         | `src/lib/contact.ts` and its tests in `tests/`        |
| Roadmap, scope       | `docs/README.md`                                      |

## Rules

- Bun only. `bun run check` (format, lint, typecheck, tests) must pass before every commit.
- Tokens only: no hex or Tailwind palette colors in components (the default palette is removed on purpose).
- Copy only in `src/content/es.ts`.
- Base branch is `dev`. Branch → PR → review → merge. Version in `package.json`, commits `<type>(<scope>): <msg> [v<version>]`.
- `.env.local` holds `VITE_CONTACT_*`; never commit it.
