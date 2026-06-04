'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Review = {
  id: string
  name: string
  rating: number
  title: string | null
  body: string
  created_at: string
  verified_purchase: boolean
}

const HEX_COLORS = ['#d4a5a5', '#b5c4a5', '#a5b5d4', '#d4c4a5', '#c4b5a5', '#a5d4c4', '#d4a5c4', '#c4d4a5']

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function getHexColor(name: string) {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xff
  return HEX_COLORS[h % HEX_COLORS.length]
}

export default function UGCReviews() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    fetch('/api/reviews?slug=reset-serum')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setReviews(data.slice(0, 4)) })
      .catch(() => {})
  }, [])

  if (reviews.length === 0) return null

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-[#C9A96E]" />
            <span className="section-label">Klanten aan het woord</span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="leading-[1.05] font-semibold text-[#1A1A1A]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
            >
              Echte huid.{' '}
              <br />
              <span className="text-[#9A9590] font-normal italic">Geen filters.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#9A9590] bg-[#FAF8F5] border border-stone-100 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                Geverifieerde klantreviews · Reset Serum
              </span>
            </motion.div>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-4 gap-4 space-y-4">
          {reviews.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid"
            >
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-100 hover:border-stone-200 transition-colors duration-200">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: card.rating }).map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 13 13" fill="#C9A96E" aria-hidden>
                      <path d="M6.5 1L7.9 4.7H12L8.8 7L10 11L6.5 8.8L3 11L4.2 7L1 4.7H5.1L6.5 1Z"/>
                    </svg>
                  ))}
                </div>
                {card.title && (
                  <p className="text-[#1A1A1A] text-sm font-semibold mb-2">{card.title}</p>
                )}
                <p className="text-[#1A1A1A] text-[14px] leading-[1.7] mb-5">
                  &ldquo;{card.body}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: getHexColor(card.name) }}
                  >
                    {getInitials(card.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#1A1A1A]">{card.name}</p>
                    <p className="text-xs text-[#9A9590] truncate">
                      {new Date(card.created_at).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  {card.verified_purchase && (
                    <span className="shrink-0 text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200 whitespace-nowrap">
                      ✓ Geverifieerd
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            href="/products/reset-serum"
            className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-medium text-sm"
          >
            Bestel Reset Serum
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
