import { buildMetadata } from '@/lib/seo'
import { AboutPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'The team building the operating system for African security — who we are, our founding story, and why we exist.',
  path: '/about',
})

export default function AboutPage() {
  return <AboutPageClient />
}
