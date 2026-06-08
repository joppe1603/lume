import type { Metadata } from 'next'
import { createClient } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JournalPageContent from '@/components/JournalPageContent'
import type { DynamicPostSummary } from '@/components/JournalPageContent'

export const revalidate = 60 // refetch Supabase posts every 60 seconds

export const metadata: Metadata = {
  title: 'Journal — Huidverzorging op Wetenschap',
  description: 'MAUYI Journal: eerlijke artikelen over retinol, niacinamide, bakuchiol, huidbarrière en skincare routines. Geen marketing — wel wetenschap.',
  alternates: { canonical: 'https://mauyi.nl/journal' },
}

async function getDynamicPosts(): Promise<DynamicPostSummary[]> {
  try {
    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { data } = await client
      .from('journal_posts')
      .select('slug, title, excerpt, category, read_time, published_at, image_url, image_alt, meta_title, meta_description')
      .eq('cms_status', 'published')
      .order('published_at', { ascending: false })
    return (data ?? []).map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.read_time,
      date: new Date(p.published_at).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' }),
      image: p.image_url ?? '/journal-serum.jpg',
      source: 'dynamic' as const,
    }))
  } catch {
    return []
  }
}

export default async function JournalPage() {
  const dynamicPosts = await getDynamicPosts()
  return (
    <>
      <Navbar />
      <JournalPageContent dynamicPosts={dynamicPosts} />
      <Footer />
    </>
  )
}
