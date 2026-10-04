import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { DispatchPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Master AI Agent',
  description:
    'Intelligence, inventory, routing, and autonomous control coordinated into one decision system — every decision reviewed by a human commander.',
  path: '/platform/dispatch',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/platform' },
  { name: 'Master AI Agent', path: '/platform/dispatch' },
]

export default function DispatchPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <DispatchPageClient />
    </>
  )
}
