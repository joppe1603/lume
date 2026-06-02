'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import Image from 'next/image'
import type { Product, Ingredient } from '@/lib/products'

function IngredientReveal({
  ing,
  index,
  total,
  scrollYProgress,
}: {
  ing: Ingredient
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0],
  )
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [40, 0, 0, -40],
  )

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-5">
        {String(index + 1).padStart(2, '0')} &mdash; {String(total).padStart(2, '0')} ingrediënten
      </p>
      <h3
        className="text-5xl xl:text-6xl font-semibold text-white leading-tight mb-4"
        style={{ letterSpacing: '-0.02em' }}
      >
        {ing.name}
      </h3>
      {ing.pct && (
        <div className="mb-6">
          <span className="text-sm font-bold text-[#C9A96E] border border-[#C9A96E]/30 rounded-full px-4 py-1.5">
            {ing.pct}
          </span>
        </div>
      )}
      <p className="text-stone-300 text-[16px] font-light leading-[1.9] max-w-[380px]">
        {ing.benefit}
      </p>
    </motion.div>
  )
}

function ProgressDot({
  index,
  total,
  scrollYProgress,
}: {
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0.25, 1, 1, 0.25],
  )
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0.8, 1.5, 1.5, 0.8],
  )

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"
    />
  )
}

export default function PDPScrollIngredients({ product }: { product: Product }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const ingredients = product.keyIngredients.slice(0, 3)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08])
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative hidden lg:block"
      style={{ height: `${ingredients.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen bg-[#0F0E0C] overflow-hidden">

        {/* Section header */}
        <div className="absolute top-10 left-10 xl:left-16 flex items-center gap-3 z-10">
          <div className="w-5 h-px bg-[#C9A96E]" />
          <span className="section-label text-[#C9A96E]">Formule</span>
        </div>

        {/* Layout */}
        <div className="h-full flex items-center px-10 xl:px-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-[45%_55%] gap-16 xl:gap-24 items-center w-full">

            {/* Product image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.6)]">
              <motion.div
                style={{ scale: imageScale }}
                className="absolute inset-[-6%] w-[112%] h-[112%]"
              >
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Ingredient text */}
            <div className="relative" style={{ height: '60vh' }}>
              {ingredients.map((ing, i) => (
                <IngredientReveal
                  key={ing.name}
                  ing={ing}
                  index={i}
                  total={ingredients.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {ingredients.map((_, i) => (
            <ProgressDot
              key={i}
              index={i}
              total={ingredients.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[9px] text-stone-600 uppercase tracking-[0.22em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#C9A96E]/50 to-transparent"
          />
        </motion.div>

      </div>
    </section>
  )
}
