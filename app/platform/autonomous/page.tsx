import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { AutonomousPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Autonomous Control',
  description:
    'Lemtik coordinates with your building infrastructure to automatically clear response routes, hold elevators, activate surveillance, and coordinate emergency systems.',
  path: '/platform/autonomous',
})

export default function AutonomousPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Platform', path: '/platform' },
        { name: 'Autonomous Control', path: '/platform/autonomous' },
      ])} />
      <AutonomousPageClient />
    </>
  )
}
