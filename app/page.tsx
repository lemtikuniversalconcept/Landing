'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Map from 'react-map-gl'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/lagos-skyline.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Animated pulse points */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[
          { top: '30%', left: '40%', delay: 0 },
          { top: '50%', left: '70%', delay: 0.5 },
          { top: '70%', left: '20%', delay: 1 },
        ].map((pos, idx) => (
          <motion.div
            key={idx}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{ top: pos.top, left: pos.left }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: pos.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance"
          >
            The Operating System for African Security
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
          >
            Lemtik is building Africa&apos;s first civilian-grade C4I platform — cutting emergency response times by over 50% through AI-powered intelligence, dispatch, and autonomous response.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-navy-900 font-semibold rounded-lg transition-colors">
              Book a Demo
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors">
              See How It Works ↓
            </button>
          </motion.div>
        </motion.div>

        {/* Status strip */}
        <motion.div
          variants={itemVariants}
          className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 inline-block text-sm text-green-300"
        >
          🟢 OSINT Engine: Live · 6 AI Services Operational · Built in Lagos, Nigeria
        </motion.div>
      </div>
    </section>
  )
}

const Problem = () => {
  const stats = [
    { value: '20-45', label: 'min\nAverage Lagos emergency response time', delay: 0 },
    { value: '$2B', label: 'Nigeria\'s annual private security spend', delay: 0.2 },
    { value: '0', label: 'Unified intelligence platforms built for it', delay: 0.4 },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance">
            Security response in African cities is broken.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When an incident happens, coordination still runs on WhatsApp groups and phone calls. Nobody knows which officer is closest, which vehicle has fuel, or what threats exist in the area. We built the system that knows all three — instantly.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                <StatCounter value={stat.value} />
              </div>
              <p className="text-gray-300 whitespace-pre-line">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const StatCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      if (value.includes('-')) {
        const [min, max] = value.split('-').map(v => parseInt(v))
        const current = Math.floor(min + (max - min) * progress)
        setDisplayValue(`${current}`)
      } else if (value === '$2B') {
        const current = Math.floor(2 * 1000000000 * progress)
        setDisplayValue(`$${(current / 1000000000).toFixed(1)}B`)
      } else {
        setDisplayValue(value)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [value])

  return displayValue
}

const IncidentSimulation = () => {
  return (
    <section className="py-24 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Watch a response happen in real time.
          </h2>
        </motion.div>

        {/* Mapbox Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden h-96 mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-black flex items-center justify-center">
            {/* Simulated incident loop */}
            <IncidentLoop />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/platform"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            See the full platform →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const IncidentLoop = () => {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev + 1) % 5)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full relative">
      {/* Stage 1: Incident appears */}
      {stage >= 0 && (
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2"
          animate={{ scale: stage === 0 ? 1 : 0.8, opacity: stage === 0 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500" />
        </motion.div>
      )}

      {/* Stage 2: AI Analysis */}
      {stage >= 1 && (
        <motion.div
          className="absolute top-20 left-10 bg-card/80 border border-cyan-500/50 rounded-lg p-4"
          animate={{ x: stage === 1 ? 0 : -50, opacity: stage === 1 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-cyan-400 text-sm font-mono">AI Agent analysing...</p>
          <div className="w-32 h-2 bg-gray-600 rounded mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-cyan-500"
              animate={{ width: stage === 1 ? '85%' : '0%' }}
              transition={{ duration: 2.2 }}
            />
          </div>
        </motion.div>
      )}

      {/* Stage 3: Officers dispatch */}
      {stage >= 2 && (
        <motion.div
          className="absolute bottom-1/3 right-20"
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {[0, 1].map(i => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-400 rounded-full mb-4"
              animate={{
                x: stage === 2 ? 0 : 200,
                y: stage === 2 ? 0 : -150 * (i + 1),
              }}
              transition={{ duration: 1.8 }}
            />
          ))}
        </motion.div>
      )}

      {/* Stage 4: Route line */}
      {stage >= 3 && (
        <motion.svg
          className="absolute inset-0 w-full h-full"
          animate={{ opacity: stage === 3 ? 1 : 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <motion.line
            x1="50%"
            y1="50%"
            x2="80%"
            y2="30%"
            stroke="#00d4ff"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: stage === 3 ? 1 : 0 }}
            transition={{ duration: 1.6 }}
          />
        </motion.svg>
      )}

      {/* Stage 5: Response dispatched */}
      {stage >= 4 && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500/10 border border-green-500/50 rounded-lg px-4 py-2"
          animate={{ scale: stage === 4 ? 1 : 0.8, opacity: stage === 4 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-green-400 text-sm font-mono">✓ Response dispatched in 4.2 seconds</p>
        </motion.div>
      )}
    </div>
  )
}

const Services = () => {
  const services = [
    { name: 'Intelligence Engine', desc: '24/7 threat monitoring', status: 'Live' },
    { name: 'Inventory Service', desc: 'Resource tracking & alerts', status: 'Operational' },
    { name: 'Route Calculator', desc: 'Fastest path, every time', status: 'Operational' },
    { name: 'Proximity Finder', desc: 'Right officer, right moment', status: 'Operational' },
    { name: 'Autonomous Control', desc: 'Infrastructure that responds', status: 'Live' },
    { name: 'Master AI Agent', desc: 'The brain behind every decision', status: 'Operational' },
  ]

  return (
    <section className="py-24 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Six intelligent services. One command platform.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                  {service.status}
                </span>
              </div>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Solutions = () => {
  const solutions = [
    { name: 'Estates & Residential', image: '/images/lagos-estate.png' },
    { name: 'Hotels & Hospitality', image: '/images/lagos-hotel.png' },
    { name: 'Corporate & Enterprise', image: '/images/lagos-corporate.png' },
    { name: 'Government & Public Sector', image: '/images/lagos-government.png' },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Built for anyone protecting people.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={solution.image}
                alt={solution.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4 group-hover:text-cyan-400 transition-colors">
                  {solution.name}
                </h3>
              </div>
              <Link
                href={`/solutions/${solution.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Mission = () => {
  return (
    <section className="py-24 px-4 bg-navy-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            An industrialised Africa needs a secured Africa.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            A new generation of African builders is proving that critical infrastructure, defense, and security technology can be designed, built, and owned on this continent — not imported. Lemtik is building the civilian layer of that same mission: the intelligence and command systems protecting the everyday institutions, businesses, and citizens that make up African cities.
          </p>
          <Link
            href="/mission"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-navy-900 font-semibold rounded-lg transition-colors"
          >
            Read our mission →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const Traction = () => {
  const stats = [
    { label: 'Live OSINT Engine collecting Lagos threat intelligence daily' },
    { label: '6/6 AI-powered services built and operational' },
    { label: '39 Dashboard routes shipped' },
    { label: '2026 Founded in Lagos' },
  ]

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-navy-800 to-navy-900 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 bg-navy-900">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            See what command should feel like.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-navy-900 font-semibold rounded-lg transition-colors">
              Book a Demo
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-gray-500 text-white hover:border-orange-500 font-semibold rounded-lg transition-colors">
              Talk to Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-navy-800 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">Lemtik</h3>
            <p className="text-gray-400 text-sm">Africa's civilian-grade C4I platform.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/platform" className="hover:text-cyan-400 transition-colors">Platform</Link></li>
              <li><Link href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/mission" className="hover:text-cyan-400 transition-colors">Mission</Link></li>
              <li><Link href="/newsroom" className="hover:text-cyan-400 transition-colors">Newsroom</Link></li>
              <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link></li>
              <li><Link href="/security" className="hover:text-cyan-400 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2026 Lemtik. All rights reserved. Built in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <main className="bg-background">
      <Hero />
      <Problem />
      <IncidentSimulation />
      <Services />
      <Solutions />
      <Mission />
      <Traction />
      <FinalCTA />
      <Footer />
    </main>
  )
}
