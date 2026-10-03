import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { DispatchPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Master AI Agent',
  description:
    'Intelligence Engine, Inventory Service, Route Calculator, Proximity Finder, and Autonomous Control coordinated into one decision system — every decision reviewed by a human commander.',
  path: '/platform/dispatch',
})

export default function DispatchPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Platform', path: '/platform' },
        { name: 'Master AI Agent', path: '/platform/dispatch' },
      ])} />
      <DispatchPageClient />
    </>
  )
}
