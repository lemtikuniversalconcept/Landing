import type { Metadata } from 'next'
import { PrivacyPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Lemtik Security collects, uses, and protects information across our platform and public site.',
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
