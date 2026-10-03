import { buildMetadata } from '@/lib/seo'
import { CorporateSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Corporate Offices',
  description:
    'Security operations your board can actually see — enterprise security operations for corporate offices.',
  path: '/solutions/corporate',
})

export default function CorporateSolution() {
  return <CorporateSolutionClient />
}
