import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { IntegrationsPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Integrations',
  description:
    'Lemtik connects with your existing CCTV, access control, IoT sensors, and GPS tracking — one operational view instead of a separate app for every system.',
  path: '/platform/integrations',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/platform' },
  { name: 'Integrations', path: '/platform/integrations' },
]

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <IntegrationsPageClient />
    </>
  )
}
