import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ProtectedMovementPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Protected Movement',
  description:
    'In development: tracking and alerts for people on the move — student safety for institutions, and principal tracking for executive protection teams.',
  path: '/solutions/protected-movement',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Protected Movement', path: '/solutions/protected-movement' },
]

export default function ProtectedMovementPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <ProtectedMovementPageClient />
    </>
  )
}
