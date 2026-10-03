import { buildMetadata } from '@/lib/seo'
import { MissionPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Our Mission',
  description:
    'Built in Lagos, for every African city. Why Lemtik Security is building African-first command and control technology instead of adapting Western tools.',
  path: '/mission',
})

export default function MissionPage() {
  return <MissionPageClient />
}
