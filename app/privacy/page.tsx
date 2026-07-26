'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Introduction',
      content: `Lemtik Security ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.`
    },
    {
      title: '2. Information We Collect',
      content: `We collect information in the following ways:

• Personal Identification Information: Name, email address, phone number, company name, and job title when you register, contact us, or request a demo.

• Technical Information: IP address, browser type, operating system, pages visited, time spent, and referring/exit pages.

• Communication Data: Messages, inquiries, and feedback you provide through our website or communications channels.

• Cookies and Tracking: We use cookies, web beacons, and similar tracking technologies to enhance your experience and analyze usage patterns.`
    },
    {
      title: '3. How We Use Your Information',
      content: `We use collected information for:

• Providing and improving our services
• Responding to your inquiries and requests
• Sending marketing communications (with your consent)
• Analyzing usage patterns and system performance
• Complying with legal obligations
• Preventing fraud and ensuring security
• Personalizing your experience
• Conducting research and analytics`
    },
    {
      title: '4. Information Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share information with:

• Service providers who assist in our operations
• Legal authorities when required by law
• Business partners (with your consent)
• Successor entities in case of merger or acquisition

All third parties are contractually obligated to maintain the confidentiality and security of your information.`
    },
    {
      title: '5. Data Security',
      content: `We implement industry-standard security measures, including encryption, secure servers, and access controls to protect your information. However, no transmission over the internet is completely secure. We cannot guarantee absolute security of your data.`
    },
    {
      title: '6. Your Rights',
      content: `Depending on your location, you may have the right to:

• Access your personal information
• Correct inaccurate data
• Delete your information
• Restrict processing
• Data portability
• Withdraw consent
• Lodge complaints with data protection authorities

To exercise these rights, contact us at privacy@lemtik.com.`
    },
    {
      title: '7. Cookies',
      content: `Our website uses cookies to enhance user experience. You can control cookie settings through your browser. Disabling cookies may affect website functionality.

We use both session and persistent cookies for authentication, preferences, and analytics.`
    },
    {
      title: '8. Third-Party Links',
      content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before providing personal information.`
    },
    {
      title: '9. Children\'s Privacy',
      content: `Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from children. If we become aware of such collection, we will take immediate action to delete the information.`
    },
    {
      title: '10. Policy Changes',
      content: `We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services constitutes acceptance of the modified policy.`
    },
    {
      title: '11. Contact Us',
      content: `If you have questions about this Privacy Policy or our privacy practices, please contact us:

Email: privacy@lemtik.com
Address: Lagos, Nigeria
Phone: Available upon request`
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
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Last Updated: July 2026
        </motion.p>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 pb-32">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          {...fadeInUp}
          className="mt-16 p-8 border border-border rounded-lg bg-muted/30"
        >
          <h3 className="text-xl font-bold mb-4">Questions about our privacy practices?</h3>
          <p className="text-muted-foreground mb-6">
            We're committed to transparency. Contact us at privacy@lemtik.com for any privacy-related questions or concerns.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
