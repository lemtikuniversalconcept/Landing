import { buildMetadata } from '@/lib/seo'
import { HospitalitySolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Hotels & Hospitality',
  description:
    'Protect guests without slowing down hospitality — security operations built for hotels and hospitality venues.',
  path: '/solutions/hospitality',
})

export default function HospitalitySolution() {
  return <HospitalitySolutionClient />
}
