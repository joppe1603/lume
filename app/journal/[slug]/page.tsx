import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JournalNewsletterBlock from '@/components/JournalNewsletterBlock'
import { getPost, getAllPosts } from '@/lib/journal'
import type { Section, FaqItem, ComparisonLink } from '@/lib/journal'

const BASE_URL = 'https://mauyi.nl'

// Dynamic posts from Supabase are rendered on-demand (not pre-built)
export const dynamicParams = true

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

type DynamicPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  read_time: string
  published_at: string
  image_url: string | null
  image_alt: string | null
  meta_title: string | null
  meta_description: string | null
  html: string
}

function sanitizeHtml(html: string): string {
  // Fix double-quoted hrefs: href=""/path"" → href="/path"
  let result = html.replace(/href=""([^"]*?)""/g, 'href="$1"')

  // Transform FAQ section: detect h2 heading with "vragen" or "faq", then
  // wrap each subsequent h3+p pair in a styled card div
  result = result.replace(
    /(<h2>[^<]*(?:vragen|faq)[^<]*<\/h2>)([\s\S]*)$/i,
    (_, heading, faqBody) => {
      const cards = faqBody.replace(
        /\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi,
        '\n<div class="faq-card"><p class="faq-q">$1</p><p class="faq-a">$2</p></div>'
      )
      return heading + '\n<div class="faq-cards">' + cards + '\n</div>'
    }
  )

  return result
}

async function getDynamicPost(slug: string): Promise<DynamicPost | null> {
  try {
    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { data } = await client
      .from('journal_posts')
      .select('*')
      .eq('slug', slug)
      .eq('cms_status', 'published')
      .single()
    return data ?? null
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (post) {
    return {
      title: post.seo.title,
      description: post.seo.description,
      alternates: { canonical: `${BASE_URL}/journal/${slug}` },
      openGraph: {
        title: post.seo.title,
        description: post.seo.description,
        url: `${BASE_URL}/journal/${slug}`,
        type: 'article',
        publishedTime: post.dateISO,
        authors: ['MAUYI'],
        images: [{ url: `${BASE_URL}${post.image}`, width: 1200, alt: post.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo.title,
        description: post.seo.description,
        images: [`${BASE_URL}${post.image}`],
      },
    }
  }

  const dyn = await getDynamicPost(slug)
  if (!dyn) return {}
  const title = dyn.meta_title ?? dyn.title
  const description = dyn.meta_description ?? dyn.excerpt
  const image = dyn.image_url ?? `${BASE_URL}/journal-serum.jpg`
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/journal/${slug}` },
    openGraph: {
      title, description,
      url: `${BASE_URL}/journal/${slug}`,
      type: 'article',
      publishedTime: dyn.published_at,
      authors: ['MAUYI'],
      images: [{ url: image, width: 1344, height: 768, alt: dyn.image_alt ?? dyn.title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

function renderSection(section: Section, i: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 key={i} className="text-[22px] font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug">
          {section.content as string}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={i} className="text-[18px] font-semibold text-[#1A1A1A] mt-7 mb-3 leading-snug">
          {section.content as string}
        </h3>
      )
    case 'p':
      return (
        <p key={i} className="text-[15px] text-[#4A4540] leading-[1.85] mb-0">
          {section.content as string}
        </p>
      )
    case 'ul':
      return (
        <ul key={i} className="mt-1 mb-0 space-y-2.5 list-none pl-0">
          {(section.content as string[]).map((item, j) => (
            <li key={j} className="flex gap-3 text-[15px] text-[#4A4540] leading-relaxed">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div key={i} className="my-2 bg-[#FAF8F5] border-l-[3px] border-[#C9A96E] px-5 py-4 rounded-r-xl">
          <p className="text-[14px] text-[#5C5754] leading-relaxed italic font-light">
            {section.content as string}
          </p>
        </div>
      )
    case 'cta':
      return (
        <div key={i} className="my-2 bg-[#1A1A1A] rounded-2xl px-6 py-6">
          <p className="text-[14px] text-stone-300 leading-relaxed font-light mb-4">
            {section.content as string}
          </p>
          <Link
            href="/products/reset-serum"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#C9A96E] hover:underline underline-offset-2"
          >
            Bekijk Reset Serum →
          </Link>
        </div>
      )
    case 'comparison': {
      const cl = section.content as ComparisonLink
      return (
        <div key={i} className="my-6 border border-stone-100 rounded-2xl px-5 py-4 flex items-start justify-between gap-4">
          <p className="text-[14px] text-[#5C5754] font-light leading-relaxed">{cl.text}</p>
          <Link
            href={cl.href}
            className="shrink-0 text-[13px] font-semibold text-[#C9A96E] hover:underline underline-offset-2 whitespace-nowrap"
          >
            {cl.label} →
          </Link>
        </div>
      )
    }
    case 'faq':
      return (
        <div key={i} className="mt-10 mb-2">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6 leading-snug">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {(section.content as FaqItem[]).map((item, j) => (
              <div key={j} className="bg-white rounded-xl border border-stone-100 px-5 py-4">
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{item.q}</p>
                <p className="text-[14px] text-[#5C5754] leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )
    default:
      return null
  }
}

function getRelatedPosts(currentSlug: string, currentCategory: string) {
  const all = getAllPosts()
  // Same category first, then others, exclude current
  const sameCategory = all.filter((p) => p.slug !== currentSlug && p.category === currentCategory)
  const others = all.filter((p) => p.slug !== currentSlug && p.category !== currentCategory)
  return [...sameCategory, ...others].slice(0, 3)
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}

function extractFaqItems(html: string): Array<{ q: string; a: string }> {
  const faqMatch = html.match(/<h2>[^<]*(?:vragen|faq)[^<]*<\/h2>([\s\S]*)$/i)
  if (!faqMatch) return []
  const items: Array<{ q: string; a: string }> = []
  const re = /<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi
  let m: RegExpExecArray | null
  while ((m = re.exec(faqMatch[1])) !== null) {
    items.push({ q: stripHtml(m[1]), a: stripHtml(m[2]) })
  }
  return items
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)

  // Dynamic post (from Supabase / n8n workflow)
  if (!post) {
    const dyn = await getDynamicPost(slug)
    if (!dyn) notFound()

    const date = new Date(dyn.published_at).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })
    const image = dyn.image_url ?? '/journal-serum.jpg'
    const related = getRelatedPosts(slug, dyn.category)
    const faqItems = extractFaqItems(dyn.html)
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: dyn.title,
      description: dyn.meta_description ?? dyn.excerpt,
      image: dyn.image_url ?? `${BASE_URL}/journal-serum.jpg`,
      datePublished: dyn.published_at,
      dateModified: dyn.published_at,
      author: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL, logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/journal/${slug}` },
    }
    const faqSchema = faqItems.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    } : null

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        <Navbar />
        <main className="bg-[#FAF8F5] min-h-screen">
          <div className="bg-white border-b border-stone-100">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 py-4">
              <nav className="flex items-center gap-2 text-xs text-[#9A9590]">
                <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
                <span className="text-stone-300">/</span>
                <Link href="/journal" className="hover:text-[#C9A96E] transition-colors">Journal</Link>
                <span className="text-stone-300">/</span>
                <span className="text-[#1A1A1A] font-medium line-clamp-1">{dyn.title}</span>
              </nav>
            </div>
          </div>
          <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">{dyn.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {dyn.title}
              </h1>
              <p className="text-[16px] text-[#6B6560] font-light leading-relaxed mb-6">{dyn.excerpt}</p>
              <div className="flex items-center gap-4 text-[12px] text-[#9A9590]">
                <span>MAUYI Journal</span>
                <span>·</span>
                <span>{date}</span>
                <span>·</span>
                <span>{dyn.read_time} lezen</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 mb-12">
              <Image src={image} alt={dyn.image_alt ?? dyn.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
            </div>
            {/* HTML content from n8n/AI */}
            <div
              className="prose-journal"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(dyn.html) }}
            />
            <JournalNewsletterBlock slug={slug} />
            {related.length > 0 && (
              <div className="mt-16 pt-10 border-t border-stone-200">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">
                  Gerelateerde artikelen
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/journal/${r.slug}`}
                      className="group block bg-white rounded-xl p-5 hover:shadow-md transition-shadow"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A96E] mb-2 block">
                        {r.category}
                      </span>
                      <p className="text-[14px] font-medium text-[#1A1A1A] leading-snug group-hover:text-[#C9A96E] transition-colors line-clamp-3">
                        {r.title}
                      </p>
                      <p className="text-[12px] text-[#9A9590] mt-2">{r.readTime} lezen</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-10 pt-8 border-t border-stone-200">
              <Link href="/journal" className="inline-flex items-center gap-2 text-[13px] text-[#9A9590] hover:text-[#C9A96E] transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M10 6H2M6 2L2 6l4 4" />
                </svg>
                Terug naar Journal
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </>
    )
  }

  const related = getRelatedPosts(slug, post.category)

  const faqItems = post.body.filter((s) => s.type === 'faq').flatMap((s) => s.content as FaqItem[])
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seo.description,
    image: `${BASE_URL}${post.image}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { '@type': 'Organization', name: 'MAUYI', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'MAUYI',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/journal/${slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${BASE_URL}/journal` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/journal/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />

      <main className="bg-[#FAF8F5] min-h-screen">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs text-[#9A9590]">
              <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
              <span className="text-stone-300">/</span>
              <Link href="/journal" className="hover:text-[#C9A96E] transition-colors">Journal</Link>
              <span className="text-stone-300">/</span>
              <span className="text-[#1A1A1A] font-medium line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">

          {/* Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                {post.category}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {post.title}
            </h1>
            <p className="text-[16px] text-[#6B6560] font-light leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-[12px] text-[#9A9590]">
              <span>MAUYI Journal</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} lezen</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Body */}
          <div className="space-y-5">
            {post.body.map((section, i) => renderSection(section, i))}
          </div>

          {/* Newsletter signup */}
          <JournalNewsletterBlock slug={slug} />

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-stone-200">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-6">
                Gerelateerde artikelen
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/journal/${r.slug}`}
                    className="group block bg-white rounded-xl p-5 hover:shadow-md transition-shadow"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A96E] mb-2 block">
                      {r.category}
                    </span>
                    <p className="text-[14px] font-medium text-[#1A1A1A] leading-snug group-hover:text-[#C9A96E] transition-colors line-clamp-3">
                      {r.title}
                    </p>
                    <p className="text-[12px] text-[#9A9590] mt-2">{r.readTime} lezen</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-10 pt-8 border-t border-stone-200">
            <Link href="/journal" className="inline-flex items-center gap-2 text-[13px] text-[#9A9590] hover:text-[#C9A96E] transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M10 6H2M6 2L2 6l4 4" />
              </svg>
              Terug naar Journal
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
