import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PrivacyPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Lemtik Security collects, uses, and protects information across our platform and public site.',
  path: '/privacy',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy' },
]

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PrivacyPageClient />
    </>
  )
}
