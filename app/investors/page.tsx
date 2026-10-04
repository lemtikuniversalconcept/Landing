import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { InvestorsPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Investors',
  description: "Lemtik Security is raising its pre-seed round — quick form for investor inquiries.",
  path: '/investors',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Investors', path: '/investors' },
]

export default function InvestorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <InvestorsPageClient />
    </>
  )
}
