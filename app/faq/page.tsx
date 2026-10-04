import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqPageClient } from './page-client'

export const metadata = buildMetadata({
  title: 'FAQ',
  description:
    'Straight answers to real buyer questions about Lemtik — pilot status, pricing, data residency, the audit trail, integrations, and what the AI actually does.',
  path: '/faq',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq' },
]

const faqPlainText = [
  {
    question: 'Is Lemtik live with real customers right now?',
    answer:
      "We're pre-pilot and pre-revenue as a company, building in the open. The platform is built and tested; we're currently onboarding our first pilot partners in Lagos.",
  },
  {
    question: 'Does Lemtik replace our security guards?',
    answer:
      "No. Lemtik coordinates and documents what your guards, patrols, and response teams already do — it doesn't replace people, and the AI layer never makes an autonomous decision without a human operator approving it.",
  },
  {
    question: 'What happens if the internet goes down?',
    answer:
      'Patrol and incident data is designed to queue locally and sync once connectivity returns, rather than failing silently.',
  },
  {
    question: 'Can Lemtik work with the CCTV, access control, and alarm systems we already have?',
    answer: 'Yes — the platform is built to connect with existing infrastructure rather than replace it.',
  },
  {
    question: 'Where is our data stored, and who can see it?',
    answer:
      "Each organisation's data is isolated and encrypted. We design primarily against the Nigeria Data Protection Act (NDPA).",
  },
  {
    question: "Can an incident record be edited or deleted after it's submitted?",
    answer:
      'No. The audit log is append-only at the database level, enforced by a rule that blocks edits and deletions outright for every user, including administrators.',
  },
  {
    question: 'How is Lemtik priced?',
    answer:
      'Pricing is scoped to your site count, team size, and integration needs rather than sold as a one-size-fits-all package.',
  },
  {
    question: 'What does the AI in Lemtik actually do?',
    answer:
      "It ranks response recommendations, correlates related incidents, and surfaces context an operator would otherwise have to dig for manually. It never acts without human approval.",
  },
  {
    question: 'What kind of properties is this built for?',
    answer:
      'Estates, hotels, corporate offices, government facilities, critical infrastructure, retail, and industrial sites — the core platform is the same across every vertical.',
  },
  {
    question: 'How long does it take to get set up?',
    answer: 'This depends on site count and how much existing infrastructure you want connected.',
  },
  {
    question: 'Who do we contact if something goes wrong with the platform itself?',
    answer: "Our contact page routes directly to the team — there's no ticket queue.",
  },
]

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqSchema(faqPlainText)} />
      <Breadcrumbs items={breadcrumbItems} />
      <FaqPageClient />
    </>
  )
}
