import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { WhySwitchPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Why Switch From WhatsApp',
  description:
    'A side-by-side look at WhatsApp group coordination versus Lemtik — incident reporting, patrol verification, audit trails, and what actually changes.',
  path: '/why-switch-from-whatsapp',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Why Switch From WhatsApp', path: '/why-switch-from-whatsapp' },
]

export default function WhySwitchPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <WhySwitchPageClient />
    </>
  )
}
