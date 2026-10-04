'use server'

import { getSupabaseClient } from '@/lib/supabase'
import {
  sendContactNotification,
  sendContactConfirmation,
  sendInvestorNotification,
  sendInvestorConfirmation,
} from '@/lib/resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function submitContactForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real visitors never see or fill this field (hidden via CSS in
  // the form), bots that fill every field blind will trip it.
  if (formData.get('company_website')) {
    return { status: 'success' }
  }

  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const company = String(formData.get('company') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const solution = String(formData.get('solution') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in your name, email, and message.' }
  }
  if (!emailPattern.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    const supabase = getSupabaseClient()
    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      company: company || null,
      phone: phone || null,
      solution_interest: solution || null,
      message,
    })
    if (error) throw error

    await sendContactNotification({ name, email, company, phone, solution, message }).catch((err) => {
      console.error('[contact] notification email failed', err)
    })
    await sendContactConfirmation({ name, email }).catch((err) => {
      console.error('[contact] confirmation email failed', err)
    })

    return { status: 'success' }
  } catch (err) {
    console.error('[contact] submission failed', err)
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please try again, or email us directly.',
    }
  }
}

export async function submitInvestorForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  if (formData.get('company_website')) {
    return { status: 'success' }
  }

  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const investorType = String(formData.get('investor_type') || '').trim()
  const checkSize = String(formData.get('check_size') || '').trim()
  const stageInterest = String(formData.get('stage_interest') || '').trim()
  const notes = String(formData.get('notes') || '').trim()

  if (!name || !email || !phone || !investorType || !checkSize || !stageInterest) {
    return { status: 'error', message: 'Please fill in every field.' }
  }
  if (!emailPattern.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    const supabase = getSupabaseClient()
    const { error } = await supabase.from('investor_inquiries').insert({
      name,
      email,
      phone,
      investor_type: investorType,
      check_size: checkSize,
      stage_interest: stageInterest,
      notes: notes || null,
    })
    if (error) throw error

    await sendInvestorNotification({ name, email, phone, investorType, checkSize, stageInterest, notes }).catch((err) => {
      console.error('[investor] notification email failed', err)
    })
    await sendInvestorConfirmation({ name, email }).catch((err) => {
      console.error('[investor] confirmation email failed', err)
    })

    return { status: 'success' }
  } catch (err) {
    console.error('[investor] submission failed', err)
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please try again, or email us directly.',
    }
  }
}

export async function subscribeToNewsletter(_prevState: FormState, formData: FormData): Promise<FormState> {
  if (formData.get('company_website')) {
    return { status: 'success' }
  }

  const email = String(formData.get('email') || '').trim()
  const source = String(formData.get('source') || 'website').trim()

  if (!emailPattern.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    const supabase = getSupabaseClient()
    const { error } = await supabase.from('newsletter_subscribers').insert({ email, source })

    if (error) {
      if (error.code === '23505') {
        // unique_violation — already subscribed, treat as success
        return { status: 'success', message: "You're already subscribed." }
      }
      throw error
    }

    return { status: 'success' }
  } catch (err) {
    console.error('[newsletter] subscription failed', err)
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please try again in a moment.',
    }
  }
}
