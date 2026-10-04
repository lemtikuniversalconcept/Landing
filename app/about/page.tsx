import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AboutPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'The team building the operating system for African security — who we are, our founding story, and why we exist.',
  path: '/about',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <AboutPageClient />
    </>
  )
}
