import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPublicProducts } from '@/lib/products'

const BASE_URL = 'https://mauyi.nl'

export const metadata: Metadata = {
  title: 'Huidverzorging Kopen — Retinol Serum voor Gevoelige Huid | MAUYI',
  description: 'Koop wetenschappelijk geformuleerde huidverzorging van MAUYI. Reset Serum: Retinol 0.3% + Niacinamide 10% + Bakuchiol in één parfumvrij serum. Gratis verzending.',
  alternates: { canonical: `${BASE_URL}/shop` },
  openGraph: {
    title: 'MAUYI Shop — Retinol Serum voor Gevoelige Huid',
    description: 'Wetenschappelijk geformuleerde huidverzorging. Retinol 0.3% + Niacinamide 10% in één parfumvrij serum.',
    url: `${BASE_URL}/shop`,
    type: 'website',
  },
}

export default function ShopPage() {
  const products = getPublicProducts().filter((p) => p.availability !== 'sample')

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F5] min-h-screen">

        {/* Header */}
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                Collectie
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Retinol Serum voor
              <br />
              <em className="italic" style={{ color: '#C9A96E' }}>gevoelige huid.</em>
            </h1>
            <p className="text-[15px] text-[#6B6560] font-light leading-relaxed max-w-xl">
              Wetenschappelijk geformuleerde huidverzorging. Minder producten — betere formuleringen.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-[#C9A96E]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Product image */}
                <div className="relative aspect-square bg-stone-50 overflow-hidden">
                  <Image
                    src={product.heroImage}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C9A96E] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#C9A96E]/20">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product info */}
                <div className="p-5">
                  <h2 className="text-[17px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {product.name}
                  </h2>
                  <p className="text-[13px] text-[#9A9590] mb-3 line-clamp-2 font-light">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-semibold text-[#1A1A1A]">€{product.price}</span>
                    <span className="text-[12px] text-[#C9A96E] font-medium group-hover:underline underline-offset-2">
                      {product.availability === 'available' ? 'Bestel nu →' : 'Meer info →'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust signals */}
          <div className="mt-16 pt-10 border-t border-stone-200">
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              {[
                { label: 'Gratis verzending', sub: 'Vanaf €45 — NL & BE' },
                { label: 'Parfumvrij', sub: 'Geschikt voor gevoelige huid' },
                { label: 'Klinisch geformuleerd', sub: 'Retinol 0.3% + Niacinamide 10%' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <span className="text-[13px] font-semibold text-[#1A1A1A]">{item.label}</span>
                  <span className="text-[12px] text-[#9A9590] font-light">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
