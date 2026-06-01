'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Review = {
  id: string
  name: string
  rating: number
  title: string | null
  body: string
  created_at: string
  verified_purchase: boolean
}

const COLORS = [
  'bg-rose-400', 'bg-amber-500', 'bg-indigo-400', 'bg-teal-500',
  'bg-purple-400', 'bg-emerald-500', 'bg-pink-400', 'bg-orange-400',
]

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function getColor(name: string) {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xff
  return COLORS[h % COLORS.length]
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E" aria-hidden>
          <path d="M7 1L8.6 4.8H13L9.7 7.5L11 11.5L7 9L3 11.5L4.3 7.5L1 4.8H5.4L7 1Z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ r, className = '' }: { r: Review; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-stone-100 p-6 shadow-sm shrink-0 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <Stars count={r.rating} />
        {r.verified_purchase && (
          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor"><path d="M4.5 0L5.5 3.5H9L6.3 5.5L7.3 9L4.5 7L1.7 9L2.7 5.5L0 3.5H3.5L4.5 0Z"/></svg>
            Geverifieerd
          </span>
        )}
      </div>
      <p className="text-[#1A1A1A] text-sm leading-relaxed mb-5">&ldquo;{r.body}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
        <div className={`w-9 h-9 ${getColor(r.name)} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
          {getInitials(r.name)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#1A1A1A] truncate">{r.name}</p>
          <p className="text-xs text-[#6B6560] truncate">
            {new Date(r.created_at).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}
          </p>
        </div>
        <div className="ml-auto shrink-0">
          <span className="text-[10px] text-[#C9A96E] font-medium bg-[#FDF8F0] px-2 py-0.5 rounded-full whitespace-nowrap">
            Reset Serum
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [featured, setFeatured] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    fetch('/api/reviews?slug=reset-serum')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setReviews(data) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track || reviews.length === 0) return
    let pos = 0
    const tick = () => {
      if (!pausedRef.current) {
        pos += 0.5
        if (pos >= track.scrollWidth / 2) pos = 0
        track.style.transform = `translateX(-${pos}px)`
      }
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [reviews])

  useEffect(() => {
    if (reviews.length === 0) return
    const id = setInterval(() => setFeatured(f => (f + 1) % reviews.length), 5000)
    return () => clearInterval(id)
  }, [reviews])

  if (reviews.length === 0) return null

  const fr = reviews[featured]
  const avgRating = Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length * 10) / 10
  const pctRecommend = Math.round(reviews.filter(r => r.rating >= 4).length / reviews.length * 100)

  return (
    <section id="reviews" className="py-28 overflow-hidden scroll-mt-28" style={{ background: '#0F0E0C' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E] bg-[#C9A96E]/10 px-4 py-1.5 rounded-full mb-4">
            {reviews.length} geverifieerde {reviews.length === 1 ? 'review' : 'reviews'}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Echte mensen.
            <br />
            Echte huid.
          </h2>
          <p className="text-lg text-stone-400 max-w-md mx-auto">
            Geverifieerde aankopen. Geen geselecteerde uitzonderingen.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={featured}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-4 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C9A96E]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex gap-1 mb-5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFeatured(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === featured ? 'w-8 bg-[#C9A96E]' : 'w-4 bg-white/20'}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <Stars count={fr.rating} />
            <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mt-4 mb-6">
              &ldquo;{fr.body}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 ${getColor(fr.name)} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                {getInitials(fr.name)}
              </div>
              <div>
                <p className="text-white font-semibold">{fr.name}</p>
                <p className="text-stone-400 text-sm">
                  {new Date(fr.created_at).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}
                </p>
              </div>
              {fr.verified_purchase && (
                <span className="ml-auto text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  ✓ Geverifieerd
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 py-4"
        >
          <div className="text-center">
            <p className="text-4xl font-black text-[#C9A96E]">{avgRating}</p>
            <Stars />
            <p className="text-stone-500 text-xs mt-1">Gemiddelde score</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-4xl font-black text-white">{reviews.length}</p>
            <p className="text-stone-500 text-xs mt-1">Geverifieerde reviews</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-4xl font-black text-white">{pctRecommend}%</p>
            <p className="text-stone-500 text-xs mt-1">Zou het aanbevelen</p>
          </div>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        <div className="flex" ref={trackRef} style={{ width: 'max-content' }}>
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} r={r} className="w-[min(88vw,340px)] mx-3" />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0F0E0C] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0F0E0C] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
