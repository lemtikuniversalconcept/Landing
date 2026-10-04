import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SolutionsHubClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Solutions',
  description:
    'Security operations for estates, hotels, corporate offices, and government — see how Lemtik fits your operation.',
  path: '/solutions',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
]

export default function SolutionsHub() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <SolutionsHubClient />
    </>
  )
}
