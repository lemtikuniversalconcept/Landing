import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CorporateSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Corporate Offices',
  description:
    'Security operations your board can actually see — enterprise security operations for corporate offices.',
  path: '/solutions/corporate',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Corporate Offices', path: '/solutions/corporate' },
]

export default function CorporateSolution() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <CorporateSolutionClient />
    </>
  )
}
