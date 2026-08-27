import type { Metadata } from 'next'
import { MissionPageClient } from './page-client'

export const metadata: Metadata = {
  title: 'Our Mission',
  description:
    'Built in Lagos, for every African city. Why Lemtik Security is building African-first command and control technology instead of adapting Western tools.',
}

export default function MissionPage() {
  return <MissionPageClient />
}
