import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CriticalInfrastructureSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Critical Infrastructure',
  description:
    'Coordinated security for power, water, and telecom sites — GPS-verified patrols, instant incident escalation, and audit-ready records across remote and unmanned facilities.',
  path: '/solutions/critical-infrastructure',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Critical Infrastructure', path: '/solutions/critical-infrastructure' },
]

export default function CriticalInfrastructurePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <CriticalInfrastructureSolutionClient />
    </>
  )
}
