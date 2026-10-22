import { Eyebrow } from '@/components/ui/Eyebrow'
import { manifesto } from '@/content/es'
import { Wrap } from './Section'

export function Manifesto() {
  return (
    <section
      id="manifiesto"
      aria-label={manifesto.eyebrow}
      className="border-y border-line bg-surface-raised py-16 lg:py-24"
    >
      <Wrap>
        <figure className="m-0 grid max-w-[55rem] gap-6">
          <Eyebrow>{manifesto.eyebrow}</Eyebrow>
          <blockquote className="m-0">
            <p className="m-0 font-serif text-[1.375rem] leading-9 italic [font-variation-settings:'opsz'_36] lg:text-quote">
              {manifesto.quote}
            </p>
          </blockquote>
          <figcaption className="font-mono text-data text-ink-muted">
            {manifesto.by}
          </figcaption>
        </figure>
      </Wrap>
    </section>
  )
}
