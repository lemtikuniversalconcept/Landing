import { buildMetadata } from '@/lib/seo'
import { IntelligencePageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Intelligence Engine',
  description:
    'Continuously monitors 2,000+ open and darknet sources, analyzing threats across 15 risk dimensions. Every incident alert arrives pre-scored and contextualized.',
  path: '/platform/intelligence',
})

export default function IntelligencePage() {
  return <IntelligencePageClient />
}
