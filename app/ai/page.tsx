import { buildMetadata } from '@/lib/seo'
import { AIPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'AI Services',
  description:
    'Built for security operations — how Lemtik\'s AI engines analyze threats, coordinate dispatch, and support human commanders in real time.',
  path: '/ai',
})

export default function AIPage() {
  return <AIPageClient />
}
