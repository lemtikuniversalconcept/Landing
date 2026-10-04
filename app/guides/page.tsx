import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { GuidesPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Guides & Checklists',
  description: 'Free, practical guides and checklists for security operations teams.',
  path: '/guides',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
]

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <GuidesPageClient />
    </>
  )
}
