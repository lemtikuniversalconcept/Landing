import type { Metadata } from 'next'
import { PlatformPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'One operational platform. Incident reporting, patrol management, access control, vehicle tracking, and asset records unified into one command environment.',
}

export default function PlatformPage() {
  return <PlatformPageClient />
}
