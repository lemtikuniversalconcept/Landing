'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export function FaqPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const linkCls = 'text-primary underline underline-offset-2 hover:no-underline'

  const faqs: { q: string; a: ReactNode }[] = [
    {
      q: 'Is Lemtik live with real customers right now?',
      a: "We're pre-pilot and pre-revenue as a company, building in the open. The platform is built and tested; we're currently onboarding our first pilot partners in Lagos. If you want to be one of them, or just want to see the system directly, talk to us.",
    },
    {
      q: 'Does Lemtik replace our security guards?',
      a: "No. Lemtik coordinates and documents what your guards, patrols, and response teams already do — it doesn't replace people, and the AI layer never makes an autonomous decision without a human operator approving it.",
    },
    {
      q: 'What happens if the internet goes down?',
      a: "Patrol and incident data is designed to queue locally and sync once connectivity returns, rather than failing silently — this is a known weak point in a lot of security software built for markets with more reliable connectivity, and it's something we designed around from the start.",
    },
    {
      q: 'Can Lemtik work with the CCTV, access control, and alarm systems we already have?',
      a: (
        <>
          Yes — the platform is built to connect with existing infrastructure rather than replace
          it. See the <Link href="/platform/integrations" className={linkCls}>full integrations list</Link> for specifics.
        </>
      ),
    },
    {
      q: 'Where is our data stored, and who can see it?',
      a: (
        <>
          Each organisation&apos;s data is isolated and encrypted. We design primarily against the
          Nigeria Data Protection Act (NDPA), since that&apos;s the framework that actually governs
          data generated here — see the <Link href="/platform/security" className={linkCls}>Security & Compliance page</Link> for the full breakdown.
        </>
      ),
    },
    {
      q: "Can an incident record be edited or deleted after it's submitted?",
      a: "No. The audit log is append-only at the database level — enforced by a rule that blocks edits and deletions outright, not a policy that asks people not to. That's true for every user, including administrators.",
    },
    {
      q: 'How is Lemtik priced?',
      a: (
        <>
          Pricing is scoped to your site count, team size, and integration needs rather than sold
          as a one-size-fits-all package. See the <Link href="/pricing" className={linkCls}>Pricing page</Link> for
          the three general tiers, or <Link href="/contact" className={linkCls}>talk to sales</Link> for a
          plan built around your actual operation.
        </>
      ),
    },
    {
      q: 'What does the AI in Lemtik actually do?',
      a: "It ranks response recommendations, correlates related incidents, and surfaces context an operator would otherwise have to dig for manually. It doesn't dispatch anyone, lock anything, or take any physical-world action without a human approving it first.",
    },
    {
      q: 'What kind of properties is this built for?',
      a: (
        <>
          The core platform is the same across every vertical — estates, hotels, corporate
          offices, government facilities, critical infrastructure, retail, and industrial sites.
          What changes is which features matter most for your specific operation. See{' '}
          <Link href="/solutions" className={linkCls}>Solutions</Link> for the breakdown by property type.
        </>
      ),
    },
    {
      q: 'How long does it take to get set up?',
      a: "This depends on your site count and how much existing infrastructure you want connected. Talk to us with your specifics and we'll give you a real timeline, not a generic one.",
    },
    {
      q: 'Who do we contact if something goes wrong with the platform itself?',
      a: "Our contact page routes directly to the team — there's no ticket queue you're dropped into.",
    },
  ]

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Straight answers, including to the ones that are less flattering to ask.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={item.q} className="border border-border rounded-lg bg-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold">{item.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-5 w-5 text-primary shrink-0" />
                  </motion.span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="px-6 py-20 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Didn&apos;t find your question?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
          >
            Ask Us Directly
          </Link>
        </div>
      </section>
    </main>
  )
}
