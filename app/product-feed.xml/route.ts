import { getPublicProducts } from '@/lib/products'

// Google Merchant Center product feed (RSS 2.0 + g: namespace).
// Served at https://mauyi.nl/product-feed.xml — submit this URL in
// Merchant Center → Products → Feeds → Scheduled fetch.
// Auto-updates from lib/products.ts, so price/stock changes flow through.

const BASE_URL = 'https://mauyi.nl'

// Cache for an hour; product data is static so this is plenty fresh.
export const revalidate = 3600

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Map our internal availability to Google's accepted values.
function googleAvailability(availability?: string): string {
  switch (availability) {
    case 'pre-launch':
      return 'preorder'
    case 'available':
    case 'sample':
    default:
      return 'in_stock'
  }
}

export async function GET() {
  const products = getPublicProducts().filter(
    (p) => p.availability !== undefined && p.price > 0
  )

  const items = products
    .map((p) => {
      const link = `${BASE_URL}/products/${p.slug}`
      const imageLink = `${BASE_URL}${p.heroImage}`
      const price = `${p.price.toFixed(2)} EUR`
      const availability = googleAvailability(p.availability)
      // Title: keep the SEO title but strip any trailing brand suffix —
      // we send brand separately. Fall back to the product name.
      const title = `${p.name} — ${p.size} | MAUYI`
      const description = p.description

      const salePrice =
        p.originalPrice && p.originalPrice > p.price
          ? `<g:price>${p.originalPrice.toFixed(2)} EUR</g:price>\n      <g:sale_price>${price}</g:sale_price>`
          : `<g:price>${price}</g:price>`

      return `    <item>
      <g:id>${xmlEscape(p.slug)}</g:id>
      <g:title>${xmlEscape(title)}</g:title>
      <g:description>${xmlEscape(description)}</g:description>
      <g:link>${xmlEscape(link)}</g:link>
      <g:image_link>${xmlEscape(imageLink)}</g:image_link>
      <g:availability>${availability}</g:availability>
      ${salePrice}
      <g:brand>MAUYI</g:brand>
      <g:condition>new</g:condition>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>Health &amp; Beauty &gt; Personal Care &gt; Cosmetics &gt; Skin Care</g:google_product_category>
      <g:product_type>Skincare &gt; Serum</g:product_type>
      <g:shipping>
        <g:country>NL</g:country>
        <g:service>Standaard</g:service>
        <g:price>0.00 EUR</g:price>
      </g:shipping>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>MAUYI — Productfeed</title>
    <link>${BASE_URL}</link>
    <description>Wetenschappelijk geformuleerde huidverzorging</description>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
