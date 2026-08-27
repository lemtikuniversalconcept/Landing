import type { Metadata } from 'next'
import { AboutPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The team building the operating system for African security — who we are, our founding story, and why we exist.',
}

export default function AboutPage() {
  return <AboutPageClient />
}
