import type { Metadata } from 'next'
import { GovernmentSolutionClient } from './page-client'

export const metadata: Metadata = {
  title: 'Government',
  description:
    'Civilian-grade C4I, built for public safety scale — security operations for government and public safety deployments.',
}

export default function GovernmentSolution() {
  return <GovernmentSolutionClient />
}
