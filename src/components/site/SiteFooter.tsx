import { Strata } from '@/components/ui/Strata'
import { footer } from '@/content/es'
import { Wrap } from './Section'

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-deep pt-16 pb-8 text-cream">
      <Wrap>
        <p className="m-0 font-display text-[clamp(2.5rem,11vw,7.5rem)] leading-[0.9] tracking-[-0.02em]">
          Dataminers
        </p>
        <Strata variant="footer" className="mt-8" />
        <div className="mt-12 flex flex-wrap justify-between gap-4 font-mono text-data text-accent">
          <span>{footer.tagline}</span>
          <nav aria-label="Pie" className="flex gap-6">
            {footer.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-6 mb-0 font-mono text-data text-cream">
          {footer.copyright}
        </p>
      </Wrap>
    </footer>
  )
}
