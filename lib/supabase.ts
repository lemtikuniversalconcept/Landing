import { createClient } from '@supabase/supabase-js'

// Server-only. This site has no user accounts — the anon key is used
// exclusively from Server Actions (never sent to the browser) and is
// restricted by RLS to insert-only on two tables (see supabase/schema.sql),
// so there's no need for the service role key here at all.
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY. Set them in .env.local.',
    )
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  })
}
