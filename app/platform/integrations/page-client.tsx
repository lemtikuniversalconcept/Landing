'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Video,
  Lock,
  Construction,
  DoorOpen,
  Eye,
  Radio,
  MapPin,
  Users,
  Siren,
  Lightbulb,
  Megaphone,
  Car,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function IntegrationsPageClient() {
  const categories = [
    {
      name: 'CCTV & Surveillance',
      items: [
        { name: 'CCTV Systems', icon: Video, desc: 'Real-time video feeds surfaced alongside incidents, not in a separate app' },
        { name: 'Biometric Doors', icon: Eye, desc: 'Facial or fingerprint access events logged into the same timeline' },
      ],
    },
    {
      name: 'Access Control',
      items: [
        { name: 'Access Control', icon: Lock, desc: 'Door and gate logs tied to the people and incidents they relate to' },
        { name: 'Smart Gates', icon: DoorOpen, desc: 'Automated gate systems connected into the same operational view' },
        { name: 'Boom Barriers', icon: Construction, desc: 'Vehicle barrier events tracked with the rest of site activity' },
        { name: 'Visitor Systems', icon: Users, desc: 'Visitor check-in data linked to the incidents and patrols around it' },
      ],
    },
    {
      name: 'IoT & Sensors',
      items: [
        { name: 'IoT Sensors', icon: Radio, desc: 'Motion, intrusion, and environmental sensors feed straight into alerting' },
        { name: 'Alarm Systems', icon: Siren, desc: 'Existing alarm hardware triggers the same escalation path as any other incident' },
        { name: 'Emergency Lighting', icon: Lightbulb, desc: 'Lighting systems coordinated as part of an incident response, not a separate switch' },
        { name: 'Public Address', icon: Megaphone, desc: 'PA systems included in the response chain for site-wide announcements' },
        { name: 'Radio Systems', icon: Radio, desc: 'Existing two-way radio comms logged alongside digital reports' },
      ],
    },
    {
      name: 'GPS & Location',
      items: [
        { name: 'GPS Tracking', icon: MapPin, desc: 'Patrol and vehicle location verified against expected routes and checkpoints' },
        { name: 'Vehicle Tracking', icon: Car, desc: 'Fleet position data folded into the same operational picture as foot patrols' },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Works with what you already have
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            CCTV, access control, IoT sensors, and GPS tracking — connected into one view instead of replaced
          </motion.p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Nothing is proprietary. Everything is modular.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Lemtik doesn&apos;t ask you to rip out your existing security hardware. It connects to the
            cameras, access control, sensors, and tracking devices already on site, so that an event from
            any of them lands in the same incident timeline your team already works from — instead of a
            separate app you have to check on its own.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIdx) => (
        <section
          key={category.name}
          className={`px-6 py-20 border-b border-border ${catIdx % 2 === 1 ? 'bg-card' : 'bg-background'}`}
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-10">{category.name}</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {category.items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="flex gap-4 bg-background border border-border rounded-lg p-6"
                >
                  <item.icon aria-hidden="true" className="h-7 w-7 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold mb-1">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t see your system listed?</h2>
          <p className="text-muted-foreground mb-8">
            Integrations are built on open, modular connections rather than a fixed list — talk to us about what you&apos;re already running.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Talk to Our Team
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition"
            >
              Back to Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
