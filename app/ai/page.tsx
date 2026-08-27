import type { Metadata } from 'next'
import { AIPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'AI Services',
  description:
    'Built for security operations — how Lemtik\'s AI engines analyze threats, coordinate dispatch, and support human commanders in real time.',
}

export default function AIPage() {
  return <AIPageClient />
}
