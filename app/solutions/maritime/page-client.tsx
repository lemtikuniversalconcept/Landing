'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Ship, Waves, LifeBuoy, ShieldCheck, Package, Link2, Users, Siren, FileCheck2, Building2, Landmark, Anchor, Camera, Megaphone, Route,
} from 'lucide-react'

type Module = { icon: typeof Ship; title: string; who: string; live: string[]; next?: string[] }

const modules: Module[] = [
  {
    icon: Route,
    title: 'Corridor Watch',
    who: 'Ferry and passenger-boat operators, barge and crew-boat operators, waterways authorities',
    live: [
      'Approved corridors with curfew hours and boat capacity',
      'Alerts for leaving the route, unexpected stops, silent trackers, overdue arrival and curfew breaches',
      'Jetty boarding check: passengers scan a QR code, life jackets are counted, weather is checked before release',
      'Voyage reports with head counts at departure and arrival',
    ],
    next: ['Wave and current limits per boat class', 'Live corridor view for the authority across operators'],
  },
  {
    icon: Siren,
    title: 'Possible-hijack flag and responder hand-off',
    who: 'Operators, marine police, navy bases, rescue centres',
    live: [
      'A flag when a boat shows two or more warning signs together: off route, stopped away from a jetty, tracker silent, missed check-in',
      'An operator confirms or dismisses it. Nothing is shared without a person approving',
      'The responder gets a link with no account needed: live position, recent track, people aboard, operator contact',
      'The responder confirms receipt, dispatch, arrival and resolution, and the operator sees each step',
    ],
  },
  {
    icon: LifeBuoy,
    title: 'Search and rescue',
    who: 'Rescue centres, offshore and ferry operators',
    live: [
      'Man-overboard button on the crew phone page',
      'A search case started from the alert or the boat\'s last position',
      'Drift estimate from wind and current for the type of object in the water, with a likely search area and a search pattern',
    ],
    next: ['Search area that grows over time', 'Rescue package as KML and GeoJSON', 'Creek mode for narrow waterways'],
  },
  {
    icon: ShieldCheck,
    title: 'ISPS Watch',
    who: 'Terminals, jetties, tank farms, and the regulator',
    live: [
      'Security level 1, 2 or 3, with every change logged',
      'Drill and exercise records, with flags when one is due under the ISPS intervals',
      'Breach register tracked to closure',
      'Declaration of Security signed by the ship through a link, fingerprinted so any later change shows',
      'Regulator view of linked facilities, with formal notices and acknowledgements',
    ],
    next: ['Level checklists acknowledged at each guard post', 'Drill reminders and evidence uploads', 'Gate log and training records', 'Closure clock and PDF/CSV exports'],
  },
  {
    icon: Package,
    title: 'Cargo custody',
    who: 'Terminals, importers, clearing agents, barge operators, insurers',
    live: [
      'Every handover recorded with photos or short video, GPS and time, by a driver or captain on a phone link',
      'Each record sealed to the one before it, so a deleted or altered step shows',
      'Alerts for a seal number that doesn\'t match, a checkpoint in the wrong place or too long without an update',
    ],
    next: ['An incident opened automatically on a seal mismatch', 'Barge loading and discharge counts', 'Smart-container alerts by webhook'],
  },
  {
    icon: Link2,
    title: 'Controlled sharing between organisations',
    who: 'Operators, facilities, authorities and responders',
    live: [
      'One organisation offers a link naming exactly what is shared: vessels, voyages, alerts, search and rescue, corridors or ISPS',
      'The other side must accept, and either side can revoke at any time',
      'Every share and every view is written to both organisations\' audit trails',
    ],
  },
]

const alsoLive = [
  { icon: Waves, text: 'Crew phone page that works with no signal and catches up when signal returns' },
  { icon: Users, text: 'Menus and role names for each type of organisation, such as Port Facility Security Officer and Master / Crew' },
  { icon: FileCheck2, text: 'Case files with fingerprinted evidence and a public verification page' },
  { icon: Anchor, text: '12 maritime incident types, from man overboard to crude theft and pollution spill' },
]

const roadmap = [
  { icon: Camera, title: 'Camera alerts on events', text: 'A small on-site worker that watches camera streams and sends short clips when something happens, instead of streaming all day.' },
  { icon: Ship, title: 'Escort operations', text: 'Escort missions, Navy notice records, escort logs and a client report that proves the service was delivered.' },
  { icon: Megaphone, title: 'Coastal Watch', text: 'Reports from boat drivers, fishermen and jetty marshals by WhatsApp, Telegram or voice note in Pidgin, with credibility scoring.' },
  { icon: Building2, title: 'Fleet and facility home screens', text: 'A fleet overview for operators and a facility overview for ports, with monthly safety, ISPS and custody reports.' },
]

const who = [
  { icon: Ship, title: 'Maritime operators', text: 'Ferries, barges, crew boats, escort companies, oil and gas marine bases' },
  { icon: Building2, title: 'Port facilities', text: 'Terminals, jetties and tank farms' },
  { icon: Landmark, title: 'Authorities', text: 'Maritime and waterways regulators' },
  { icon: Siren, title: 'Responders', text: 'Navy bases, marine police, rescue centres' },
]

export function MaritimePageClient() {
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
            Lemtik Maritime
          </motion.div>
          <motion.h1
            className="text-5xl font-bold text-white mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What ship-tracking systems don't see
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Small boats with no AIS and the people on them, port gates, and cargo as it changes hands.
            From the jetty, to the water, to a court-ready case file.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition">
              Request a demo
            </Link>
            <a href="#modules" className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
              See what's live
            </a>
          </motion.div>
        </div>
      </section>

      {/* One platform */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">One platform, not a second system</h2>
          <p className="text-muted-foreground leading-relaxed">
            A terminal has guards at its gate and boats at its jetty in the same place. Lemtik Maritime
            runs on the same platform as your land security, so incidents, patrols, alerts, evidence
            and the audit trail stay in one place. Your organisation type decides which maritime tools
            and role names you see.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {who.map((w) => (
            <div key={w.title} className="rounded-lg border border-border bg-background p-6">
              <w.icon aria-hidden="true" className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="px-6 py-20 border-b border-border scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-center">What's live today</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Each module says what you can use now and what comes next.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((m) => (
              <div key={m.title} className="rounded-lg border border-border bg-card p-7 flex flex-col">
                <m.icon aria-hidden="true" className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-1">{m.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{m.who}</p>
                <ul className="space-y-2 text-sm">
                  {m.live.map((l) => (
                    <li key={l} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
                {m.next && (
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Coming next</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {m.next.map((n) => <li key={n}>{n}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also live */}
      <section className="px-6 py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 gap-6">
          {alsoLive.map((a) => (
            <div key={a.text} className="flex items-start gap-3">
              <a.icon aria-hidden="true" className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-center">On the roadmap</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Not built yet. We list it so you know where this is going.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {roadmap.map((r) => (
              <div key={r.title} className="rounded-lg border border-dashed border-border p-6">
                <r.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground mb-3" />
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="px-6 py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">What we don't try to replace</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ship-tracking maps, dark-vessel detection and regional information-sharing networks
            already exist and do their jobs well. Lemtik uses AIS only as background context and
            focuses on what those systems miss: boats near shore, anchorages, berths, gates and cargo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">See it on the live system</h2>
          <p className="text-muted-foreground mb-8">
            We'll walk you through a jetty departure, a boat leaving its corridor, a hand-off to a
            responder and the case file that comes out the other end.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition">
            Request a demo
          </Link>
        </div>
      </section>
    </main>
  )
}
