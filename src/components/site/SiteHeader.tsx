import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { nav } from '@/content/es'
import { setTheme, useTheme } from '@/lib/theme'

const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring'

export function SiteHeader() {
  const theme = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <a
        href="#contenido"
        className="sr-only rounded-sm bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        {nav.skip}
      </a>
      <div className="mx-auto flex max-w-content items-center gap-6 px-6 py-3 lg:px-16 box-content">
        <a
          href="#top"
          className={`font-display text-[1.375rem] leading-7 tracking-[-0.01em] text-ink no-underline ${focus}`}
        >
          Dataminers
        </a>
        <nav aria-label="Principal" className="ml-auto hidden gap-6 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-body-s font-medium text-ink no-underline decoration-brand decoration-2 underline-offset-[6px] hover:underline ${focus}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={() => setTheme(next)}
            aria-label={next === 'dark' ? nav.themeToDark : nav.themeToLight}
            className={`inline-flex size-11 cursor-pointer items-center justify-center rounded-sm text-ink transition-colors duration-120 hover:bg-accent-soft ${focus}`}
          >
            {theme === 'dark' ? (
              <Sun aria-hidden className="size-5" />
            ) : (
              <Moon aria-hidden className="size-5" />
            )}
          </button>
          <div className="hidden sm:block">
            <Button href={nav.cta.href}>{nav.cta.label}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
