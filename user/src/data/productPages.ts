import type { WoodSection } from './products'

// Text uses **bold** and __italic__ markers; rendered by <RichText />.

export type ProductPageData = {
  meta: { title: string; description: string; keywords: string }
  hero: { title: string; lead: string; body: string[] }
  section: WoodSection
}

export const timberPlanks: ProductPageData = {
  meta: {
    title: 'Sumudu Timber Stores & Sawmills | Timber Planks – Quality Teak, Mahogany & Nedun',
    description:
      'High-quality timber planks from Sumudu Timber Stores & Sawmills, including teak, mahogany, nedun, and more. Island-wide timber supply in Sri Lanka.',
    keywords:
      'timber planks, teak planks, mahogany planks, nedun planks, kempes, grandis, coconut wood, pinewood, chinaberry, jak wood, margosa wood, suriyamara wood, buy timber Sri Lanka, Sumudu Timber',
  },
  hero: {
    title: 'Timber Planks',
    lead: 'Explore Our Premium Range of Timber Planks',
    body: [
      'We provide a wide selection of durable, high-grade timber planks for roofing, ceilings, flooring, and interior finishes.',
      'Available in standard and custom sizes to match your project needs.',
    ],
  },
  section: {
    id: 'timber-planks',
    title: 'Imported & Local Timber Planks',
    subtitle:
      'High-quality planks perfect for construction, furniture, and interior projects — available in various types, sizes, and finishes.',
    align: 'center',
    items: [
      {
        name: 'Kempas (කෙම්පස්)',
        img: '/img/kempas.jpg',
        alt: 'Kempas',
        paragraphs: [
          'Strong, long-lasting timber ideal for roofing and flooring planks. Imported from Malaysia, Kempas is known for its **exceptional strength** and rich appearance.',
          'Sizes: **2x4, 2x5, 2x6, 2x8, 3x4, 3x6, 3x8, 4x6, 4x8** — lengths up to **24 feet**.',
        ],
      },
      {
        name: 'Grandis (ගාන්ඩිස්)',
        img: '/img/grandis.jpg',
        alt: 'Grandis',
        paragraphs: [
          'Cost-effective timber plank alternative to Kempas, locally sawn in our mills. Offers **strength, durability, and a smooth finish** for construction and furniture.',
          'Custom sizes available to match your exact requirements.',
        ],
      },
      {
        name: 'Coconut (පොල්)',
        img: '/img/coconut.jpg',
        alt: 'Coconut',
        paragraphs: [
          'Sustainable timber plank option with a beautiful natural grain. Ideal for ceiling panels and roof structures.',
          'Sizes: **1x2, 2x2, 2x4, 3x4** — custom sizes available.',
        ],
      },
      {
        name: 'Pinewood (ෆයින්වුඩ්)',
        img: '/img/pinewood.jpg',
        alt: 'Pinewood',
        paragraphs: [
          'Imported, lightweight, and smooth-grained planks. Perfect for ceilings, roofing, and decorative interiors.',
          'Available in standard widths (6") with custom orders possible.',
        ],
      },
      {
        name: 'Teak (තේක්ක)',
        img: '/img/teak.jpg',
        alt: 'Teak',
        paragraphs: [
          'Premium hardwood planks for high-end furniture and interior finishes. Naturally durable and weather-resistant.',
          'Widths: **4" to 10"** — thickness: **1", 1 1/8"**.',
        ],
      },
      {
        name: 'Mahogany (මහෝගනී)',
        img: '/img/mahogany.jpg',
        alt: 'Mahogany',
        paragraphs: [
          'Rich-colored hardwood planks with smooth grain. Perfect for premium furniture, doors, and paneling.',
          'Widths: **4" to 10"** — thickness: **1", 1 1/8"**.',
        ],
      },
    ],
  },
}

export const woodenBeams: ProductPageData = {
  meta: {
    title: 'Sumudu Timber Stores & Sawmills | Wooden Beams – Strong & Durable Timber',
    description:
      'Sumudu Timber Stores & Sawmills provides high-quality wooden beams, including teak, mahogany, and nedun, for construction and furniture. Island-wide supply across Sri Lanka.',
    keywords:
      'wooden beams, timber beams, teak beams, mahogany beams, nedun beams, kempes, grandis, coconut wood, pinewood, chinaberry, jak wood, margosa wood, suriyamara wood, timber supplier Sri Lanka, Sumudu Timber',
  },
  hero: {
    title: 'Wooden Beams',
    lead: 'Strong, reliable, and durable beams for structural use.',
    body: [
      'Perfect for roofing frames, load-bearing structures, and construction projects.',
      'Available in standard and custom sizes to suit your requirements.',
    ],
  },
  section: {
    id: 'wooden-beams',
    title: 'Heavy-Duty Wooden Beams',
    subtitle:
      'Engineered for strength and stability, our beams are ideal for construction projects that demand performance.',
    align: 'center',
    items: [
      {
        name: 'Kempas (කෙම්පස්)',
        img: '/img/kempas.jpg',
        alt: 'Kempas',
        paragraphs: [
          'Highly durable hardwood ideal for structural beams and framing. Imported from Malaysia for heavy-duty construction.',
          'Sizes: **2x4, 2x6, 3x6, 4x6, 4x8** — up to **24 feet** in length.',
        ],
      },
      {
        name: 'Grandis (ගාන්ඩිස්)',
        img: '/img/grandis.jpg',
        alt: 'Grandis',
        paragraphs: [
          'Locally sawn beams offering strength and affordability. A perfect alternative to imported hardwoods for framing and roofing.',
          'Custom sizes available for any beam requirements.',
        ],
      },
      {
        name: 'Coconut (පොල්)',
        img: '/img/coconut.jpg',
        alt: 'Coconut',
        paragraphs: [
          'Eco-friendly choice for beams in smaller structures. Provides strength with a natural finish.',
          'Sizes: **2x4, 3x4** — custom cuts available.',
        ],
      },
      {
        name: 'Teak (තේක්ක)',
        img: '/img/teak.jpg',
        alt: 'Teak',
        paragraphs: [
          'Premium hardwood beams, weather-resistant and ideal for long-lasting structural work.',
          'Common sizes: **2x4, 3x4** with custom sizes available.',
        ],
      },
    ],
  },
}

export const customCuts: ProductPageData = {
  meta: {
    title: 'Sumudu Timber Stores & Sawmills | Custom Cuts – Tailored Timber Solutions',
    description:
      'Sumudu Timber Stores & Sawmills offers custom timber cutting services, providing tailor-made planks, beams, and other timber solutions. Island-wide delivery in Sri Lanka.',
    keywords:
      'custom timber cuts, timber cutting services, tailor-made timber, teak wood, mahogany wood, nedun timber, kempes, grandis, coconut wood, pinewood, chinaberry, jak wood, margosa wood, suriyamara wood, Sumudu Timber',
  },
  hero: {
    title: 'Custom Cuts',
    lead: 'Get timber cut to your exact specifications for any project.',
    body: [
      'Our advanced milling ensures precision and consistency.',
      'Available for all wood types in our inventory.',
    ],
  },
  section: {
    id: 'custom-cuts',
    title: 'Tailored Timber Solutions',
    subtitle:
      'From specialty furniture pieces to unique construction requirements, we cut to your needs.',
    align: 'center',
    items: [
      {
        name: 'Teak (තේක්ක)',
        img: '/img/teak.jpg',
        alt: 'Teak',
        paragraphs: [
          'Available in widths from **4" to 10"** with thickness options **1", 1 1/8"** and more. We cut beams, planks, and custom profiles to your specifications.',
        ],
      },
      {
        name: 'Jak (කොස්)',
        img: '/img/jak.jpg',
        alt: 'Jak',
        paragraphs: [
          'Custom-sized Jack wood for doors, windows, and furniture. Options from narrow planks to wide panels and beams.',
        ],
      },
      {
        name: 'Mahogany (මහෝගනී)',
        img: '/img/mahogany.jpg',
        alt: 'Mahogany',
        paragraphs: [
          'We offer custom lengths and thicknesses for premium furniture and paneling applications.',
        ],
      },
    ],
  },
}

export const byproducts: ProductPageData = {
  meta: {
    title: 'Sumudu Timber Stores & Sawmills | Sawdust & Byproducts – Eco-Friendly Timber Materials',
    description:
      'Sumudu Timber Stores & Sawmills supplies sawdust and other timber byproducts for woodworking, animal bedding, and eco-friendly purposes. Island-wide availability in Sri Lanka.',
    keywords:
      'sawdust, timber byproducts, wood chips, timber waste, eco-friendly timber, teak wood, mahogany wood, nedun timber, Sumudu Timber, Sri Lanka',
  },
  hero: {
    title: 'Sawdust & Byproducts',
    lead: 'We don’t just sell timber — our sawmills produce high-quality sawdust and wood byproducts for various uses.',
    body: ['Perfect for livestock bedding, biomass fuel, gardening, and more.'],
  },
  section: {
    id: 'byproducts',
    title: 'Our Byproducts',
    subtitle: 'Eco-friendly and sustainable, made from processing high-grade timber.',
    align: 'center',
    items: [
      {
        name: 'Sawdust',
        img: '/img/sawdust.jpg',
        alt: 'Sawdust',
        paragraphs: [
          'Fine and clean sawdust suitable for animal bedding, fuel pellets, and gardening mulch. Produced fresh from milling operations.',
        ],
      },
      {
        name: 'Wood Chips',
        img: '/img/woodchips.jpg',
        alt: 'Wood Chips',
        paragraphs: [
          'Uniform wood chips ideal for landscaping, composting, and biomass energy production.',
        ],
      },
      {
        name: 'Offcuts',
        img: '/img/offcuts.jpg',
        alt: 'Offcuts',
        paragraphs: [
          'High-quality timber offcuts from premium wood. Suitable for small craft projects, repairs, and firewood.',
        ],
      },
    ],
  },
}
