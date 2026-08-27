'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function TermsPageClient() {
  const sections = [
    {
      title: '1. Agreement to Terms',
      content: `By accessing and using this website and services provided by Lemtik Security, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: '2. Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Lemtik Security's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose or for any public display
• Attempt to decompile or reverse engineer any software contained on the website
• Remove any copyright or other proprietary notations from the materials
• Transfer the materials to another person or "mirror" the materials on any other server
• Violate any applicable laws or regulations
• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website`
    },
    {
      title: '3. Disclaimer',
      content: `The materials on Lemtik Security's website are provided on an 'as is' basis. Lemtik Security makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`
    },
    {
      title: '4. Limitations',
      content: `In no event shall Lemtik Security or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lemtik Security's website, even if Lemtik Security or an authorized representative has been notified orally or in writing of the possibility of such damage.`
    },
    {
      title: '5. Accuracy of Materials',
      content: `The materials appearing on Lemtik Security's website could include technical, typographical, or photographic errors. Lemtik Security does not warrant that any of the materials on our website are accurate, complete, or current. Lemtik Security may make changes to the materials contained on our website at any time without notice.`
    },
    {
      title: '6. Materials and Content',
      content: `Lemtik Security has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Lemtik Security of the site. Use of any such linked website is at the user's own risk.

If you believe any materials on our website infringe your copyright, please contact us immediately at legal@lemtik.com.`
    },
    {
      title: '7. Modifications',
      content: `Lemtik Security may revise these terms and conditions for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.`
    },
    {
      title: '8. Governing Law',
      content: `These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts located in Lagos, Nigeria.`
    },
    {
      title: '9. User Accounts',
      content: `If you create an account on our website, you are responsible for:

• Maintaining the confidentiality of your password
• Accepting responsibility for all activities that occur under your account
• Notifying us immediately of any unauthorized use of your account
• Ensuring all information provided is accurate and current
• Not creating accounts for fraudulent purposes
• Not using accounts for harassment or illegal activities`
    },
    {
      title: '10. Intellectual Property Rights',
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of Lemtik Security or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, transmit, display, or create derivative works without prior written permission.`
    },
    {
      title: '11. User Conduct',
      content: `You agree not to:

• Post or transmit any illegal, threatening, abusive, defamatory, obscene, or otherwise objectionable material
• Disrupt the normal flow of dialogue within our website
• Attempt to gain unauthorized access to our systems
• Transmit viruses or malicious code
• Engage in spamming or unsolicited advertising
• Violate any applicable laws or regulations
• Infringe on intellectual property rights of others`
    },
    {
      title: '12. Limitation of Liability',
      content: `To the fullest extent permitted by law, Lemtik Security shall not be liable for any indirect, incidental, special, consequential, or punitive damages, regardless of the cause or theory of liability, even if Lemtik Security has been advised of the possibility of such damages.`
    },
    {
      title: '13. Indemnification',
      content: `You agree to indemnify and hold harmless Lemtik Security, its owners, operators, employees, and agents from any claim, demand, or damage, including reasonable attorneys' fees, arising from or related to your use of the website or violation of these terms and conditions.`
    },
    {
      title: '14. Severability',
      content: `If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid.`
    },
    {
      title: '15. Contact Information',
      content: `If you have any questions about these Terms and Conditions, please contact us:

Email: legal@lemtik.com
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
          Terms and Conditions
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
          <h3 className="text-xl font-bold mb-4">Questions about our terms?</h3>
          <p className="text-muted-foreground mb-6">
            Please contact our legal team at legal@lemtik.com.ng with any questions or concerns regarding these terms and conditions.
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
