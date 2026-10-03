import { buildMetadata } from '@/lib/seo'
import { TermsPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'The terms governing use of the Lemtik Security platform and public site.',
  path: '/terms',
})

export default function TermsPage() {
  return <TermsPageClient />
}
