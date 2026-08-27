import type { Metadata } from 'next'
import { DispatchPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Master AI Agent',
  description:
    'Intelligence Engine, Inventory Service, Route Calculator, Proximity Finder, and Autonomous Control coordinated into one decision system — every decision reviewed by a human commander.',
}

export default function DispatchPage() {
  return <DispatchPageClient />
}
