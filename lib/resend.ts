import { Resend } from 'resend'

type ContactNotification = {
  name: string
  email: string
  company: string
  phone: string
  solution: string
  message: string
}

// Fails soft: if Resend isn't configured yet, the contact form still works —
// the submission is already safely in Supabase by the time this runs. This
// only adds the "someone gets pinged" convenience on top.
export async function sendContactNotification(data: ContactNotification) {
  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL

  if (!apiKey || !notifyEmail) {
    console.warn('[resend] RESEND_API_KEY / CONTACT_NOTIFY_EMAIL not set — skipping notification email')
    return
  }

  const resend = new Resend(apiKey)

  // resend.emails.send() resolves with { data, error } — it does not throw
  // on failure (unverified domain, invalid recipient, rate limit, etc.), so
  // that has to be checked explicitly or a failed send disappears silently.
  const { error } = await resend.emails.send({
    from: 'Lemtik Security <noreply@lemtik.com.ng>',
    to: notifyEmail,
    replyTo: data.email,
    subject: `New contact form submission — ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      data.phone ? `Phone: ${data.phone}` : null,
      data.solution ? `Solution interest: ${data.solution}` : null,
      '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }
}

type InvestorNotification = {
  name: string
  email: string
  phone: string
  investorType: string
  checkSize: string
  stageInterest: string
  notes: string
}

// Same fail-soft pattern as the contact form notification.
export async function sendInvestorNotification(data: InvestorNotification) {
  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL

  if (!apiKey || !notifyEmail) {
    console.warn('[resend] RESEND_API_KEY / CONTACT_NOTIFY_EMAIL not set — skipping notification email')
    return
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Lemtik Security <noreply@lemtik.com.ng>',
    to: notifyEmail,
    replyTo: data.email,
    subject: `New investor inquiry — ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Investor type: ${data.investorType}`,
      `Typical check size: ${data.checkSize}`,
      `Interested in: ${data.stageInterest}`,
      data.notes ? `\nNotes:\n${data.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }
}

// Fails soft, same as the internal notification — the submission is already
// saved by the time this runs, so a failed confirmation email never blocks
// the form from succeeding for the visitor.
export async function sendInvestorConfirmation(data: { name: string; email: string }) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn('[resend] RESEND_API_KEY not set — skipping confirmation email')
    return
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Lemtik Security <noreply@lemtik.com.ng>',
    to: data.email,
    subject: 'Thanks for your interest in Lemtik Security',
    text: [
      `Hi ${data.name},`,
      '',
      "Thanks for reaching out about our pre-seed round — we've received your details and someone from our team will follow up directly.",
      '',
      'If anything is urgent, you can also reach us at info@lemtik.com.ng or +234 916 765 6667.',
      '',
      '— The Lemtik Team',
    ].join('\n'),
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }
}

type ProtectedMovementNotification = {
  name: string
  email: string
  interestedAs: string
  notes: string
}

// Same fail-soft pattern as the other notifications.
export async function sendProtectedMovementNotification(data: ProtectedMovementNotification) {
  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL

  if (!apiKey || !notifyEmail) {
    console.warn('[resend] RESEND_API_KEY / CONTACT_NOTIFY_EMAIL not set — skipping notification email')
    return
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Lemtik Security <noreply@lemtik.com.ng>',
    to: notifyEmail,
    replyTo: data.email,
    subject: `New Protected Movement interest — ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Interested as: ${data.interestedAs}`,
      data.notes ? `\nNotes:\n${data.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }
}

// Fails soft, same as the internal notification — the submission is already
// saved by the time this runs, so a failed confirmation email never blocks
// the form from succeeding for the visitor.
export async function sendProtectedMovementConfirmation(data: { name: string; email: string }) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn('[resend] RESEND_API_KEY not set — skipping confirmation email')
    return
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Lemtik Security <noreply@lemtik.com.ng>',
    to: data.email,
    subject: "Thanks for your interest in Protected Movement",
    text: [
      `Hi ${data.name},`,
      '',
      "Thanks for your interest in Protected Movement. It's live on the Lemtik platform, and we'll be in touch to set up a walkthrough on the real system.",
      '',
      'If anything is urgent in the meantime, reach us at info@lemtik.com.ng or +234 916 765 6667.',
      '',
      '— The Lemtik Team',
    ].join('\n'),
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }
}

// Fails soft, same as the internal notification — the submission is already
// saved by the time this runs, so a failed confirmation email never blocks
// the form from succeeding for the visitor.
export async function sendContactConfirmation(data: { name: string; email: string }) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn('[resend] RESEND_API_KEY not set — skipping confirmation email')
    return
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Lemtik Security <noreply@lemtik.com.ng>',
    to: data.email,
    subject: "We've received your message",
    text: [
      `Hi ${data.name},`,
      '',
      "Thanks for reaching out to Lemtik Security — we've received your message and someone from our team will get back to you shortly.",
      '',
      'If anything is urgent, you can also reach us directly at info@lemtik.com.ng or +234 916 765 6667.',
      '',
      '— The Lemtik Team',
    ].join('\n'),
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }
}
