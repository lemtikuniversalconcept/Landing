'use client'

import { useActionState, useEffect } from 'react'
import { track } from '@vercel/analytics'
import { trackGaEvent } from '@/lib/gtag'
import { submitInvestorForm, type FormState } from '@/app/actions'

const initialState: FormState = { status: 'idle' }

function RadioGroup({
  name,
  label,
  options,
}: {
  name: string
  label: string
  options: string[]
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-foreground mb-2">{label}</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 rounded border border-border bg-background px-3 py-2.5 text-sm cursor-pointer hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
          >
            <input type="radio" name={name} value={option} required className="accent-primary" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function InvestorForm() {
  const [state, formAction, pending] = useActionState(submitInvestorForm, initialState)

  useEffect(() => {
    if (state.status === 'success') {
      track('investor_form_submitted')
      trackGaEvent('investor_form_submitted')
    }
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Thanks — we've got it</h3>
        <p className="text-muted-foreground">
          Someone from our team will follow up directly. Check your email for a confirmation.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
            placeholder="you@fund.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+234..."
        />
      </div>

      <RadioGroup
        name="investor_type"
        label="I am a"
        options={['Angel investor', 'VC', 'Family office', 'Corporate / strategic', 'Other']}
      />

      <RadioGroup
        name="check_size"
        label="Typical check size"
        options={['Under $25k', '$25k – $100k', '$100k – $250k', '$250k+', 'Prefer to discuss']}
      />

      <RadioGroup
        name="stage_interest"
        label="Interested in"
        options={['This round (pre-seed)', 'Future rounds', 'Just learning more']}
      />

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1.5">
          Anything else? <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Optional — anything specific you'd like to know"
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
        {pending ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
