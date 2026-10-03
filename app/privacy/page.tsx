import { buildMetadata } from '@/lib/seo'
import { PrivacyPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Lemtik Security collects, uses, and protects information across our platform and public site.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
