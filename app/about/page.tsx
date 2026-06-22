'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Tunde Adeyemi',
      role: 'Founder & CEO',
      bio: 'Security infrastructure builder. Previously built ops systems for African startups.',
      image: '/images/team-founder-ceo.png'
    },
    {
      name: 'Chisom Okoro',
      role: 'Lead Software Engineer',
      bio: 'Systems architect focused on real-time dispatch and autonomous response logic.',
      image: '/images/team-lead-engineer.png'
    },
    {
      name: 'Amara Okonkwo',
      role: 'Frontend UI Engineer',
      bio: 'Design engineer obsessed with clarity under pressure. Makes command systems beautiful.',
      image: '/images/team-frontend-engineer.png'
    },
    {
      name: 'Zainab Hassan',
      role: 'Growth & Product Marketing',
      bio: 'Takes complex security ops and makes them understandable to buyers and users.',
      image: '/images/team-growth-marketing.png'
    },
    {
      name: 'Oluwaseun Adebayo',
      role: 'Strategy & Operations',
      bio: 'Builds the infrastructure and partnerships that let Lemtik scale across Africa.',
      image: '/images/team-operations.png'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
        >
          The team building it.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl"
        >
          Five people committed to making security operations faster, smarter, and more human across African cities.
        </motion.p>
      </section>

      {/* Company Facts Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-border">
        <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2026</div>
            <div className="text-sm text-muted-foreground">Year Founded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Lagos</div>
            <div className="text-sm text-muted-foreground">Headquarters</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Africa</div>
            <div className="text-sm text-muted-foreground">Focus Region</div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="mt-16 p-8 border border-border rounded-lg bg-muted/30">
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lemtik is the operating system for civilian security across Africa. We build technology that gives security teams the tools they need to respond faster, coordinate better, and protect more people. Designed in Lagos, for every African city.
          </p>
        </motion.div>
      </section>

      {/* Team Grid Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-border">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-16"
        >
          Meet the team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hiring Section */}
      <section className="mx-auto max-w-4xl px-6 py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">We&apos;re Hiring</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re building the future of security operations in Africa and we need talented people to make it happen. If you&apos;re interested in working on hard problems that matter, let&apos;s talk.
          </p>
          <Link
            href="/careers"
            className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Open Roles
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
