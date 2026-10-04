import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { GlossaryPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Glossary',
  description:
    'Plain-language definitions of security operations and C4I terms used across the Lemtik platform — audit trail, dispatch, ghost guarding, NDPA, OSINT, and more.',
  path: '/glossary',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Glossary', path: '/glossary' },
]

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <GlossaryPageClient />
    </>
  )
}
