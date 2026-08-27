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

  await resend.emails.send({
    // Resend requires a verified sending domain for anything other than
    // the account owner's own address — swap this once lemtik.com.ng is
    // verified in the Resend dashboard (Domains → Add Domain → DNS records).
    from: 'Lemtik Security <onboarding@resend.dev>',
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
}
