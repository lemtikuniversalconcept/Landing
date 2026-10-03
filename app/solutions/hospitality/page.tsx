import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { HospitalitySolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Hotels & Hospitality',
  description:
    'Protect guests without slowing down hospitality — security operations built for hotels and hospitality venues.',
  path: '/solutions/hospitality',
})

export default function HospitalitySolution() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Hotels & Hospitality', path: '/solutions/hospitality' },
      ])} />
      <HospitalitySolutionClient />
    </>
  )
}
