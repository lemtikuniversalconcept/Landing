import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SecurityPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Security & Compliance',
  description:
    'Encryption, role-based access, an append-only audit trail, and data isolation per organisation — how Lemtik protects operational data, and where compliance stands today.',
  path: '/platform/security',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/platform' },
  { name: 'Security & Compliance', path: '/platform/security' },
]

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <SecurityPageClient />
    </>
  )
}
