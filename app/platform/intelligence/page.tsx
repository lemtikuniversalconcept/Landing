import type { Metadata } from 'next'
import { IntelligencePageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Intelligence Engine',
  description:
    'Continuously monitors 2,000+ open and darknet sources, analyzing threats across 15 risk dimensions. Every incident alert arrives pre-scored and contextualized.',
}

export default function IntelligencePage() {
  return <IntelligencePageClient />
}
