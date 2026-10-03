import { buildMetadata } from '@/lib/seo'
import { DispatchPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Master AI Agent',
  description:
    'Intelligence Engine, Inventory Service, Route Calculator, Proximity Finder, and Autonomous Control coordinated into one decision system — every decision reviewed by a human commander.',
  path: '/platform/dispatch',
})

export default function DispatchPage() {
  return <DispatchPageClient />
}
