import type { Metadata } from 'next'
import { NewsroomPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'Product updates, milestones, and announcements from Lemtik Security.',
}

export default function NewsroomPage() {
  return <NewsroomPageClient />
}
