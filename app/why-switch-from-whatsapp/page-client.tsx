'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const rows = [
  { feature: 'Incident reported', whatsapp: 'Text message in a group chat', lemtik: 'Structured form with required fields' },
  { feature: 'Who sees it', whatsapp: 'Whoever happens to read the group', lemtik: 'Routed to the right responder immediately' },
  { feature: 'Severity', whatsapp: 'Not captured — every message looks the same', lemtik: 'Categorized, with automatic escalation above a threshold' },
  { feature: 'Patrol verification', whatsapp: '"All clear" text, unverifiable', lemtik: 'GPS-verified checkpoints, missed patrols flagged' },
  { feature: 'Record of what happened', whatsapp: 'Scroll-back through hundreds of messages, if the history survives', lemtik: 'Permanent, append-only record per incident' },
  { feature: 'Shift handover', whatsapp: 'Verbal, at the gate', lemtik: 'Written, timestamped log' },
  { feature: 'Proof for insurance or a dispute', whatsapp: 'A chat screenshot, if you still have it', lemtik: 'Exportable, tamper-evident audit trail' },
  { feature: 'Works across multiple sites', whatsapp: 'One group per site, no shared view', lemtik: 'One dashboard across every site' },
]

export function WhySwitchPageClient() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Switch From WhatsApp
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A group chat is free. It&apos;s also not built for incident management — here&apos;s the actual difference, side by side.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-border">
        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-card">
                <th className="text-left p-4 font-semibold">What matters</th>
                <th className="text-left p-4 font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <X aria-hidden="true" className="h-4 w-4 text-red-400" /> WhatsApp group
                  </span>
                </th>
                <th className="text-left p-4 font-semibold text-primary">
                  <span className="inline-flex items-center gap-2">
                    <Check aria-hidden="true" className="h-4 w-4 text-primary" /> Lemtik
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 1 ? 'bg-card/50' : ''}>
                  <td className="p-4 font-medium border-t border-border">{row.feature}</td>
                  <td className="p-4 text-muted-foreground border-t border-border">{row.whatsapp}</td>
                  <td className="p-4 text-muted-foreground border-t border-border">{row.lemtik}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">To be clear about what WhatsApp is good at</h2>
          <p className="text-muted-foreground leading-relaxed">
            WhatsApp is genuinely good for quick, informal communication — and it&apos;s not going
            away as a channel. The point isn&apos;t that your team should stop talking on WhatsApp.
            It&apos;s that incident records, patrol verification, and audit trails need a system
            that was actually built for that job, not a tool that happens to already be on everyone&apos;s
            phone.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">See it on your own operation</h2>
          <p className="text-lg text-muted-foreground mb-8">
            15 minutes is usually enough to show whether this fits how your team actually works.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Request a Demo
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
