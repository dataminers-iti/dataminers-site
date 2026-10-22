import { Card } from '@/components/ui/Card'
import { services } from '@/content/es'
import { Section } from './Section'

export function Services() {
  return (
    <Section id="servicios" eyebrow={services.eyebrow} title={services.title}>
      <div className="grid gap-8 md:grid-cols-3">
        {services.items.map((s) => (
          <Card
            key={s.title}
            eyebrow={s.eyebrow}
            title={s.title}
            tags={s.tags}
            featured={s.featured}
          >
            {s.body}
          </Card>
        ))}
      </div>
    </Section>
  )
}
