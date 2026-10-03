'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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

      <div className="absolute inset-0 z-0 overflow-hidden">
        {[
          { top: '30%', left: '40%', delay: 0 },
          { top: '50%', left: '70%', delay: 0.5 },
          { top: '70%', left: '20%', delay: 1 },
        ].map((pos, idx) => (
          <motion.div
            key={idx}
            className="absolute w-2 h-2 bg-primary rounded-full"
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="text-primary font-semibold text-lg">Lemtik Security</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance"
          >
            The Operating System for African Security
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-4 text-balance max-w-3xl mx-auto leading-relaxed"
          >
            <strong>Lemtik Security</strong> is Africa&apos;s first civilian-grade command and control platform. We provide real-time intelligence, automated dispatch, and autonomous response capabilities for security teams protecting estates, hotels, corporates, and governments across the continent.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
          >
            When incidents happen, our AI-powered system is built to cut emergency response times through instant threat analysis, optimal resource allocation, and coordinated action—replacing fragmented WhatsApp groups with a unified command center.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Request a Demo
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors"
            >
              See How It Works ↓
            </a>
          </motion.div>
        </motion.div>

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
  return (
    <section className="py-20 px-4 bg-navy-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            The Cost of Fragmentation
          </h2>
          <p className="text-lg text-gray-400 text-balance max-w-2xl mx-auto">
            When incidents happen, information doesn&apos;t flow. Teams use WhatsApp. Managers don&apos;t see alerts. Response is reactive, not coordinated. Every minute of delay is a minute of exposed risk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { stat: '20-40 min', label: 'Average response time with fragmented systems' },
            { stat: '60%', label: 'Incidents never recorded for compliance' },
            { stat: '80%', label: 'Of sites unable to correlate threats across locations' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">{item.stat}</div>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Fragmentation = () => {
  const systems = [
    { name: 'Radio', icon: '📡', x: '10%' },
    { name: 'WhatsApp', icon: '💬', x: '25%' },
    { name: 'CCTV', icon: '📹', x: '40%' },
    { name: 'Logs', icon: '📋', x: '55%' },
    { name: 'Access Control', icon: '🔐', x: '70%' },
    { name: 'Vehicles', icon: '🚗', x: '85%' },
  ]

  return (
    <section className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Fragmented Tools. Fragmented Response.
        </motion.h2>

        <div className="relative h-80 bg-gradient-to-b from-navy-900/50 to-navy-800/50 rounded-xl border border-border/50 overflow-hidden flex items-center justify-center">
          {/* Center hub showing disconnection */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center"
            >
              <span className="text-2xl">❌</span>
            </motion.div>
          </div>

          {/* Disconnected systems orbiting */}
          {systems.map((sys, idx) => (
            <motion.div
              key={idx}
              className="absolute flex flex-col items-center gap-2"
              style={{ left: sys.x, top: '50%', translateY: '-50%' }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2 + idx * 0.2,
                repeat: Infinity,
              }}
            >
              <div className="text-4xl">{sys.icon}</div>
              <span className="text-xs text-gray-400 text-center">{sys.name}</span>
              <div className="w-0.5 h-20 bg-gradient-to-b from-red-500/50 to-transparent" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-8 text-sm"
        >
          Six isolated systems. Zero coordination. Every incident starts as a communication breakdown.
        </motion.p>
      </div>
    </section>
  )
}

const Convergence = () => {
  return (
    <section className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            One Platform.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            One Operational Picture.
          </h2>
          <p className="text-lg text-gray-400 text-balance max-w-2xl mx-auto">
            All systems converge into a single, unified command center where operators see everything, decide faster, and coordinate instantly.
          </p>
        </motion.div>

        <div className="relative h-80 bg-gradient-to-b from-primary/10 to-navy-800/50 rounded-xl border border-primary/30 overflow-hidden flex items-center justify-center">
          {/* Central unified hub */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: ['0 0 0 0px rgba(0, 212, 255, 0.4)', '0 0 0 20px rgba(0, 212, 255, 0.1)', '0 0 0 0px rgba(0, 212, 255, 0.4)'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-20"
          >
            <span className="text-4xl">🎯</span>
          </motion.div>

          {/* Converging lines */}
          {[...Array(6)].map((_, idx) => (
            <motion.div
              key={idx}
              className="absolute w-1 h-20 bg-gradient-to-t from-primary/50 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: 'center',
                rotate: (idx * 60) + 'deg',
              }}
              animate={{
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.1,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { title: 'Unified Intelligence', desc: 'All data streams into one operational picture' },
            { title: 'Instant Coordination', desc: 'Teams act in sync, not parallel' },
            { title: 'Faster Decisions', desc: 'Operators see context, not noise' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-card/50 border border-border/50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const CoreCapabilities = () => {
  const capabilities = [
    {
      title: 'Incident Management',
      desc: 'Log, categorize, escalate, and track incidents in real-time with automatic alerting.',
    },
    {
      title: 'Patrol Operations',
      desc: 'GPS-tracked patrol routes, scheduled coverage areas, live operator status.',
    },
    {
      title: 'Operational Intelligence',
      desc: 'Entity relationships, threat correlation, pattern detection across locations.',
    },
    {
      title: 'Asset Management',
      desc: 'Inventory tracking for vehicles, equipment, personnel, and deployment status.',
    },
    {
      title: 'Response Routing',
      desc: 'Intelligent dispatch that considers distance, availability, and incident type.',
    },
    {
      title: 'Unified Command Centre',
      desc: 'Single dashboard where operators control all operations and see all systems.',
    },
    {
      title: 'Integration Engine',
      desc: 'Connect CCTV, access control, IoT sensors, radios, and legacy systems.',
    },
    {
      title: 'AI Decision Support',
      desc: 'Machine learning assists operators with pattern recognition and recommendations.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Eight Operational Capabilities
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every function a security operations center needs, built into one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-primary mb-3">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const IncidentSimulation = () => {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const stages = [
    {
      title: 'Alert Triggered',
      description: 'Security guard reports suspicious activity via app.',
      color: 'red',
    },
    {
      title: 'AI Analysis',
      description: 'System analyzes incident type, location, and available resources.',
      color: 'yellow',
    },
    {
      title: 'Optimal Dispatch',
      description: 'Closest available patrol team receives priority assignment.',
      color: 'blue',
    },
    {
      title: 'Coordination',
      description: 'All teams see incident context, location, and response status in real-time.',
      color: 'purple',
    },
    {
      title: 'Resolution Logged',
      description: 'Incident resolved and automatically added to compliance records.',
      color: 'green',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-navy-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-balance"
        >
          How It Works in Real-Time
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          From alert to coordinated response in under 60 seconds.
        </motion.p>

        <div className="bg-card border border-border rounded-xl p-8 md:p-12">
          {/* Stage visualization */}
          <div className="mb-12">
            <div className="flex justify-between mb-8">
              {stages.map((s, idx) => (
                <div
                  key={idx}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    stage === idx
                      ? 'bg-primary text-primary-foreground scale-125'
                      : stage > idx
                        ? 'bg-green-500/30 text-green-400'
                        : 'bg-gray-700/30 text-gray-500'
                  }`}
                >
                  {idx + 1}
                </div>
              ))}
            </div>

            {/* Stage content */}
            <motion.div
              key={stage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-background/50 border border-border/50 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">{stages[stage].title}</h3>
              <p className="text-gray-300 mb-4">{stages[stage].description}</p>

              {/* Animated visualization based on stage */}
              {stage === 1 && (
                <div className="h-32 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-4xl">🔍 Analyzing...</div>
                </div>
              )}
              {stage === 2 && (
                <div className="h-32 bg-gradient-to-b from-blue-500/20 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-4xl">📍 Route optimized</div>
                </div>
              )}
              {stage === 3 && (
                <div className="h-32 bg-gradient-to-b from-purple-500/20 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-4xl">🔗 Teams connected</div>
                </div>
              )}
              {stage === 4 && (
                <div className="h-32 bg-gradient-to-b from-green-500/20 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-4xl">✓ Resolved & recorded</div>
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/platform"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Explore the Platform →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const UnifiedCommandCentre = () => {
  return (
    <section className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            The Unified Command Centre
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            One dashboard. Complete operational awareness. Every incident, every asset, every team in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-navy-900/50 border border-primary/30 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Live Incident Feed',
                items: ['Active incidents', 'Priority level', 'Assignment status'],
              },
              {
                title: 'Operational Map',
                items: ['Real-time positions', 'Patrol coverage', 'Asset locations'],
              },
              {
                title: 'Resource Status',
                items: ['Available teams', 'Equipment status', 'Deployment history'],
              },
              {
                title: 'Historical Analytics',
                items: ['Incident trends', 'Response metrics', 'Compliance reports'],
              },
              {
                title: 'Coordination Tools',
                items: ['Team messaging', 'Dispatch controls', 'Escalation matrix'],
              },
              {
                title: 'Integration Status',
                items: ['CCTV feeds', 'Access logs', 'Sensor data'],
              },
            ].map((panel, idx) => (
              <motion.div
                key={idx}
                className="bg-card/50 border border-border/50 rounded-lg p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-primary font-semibold mb-3">{panel.title}</h3>
                <ul className="space-y-2">
                  {panel.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 flex gap-2">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-8 text-sm"
        >
          No switching between applications. No manual updates. One operator sees everything and controls everything.
        </motion.p>
      </div>
    </section>
  )
}

const OperationalIntelligence = () => {
  return (
    <section className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Operational Intelligence
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            AI doesn&apos;t decide. Operators do. But operators decide faster when the system reveals what matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Entity Relationships',
              desc: 'Understand who, what, where, and when. The system connects incidents to people, locations, and patterns.',
              icon: '🔗',
            },
            {
              title: 'Incident Correlation',
              desc: 'One theft becomes a pattern. Multiple break-ins become a campaign. The system sees what humans miss.',
              icon: '🔍',
            },
            {
              title: 'Pattern Detection',
              desc: 'Time, location, type of incident. The system learns normal and alerts when something changes.',
              icon: '📊',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center"
        >
          <p className="text-gray-300 text-lg">
            <strong>Result:</strong> Operators make better decisions. Security improves. Liability decreases.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const InfrastructureIntegration = () => {
  const integrations = [
    { name: 'CCTV', icon: '📹', status: 'Real-time feeds' },
    { name: 'Access Control', icon: '🔐', status: 'Door/gate logs' },
    { name: 'IoT Sensors', icon: '📡', status: 'Motion, intrusion' },
    { name: 'GPS/Vehicles', icon: '🚗', status: 'Asset tracking' },
    { name: 'Radio Systems', icon: '📢', status: 'Voice logging' },
    { name: 'Guard Patrols', icon: '🚶', status: 'Manual input' },
    { name: 'Alarms', icon: '🔔', status: 'Automated alerts' },
    { name: 'Legacy Systems', icon: '🔗', status: 'Custom APIs' },
  ]

  return (
    <section className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Integrates With Everything
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Your existing infrastructure becomes part of one unified system. No rip-and-replace.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((int, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{int.icon}</div>
              <h4 className="font-semibold text-white text-sm mb-1">{int.name}</h4>
              <p className="text-xs text-gray-400">{int.status}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-8 text-sm"
        >
          Every new integration brings more context into the command centre. Every system talks to every other system.
        </motion.p>
      </div>
    </section>
  )
}

const Industries = () => {
  const solutions = [
    {
      title: 'Residential Estates',
      challenge: 'Fragmented guards. No gate visibility. Residents never know if their complaint was handled.',
      solution: 'Central control for all gates, patrols, and incidents. Residents see status updates in real-time.',
    },
    {
      title: 'Hotels & Hospitality',
      challenge: 'Guest safety depends on scattered staff. Theft and incidents happen but aren&apos;t connected.',
      solution: 'Unified response for emergencies. Incident patterns reveal systemic weaknesses.',
    },
    {
      title: 'Corporate Offices',
      challenge: 'Multiple buildings. No view into who&apos;s where. Compliance auditors find gaps in records.',
      solution: 'One dashboard across all locations. Automated audit trails satisfy regulators.',
    },
    {
      title: 'Government Facilities',
      challenge: 'Response time matters. Multiple agencies need to coordinate. Liability is high.',
      solution: 'Real-time inter-agency coordination. Decision support for threat escalation.',
    },
    {
      title: 'Critical Infrastructure',
      challenge: 'High-consequence incidents require perfect coordination. Legacy systems don&apos;t communicate.',
      solution: 'All systems unified. Operators see everything. Playbooks execute automatically.',
    },
    {
      title: 'Retail & Commercial',
      challenge: 'Stores operate independently. Loss patterns go undetected. Response is reactive.',
      solution: 'Chain-wide visibility. Patterns become preventable. Loss drops dramatically.',
    },
    {
      title: 'Industrial & Manufacturing',
      challenge: 'Multiple sites. Equipment worth millions. Theft and tampering undetected.',
      solution: 'Integrated security across all facilities. Asset tracking in real-time.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Built for Every Sector
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Same operational platform. Different challenges. Same speed of response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{sol.title}</h3>
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">The Challenge</p>
                <p className="text-gray-300 text-sm">{sol.challenge}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-primary mb-2">The Solution</p>
                <p className="text-gray-300 text-sm">{sol.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const EngineeringPhilosophy = () => {
  return (
    <section className="py-20 px-4 bg-navy-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Why Lemtik Works
          </h2>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              title: 'Information Speed',
              desc: 'Data reaches operators in seconds, not hours. Alerts are automatic, not manual.',
            },
            {
              title: 'Decision Quality',
              desc: 'Context improves judgment. When operators see patterns and relationships, they decide better.',
            },
            {
              title: 'Coordinated Action',
              desc: 'All teams see the same incident, the same map, the same priorities. No confusion. No delay.',
            },
            {
              title: 'Proven & Operational',
              desc: 'Built by engineers who understand security. Tested in real operations. Deployed in Lagos.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center"
        >
          <p className="text-gray-300 text-lg">
            Security isn&apos;t about faster alerts. It&apos;s about better decisions made by coordinated teams with complete information.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const Mission = () => {
  return (
    <section className="py-20 px-4 bg-navy-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Lemtik&apos;s Mission
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-balance">
            Reduce the latency between alert and action by giving security teams one intelligent operational picture.
          </p>

          <p className="text-lg text-gray-400 mb-12 text-balance">
            African security teams deserve infrastructure that treats them as professionals. Not legacy software built for developed markets. Lemtik is built here, for here, by people who understand operations.
          </p>

          <Link
            href="/mission"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
          >
            Learn More About Our Mission →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-navy-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Reduce Response Time?
          </h2>

          <p className="text-lg text-gray-400 mb-12 text-balance max-w-2xl mx-auto">
            See how Lemtik transforms fragmented operations into coordinated command in a live demonstration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-muted text-foreground hover:border-primary font-semibold rounded-lg transition-colors"
            >
              Talk With Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const DataTransparency = () => {
  return (
    <section className="py-16 px-4 bg-navy-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Data & Privacy</h2>
          <p className="text-gray-300 mb-6">
            Lemtik Security is committed to protecting your privacy and being transparent about how we use data. When you use our platform, we may request access to:
          </p>
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Identity & Account Information:</strong> To authenticate users and manage your account securely.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Location Data:</strong> To provide real-time incident response and resource dispatch capabilities essential to our security operations platform.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Security & Device Information:</strong> To ensure platform security, prevent fraud, and maintain service integrity.</span>
            </li>
          </ul>
          <p className="text-gray-300 mb-4">
            We never sell your data to third parties. All information is encrypted and stored securely. For detailed information about our practices, please review our <Link href="/privacy" className="text-primary hover:text-primary/80 underline">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function HomePageClient() {
  return (
    <main className="bg-background">
      <Hero />
      <Problem />
      <Fragmentation />
      <Convergence />
      <CoreCapabilities />
      <IncidentSimulation />
      <UnifiedCommandCentre />
      <OperationalIntelligence />
      <InfrastructureIntegration />
      <Industries />
      <EngineeringPhilosophy />
      <Mission />
      <FinalCTA />
      <DataTransparency />
    </main>
  )
}
