import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { IntelligencePageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Intelligence Engine',
  description:
    'Continuously monitors 2,000+ open and darknet sources, analyzing threats across 15 risk dimensions. Every incident alert arrives pre-scored and contextualized.',
  path: '/platform/intelligence',
})

export default function IntelligencePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Platform', path: '/platform' },
        { name: 'Intelligence Engine', path: '/platform/intelligence' },
      ])} />
      <IntelligencePageClient />
    </>
  )
}
