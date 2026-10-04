'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function SolutionsHubClient() {
  const solutions = [
    {
      title: 'Estates & Residential',
      shortDescription: 'Replace WhatsApp group updates with a unified command system that connects guards, tenants, and management in real-time.',
      fullDescription: 'Replace the WhatsApp group with a command system.',
      image: '/images/lemtik-estate-security-management.png',
      href: '/solutions/estates',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Hospitality',
      shortDescription: 'Protect guests and assets without slowing down operations. Incident management that doesn\'t interfere with service.',
      fullDescription: 'Protect guests without slowing down hospitality.',
      image: '/images/lemtik-hotel-security-management.png',
      href: '/solutions/hospitality',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Corporate',
      shortDescription: 'Security operations teams get visibility they need. Executive dashboards. Incident records. Compliance audit trails.',
      fullDescription: 'Security operations your board can actually see.',
      image: '/images/lemtik-corporate-security-operations.png',
      href: '/solutions/corporate',
      color: 'from-cyan-500 to-purple-600',
    },
    {
      title: 'Government & Public Safety',
      shortDescription: 'Civilian-grade C4I infrastructure built to scale across cities. OSINT integration. Autonomous response. Accountability records.',
      fullDescription: 'Civilian-grade C4I, built for public safety scale.',
      image: '/images/lemtik-government-public-safety.png',
      href: '/solutions/government',
      color: 'from-orange-500 to-yellow-600',
    },
    {
      title: 'Critical Infrastructure',
      shortDescription: 'Coordinated protection for power, water, and telecom sites. GPS-verified patrols across remote and unmanned facilities.',
      fullDescription: 'Security for sites nobody is watching every minute.',
      image: undefined,
      href: '/solutions/critical-infrastructure',
      color: 'from-cyan-600 to-slate-700',
    },
    {
      title: 'Retail & Commercial',
      shortDescription: 'Security operations for malls, plazas, and retail chains. Shared incident visibility across every tenant.',
      fullDescription: 'One system for every tenant, every incident.',
      image: undefined,
      href: '/solutions/retail',
      color: 'from-orange-600 to-rose-700',
    },
    {
      title: 'Industrial & Manufacturing',
      shortDescription: 'Security operations for factories, plants, and warehouses. Verified patrols across large floor plans.',
      fullDescription: 'Coverage for every acre of the floor.',
      image: undefined,
      href: '/solutions/industrial',
      color: 'from-slate-600 to-cyan-700',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Whoever you protect,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              we make it faster
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every organization faces the same challenge: turning information into action. We provide the infrastructure to make that happen at scale.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution) => (
              <motion.div key={solution.href} variants={itemVariants}>
                <Link href={solution.href}>
                  <div className="group cursor-pointer h-full">
                    {/* Card Container */}
                    <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                      {/* Background: photo when available, brand gradient otherwise */}
                      {solution.image ? (
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.color}`} />
                      )}

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{solution.shortDescription}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary group-hover:text-primary/80 transition">
                      <span className="font-medium">Learn more about {solution.title}</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-muted">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Not sure which solution is right for you?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our team can help you find the perfect fit for your organization's needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Talk With Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
