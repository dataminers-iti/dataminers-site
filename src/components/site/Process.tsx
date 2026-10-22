import { ProcessSteps } from '@/components/ui/ProcessSteps'
import { process } from '@/content/es'
import { Section } from './Section'

export function Process() {
  return (
    <Section id="proceso" eyebrow={process.eyebrow} title={process.title}>
      <ProcessSteps steps={process.steps} />
    </Section>
  )
}
