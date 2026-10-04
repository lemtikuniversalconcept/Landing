'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { GatedContent } from '@/components/gated-content'

const sections = [
  {
    title: 'Access Control',
    items: [
      'Every gate/entrance has an assigned, logged attendant during all operating hours',
      'Visitor entries are logged with name, purpose, host, and time in/out',
      'Vehicle entries are logged separately from pedestrian entries',
      'There is a defined process for verifying delivery and service personnel',
      'Access logs are reviewed at least weekly, not just stored',
    ],
  },
  {
    title: 'Patrol Coverage',
    items: [
      'Patrol routes cover every block/wing of the estate, not just common areas',
      'Patrol frequency is defined in writing, not left to guard discretion',
      'There is a way to verify a patrol actually happened (check-in system, log, or tracking)',
      'Missed patrols are flagged and followed up, not just noted after the fact',
      'Patrol routes are varied periodically so they are not fully predictable',
    ],
  },
  {
    title: 'Incident Reporting',
    items: [
      'Residents/staff have a single, clear channel to report an incident',
      'Every incident report includes what happened, when, who responded, and the outcome',
      'Incident severity is categorized consistently, not left to individual judgment',
      'There is a defined escalation path for incidents above a certain severity',
      'Past incident records are kept somewhere that survives staff turnover',
    ],
  },
  {
    title: 'Communication & Handover',
    items: [
      'Shift handovers are documented, not just verbal',
      'There is a backup communication method if the primary channel (radio, phone) fails',
      'Management is notified of serious incidents immediately, not at the next scheduled update',
      'Guards know who to contact, and how, outside normal hours',
    ],
  },
  {
    title: 'Records & Compliance',
    items: [
      'Incident and patrol records can be produced on request within 24 hours',
      'Records are tamper-evident — nobody can quietly edit a past entry',
      'There is a defined data retention period for incident records',
      'You know, specifically, which data protection law governs your resident data',
    ],
  },
]

export function EstateChecklistPageClient() {
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
            Estate Security Audit Checklist
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            26 checks across 5 areas — find out what your current setup is actually covering
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <GatedContent source="estate-security-checklist">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-bold text-primary mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Want this printed or saved? Use your browser&apos;s print function — this page is
                  formatted to print cleanly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
                >
                  Talk to Us About What You Find
                </Link>
              </div>
            </div>
          </GatedContent>
        </div>
      </section>
    </main>
  )
}
