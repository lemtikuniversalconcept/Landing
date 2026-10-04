import { buildMetadata } from '@/lib/seo'
import { softwareApplicationSchema, breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PlatformPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Platform',
  description:
    'One operational platform. Incident reporting, patrol management, access control, vehicle tracking, and asset records unified into one command environment.',
  path: '/platform',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/platform' },
]

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PlatformPageClient />
    </>
  )
}
