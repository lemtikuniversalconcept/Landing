import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ProtectedMovementPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Protected Movement',
  description:
    'Live tracking and alerts for people, vehicles and boats on the move: student safety for institutions and principal tracking for executive protection teams, with no app to install and offline support.',
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
