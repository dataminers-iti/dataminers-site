# Design

Extends the WeFaber house design (`~/.claude/standards/DESIGN.md`). Only deviations and product specifics below.
Theme: Dataminers (deep green / vein / mint / cream). Source of truth: the Dataminers design system artifact
(https://claude.ai/artifact/C4aWDMadQWA1p9gsodtNra) — tokens, voice and component guidelines live there; this repo
implements them.

## Principles specific to this product

- Marketing site, one page. Touch first (44 px targets), light + dark, system default, toggle persisted (`dm-theme`).
- The mining metaphor is used once per page at most. No pick-axes, no "AI brain" imagery. The Terminal component is the
  only illustration.
- Mint (`accent`) is scarce: primary action, terminal prompt, selection. Never text on the light surface.
- No ambient motion: the terminal reveals once on entering the viewport; its cursor does not blink.

## Tokens (role → value, contrast vs. its ground)

House role → token in `src/index.css`. Tailwind utilities use the token name (`bg-surface`, `text-ink-muted`).
The default Tailwind palette is removed (`--color-*: initial`): only these exist.

| House role          | Token                                   | Light                                   | Dark                  |
| ------------------- | --------------------------------------- | --------------------------------------- | --------------------- |
| canvas              | `surface`                               | `#fff4e1`                               | `#1a312c`             |
| surface             | `surface-raised`                        | `#fffaf0`                               | `#23413a`             |
| inset               | `surface-sunken`                        | `#f6e8cf`                               | `#142723`             |
| text                | `ink`                                   | `#1a312c` 12.7:1                        | `#fff4e1` 12.7:1      |
| text-muted          | `ink-muted`                             | `#4f5e58` 6.3:1                         | `#b9c9bf` 8.0:1       |
| hairline            | `line` / `line-strong` (controls, ≥3:1) | `#e3d6bf` / `#428475`                   | `#2e4d46` / `#5a9c8c` |
| accent (links)      | `brand-strong`                          | `#2f6156` 6.5:1                         | `#89d7b7` 8.2:1       |
| filled primary + fg | `accent` / `on-accent`                  | `#89d7b7` / `#1a312c` 8.2:1             | same                  |
| identity            | `brand`                                 | `#428475` (4.0:1: fills and ≥24px only) | same                  |
| danger              | `danger`                                | `#a3361f` 6.2:1                         | `#f2a38f` 6.8:1       |
| focus               | `focus-ring`                            | `#1a312c`                               | `#89d7b7`             |

Fixed in both themes: `deep`, `cream` (footer), `code-*` (terminal). Shadow: `shadow-block` (hard, no blur, featured
card and back-to-top only), `shadow-press` (primary button hover).

Type: Dela Gothic One (`font-display`, headlines only), Valley Sans (`font-sans`, UI), Merriweather (`font-serif`,
lede and manifesto), JetBrains Mono (`font-mono`, eyebrows, terminal, data). All self-hosted via `@fontsource*`.
Sizes as `text-display-xl` … `text-data` (same names as the design system). Deviation from house: four families instead
of one UI + one display, by brand decision.

Radii: `rounded-sm` 2 px (buttons, tags, fields), `rounded-md` 6 px (cards, terminal), `rounded-lg` 12 px (form panel).

## Layout and shells

Sticky header (wordmark, anchors from `md`, theme toggle, CTA from `sm`) · content max `max-w-content` (1200 px),
gutter 24 / 64 px · sections `py-16 lg:py-24` · footer on `deep` · back-to-top after the first screen.

## Components (product-specific only)

`src/components/ui`: Button, Tag, Eyebrow, Card, Terminal, ProcessSteps, Field, Strata — same API as the design
system bundle. `src/components/site`: the page sections. Copy lives in `src/content/es.ts`.

## Done checklist additions

- [ ] New copy goes to `src/content/es.ts`, voseo, sentence case, no exclamation marks, no invented numbers.
- [ ] Only one `display-xl` (hero) and one primary button per section.
