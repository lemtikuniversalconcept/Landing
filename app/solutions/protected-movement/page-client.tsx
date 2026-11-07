'use client'

import { motion } from 'framer-motion'
import { GraduationCap, ShieldCheck, Radio, MapPin, Video, Bell } from 'lucide-react'
import { ProtectedMovementForm } from '@/components/protected-movement-form'

export function ProtectedMovementPageClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            In Development
          </motion.div>
          <motion.h1
            className="text-5xl font-bold text-white mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Protection That Moves
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Security has mostly been about places — estates, offices, campuses. This is about the
            people moving between them.
          </motion.p>
        </div>
      </section>

      {/* What this is */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Two problems, same gap</h2>
          <p className="text-muted-foreground leading-relaxed">
            Most security coverage stops at the gate. An institution can secure its campus, but has
            no visibility once a student is in transit. A corporate security team can secure an
            office, but loses track of a principal the moment they're in a car. We think this is the
            same underlying problem — tracking a moving person, with alerts and a human response
            behind it — just applied to two different audiences.
          </p>
        </div>
      </section>

      {/* Two use cases */}
      <section className="px-6 py-20 border-b border-border bg-card">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border border-border bg-background p-8">
            <GraduationCap aria-hidden="true" className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">For Institutions</h3>
            <p className="text-muted-foreground mb-4">
              Schools and universities pay, students onboard, and the institution's security team
              gets visibility into arrivals, departures, and movement around campus — without
              requiring every student to carry a smartphone.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Zone-based arrival/departure alerts
              </li>
              <li className="flex items-start gap-2">
                <Bell aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Check-in style notifications to guardians and campus security
              </li>
              <li className="flex items-start gap-2">
                <Radio aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Wearable tag option for students without phones
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-background p-8">
            <ShieldCheck aria-hidden="true" className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">For Executive Protection Teams</h3>
            <p className="text-muted-foreground mb-4">
              Corporate and personal security teams get live location on the principal they're
              protecting, with in-vehicle video as an additional feed — routed through the same
              incident and dispatch system already built for fixed-site security.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Live location via phone or vehicle-mounted tracker
              </li>
              <li className="flex items-start gap-2">
                <Video aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> In-vehicle video as a feed into the same incident system
              </li>
              <li className="flex items-start gap-2">
                <Bell aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Route/zone deviation alerts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Honesty about what exists */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Built on what already exists, not a new system</h2>
          <p className="text-muted-foreground leading-relaxed">
            This isn't satellite tracking, and it doesn't need to be — the people and vehicles this
            is meant to protect stay in cellular coverage. It extends the same patrol-verification,
            geofencing, and incident-alert architecture already running in the core platform, applied
            to a tracked person instead of a security guard. We're saying that plainly because we'd
            rather be accurate about what this is than make it sound bigger than it is.
          </p>
        </div>
      </section>

      {/* Early access form */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Get early access</h2>
            <p className="text-muted-foreground">
              This is genuinely still in development. Tell us who you are and we'll reach out when
              there's something real to show — not a sales pitch today.
            </p>
          </div>
          <ProtectedMovementForm />
        </div>
      </section>
    </main>
  )
}
