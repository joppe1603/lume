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

create table if not exists shopify_checkout_sessions (
  shopify_cart_id text primary key,
  shopify_cart_token text null,
  anonymous_id text not null,
  session_id text not null,
  checkout_url text null,
  checkout_host text null,
  total numeric null,
  item_count integer null,
  items jsonb not null default '{}',
  network jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists shopify_checkout_sessions_token_idx on shopify_checkout_sessions (shopify_cart_token);
create index if not exists shopify_checkout_sessions_anon_idx on shopify_checkout_sessions (anonymous_id, created_at desc);
create index if not exists shopify_checkout_sessions_session_idx on shopify_checkout_sessions (session_id, created_at desc);

create table if not exists shopify_webhook_events (
  id uuid primary key default gen_random_uuid(),
  topic text null,
  shop_domain text null,
  shopify_order_id text null,
  shopify_order_gid text null,
  shopify_cart_token text null,
  shopify_checkout_token text null,
  payload jsonb not null default '{}',
  matched_anonymous_id text null,
  matched_session_id text null,
  created_at timestamptz not null default now()
);

create index if not exists shopify_webhook_events_topic_idx on shopify_webhook_events (topic, created_at desc);
create index if not exists shopify_webhook_events_order_idx on shopify_webhook_events (shopify_order_id);
create index if not exists shopify_webhook_events_cart_idx on shopify_webhook_events (shopify_cart_token);
create index if not exists shopify_webhook_events_checkout_idx on shopify_webhook_events (shopify_checkout_token);

alter table tracking_events enable row level security;
alter table visitor_profiles enable row level security;
alter table consent_records enable row level security;
alter table shopify_checkout_sessions enable row level security;
alter table shopify_webhook_events enable row level security;

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

drop policy if exists "service role can manage shopify checkout sessions" on shopify_checkout_sessions;
create policy "service role can manage shopify checkout sessions"
  on shopify_checkout_sessions
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role can manage shopify webhook events" on shopify_webhook_events;
create policy "service role can manage shopify webhook events"
  on shopify_webhook_events
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create or replace view tracking_daily_event_counts as
select
  date_trunc('day', occurred_at)::date as day,
  event_name,
  count(*) as events,
  count(distinct anonymous_id) as visitors,
  count(distinct session_id) as sessions
from tracking_events
group by 1, 2
order by 1 desc, 3 desc;

create or replace view tracking_top_pages_7d as
select
  page_path,
  count(*) filter (where event_name = 'page_viewed') as pageviews,
  count(distinct anonymous_id) as visitors,
  count(*) filter (where event_name = 'waitlist_signup_completed') as waitlist_signups,
  count(*) filter (where event_name in ('shopify_checkout_started', 'payment_redirect_started')) as checkout_starts
from tracking_events
where occurred_at >= now() - interval '7 days'
group by 1
order by pageviews desc nulls last;

create or replace view tracking_checkout_funnel_7d as
select
  event_name,
  count(*) as events,
  count(distinct anonymous_id) as visitors,
  count(distinct session_id) as sessions
from tracking_events
where occurred_at >= now() - interval '7 days'
  and event_name in (
    'cart_item_added',
    'shopify_checkout_started',
    'shopify_checkout_created',
    'shopify_checkout_failed',
    'checkout_step_viewed',
    'payment_redirect_started',
    'order_created'
  )
group by event_name
order by case event_name
  when 'cart_item_added' then 1
  when 'shopify_checkout_started' then 2
  when 'shopify_checkout_created' then 3
  when 'checkout_step_viewed' then 4
  when 'payment_redirect_started' then 5
  when 'order_created' then 6
  else 99
end;

create or replace view tracking_revenue_events_30d as
select
  occurred_at,
  anonymous_id,
  session_id,
  event_name,
  (properties->>'total')::numeric as total,
  properties->>'shopify_cart_id' as shopify_cart_id,
  properties->'items' as items,
  properties->'attribution' as attribution
from tracking_events
where occurred_at >= now() - interval '30 days'
  and event_name in ('shopify_checkout_created', 'order_created', 'payment_redirect_created', 'purchase_completed', 'orders_paid');

create or replace view tracking_shopify_purchases_30d as
select
  created_at,
  topic,
  shopify_order_id,
  shopify_order_gid,
  matched_anonymous_id,
  matched_session_id,
  (payload->>'total')::numeric as total,
  payload->>'currency' as currency,
  payload->>'financial_status' as financial_status,
  payload->>'email_domain' as email_domain,
  payload->'items' as items,
  payload->>'landing_site' as landing_site,
  payload->>'referring_site' as referring_site
from shopify_webhook_events
where created_at >= now() - interval '30 days'
  and topic in ('orders/paid', 'orders/create', 'orders/updated')
order by created_at desc;

create or replace view tracking_shopify_webhook_match_rate_30d as
select
  topic,
  count(*) as webhook_events,
  count(*) filter (where matched_anonymous_id is not null) as matched_events,
  round(
    100.0 * count(*) filter (where matched_anonymous_id is not null) / nullif(count(*), 0),
    2
  ) as match_rate_pct
from shopify_webhook_events
where created_at >= now() - interval '30 days'
group by topic
order by webhook_events desc;
