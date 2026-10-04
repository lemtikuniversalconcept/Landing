import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { EstateChecklistPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Estate Security Audit Checklist',
  description:
    'A free 26-point checklist across access control, patrol coverage, incident reporting, communication, and records — find out what your current security setup is actually covering.',
  path: '/guides/estate-security-audit-checklist',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
  { name: 'Estate Security Audit Checklist', path: '/guides/estate-security-audit-checklist' },
]

export default function EstateChecklistPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <EstateChecklistPageClient />
    </>
  )
}
