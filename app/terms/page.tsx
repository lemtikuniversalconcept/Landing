import type { Metadata } from 'next'
import { TermsPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms governing use of the Lemtik Security platform and public site.',
}

export default function TermsPage() {
  return <TermsPageClient />
}
