import type { Metadata } from 'next'
import { HospitalitySolutionClient } from './page-client'

export const metadata: Metadata = {
  title: 'Hotels & Hospitality',
  description:
    'Protect guests without slowing down hospitality — security operations built for hotels and hospitality venues.',
}

export default function HospitalitySolution() {
  return <HospitalitySolutionClient />
}
