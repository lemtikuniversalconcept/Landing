import { buildMetadata } from '@/lib/seo'
import { EstatesSolutionClient } from './page-client'

export const metadata = buildMetadata({
  title: 'Estates & Properties',
  description:
    'Replace the WhatsApp group with a command system — unified security management for modern estates and residential properties.',
  path: '/solutions/estates',
})

export default function EstatesSolution() {
  return <EstatesSolutionClient />
}
