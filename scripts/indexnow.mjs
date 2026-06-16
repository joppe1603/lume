#!/usr/bin/env node
/**
 * MAUYI — IndexNow submitter
 *
 * Stuurt alle URLs uit de sitemap naar IndexNow, zodat Bing & Yandex
 * ze direct (her)crawlen. Veel sneller dan wachten op de normale crawl.
 *
 * Gebruik:
 *   node scripts/indexnow.mjs            # alle URLs uit sitemap.xml
 *   node scripts/indexnow.mjs <url> ...  # alleen specifieke URLs
 *
 * Voorbeeld:
 *   node scripts/indexnow.mjs https://mauyi.nl/journal/bakuchiol-vs-retinol
 *
 * Geen API key nodig: de verificatie loopt via het key-bestand in /public.
 */

const HOST = 'mauyi.nl'
const BASE_URL = `https://${HOST}`
const KEY = '6e17dccd987ecff8aad0653e426e416b'
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

// ── 1. Bepaal welke URLs we sturen ───────────────────────────────────────────

async function getUrlsFromSitemap() {
  console.log(`🗺️   Sitemap ophalen: ${SITEMAP_URL}`)
  const res = await fetch(SITEMAP_URL)
  if (!res.ok) {
    console.error(`❌  Sitemap niet gevonden (${res.status})`)
    process.exit(1)
  }
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  return [...new Set(urls)]
}

const cliUrls = process.argv.slice(2)
const urlList = cliUrls.length ? cliUrls : await getUrlsFromSitemap()

if (!urlList.length) {
  console.error('❌  Geen URLs om te versturen.')
  process.exit(1)
}

// Veiligheidscheck: alle URLs moeten op hetzelfde host staan
const wrong = urlList.filter((u) => !u.startsWith(BASE_URL))
if (wrong.length) {
  console.error('❌  Deze URLs horen niet bij ' + HOST + ':\n   ' + wrong.join('\n   '))
  process.exit(1)
}

console.log(`📤  ${urlList.length} URL(s) versturen naar IndexNow...`)

// ── 2. Verstuur naar IndexNow ────────────────────────────────────────────────

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
})

// IndexNow geeft vaak een lege body terug; status is wat telt.
const body = await res.text()

if (res.status === 200 || res.status === 202) {
  console.log(`✅  Verstuurd! (HTTP ${res.status})`)
  console.log(`   Bing & Yandex crawlen de URLs nu opnieuw.`)
} else {
  console.error(`❌  IndexNow fout (HTTP ${res.status})`)
  if (body) console.error('   ' + body)
  // Veelvoorkomende codes ter info:
  // 400 = ongeldig formaat, 403 = key niet geverifieerd (key-bestand niet live?),
  // 422 = URL hoort niet bij host/key, 429 = te veel verzoeken
  process.exit(1)
}
