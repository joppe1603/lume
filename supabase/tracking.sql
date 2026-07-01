create extension if not exists pgcrypto;

create table if not exists tracking_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  occurred_at timestamptz not null default now(),
  anonymous_id text not null,
  session_id text not null,
  user_id uuid null,
  page_url text null,
  page_path text null,
  referrer text null,
  utm jsonb not null default '{}',
  device jsonb not null default '{}',
  fingerprint jsonb not null default '{}',
  network jsonb not null default '{}',
  properties jsonb not null default '{}',
  consent jsonb not null default '{}'
);

create index if not exists tracking_events_session_idx on tracking_events (session_id, occurred_at desc);
create index if not exists tracking_events_anonymous_idx on tracking_events (anonymous_id, occurred_at desc);
create index if not exists tracking_events_user_idx on tracking_events (user_id, occurred_at desc);
create index if not exists tracking_events_name_idx on tracking_events (event_name, occurred_at desc);
create index if not exists tracking_events_path_idx on tracking_events (page_path, occurred_at desc);

create table if not exists visitor_profiles (
  anonymous_id text primary key,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  user_id uuid null,
  fingerprint_visitor_id text null,
  fingerprint_confidence numeric null,
  risk_score integer not null default 0,
  country text null,
  device_summary jsonb not null default '{}',
  consent_state jsonb not null default '{}'
);

create index if not exists visitor_profiles_fingerprint_idx on visitor_profiles (fingerprint_visitor_id);
create index if not exists visitor_profiles_risk_idx on visitor_profiles (risk_score desc, last_seen_at desc);

create table if not exists consent_records (
  id uuid primary key default gen_random_uuid(),
  anonymous_id text not null,
  session_id text not null,
  user_id uuid null,
  consent_version text not null,
  analytics boolean not null default false,
  marketing boolean not null default false,
  fingerprinting boolean not null default false,
  ip_hash text null,
  user_agent text null,
  created_at timestamptz not null default now()
);

create index if not exists consent_records_anonymous_idx on consent_records (anonymous_id, created_at desc);
create index if not exists consent_records_user_idx on consent_records (user_id, created_at desc);

alter table tracking_events enable row level security;
alter table visitor_profiles enable row level security;
alter table consent_records enable row level security;

drop policy if exists "service role can manage tracking events" on tracking_events;
create policy "service role can manage tracking events"
  on tracking_events
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role can manage visitor profiles" on visitor_profiles;
create policy "service role can manage visitor profiles"
  on visitor_profiles
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role can manage consent records" on consent_records;
create policy "service role can manage consent records"
  on consent_records
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

