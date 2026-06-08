import type { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'
import { getAllPosts } from '@/lib/journal'
import { getPublicProducts } from '@/lib/products'

const BASE_URL = 'https://mauyi.nl'

async function getDynamicPostSlugs(): Promise<{ slug: string; published_at: string }[]> {
  try {
    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { data } = await client
      .from('journal_posts')
      .select('slug, published_at')
      .eq('cms_status', 'published')
      .order('published_at', { ascending: false })
    return data ?? []
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts()
  const products = getPublicProducts()
  const dynamicPosts = await getDynamicPostSlugs()

  const staticSlugs = new Set(posts.map((p) => p.slug))

  const journalEntries: MetadataRoute.Sitemap = [
    ...posts.map((post) => ({
      url: `${BASE_URL}/journal/${post.slug}`,
      lastModified: new Date(post.dateISO),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...dynamicPosts
      .filter((p) => !staticSlugs.has(p.slug))
      .map((post) => ({
        url: `${BASE_URL}/journal/${post.slug}`,
        lastModified: new Date(post.published_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
  ]

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.95,
  }))

  const useCaseEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/products/reset-serum/voor-gevoelige-huid`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-acne-littekens`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-rimpels`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-pigmentatie`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-beginners`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-droge-huid`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-ongelijke-huidtextuur`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-30-plus`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-combinatiehuid`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-vette-huid`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-40-plus`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/reset-serum/voor-zonschade`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productEntries,
    ...useCaseEntries,
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...journalEntries,
    {
      url: `${BASE_URL}/science`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/ingredients`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/philosophy`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/press`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/waarom-mauyi`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.55,
    },
    {
      url: `${BASE_URL}/alternatives/the-ordinary`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/alternatives/cerave`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/alternatives/la-roche-posay`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/alternatives/paulas-choice`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/alternatives/indeed-labs`,
      lastModified: new Date('2026-06-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/vs/the-ordinary`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/community`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/retourbeleid`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/voorwaarden`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
