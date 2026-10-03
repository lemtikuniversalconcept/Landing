import { buildMetadata } from '@/lib/seo'
import { NewsroomPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Newsroom',
  description:
    'Product updates, milestones, and announcements from Lemtik Security.',
  path: '/newsroom',
})

export default function NewsroomPage() {
  return <NewsroomPageClient />
}
