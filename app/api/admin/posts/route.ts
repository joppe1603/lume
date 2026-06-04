import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function supabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

function deriveCategory(keywords: string[]): string {
  const all = keywords.join(' ').toLowerCase()
  if (all.match(/retinol|bakuchiol|niacinamide|ingrediënt|hyaluronzuur|panthenol/)) return 'Ingrediënten'
  if (all.match(/routine|avond|ochtend|stap/)) return 'Routines'
  if (all.match(/wetenschap|studie|klinisch|onderzoek/)) return 'Wetenschap'
  if (all.match(/filosof|minimalisme|intentioneel/)) return 'Filosofie'
  if (all.match(/gevoelig|droog|vet|acne|rosacea|eczeem/)) return 'Huidverzorging'
  return 'Huidverzorging'
}

function deriveReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
  const minutes = Math.max(2, Math.round(words / 200))
  return `${minutes} min`
}

// POST /api/admin/posts
// Auth: Authorization: Bearer {ADMIN_KEY}
// Body: single post object OR array of posts (n8n output format)
export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization') ?? ''
  if (!auth.startsWith('Bearer ') || auth.slice(7) !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const posts = Array.isArray(body) ? body : [body]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rows = posts.map((post: any) => {
    const keywords: string[] = post.secondary_keywords ?? []
    const isPublished = post.cms_status === 'published'
    return {
      slug: post.slug,
      title: post.title,
      meta_title: post.meta_title ?? post.title,
      meta_description: post.meta_description ?? post.excerpt,
      excerpt: post.excerpt,
      html: post.html,
      primary_keyword: post.primary_keyword ?? null,
      secondary_keywords: keywords,
      image_url: post.image_url ?? null,
      image_alt: post.suggested_alt_text ?? post.title,
      image_prompt: post.image_prompt ?? null,
      category: post.category ?? deriveCategory(keywords),
      read_time: post.read_time ?? deriveReadTime(post.html),
      cms_status: post.cms_status ?? 'draft',
      published_at: isPublished ? new Date().toISOString() : null,
    }
  })

  const { error } = await supabase()
    .from('journal_posts')
    .upsert(rows, { onConflict: 'slug' })

  if (error) {
    console.error('[/api/admin/posts] Supabase error:', error)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, saved: rows.length })
}

// PATCH /api/admin/posts — publish or update cms_status
export async function PATCH(req: NextRequest) {
  const auth = req.headers.get('authorization') ?? ''
  if (!auth.startsWith('Bearer ') || auth.slice(7) !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug, cms_status, image_url } = await req.json()
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updates: any = {}
  if (cms_status) {
    updates.cms_status = cms_status
    if (cms_status === 'published') updates.published_at = new Date().toISOString()
  }
  if (image_url) updates.image_url = image_url

  const { error } = await supabase()
    .from('journal_posts')
    .update(updates)
    .eq('slug', slug)

  if (error) return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  return NextResponse.json({ ok: true })
}
