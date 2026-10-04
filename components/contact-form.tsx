'use client'

import { useActionState, useEffect } from 'react'
import { track } from '@vercel/analytics'
import { submitContactForm, type FormState } from '@/app/actions'

const initialState: FormState = { status: 'idle' }

export function ContactForm({ defaultSolution = '' }: { defaultSolution?: string }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

  useEffect(() => {
    if (state.status === 'success') {
      track('demo_request_submitted', { solution: defaultSolution || 'general' })
    }
  }, [state.status, defaultSolution])

  if (state.status === 'success') {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Message received</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out — someone from Lemtik will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot — hidden from real visitors, bots fill every field they see */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="solution" value={defaultSolution} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
          Company <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your organisation"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your security operation and what you're looking to solve."
        />
      </div>

      {state.status === 'error' && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
