import { buildMetadata } from '@/lib/seo'
import { AutonomousPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Autonomous Control',
  description:
    'Lemtik coordinates with your building infrastructure to automatically clear response routes, hold elevators, activate surveillance, and coordinate emergency systems.',
  path: '/platform/autonomous',
})

export default function AutonomousPage() {
  return <AutonomousPageClient />
}
