import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyProductBar from './StickyProductBar'
import IngredientsAccordion from './IngredientsAccordion'
import PDPHero from './PDPHero'
import PDPTextureGallery from './PDPTextureGallery'
import PDPRoutineContext from './PDPRoutineContext'
import PDPWhyThisWorks from './PDPWhyThisWorks'
import PDPUsageTimeline from './PDPUsageTimeline'
import PDPFaq from './PDPFaq'
import { getProduct, getAllProducts, getPublicProducts, getRelatedProducts } from '@/lib/products'
import PDPBundleUpsell from './PDPBundleUpsell'
import PDPReviews from './PDPReviews'
import PDPScrollIngredients from './PDPScrollIngredients'
import PDPScrollProgress from './PDPScrollProgress'

const BASE_URL = 'https://mauyi.nl'

export function generateStaticParams() {
  return getPublicProducts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: {
      canonical: `${BASE_URL}/products/${slug}`,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `${BASE_URL}/products/${slug}`,
      images: [{ url: `${BASE_URL}${product.heroImage}`, width: 1200, height: 630, alt: product.seo.title }],
      type: 'website',
    },
    other: {
      'product:price:amount': product.price?.toString() ?? '58',
      'product:price:currency': 'EUR',
      'product:brand': 'MAUYI',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo.title,
      description: product.seo.description,
      images: [product.heroImage],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product || product.hidden) notFound()

  const related = getRelatedProducts(product.relatedSlugs)

  // Fetch reviews for structured data (star ratings + individual reviews in Google SERP)
  let reviewCount = 0
  let avgRating: number | null = null
  let reviewRows: { name: string; rating: number; body: string; created_at: string }[] = []
  try {
    const db = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    )
    const { data: rows } = await db
      .from('reviews')
      .select('name, rating, body, created_at')
      .eq('product_slug', slug)
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .limit(10)
    if (rows && rows.length > 0) {
      reviewRows = rows
      reviewCount = rows.length
      avgRating = Math.round(rows.reduce((s: number, r: { rating: number }) => s + r.rating, 0) / rows.length * 10) / 10
    }
  } catch {}

  const availability =
    product.availability === 'available'
      ? 'https://schema.org/InStock'
      : 'https://schema.org/PreOrder'

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${BASE_URL}${product.heroImage}`,
    brand: { '@type': 'Brand', name: 'MAUYI' },
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'EUR',
      availability,
      url: `${BASE_URL}/products/${slug}`,
      seller: { '@type': 'Organization', name: 'MAUYI' },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'EUR',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'NL',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'NL',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 14,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
        merchantReturnLink: `${BASE_URL}/retourbeleid`,
      },
    },
    ...(reviewCount > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating,
        reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      review: reviewRows.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: r.body,
        datePublished: r.created_at.slice(0, 10),
      })),
    }),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Producten', item: `${BASE_URL}/shop` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${BASE_URL}/products/${slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is dit veilig voor gevoelige huid?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja. De formule is ontworpen met gevoelige huid als uitgangspunt. De laagste effectieve retinolconcentratie (0.3%) wordt gebufferd door niacinamide, waardoor irritatie sterk vermindert. Begin met 2–3 avonden per week.' },
      },
      {
        '@type': 'Question',
        name: 'Kan ik dit combineren met vitamine C of SPF?',
        acceptedAnswer: { '@type': 'Answer', text: "Gebruik vitamine C 's ochtends, dit serum 's avonds. SPF overdag is verplicht — retinol maakt de huid tijdelijk iets gevoeliger voor zon. Combineer dit niet met andere retinol- of exfoliërende producten." },
      },
      {
        '@type': 'Question',
        name: 'Hoe snel zie ik resultaat?',
        acceptedAnswer: { '@type': 'Answer', text: 'De eerste veranderingen in textuur zijn merkbaar na 3–4 weken bij consistent gebruik. Significant verschil in huidtoon, fijnere lijntjes en kleinere poriën is zichtbaar na 8–12 weken.' },
      },
      {
        '@type': 'Question',
        name: 'Wat als mijn huid reageert?',
        acceptedAnswer: { '@type': 'Answer', text: 'Lichte warmte, straktheid of een tijdelijke droogheid zijn normaal in de eerste weken. Verlaag de frequentie naar 2 avonden per week. Bij aanhoudende irritatie, stop het gebruik.' },
      },
      {
        '@type': 'Question',
        name: 'Is dit geschikt tijdens zwangerschap of borstvoeding?',
        acceptedAnswer: { '@type': 'Answer', text: 'Retinol wordt niet aanbevolen tijdens zwangerschap of borstvoeding. Raadpleeg altijd je huisarts of gynaecoloog.' },
      },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: product.name,
    url: `${BASE_URL}/products/${slug}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.pdp-description', '.pdp-how-to-use'],
    },
  }

  const howToSchema = product.howToUse.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Hoe gebruik je ${product.name}?`,
    description: `Stap-voor-stap gebruiksaanwijzing voor ${product.name} van MAUYI.`,
    step: product.howToUse.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <PDPScrollProgress />
      <Navbar />

      <main className="bg-[#FAF8F5] min-h-screen">

        {/* ─── BREADCRUMB ───────────────────────────────── */}
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
            <nav className="flex items-center gap-2 text-xs text-[#9A9590]">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span className="text-stone-300">/</span>
              <Link href="/shop" className="hover:text-[#C9A96E] transition-colors">Producten</Link>
              <span className="text-stone-300">/</span>
              <span className="text-[#1A1A1A] font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* ─── 1. CINEMATIC HERO ────────────────────────── */}
        <PDPHero product={product} />

        {/* ─── 2. MANIFESTO ─────────────────────────────── */}
        <section className="bg-[#FAF8F5] py-24">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
            {product.emotion && (
              <h2
                className="text-4xl sm:text-5xl font-semibold text-[#1A1A1A] leading-[1.08] mb-10"
                style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}
              >
                &ldquo;{product.emotion}&rdquo;
              </h2>
            )}
            <p className="pdp-description text-[17px] text-[#5C5754] leading-[1.8] font-light">
              {product.longDescription}
            </p>
          </div>
        </section>

        {/* ─── 3. TEXTURE GALLERY ───────────────────────── */}
        <PDPTextureGallery product={product} />

        {/* ─── 4. WAAROM DIT WERKT — mobile ────────────── */}
        <div className="lg:hidden">
          <PDPWhyThisWorks product={product} />
        </div>

        {/* ─── 4. SCROLL INGREDIENTS — desktop ─────────── */}
        <PDPScrollIngredients product={product} />

        {/* ─── 5. INGREDIËNTEN ──────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="section-label">Formule</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-3"
              >
                Elk ingrediënt.
                <br />
                <span
                  className="font-normal italic"
                  style={{ color: '#9A9590', fontFamily: 'var(--font-cormorant)' }}
                >
                  Met een reden.
                </span>
              </h2>
              <p className="text-[15px] text-[#9A9590] font-light">
                Geen vullers. Geen obscure extracten. Alleen wat klinisch werkt.
              </p>
            </div>
            <IngredientsAccordion
              keyIngredients={product.keyIngredients}
              allIngredients={product.allIngredients}
            />
          </div>
        </section>

        {/* ─── 5. HOE TE GEBRUIKEN ──────────────────────── */}
        <section className="bg-[#0F0E0C] py-20 text-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="section-label text-[#C9A96E]">Gebruik</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                Hoe te gebruiken.
              </h2>
            </div>
            <ol className="pdp-how-to-use space-y-0">
              {product.howToUse.map((step, i) => (
                <li key={i} className="flex items-start gap-6 py-5 border-b border-white/6 last:border-0">
                  <span
                    className="text-[#C9A96E] font-medium text-sm tabular-nums shrink-0 pt-0.5"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-stone-300 leading-relaxed font-light text-[15px]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 6. ROUTINE CONTEXT ───────────────────────── */}
        <PDPRoutineContext product={product} relatedProducts={related} />

        {/* ─── 7. TIJDLIJN ──────────────────────────────── */}
        <PDPUsageTimeline />

        {/* ─── 8. REVIEWS ───────────────────────────────── */}
        <section className="py-20 bg-[#FAF8F5]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="section-label">Sample testers</span>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight">
                  Wat onze testers zeggen.
                </h2>
                <p className="text-[13px] text-[#9A9590] font-light max-w-xs text-right">
                  Feedback verzameld tijdens de ontwikkelfase met sample testers.
                </p>
              </div>
            </div>

            {/* Review cards */}
            <div className="grid md:grid-cols-3 gap-5">
              {product.reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl border border-stone-100 p-6 flex flex-col">
                  {/* Quote */}
                  <p className="text-[#1A1A1A] text-[14px] leading-relaxed font-light mb-5 flex-1">
                    &ldquo;{r.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                    <div className={`w-8 h-8 ${r.color} rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-[#1A1A1A] truncate">{r.author}</p>
                      <p className="text-[10px] text-[#9A9590]">{r.skin} · {r.weeks}</p>
                    </div>
                    <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.15em] text-[#9A9590] bg-stone-100 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      Tester
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pre-launch disclaimer */}
            <div className="mt-8 text-center">
              <p className="text-[12px] text-[#9A9590] font-light">
                Dit product is in pre-launch. Bovenstaande feedback is afkomstig van sample testers tijdens de ontwikkelfase.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 9. FAQ ───────────────────────────────────── */}
        <PDPFaq productName={product.name} />

        {/* ─── 9e. USE-CASE LINKS (reset-serum only) ────── */}
        {slug === 'reset-serum' && (
          <section className="py-16 bg-[#FAF8F5] border-t border-stone-100">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="section-label">Specifiek voor jou</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2 leading-tight">
                Reset Serum voor jouw huidtype
              </h2>
              <p className="text-[14px] text-[#9A9590] font-light mb-8">
                Elke huid is anders. Lees hoe Reset Serum werkt voor jouw specifieke huidkwestie.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { href: '/products/reset-serum/voor-gevoelige-huid', label: 'Gevoelige huid', desc: 'Retinol zonder irritatie' },
                  { href: '/products/reset-serum/voor-acne-littekens', label: 'Acne littekens', desc: 'Post-acne pigmentatie vervaagt' },
                  { href: '/products/reset-serum/voor-rimpels', label: 'Rimpels', desc: 'Klinisch bewezen anti-aging' },
                  { href: '/products/reset-serum/voor-pigmentatie', label: 'Pigmentatie', desc: 'Donkere vlekken bij de bron' },
                  { href: '/products/reset-serum/voor-beginners', label: 'Beginners', desc: 'Eerste keer retinol' },
                  { href: '/products/reset-serum/voor-droge-huid', label: 'Droge huid', desc: 'Zonder uitdroging' },
                  { href: '/products/reset-serum/voor-ongelijke-huidtextuur', label: 'Huidtextuur', desc: 'Gladde, verfijnde poriën' },
                  { href: '/products/reset-serum/voor-30-plus', label: '30+ anti-aging', desc: 'Preventieve collageenstimulatie' },
                  { href: '/products/reset-serum/voor-combinatiehuid', label: 'Combinatiehuid', desc: 'T-zone en wangen in balans' },
                  { href: '/products/reset-serum/voor-vette-huid', label: 'Vette huid', desc: 'Minder glans, kleinere poriën' },
                  { href: '/products/reset-serum/voor-40-plus', label: '40+ anti-aging', desc: 'Diepere rimpels aanpakken' },
                  { href: '/products/reset-serum/voor-zonschade', label: 'Zonschade', desc: 'Fotoveroudering terugdraaien' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col bg-white rounded-xl border border-stone-100 p-4 hover:border-[#C9A96E]/40 hover:shadow-sm transition-all duration-300"
                  >
                    <span className="text-[13px] font-semibold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors mb-1">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#9A9590] font-light leading-snug flex-1">
                      {item.desc}
                    </span>
                    <span className="mt-3 text-[10px] font-medium text-[#C9A96E] group-hover:underline underline-offset-2">
                      Lees meer →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── 9f. ALTERNATIEVEN LINKS (reset-serum only) ── */}
        {slug === 'reset-serum' && (
          <section className="py-12 bg-white border-t border-stone-100">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="section-label">Vergelijken</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-2 leading-tight">
                MAUYI vs bekende merken
              </h2>
              <p className="text-[13px] text-[#9A9590] font-light mb-6">
                Eerlijke vergelijking met retinolproducten die je misschien al kent.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: '/alternatives/the-ordinary', label: 'vs The Ordinary' },
                  { href: '/alternatives/cerave', label: 'vs CeraVe' },
                  { href: '/alternatives/la-roche-posay', label: 'vs La Roche-Posay' },
                  { href: '/alternatives/paulas-choice', label: "vs Paula's Choice" },
                  { href: '/alternatives/indeed-labs', label: 'vs Indeed Labs' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[12px] font-medium text-[#6B6560] bg-stone-100 hover:bg-[#C9A96E]/10 hover:text-[#C9A96E] border border-stone-200 hover:border-[#C9A96E]/30 px-3 py-1.5 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── 9d. JOURNAL LINKS ────────────────────────── */}
        <section className="py-16 bg-white border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="section-label">Meer lezen</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8 leading-tight"
            >
              Uit het MAUYI Journal
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { slug: 'bakuchiol-vs-retinol', title: 'Bakuchiol vs retinol: wat is het verschil?', category: 'Ingrediënten' },
                { slug: 'niacinamide-serum-gids', title: 'Niacinamide serum: wat het doet en welke concentratie werkt', category: 'Ingrediënten' },
                { slug: 'retinol-beginners-gids', title: 'Retinol voor beginners: hoe je start zonder irritatie', category: 'Ingrediënten' },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="group flex flex-col bg-[#FAF8F5] rounded-xl border border-stone-100 p-5 hover:border-[#C9A96E]/30 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <span className="section-label block mb-2">{article.category}</span>
                  <h3 className="text-[14px] font-medium text-[#1A1A1A] leading-snug group-hover:text-[#C9A96E] transition-colors flex-1">
                    {article.title}
                  </h3>
                  <span className="mt-4 text-[11px] text-[#C9A96E] font-medium group-hover:underline underline-offset-2">
                    Lees artikel →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9b. BUNDLE UPSELL ────────────────────────── */}
        {related.length > 0 && (
          <PDPBundleUpsell currentProduct={product} relatedProducts={related} />
        )}

        {/* ─── 9c. KLANTREVIEWS ─────────────────────────── */}
        <PDPReviews slug={product.slug} />

        {/* ─── 10. PAIRS WELL WITH ──────────────────────── */}
        {related.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-px bg-[#C9A96E]" />
                  <span className="section-label">Vervolgens in je routine</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight">
                  Jouw routine,
                  <br />
                  <span
                    className="font-normal italic"
                    style={{ color: '#9A9590', fontFamily: 'var(--font-cormorant)' }}
                  >
                    compleet gemaakt.
                  </span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/products/${rel.slug}`}
                    className="group flex gap-5 bg-[#FAF8F5] rounded-2xl border border-stone-100 overflow-hidden hover:border-[#C9A96E]/30 hover:bg-white hover:shadow-sm transition-all duration-300 p-5"
                  >
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                      <Image
                        src={rel.heroImage}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1 min-w-0 py-1">
                      <span className="section-label block mb-2">{rel.badge}</span>
                      <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-1 group-hover:text-[#C9A96E] transition-colors">
                        {rel.name}
                      </h3>
                      <p className="text-[12px] text-[#9A9590] font-light mb-3 line-clamp-2">{rel.tagline}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[15px] font-semibold text-[#1A1A1A]">€{rel.price}</span>
                        <span className="text-[11px] text-[#C9A96E] font-medium group-hover:underline underline-offset-2">
                          Bekijk →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
      <StickyProductBar
        slug={product.slug}
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
        image={product.heroImage}
        size={product.size}
        availability={product.availability}
        shopifyVariantId={product.shopifyVariantId}
      />
    </>
  )
}
