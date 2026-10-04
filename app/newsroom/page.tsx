import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { NewsroomPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Newsroom',
  description:
    'Product updates, milestones, and announcements from Lemtik Security.',
  path: '/newsroom',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Newsroom', path: '/newsroom' },
]

export default function NewsroomPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <NewsroomPageClient />
    </>
  )
}
