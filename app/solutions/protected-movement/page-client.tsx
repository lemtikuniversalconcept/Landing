'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, ShieldCheck, MapPin, Bell, Smartphone, WifiOff, Radio, Clock, Lock, Video, Anchor } from 'lucide-react'
import { ProtectedMovementForm } from '@/components/protected-movement-form'

const live = [
  { icon: Smartphone, title: 'Tracking from a link, no app to install', text: 'The person opens a link on their phone and it starts sharing location. Check-ins and SOS are one tap away.' },
  { icon: WifiOff, title: 'Keeps working with no signal', text: 'Positions, check-ins and SOS are kept on the phone for up to 24 hours and sent in order once signal comes back.' },
  { icon: Radio, title: 'GPS trackers and the Traccar app', text: 'Vehicles and people without smartphones can carry standard GPS trackers that report into the same system.' },
  { icon: MapPin, title: 'Zones and routes', text: 'Safe, restricted and exclusion zones raise alerts on arrival and departure. Planned routes raise an alert when someone leaves them.' },
  { icon: Clock, title: 'Alerts with nobody watching the screen', text: 'Every minute the system checks for silent trackers, missed check-ins, overdue trips and unexpected stops, even at 3 a.m. with no one logged in.' },
  { icon: Bell, title: 'Hand-off to responders', text: 'An operator approves sending the live position to a responder, who opens it without an account and confirms receipt, dispatch and arrival.' },
  { icon: Lock, title: 'Consent first', text: 'Tracking can\'t be switched on until consent is recorded (a parent or guardian for a minor). Positions are deleted after 90 days.' },
]

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
            Now live
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
            Security has mostly been about places: estates, offices, campuses. Protected Movement
            covers the people, vehicles and boats moving between them.
          </motion.p>
        </div>
      </section>

      {/* What this is */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Two problems, same gap</h2>
          <p className="text-muted-foreground leading-relaxed">
            Most security coverage stops at the gate. An institution can secure its campus but loses
            sight of a student in transit. A corporate team can secure an office but loses track of a
            principal once they're in a car. It's the same problem: a moving person, with alerts and
            a human response behind them. Protected Movement runs inside the same Lemtik platform as
            your incidents, patrols and audit trail.
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
              Schools and universities see arrivals, departures and movement on trips and runs,
              without every student needing a smartphone.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Zone arrival and departure alerts</li>
              <li className="flex items-start gap-2"><Bell aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Scheduled check-ins with an alert when one is missed</li>
              <li className="flex items-start gap-2"><Radio aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> GPS trackers for students without phones</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-background p-8">
            <ShieldCheck aria-hidden="true" className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">For Executive Protection Teams</h3>
            <p className="text-muted-foreground mb-4">
              Live location on the principal and the vehicle, with route, stop and silence alerts
              routed into the same incident and dispatch system as your fixed sites.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Live location by phone or vehicle tracker</li>
              <li className="flex items-start gap-2"><Bell aria-hidden="true" className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Off-route, unexpected-stop and SOS alerts</li>
              <li className="flex items-start gap-2"><Video aria-hidden="true" className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" /> In-vehicle video as an incident feed <span className="text-xs uppercase tracking-wide text-primary">Planned</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* What's live */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What's live today</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {live.map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-card p-6">
                <f.icon aria-hidden="true" className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On the water */}
      <section className="px-6 py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <Anchor aria-hidden="true" className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Boats and waterways too</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The same tracking covers passenger boats, crew boats and escort vessels: voyages,
            corridors, jetty boarding checks, man-overboard alerts and search planning.
          </p>
          <Link href="/solutions/maritime" className="text-primary font-medium hover:text-primary/80">
            See Lemtik Maritime →
          </Link>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Talk to us about a pilot</h2>
            <p className="text-muted-foreground">
              Tell us who you are and what you need to protect. We'll reply with a walkthrough on the
              live system.
            </p>
          </div>
          <ProtectedMovementForm />
        </div>
      </section>
    </main>
  )
}
