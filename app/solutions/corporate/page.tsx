import type { Metadata } from 'next'
import { CorporateSolutionClient } from './page-client'

export const metadata: Metadata = {
  title: 'Corporate Offices',
  description:
    'Security operations your board can actually see — enterprise security operations for corporate offices.',
}

export default function CorporateSolution() {
  return <CorporateSolutionClient />
}
