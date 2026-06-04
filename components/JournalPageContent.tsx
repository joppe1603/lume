'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { getAllPosts, getFeaturedPost } from '@/lib/journal'

export type DynamicPostSummary = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  source: 'dynamic'
}

const staticPosts = getAllPosts()
const featuredPost = getFeaturedPost()

const categoryColors: Record<string, string> = {
  Filosofie: 'bg-stone-100 text-stone-600',
  Wetenschap: 'bg-blue-50 text-blue-700',
  Ingrediënten: 'bg-[#FDF8F0] text-[#B8935A]',
  Routines: 'bg-green-50 text-green-700',
  Levensstijl: 'bg-purple-50 text-purple-700',
  Huidverzorging: 'bg-rose-50 text-rose-700',
}

export default function JournalPageContent({ dynamicPosts = [] }: { dynamicPosts?: DynamicPostSummary[] }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Merge: dynamic posts first (newest), then static posts (deduplicate by slug)
  const allPosts = useMemo(() => {
    const dynamicSlugs = new Set(dynamicPosts.map((p) => p.slug))
    return [
      ...dynamicPosts,
      ...staticPosts.filter((p) => !dynamicSlugs.has(p.slug)),
    ]
  }, [dynamicPosts])

  const ALL_CATEGORIES = useMemo(
    () => Array.from(new Set(allPosts.map((p) => p.category))).sort(),
    [allPosts]
  )

  const isFiltering = query.trim().length > 0 || activeCategory !== null

  const filteredArticles = useMemo(() => {
    let posts = allPosts
    if (activeCategory) {
      posts = posts.filter((p) => p.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      )
    }
    return posts
  }, [query, activeCategory, allPosts])

  const articlesToShow = isFiltering
    ? filteredArticles
    : allPosts.filter((p) => p.slug !== featuredPost.slug)

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#FAF8F5] pt-16 pb-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="section-label">MAUYI Journal</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold text-[#1A1A1A] leading-[1.05] mb-4">
              Lezen over huid.
              <br />
              <span className="text-[#9A9590] font-normal italic">Zonder de ruis.</span>
            </h1>
            <p className="text-[#6B6560] text-lg font-light leading-relaxed max-w-xl">
              Editoriaal over ingrediënten, routines, wetenschap en intentionele schoonheid. Geen gesponsorde inhoud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Filter bar */}
      <section className="bg-white border-b border-stone-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search input */}
            <div className="relative flex-1 max-w-sm">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9590]"
                width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11l3 3" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek in het Journal..."
                className="w-full pl-9 pr-4 py-2.5 text-[13px] bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-all placeholder-[#B8B4B0]"
              />
            </div>

            {/* Category filters */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.1em] transition-all ${
                  activeCategory === null
                    ? 'bg-[#0F0E0C] text-white'
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                Alles
              </button>
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.1em] transition-all ${
                    activeCategory === cat
                      ? 'bg-[#C9A96E] text-[#0F0E0C]'
                      : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured article — only shown when not filtering */}
      {!isFiltering && (
        <section className="py-16 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">Uitgelicht artikel</p>
              <Link href={`/journal/${featuredPost.slug}`} className="group grid lg:grid-cols-2 gap-10 items-center" key={featuredPost.slug}>
                <div className="relative h-80 rounded-2xl overflow-hidden bg-[#F5EFE6]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-4 inline-block ${categoryColors[featuredPost.category] || 'bg-stone-100 text-stone-600'}`}>
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-[1.1] mb-4 group-hover:text-[#C9A96E] transition-colors duration-200">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#6B6560] leading-relaxed font-light mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-stone-400">
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <span>{featuredPost.readTime} lezen</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Result count when filtering */}
          {isFiltering && (
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[13px] text-[#9A9590]">
                {articlesToShow.length === 0
                  ? 'Geen artikelen gevonden.'
                  : `${articlesToShow.length} artikel${articlesToShow.length === 1 ? '' : 'en'} gevonden`}
              </p>
              <button
                onClick={() => { setQuery(''); setActiveCategory(null) }}
                className="text-[12px] text-[#C9A96E] hover:underline underline-offset-2"
              >
                Wis filters
              </button>
            </div>
          )}

          {articlesToShow.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#9A9590] text-sm mb-4">Geen artikelen gevonden voor &ldquo;{query}&rdquo;.</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory(null) }}
                className="text-[#C9A96E] text-sm hover:underline underline-offset-2"
              >
                Bekijk alle artikelen →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesToShow.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: Math.min(i, 5) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/journal/${article.slug}`} className="group block journal-card rounded-2xl overflow-hidden bg-white">
                    <div className="relative h-52 bg-[#F5EFE6] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-4 inline-block ${categoryColors[article.category] || 'bg-stone-100 text-stone-600'}`}>
                        {article.category}
                      </span>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#C9A96E] transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#6B6560] leading-relaxed font-light mb-5 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-stone-400 pt-4 border-t border-stone-100">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime} lezen</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0F0E0C]">
        <div className="max-w-xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4" style={{ color: '#C9A96E' }}>Nieuw in je inbox</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 leading-[1.1]">
              Huidwetenschap zonder gedoe.
            </h2>
            <p className="text-stone-400 font-light mb-8">Tweemaandelijks. Geen spam. Altijd leesbaar.</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="jouw@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C9A96E] transition-colors min-w-0"
              />
              <button type="submit" className="btn-gold px-5 py-3 rounded-xl text-sm font-medium shrink-0">
                Aanmelden
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
