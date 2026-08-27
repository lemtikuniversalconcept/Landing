import type { Metadata } from 'next'
import { EstatesSolutionClient } from './page-client'

export const metadata: Metadata = {
  title: 'Estates & Properties',
  description:
    'Replace the WhatsApp group with a command system — unified security management for modern estates and residential properties.',
}

export default function EstatesSolution() {
  return <EstatesSolutionClient />
}
