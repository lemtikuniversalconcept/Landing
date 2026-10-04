import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { IndustrialSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Industrial & Manufacturing',
  description:
    'Security operations for factories, plants, and warehouses — GPS-verified patrols across large floor plans, shift handover logs, and audit-ready incident records.',
  path: '/solutions/industrial',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Industrial & Manufacturing', path: '/solutions/industrial' },
]

export default function IndustrialPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <IndustrialSolutionClient />
    </>
  )
}
