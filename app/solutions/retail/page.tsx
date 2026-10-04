import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { RetailSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Retail & Commercial',
  description:
    'Security operations for malls, plazas, and retail chains — shared incident visibility across every tenant, verified patrols, and liability-ready documentation.',
  path: '/solutions/retail',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Retail & Commercial', path: '/solutions/retail' },
]

export default function RetailPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <RetailSolutionClient />
    </>
  )
}
