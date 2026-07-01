# Shopify Webhook Tracking Setup

The production endpoint is:

```text
https://mauyi.nl/api/shopify/webhooks
```

Add this env var in Vercel Production:

```text
SHOPIFY_WEBHOOK_SECRET=<the Shopify webhook signing secret>
```

Recommended Shopify webhook topics:

- `orders/paid`
- `orders/create`
- `orders/updated`
- `orders/cancelled`
- `refunds/create`
- `fulfillments/create`

The endpoint verifies `X-Shopify-Hmac-Sha256` before writing anything. If the secret is missing or wrong, webhooks return `401`.

After configuring webhooks, run `supabase/tracking.sql` again so these objects exist:

- `shopify_checkout_sessions`
- `shopify_webhook_events`
- `tracking_shopify_purchases_30d`
- `tracking_shopify_webhook_match_rate_30d`

Useful checks:

```sql
select *
from shopify_webhook_events
order by created_at desc
limit 25;
```

```sql
select *
from tracking_shopify_purchases_30d;
```

```sql
select *
from tracking_shopify_webhook_match_rate_30d;
```

