import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AutonomousPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Autonomous Control',
  description:
    'Lemtik coordinates with your building infrastructure to clear response routes, hold elevators, and activate surveillance during an incident.',
  path: '/platform/autonomous',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/platform' },
  { name: 'Autonomous Control', path: '/platform/autonomous' },
]

export default function AutonomousPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <AutonomousPageClient />
    </>
  )
}
