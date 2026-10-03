import { buildMetadata } from '@/lib/seo'
import { GovernmentSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Government',
  description:
    'Civilian-grade C4I, built for public safety scale — security operations for government and public safety deployments.',
  path: '/solutions/government',
})

export default function GovernmentSolution() {
  return <GovernmentSolutionClient />
}
