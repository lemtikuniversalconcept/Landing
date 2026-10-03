import { buildMetadata } from '@/lib/seo'
import { PlatformPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Platform',
  description:
    'One operational platform. Incident reporting, patrol management, access control, vehicle tracking, and asset records unified into one command environment.',
  path: '/platform',
})

export default function PlatformPage() {
  return <PlatformPageClient />
}
