import { buildMetadata } from '@/lib/seo'
import { softwareApplicationSchema, breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { PlatformPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Platform',
  description:
    'One operational platform. Incident reporting, patrol management, access control, vehicle tracking, and asset records unified into one command environment.',
  path: '/platform',
})

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Platform', path: '/platform' },
      ])} />
      <PlatformPageClient />
    </>
  )
}
