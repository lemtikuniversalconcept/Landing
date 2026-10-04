import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { MissionPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Our Mission',
  description:
    'Built in Lagos, for every African city. Why Lemtik Security is building African-first command and control technology instead of adapting Western tools.',
  path: '/mission',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Our Mission', path: '/mission' },
]

export default function MissionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <MissionPageClient />
    </>
  )
}
