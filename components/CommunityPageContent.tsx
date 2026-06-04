'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Review = {
  id: string
  name: string
  rating: number
  title: string | null
  body: string
  created_at: string
  verified_purchase: boolean
}

const HEX_COLORS = ['#d4a5a5', '#b5c4a5', '#a5b5d4', '#d4c4a5', '#c4b5a5', '#a5d4c4', '#d4a5c4', '#c4d4a5', '#a5c4d4']

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function getHexColor(name: string) {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xff
  return HEX_COLORS[h % HEX_COLORS.length]
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < count ? '#C9A96E' : '#E4DFD9'} aria-hidden>
          <path d="M6 1L7.4 4.3H11L8.2 6.5L9.2 10L6 8L2.8 10L3.8 6.5L1 4.3H4.6L6 1Z"/>
        </svg>
      ))}
    </div>
  )
}

const SKIN_PROFILES = [
  {
    type: 'Gevoelige huid',
    icon: '🌿',
    description: 'Reageert snel op actieve stoffen. Bakuchiol en lage retinolconcentraties zijn het startpunt.',
    tip: 'Start 2× per week. Bouw langzaam op.',
    articles: [
      { slug: 'retinol-bijwerkingen-gevoelige-huid', label: 'Retinol bij gevoelige huid' },
      { slug: 'niacinamide-gevoelige-huid', label: 'Niacinamide voor gevoelige huid' },
    ],
  },
  {
    type: 'Droge huid',
    icon: '💧',
    description: 'Heeft hydratatie op meerdere lagen nodig. Triple hyaluronzuur en barrièreversterking staan centraal.',
    tip: 'Hydrateer eerst, behandel daarna.',
    articles: [
      { slug: 'droge-huid-routine-verzorging', label: 'Droge huid routine' },
      { slug: 'huidbarriere-herstellen', label: 'Huidbarrière herstellen' },
    ],
  },
  {
    type: 'Gemengde huid',
    icon: '⚖️',
    description: 'T-zone vettig, wangen droog. Niacinamide reguleert talgproductie zonder te overdrogen.',
    tip: 'Gebruik overal hetzelfde serum — geen zones.',
    articles: [
      { slug: 'niacinamide-serum-gids', label: 'Niacinamide serum gids' },
      { slug: 'porieen-verkleinen-tips', label: 'Poriën verkleinen' },
    ],
  },
  {
    type: 'Rijpere huid',
    icon: '✨',
    description: 'Celvernieuwing vertraagt met de jaren. Retinol is het meest bewezen actieve ingrediënt hiervoor.',
    tip: 'Retinol 0.3% + SPF overdag. Elke dag.',
    articles: [
      { slug: 'collageen-stimuleren-huid', label: 'Collageen stimuleren' },
      { slug: 'retinol-beginners-gids', label: 'Retinol voor beginners' },
    ],
  },
]

export default function CommunityPageContent() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', rating: 5, title: '', body: '' })

  useEffect(() => {
    fetch('/api/reviews?slug=reset-serum')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setReviews(data) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const avgRating = reviews.length
    ? Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length * 10) / 10
    : null
  const pctRecommend = reviews.length
    ? Math.round(reviews.filter(r => r.rating >= 4).length / reviews.length * 100)
    : null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.body) return
    setFormState('sending')
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, slug: 'reset-serum' }),
      })
      if (res.ok) {
        setFormState('sent')
        setForm({ name: '', rating: 5, title: '', body: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0F0E0C] pt-16 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)', backgroundSize: '48px 48px' }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#C9A96E]/40" />
              <span className="section-label" style={{ color: '#C9A96E' }}>Community</span>
              <div className="w-6 h-px bg-[#C9A96E]/40" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold text-white leading-[1.05] mb-5">
              Echte mensen.
              <br />
              <span className="text-stone-500 font-normal italic">Echte huid.</span>
            </h1>
            <p className="text-stone-400 text-lg font-light leading-relaxed mb-8">
              Geverifieerde aankopen. Geen geselecteerde uitzonderingen. Geen betaalde reviews.
            </p>

            {reviews.length > 0 && (
              <div className="flex items-center justify-center gap-8">
                <div>
                  <p className="text-3xl font-semibold text-[#C9A96E] font-[family-name:var(--font-cormorant)]">{avgRating}</p>
                  <Stars />
                  <p className="text-stone-500 text-xs mt-1">Gemiddelde score</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-3xl font-semibold text-white font-[family-name:var(--font-cormorant)]">{reviews.length}</p>
                  <p className="text-stone-500 text-xs mt-1.5">Geverifieerde {reviews.length === 1 ? 'review' : 'reviews'}</p>
                </div>
                {pctRecommend !== null && (
                  <>
                    <div className="w-px h-10 bg-white/10" />
                    <div>
                      <p className="text-3xl font-semibold text-white font-[family-name:var(--font-cormorant)]">{pctRecommend}%</p>
                      <p className="text-stone-500 text-xs mt-1.5">Zou het aanbevelen</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Skin profiles */}
      <section className="py-20 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="section-label">Huidprofielen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight">
              Jouw huid.
              <br />
              <span className="text-[#9A9590] font-normal italic">Wat werkt voor jou.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKIN_PROFILES.map((profile, i) => (
              <motion.div
                key={profile.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-stone-100 p-6 flex flex-col"
              >
                <span className="text-3xl mb-4 block">{profile.icon}</span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{profile.type}</h3>
                <p className="text-[13px] text-[#6B6560] font-light leading-relaxed mb-4 flex-1">{profile.description}</p>
                <p className="text-[11px] font-semibold text-[#C9A96E] uppercase tracking-[0.1em] mb-4 bg-[#FDF8F0] px-3 py-2 rounded-lg">
                  {profile.tip}
                </p>
                <div className="space-y-1.5 pt-3 border-t border-stone-100">
                  {profile.articles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/journal/${a.slug}`}
                      className="flex items-center gap-2 text-[12px] text-[#9A9590] hover:text-[#C9A96E] transition-colors group"
                    >
                      <span className="w-3.5 h-px bg-current opacity-50 shrink-0" />
                      <span className="group-hover:underline underline-offset-2 truncate">{a.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews masonry */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="section-label">Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight">
              Wat klanten zeggen.
            </h2>
          </div>

          {loading ? (
            <p className="text-center text-sm text-[#9A9590] py-20">Reviews laden...</p>
          ) : reviews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-sm text-[#9A9590] mb-4">Nog geen reviews.</p>
              <Link href="/products/reset-serum" className="btn-gold px-6 py-3 rounded-xl text-sm font-medium">
                Bestel als eerste
              </Link>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="break-inside-avoid"
                >
                  <div className="bg-[#FAF8F5] rounded-2xl border border-stone-100 p-6 hover:border-stone-200 transition-colors duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <Stars count={r.rating} />
                      {r.verified_purchase && (
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                          ✓ Geverifieerd
                        </span>
                      )}
                    </div>
                    {r.title && (
                      <p className="text-[#1A1A1A] text-sm font-semibold mb-2">{r.title}</p>
                    )}
                    <p className="text-[#1A1A1A] text-sm leading-relaxed mb-5 font-light">&ldquo;{r.body}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ backgroundColor: getHexColor(r.name) }}
                      >
                        {getInitials(r.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#1A1A1A]">{r.name}</p>
                        <p className="text-xs text-[#9A9590] truncate">
                          {new Date(r.created_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] font-medium text-[#C9A96E] bg-[#FDF8F0] px-2 py-0.5 rounded-full border border-[#C9A96E]/15 whitespace-nowrap">
                        Reset Serum
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Write a review */}
      <section className="py-20 bg-[#FAF8F5] border-t border-stone-200">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="section-label">Jouw ervaring</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-3 leading-tight">
              Schrijf een review.
            </h2>
            <p className="text-[#6B6560] font-light mb-10 leading-relaxed text-[15px]">
              Deel je ervaring met Reset Serum. Reviews worden geverifieerd voor publicatie.
            </p>

            {formState === 'sent' ? (
              <div className="bg-white rounded-2xl border border-stone-100 p-8 text-center">
                <p className="text-2xl mb-3" aria-hidden>✓</p>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Review ontvangen.</h3>
                <p className="text-[#9A9590] text-sm font-light">We bekijken hem en publiceren hem zo snel mogelijk.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-100 p-6 sm:p-8 space-y-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#9A9590] mb-2">Naam *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="Sophie van den Berg"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#9A9590] mb-2">Beoordeling</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, rating: n }))}
                        className="transition-transform hover:scale-110"
                        aria-label={`${n} sterren`}
                      >
                        <svg width="28" height="28" viewBox="0 0 12 12" fill={n <= form.rating ? '#C9A96E' : '#E4DFD9'}>
                          <path d="M6 1L7.4 4.3H11L8.2 6.5L9.2 10L6 8L2.8 10L3.8 6.5L1 4.3H4.6L6 1Z"/>
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#9A9590] mb-2">Titel (optioneel)</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="Mijn huid is er zoveel beter op geworden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#9A9590] mb-2">Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.body}
                    onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                    placeholder="Vertel over je ervaring met het product..."
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-red-500 text-[13px]">Er ging iets mis. Probeer het opnieuw.</p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="btn-gold w-full py-3.5 rounded-xl text-sm font-medium disabled:opacity-60"
                >
                  {formState === 'sending' ? 'Versturen...' : 'Review versturen →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* UGC CTA */}
      <section className="py-16 bg-[#0F0E0C]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4" style={{ color: '#C9A96E' }}>Instagram</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Tag ons.
            </h2>
            <p className="text-stone-400 font-light mb-8 leading-relaxed">
              Gebruik je MAUYI? Tag ons op Instagram (@mauyiskincare). We publiceren echte ervaringen — geen gefilterde foto&apos;s, geen geselecteerde uitzonderingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.instagram.com/mauyiskincare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium text-sm bg-white text-[#0F0E0C] hover:bg-stone-100 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                @mauyiskincare
              </a>
              <Link
                href="/products/reset-serum"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium text-sm border border-white/15 text-stone-300 hover:border-white/30 hover:text-white transition-all"
              >
                Bestel Reset Serum
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
