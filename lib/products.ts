export type Ingredient = {
  name: string
  pct?: string
  benefit: string
}

export type ProductReview = {
  quote: string
  author: string
  location: string
  skin: string
  weeks: string
  rating: number
  initials: string
  color: string
}

export type Benefit = {
  icon: string
  title: string
  desc: string
}

export type Product = {
  slug: string
  name: string
  tagline: string
  badge: string
  price: number
  originalPrice?: number
  size: string
  rating?: number
  reviewCount?: number
  heroImage: string
  description: string
  longDescription: string
  benefits: Benefit[]
  keyIngredients: Ingredient[]
  allIngredients: string
  howToUse: string[]
  reviews: ProductReview[]
  relatedSlugs: string[]
  seo: { title: string; description: string }
  emotion?: string
  textureNote?: string
  textureImages?: string[]
  routineContext?: {
    time: string
    step: number
    note: string
    pairingNote: string
  }
  // 'available' | 'pre-launch' | 'sample' — defaults to 'pre-launch' if omitted
  availability?: 'available' | 'pre-launch' | 'sample'
  // hidden products are not shown in shop or product pages
  hidden?: boolean
  // Shopify variant GID — required for checkout via Shopify Storefront API
  // Format: "gid://shopify/ProductVariant/XXXXXXXXXXXXX"
  // Fill this in after adding the product to Shopify admin
  shopifyVariantId?: string
}

const PRODUCTS: Product[] = [
  {
    slug: 'reset-serum',
    name: 'Reset Serum',
    tagline: 'Eén serum. Doet het werk van drie.',
    badge: 'Night Reset Ritual',
    price: 58,
    size: '30ml',
    availability: 'available',
    shopifyVariantId: 'gid://shopify/ProductVariant/57308424208761',
    heroImage: '/reset-serum-new.jpg',
    description: 'Retinol 0.3%, Niacinamide 10% en Hyaluronzuur in één stabiele formule. Effectief voor celvernieuwing, poriënverfijning en hydratatie — zonder irritatie.',
    longDescription: 'Het Reset Serum is ons antwoord op onnodige complexiteit. In plaats van drie afzonderlijke serums voor retinol, niacinamide en hydratie, combineert het Reset Serum deze drie klinisch bewezen ingrediënten in één lichte, waterige textuur. Retinol stimuleert celvernieuwing. Niacinamide verfijnt poriën en egalisert de huidtint. Hyaluronzuur op drie molecuulgewichten hydrateert op elk niveau. Het resultaat: minder stappen, meer effect.',
    benefits: [
      { icon: '🔬', title: 'Retinol 0.3%', desc: 'Klinisch effectieve dosis' },
      { icon: '✨', title: 'Niacinamide 10%', desc: 'Poriënverfijning & verheldering' },
      { icon: '💧', title: 'Triple HA', desc: '72u hydratatie op alle huidlagen' },
      { icon: '🌿', title: 'Parfumvrij', desc: 'Geschikt voor gevoelige huid' },
    ],
    keyIngredients: [
      { name: 'Retinol', pct: '0.3%', benefit: 'Versnelt celvernieuwing, vermindert fijne lijntjes en verbetert huidtextuur' },
      { name: 'Niacinamide', pct: '10%', benefit: 'Verfijnt poriën, egalisert huidtint en heeft anti-inflammatoire werking' },
      { name: 'Hyaluronzuurcomplex (3×)', pct: '2%', benefit: 'Drie molecuulgewichten voor hydratatie op elk huidniveau' },
      { name: 'Bakuchiol', pct: '0.5%', benefit: 'Versterkt de retinol-werking, verhoogt tolerantie' },
    ],
    allIngredients: 'Aqua, Glycerin, Niacinamide (10%), Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Retinol (0.3%), Bakuchiol (0.5%), Pentylene Glycol, Allantoin, Panthenol, Xanthan Gum, Sodium PCA, Citric Acid, Sodium Benzoate, Potassium Sorbate.',
    howToUse: [
      'Reinig je huid met een zachte, parfumvrije cleanser en dep droog.',
      'Breng 3–4 druppels aan op gezicht, hals en decolleté.',
      'Druk zachtjes aan met handpalmen — niet wrijven.',
      'Laat 60–90 seconden intrekken voor de volgende stap.',
      'Beginners: start 2–3x per week en bouw op naar dagelijks gebruik.',
      'Gebruik altijd SPF in de ochtend na retinolgebruik.',
    ],
    reviews: [
      { quote: 'Na 4 weken echt zichtbaar verschil in textuur. Ik had het niet verwacht maar het werkt gewoon.', author: 'Sophie van den Berg', location: 'Amsterdam', skin: 'Droge huid', weeks: '4 weken', rating: 5, initials: 'SV', color: 'bg-rose-400' },
      { quote: 'Gevoelige huid, altijd bang voor retinol. Dit is de eerste formule die ik dagelijks gebruik zonder problemen.', author: 'Emma Clarke', location: 'London', skin: 'Gevoelige huid', weeks: '6 weken', rating: 5, initials: 'EC', color: 'bg-amber-500' },
      { quote: 'Poriën veel minder zichtbaar na 5 weken. Dit is mijn nieuwe vaste serum.', author: 'Noor Bakker', location: 'Rotterdam', skin: 'Gemengde huid', weeks: '5 weken', rating: 5, initials: 'NB', color: 'bg-indigo-400' },
    ],
    relatedSlugs: [],
    seo: { title: 'Reset Serum — Retinol 0.3% Serum met Niacinamide 10% | MAUYI', description: 'Retinol 0.3% + Bakuchiol + Niacinamide 10% in één parfumvrij serum. Celvernieuwing, poriënverfijning en 72u hydratatie — ook voor gevoelige huid. €58, gratis verzending.' },
    emotion: 'Gebouwd voor huid die te veel heeft meegemaakt.',
    textureNote: 'Waterig en bijna doorzichtig. Trekt in binnen 45 seconden. Geen restlaag. Geen kleverig gevoel. Werkt terwijl je slaapt.',
    textureImages: [
      '/reset-serum-new.jpg',
      '/reset-serum-2.jpg',
    ],
    routineContext: {
      time: 'Avond',
      step: 2,
      note: 'Na het reinigen, voor je moisturizer. 3–4 druppels. Druk zachtjes aan — niet wrijven. Beginners: start 2–3× per week en bouw langzaam op naar dagelijks gebruik.',
      pairingNote: 'Gebruik altijd SPF 30+ de volgende ochtend. Retinol verhoogt UV-gevoeligheid. Dit is niet optioneel.',
    },
  },
  {
    slug: 'test-sample',
    name: 'Test Sample',
    tagline: 'Intern testproduct.',
    badge: 'Test',
    price: 0.02,
    size: '1ml',
    hidden: true,
    availability: 'available',
    heroImage: '/reset-serum-new.jpg',
    description: 'Intern testproduct.',
    longDescription: 'Intern testproduct.',
    benefits: [],
    keyIngredients: [{ name: 'Test', benefit: 'Test' }],
    allIngredients: '',
    howToUse: [],
    reviews: [],
    relatedSlugs: [],
    seo: { title: 'Test | MAUYI', description: 'Testproduct.' },
  },
]

// Returns all products including hidden ones — for internal use (checkout, order enrichment)
export function getAllProducts(): Product[] {
  return PRODUCTS
}

// Returns only visible products — for shop listings and public pages
export function getPublicProducts(): Product[] {
  return PRODUCTS.filter((p) => !p.hidden)
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return PRODUCTS.filter((p) => slugs.includes(p.slug) && !p.hidden)
}
