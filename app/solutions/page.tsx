import { buildMetadata } from '@/lib/seo'
import { SolutionsHubClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Solutions',
  description:
    'Security operations for estates, hotels, corporate offices, and government — see how Lemtik fits your operation.',
  path: '/solutions',
})

export default function SolutionsHub() {
  return <SolutionsHubClient />
}
