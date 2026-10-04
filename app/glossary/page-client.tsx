'use client'

import { motion } from 'framer-motion'

const terms = [
  {
    term: 'Audit Trail',
    def: 'A record of every action taken in a system, including who did it and when, kept in a way that can\'t be edited after the fact. An audit trail that can be changed isn\'t really an audit trail — it\'s a document.',
  },
  {
    term: 'Append-Only',
    def: 'A data storage rule where new records can be added, but existing ones can never be changed or deleted — enforced at the database level, not just by policy. This is what makes an audit trail actually defensible.',
  },
  {
    term: 'C4I',
    def: 'Command, Control, Communications, and Intelligence — a term originating in military and public-safety systems for the combined infrastructure that lets an organization sense what\'s happening, decide what to do, and coordinate a response. Lemtik describes itself as civilian-grade C4I: the same underlying discipline, applied to estates, hotels, and commercial sites rather than military operations.',
  },
  {
    term: 'Chain of Custody',
    def: 'A documented, unbroken record of who has handled a piece of evidence (physical or digital) from the moment it was collected. Relevant to security operations whenever an incident might end up in a legal or insurance dispute.',
  },
  {
    term: 'Command Centre',
    def: 'A function (not necessarily a physical room) where information from multiple sources is brought together, a decision is made about how to respond, and that decision is logged. See our full explainer: What Is a Security Command Centre?',
  },
  {
    term: 'Dispatch',
    def: 'The act of assigning a specific responder — a guard, patrol, or vehicle — to a specific incident. "AI-assisted dispatch" means software ranks or recommends who should respond; a human operator still makes the actual call.',
  },
  {
    term: 'Escalation',
    def: 'The process of routing an incident to a higher level of authority or response capability, usually triggered automatically once severity crosses a defined threshold.',
  },
  {
    term: 'Ghost Guarding',
    def: 'When a scheduled security patrol or shift is logged as having happened, but didn\'t — whether through a missed patrol reported as complete, or a guard rostered but not actually present. A known, widely-discussed problem in the industry; GPS-verified check-ins are the most direct way to catch it.',
  },
  {
    term: 'Guard Tour System',
    def: 'A system — often a handheld scanning device — used to verify a security guard physically walked a patrol route by scanning checkpoints (NFC tags or QR codes) along the way. See our full guide: Guard Patrol Tracking.',
  },
  {
    term: 'Incident Management',
    def: 'The structured process of reporting, tracking, and resolving a security or safety event, from the moment it\'s first reported through to its documented resolution.',
  },
  {
    term: 'NDPA',
    def: 'Nigeria Data Protection Act — the primary legal framework governing how personal data is collected, used, and protected in Nigeria. The relevant compliance standard for any platform handling Nigerian operational data, in the same way GDPR is the relevant standard in the EU.',
  },
  {
    term: 'OSINT',
    def: 'Open-Source Intelligence — information gathered from publicly available sources (news, social media, public records) rather than private or classified channels, used to add context to an incident or threat assessment.',
  },
  {
    term: 'Patrol Management',
    def: 'The scheduling, routing, and verification of security patrols — including real-time location tracking and alerts when an expected checkpoint is missed.',
  },
  {
    term: 'RBAC (Role-Based Access Control)',
    def: 'A permissions model where what a user can see or do in a system is determined by their assigned role (e.g. field officer, supervisor, manager) rather than configured individually per person.',
  },
  {
    term: 'Response Time',
    def: 'The elapsed time between an incident being reported and a responder arriving or taking action. One of the few security-operations metrics that\'s genuinely comparable across sites and over time, if it\'s measured consistently.',
  },
  {
    term: 'SOC (Security Operations Center)',
    def: 'Traditionally a cybersecurity term for a team monitoring digital threats; increasingly used more broadly for any centralized security-monitoring function, including physical security. Context usually makes clear which is meant.',
  },
]

export function GlossaryPageClient() {
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
            Security Operations Glossary
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Terms used across the platform, defined plainly
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          {terms.map((item) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="scroll-mt-24 border-b border-border pb-6 last:border-none"
            >
              <h2 className="text-xl font-bold text-primary mb-2">{item.term}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.def}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
