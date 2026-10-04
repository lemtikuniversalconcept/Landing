import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { GovernmentSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Government',
  description:
    'Civilian-grade C4I, built for public safety scale — security operations for government and public safety deployments.',
  path: '/solutions/government',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Government', path: '/solutions/government' },
]

export default function GovernmentSolution() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <GovernmentSolutionClient />
    </>
  )
}
