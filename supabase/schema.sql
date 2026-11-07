-- Lemtik Security public site — Supabase schema
-- Run this once in the Supabase project this site is meant to use
-- (Dashboard → SQL Editor → paste → Run). Safe to re-run: every
-- statement is idempotent.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  phone text,
  solution_interest text,
  message text not null,
  status text not null default 'new'
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  source text
);

create table if not exists public.investor_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  investor_type text not null,
  check_size text not null,
  stage_interest text not null,
  notes text,
  status text not null default 'new'
);

create table if not exists public.protected_movement_interest (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  interested_as text not null,
  notes text,
  status text not null default 'new'
);

alter table public.contact_submissions enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.investor_inquiries enable row level security;
alter table public.protected_movement_interest enable row level security;

-- The public site only ever inserts, using the anon key, via a Server
-- Action (never exposed to the browser directly). No select/update/delete
-- policy exists for anon, so even a leaked anon key can only add rows,
-- never read, edit, or delete anyone's submission.
drop policy if exists "anon can insert contact submissions" on public.contact_submissions;
create policy "anon can insert contact submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

drop policy if exists "anon can insert newsletter subscribers" on public.newsletter_subscribers;
create policy "anon can insert newsletter subscribers"
  on public.newsletter_subscribers
  for insert
  to anon
  with check (true);

drop policy if exists "anon can insert investor inquiries" on public.investor_inquiries;
create policy "anon can insert investor inquiries"
  on public.investor_inquiries
  for insert
  to anon
  with check (true);

drop policy if exists "anon can insert protected movement interest" on public.protected_movement_interest;
create policy "anon can insert protected movement interest"
  on public.protected_movement_interest
  for insert
  to anon
  with check (true);
