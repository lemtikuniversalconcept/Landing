import type { Metadata } from 'next'
import { SolutionsHubClient } from './page-client'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Security operations for estates, hotels, corporate offices, and government — see how Lemtik fits your operation.',
}

export default function SolutionsHub() {
  return <SolutionsHubClient />
}
