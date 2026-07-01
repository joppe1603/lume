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

create table if not exists tracking_automation_actions (
  id uuid primary key default gen_random_uuid(),
  action_key text not null unique,
  action_type text not null,
  priority integer not null default 3,
  status text not null default 'open',
  anonymous_id text null,
  session_id text null,
  page_path text null,
  product_slug text null,
  title text not null,
  recommendation text not null,
  evidence jsonb not null default '{}',
  due_at timestamptz null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  resolved_at timestamptz null
);

create index if not exists tracking_automation_actions_status_idx on tracking_automation_actions (status, priority, created_at desc);
create index if not exists tracking_automation_actions_type_idx on tracking_automation_actions (action_type, created_at desc);
create index if not exists tracking_automation_actions_anon_idx on tracking_automation_actions (anonymous_id, created_at desc);
create index if not exists tracking_automation_actions_product_idx on tracking_automation_actions (product_slug, created_at desc);

alter table tracking_events enable row level security;
alter table visitor_profiles enable row level security;
alter table consent_records enable row level security;
alter table tracking_automation_actions enable row level security;

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

drop policy if exists "service role can manage tracking automation actions" on tracking_automation_actions;
create policy "service role can manage tracking automation actions"
  on tracking_automation_actions
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
  and event_name in ('shopify_checkout_created', 'order_created', 'payment_redirect_created');

create or replace view tracking_visitor_intelligence_latest as
select distinct on (anonymous_id)
  anonymous_id,
  session_id,
  occurred_at,
  page_path,
  properties->>'visitor_segment' as visitor_segment,
  (properties->>'intent_score')::integer as intent_score,
  (properties->>'friction_score')::integer as friction_score,
  (properties->>'engagement_score')::integer as engagement_score,
  (properties->>'active_time_ms')::integer as active_time_ms,
  (properties->>'time_on_page_ms')::integer as time_on_page_ms,
  (properties->>'max_scroll')::integer as max_scroll,
  (properties->>'click_count')::integer as click_count,
  (properties->>'rage_click_count')::integer as rage_click_count,
  (properties->>'dead_click_count')::integer as dead_click_count,
  (properties->>'form_focus_count')::integer as form_focus_count,
  (properties->>'product_signals')::integer as product_signals,
  (properties->>'commerce_signals')::integer as commerce_signals,
  properties->>'product_slug' as product_slug,
  properties->'attribution' as attribution
from tracking_events
where event_name = 'visitor_intelligence_snapshot'
order by anonymous_id, occurred_at desc;

create or replace view tracking_high_intent_visitors_24h as
select *
from tracking_visitor_intelligence_latest
where occurred_at >= now() - interval '24 hours'
  and intent_score >= 65
order by intent_score desc, engagement_score desc, occurred_at desc;

create or replace view tracking_hot_but_stuck_24h as
select *
from tracking_visitor_intelligence_latest
where occurred_at >= now() - interval '24 hours'
  and intent_score >= 50
  and friction_score >= 35
order by friction_score desc, intent_score desc, occurred_at desc;

create or replace view tracking_product_affinity_7d as
select
  coalesce(properties->>'product_slug', page_path) as product_or_page,
  count(distinct anonymous_id) as visitors,
  count(*) filter (where event_name = 'product_impression_viewed') as impressions,
  count(*) filter (where event_name = 'page_viewed') as pageviews,
  count(*) filter (where event_name = 'cart_item_added') as cart_adds,
  count(*) filter (where event_name in ('shopify_checkout_started', 'shopify_checkout_created')) as checkout_starts,
  avg((properties->>'intent_score')::integer) filter (where event_name = 'visitor_intelligence_snapshot') as avg_intent_score,
  avg((properties->>'friction_score')::integer) filter (where event_name = 'visitor_intelligence_snapshot') as avg_friction_score
from tracking_events
where occurred_at >= now() - interval '7 days'
  and (
    properties ? 'product_slug'
    or page_path like '/products/%'
  )
group by 1
order by checkout_starts desc, cart_adds desc, avg_intent_score desc nulls last;

create or replace view tracking_friction_points_7d as
select
  page_path,
  event_name,
  properties->>'label' as label,
  properties->>'field' as field,
  count(*) as events,
  count(distinct anonymous_id) as visitors
from tracking_events
where occurred_at >= now() - interval '7 days'
  and event_name in ('rage_click_detected', 'dead_click_detected', 'form_field_engaged')
group by 1, 2, 3, 4
order by events desc, visitors desc;

create or replace view tracking_remarketing_segments_7d as
select
  anonymous_id,
  max(occurred_at) as last_seen_at,
  max((properties->>'intent_score')::integer) filter (where event_name = 'visitor_intelligence_snapshot') as max_intent_score,
  max((properties->>'friction_score')::integer) filter (where event_name = 'visitor_intelligence_snapshot') as max_friction_score,
  bool_or(event_name = 'cart_item_added') as added_to_cart,
  bool_or(event_name in ('shopify_checkout_started', 'shopify_checkout_created')) as started_checkout,
  bool_or(event_name in ('purchase_completed', 'orders_paid', 'order_created')) as purchased,
  array_remove(array_agg(distinct properties->>'product_slug'), null) as product_slugs,
  max(properties->>'visitor_segment') filter (where event_name = 'visitor_intelligence_snapshot') as latest_segment
from tracking_events
where occurred_at >= now() - interval '7 days'
group by anonymous_id
having not bool_or(event_name in ('purchase_completed', 'orders_paid', 'order_created'))
order by started_checkout desc, added_to_cart desc, max_intent_score desc nulls last;

create or replace view tracking_open_automation_actions as
select
  id,
  action_type,
  priority,
  status,
  title,
  recommendation,
  anonymous_id,
  session_id,
  page_path,
  product_slug,
  evidence,
  due_at,
  created_at,
  updated_at
from tracking_automation_actions
where status = 'open'
order by priority asc, created_at desc;

create or replace view tracking_automation_action_counts_7d as
select
  action_type,
  status,
  count(*) as actions,
  min(priority) as highest_priority,
  max(created_at) as last_created_at
from tracking_automation_actions
where created_at >= now() - interval '7 days'
group by action_type, status
order by highest_priority asc, actions desc;
