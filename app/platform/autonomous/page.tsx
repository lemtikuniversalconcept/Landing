import type { Metadata } from 'next'
import { AutonomousPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Autonomous Control',
  description:
    'Lemtik coordinates with your building infrastructure to automatically clear response routes, hold elevators, activate surveillance, and coordinate emergency systems.',
}

export default function AutonomousPage() {
  return <AutonomousPageClient />
}
