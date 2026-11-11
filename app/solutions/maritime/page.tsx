import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { MaritimePageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Lemtik Maritime',
  description:
    'Security for boats with no AIS, jetties, port facilities and cargo: corridor watch, jetty boarding checks, search and rescue planning, ISPS compliance, cargo custody and responder hand-off, on one platform.',
  path: '/solutions/maritime',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Lemtik Maritime', path: '/solutions/maritime' },
]

export default function MaritimePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <MaritimePageClient />
    </>
  )
}
