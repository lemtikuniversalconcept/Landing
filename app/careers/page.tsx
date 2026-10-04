import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CareersPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Careers',
  description: 'Careers at Lemtik Security — a small, pre-seed team building security operations technology in Lagos.',
  path: '/careers',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Careers', path: '/careers' },
]

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <CareersPageClient />
    </>
  )
}
