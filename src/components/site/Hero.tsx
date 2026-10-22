import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Strata } from '@/components/ui/Strata'
import { Terminal } from '@/components/ui/Terminal'
import { hero } from '@/content/es'
import { Wrap } from './Section'

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pt-12 pb-12 lg:pt-16">
      <Wrap>
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1
              id="hero-titulo"
              className="m-0 font-display text-display-m font-normal text-balance sm:text-display-l xl:text-display-xl"
            >
              {hero.titleBefore}
              <span className="text-highlight">{hero.titleHighlight}</span>
              {hero.titleAfter}
            </h1>
            <p className="m-0 max-w-[35rem] font-serif text-lede font-light text-ink-muted [font-variation-settings:'opsz'_24]">
              {hero.lede}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" arrow href={hero.primary.href}>
                {hero.primary.label}
              </Button>
              <Button size="lg" variant="ghost" href={hero.secondary.href}>
                {hero.secondary.label}
              </Button>
            </div>
          </div>
          <Terminal
            title={hero.terminal.title}
            status={hero.terminal.status}
            lines={hero.terminal.lines}
          />
        </div>
        <Strata className="mt-16" />
      </Wrap>
    </section>
  )
}
