import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { EstatesSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Estates & Properties',
  description:
    'Replace the WhatsApp group with a command system — unified security management for modern estates and residential properties.',
  path: '/solutions/estates',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Estates & Properties', path: '/solutions/estates' },
]

export default function EstatesSolution() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <EstatesSolutionClient />
    </>
  )
}
