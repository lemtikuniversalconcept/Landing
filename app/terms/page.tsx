import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { TermsPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'The terms governing use of the Lemtik Security platform and public site.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Terms & Conditions', path: '/terms' },
      ])} />
      <TermsPageClient />
    </>
  )
}
