'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SolutionsHub() {
  const solutions = [
    {
      title: 'Estates & Residential',
      shortDescription: 'Replace WhatsApp group updates with a unified command system that connects guards, tenants, and management in real-time.',
      fullDescription: 'Replace the WhatsApp group with a command system.',
      image: '/images/lagos-estate.png',
      href: '/solutions/estates',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Hospitality',
      shortDescription: 'Protect guests and assets without slowing down operations. Incident management that doesn\'t interfere with service.',
      fullDescription: 'Protect guests without slowing down hospitality.',
      image: '/images/lagos-hotel.png',
      href: '/solutions/hospitality',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Corporate',
      shortDescription: 'Security operations teams get visibility they need. Executive dashboards. Incident records. Compliance audit trails.',
      fullDescription: 'Security operations your board can actually see.',
      image: '/images/lagos-corporate.png',
      href: '/solutions/corporate',
      color: 'from-cyan-500 to-purple-600',
    },
    {
      title: 'Government & Public Safety',
      shortDescription: 'Civilian-grade C4I infrastructure built to scale across cities. OSINT integration. Autonomous response. Accountability records.',
      fullDescription: 'Civilian-grade C4I, built for public safety scale.',
      image: '/images/lagos-government.png',
      href: '/solutions/government',
      color: 'from-orange-500 to-yellow-600',
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
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
                      {/* Image Background */}
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{solution.shortDescription}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition">
                      <span className="font-medium">Learn more</span>
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
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-background font-semibold rounded-lg hover:bg-cyan-400 transition"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
