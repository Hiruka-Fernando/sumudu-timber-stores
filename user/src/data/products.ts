// Text uses **bold** and __italic__ markers; <RichText /> turns them into <b> / <i>.

export type WoodItem = {
  name: string
  img: string
  alt: string
  paragraphs: string[]
}

export type WoodSection = {
  id: string
  title: string
  subtitle?: string
  align: 'center' | 'left'
  items: WoodItem[]
}

export const woodSections: WoodSection[] = [
  {
    id: 'roofing',
    title: 'Roofing',
    subtitle:
      'Strong and Reliable woods ideal for Roofing and Ceiling work, Built to withstand Time, Weather and Weight.',
    align: 'center',
    items: [
      {
        name: 'Kempas (කෙම්පස්)',
        img: '/img/kempas.jpg',
        alt: 'Kempas',
        paragraphs: [
          'Looking for strong long-lasting timber ideal for roofing and heavy-duty construction? Our **Kempas Wood**, imported from Malaysia, is a top choice across Sri Lanka. Known for its **exceptional strength**, and rich appearance, kempas is perfect for high-load applications like roofing, beams, and structural framing.',
          'Available in a wide range of sizes including **2x4, 2x5, 2x6, 2x8, 3x4, 3x6, 3x8, 4x6, 4x8** and **lengths up to 24 feet,** we offer flexible options to suit every project. All at **competitive, reasonable prices** - ensuring you get quality without compromise.',
        ],
      },
      {
        name: 'Grandis (ගාන්ඩිස්)',
        img: '/img/grandis.jpg',
        alt: 'Grandis',
        paragraphs: [
          'Looking for more **cost-effective solution** without compromising on quality? Our **Grandis (ගාන්ඩිස්) timber** is the ideal choice. Locally **sawed in our own modern mills,** Grandis is widely used as a roofing timber alternative to Kempas, offering **strength, durability, and a smooth finish** at a more affordable price.',
          'We offer **custom prices** to match your exact requirements, making it a perfect fit for roofing, framing and general construction work. Get the flexibility you need, backed by **local expertise and competitive pricing.**',
        ],
      },
      {
        name: 'Coconut (පොල්)',
        img: '/img/coconut.jpg',
        alt: 'Coconut',
        paragraphs: [
          'Our **Coconut wood** is a sustainable, versatile timber option, **processed with precision in our modern mills** to ensure a **high-quality finish and durability.** Widely used for **roof structures and ceiling panels,** this wood blends strength with a naturally beautiful grain, adding both function and style to your projects.',
          'Available in standard sizes like **1x2, 2x2, 2x4, 3x4,** and offered in **custom sizes** to suit your unique construction needs. Coconut wood is a smart, affordable choice for builders who want quality and eco-friendly performance in one.',
        ],
      },
      {
        name: 'Pinewood (ෆයින්වුඩ්)',
        img: '/img/pinewood.jpg',
        alt: 'Pinewood',
        paragraphs: [
          'High-quality **imported Pinewood**, ideal for **roofing, ceiling, and interior design** work. Lightweight, durable, and visually appealing with a smooth grain.',
          'Available in standard sizes (6"). Pinewood offers both beauty and versatility in one package.',
        ],
      },
      {
        name: 'Chinaberry (ලුනුමිදෙල්ල)',
        img: '/img/lunumidella.jpg',
        alt: 'Chinaberry',
        paragraphs: [
          "Lunumidella is ideal for **roof ceilings and interior paneling,** also a great **local alternative to Pinewood.** It's **affordable, high quality,** and offers a smooth finish, making it perfect for stylish yet cost-effective builds.",
          'Available in standard and **custom sizes.**',
        ],
      },
    ],
  },
  {
    id: 'local-wood',
    title: 'Local Wood',
    subtitle: 'Perfect for Framing, Furniture, Doors, and Interior woodwork.',
    align: 'center',
    items: [
      {
        name: 'Teak (තේක්ක)',
        img: '/img/teak.jpg',
        alt: 'Teak',
        paragraphs: [
          'We offer high-quality teak wood in a variety of sizes to suit all your needs.',
          'Choose from planks in widths from **4" to 10"**, and more, with standard thickness options of **1", 1 1/8"** and as required, as well as commonly used beam sizes like **2x4** and **3x4** ideal for framing, furniture making, and general construction.',
          'Need a specific size?\nOur custom cutting services ensure you get exactly what you require, all at reasonable and competitive prices.',
        ],
      },
      {
        name: 'Jak (කොස්)',
        img: '/img/jak.jpg',
        alt: 'Jak',
        paragraphs: [
          'Our selection of **Jack wood** offers natural beauty and strength, ideal for **doors, windows, and classic furniture.**',
          'Choose from a wide range of planks in widths of **4" to 10"** and more with standard thickness of **1", 1 1/8"** and as required, as well as commonly used beam sizes like **2x3** and **3x4**.',
          'We also offer **custom sizing** to match your needs. Jack wood from __Sumudu Timber Stores__ is locally sourced and priced to give you the best value without compromising on quality.',
        ],
      },
      {
        name: 'Mahogany (මහෝගනී)',
        img: '/img/mahogany.jpg',
        alt: 'Mahogany',
        paragraphs: [
          'We offer premium-grade **Mahogany wood,** known for its rich colour, smooth grain, and lasting durability.',
          "Availability in a variety of widths from **4\" to 10\"**, with thickness including **1\" and 1 1/8\"**, it's perfect for **high-end furniture, doors, and interior wood work** and we provide **custom cuts** to meet your exact requirements, all at **affordable prices with reliable quality.**",
        ],
      },
    ],
  },
  {
    id: 'other-wood',
    title: 'Other Wood',
    align: 'left',
    items: [
      {
        name: 'Nedun (නැදුන්)',
        img: '/img/nedun.jpg',
        alt: 'Nedun',
        paragraphs: [
          'A premium hardwood known for its fine grain and reddish-brown hue, perfect for high-end furniture and carving.',
        ],
      },
      {
        name: 'Suriyamara (සුරියමාර)',
        img: '/img/suriyamara.jpg',
        alt: 'Suriyamara',
        paragraphs: [
          "Also known as rain tree wood, it's lightweight, with a unique grain pattern, ideal for decorative and general furniture.",
        ],
      },
      {
        name: 'Margosa (කොහොඹ)',
        img: '/img/margosa.jpg',
        alt: 'Margosa',
        paragraphs: [
          'This medicinal tree yields moderately hard wood, perfect for doors, window frames, and pest-resistant furniture.',
        ],
      },
      {
        name: 'Halmilla (හල්මිල්ල)',
        img: '/img/halmilla.jpg',
        alt: 'Halmilla',
        paragraphs: [
          'Light in color with fine grain, halmilla is a reliable choice for flooring, paneling, and lightweight furniture.',
        ],
      },
      {
        name: 'Ketakaela (කැටකෑල)',
        img: '/img/katakaela.jpg',
        alt: 'Ketakaela',
        paragraphs: [
          'Durable and traditional, ketakaela is commonly used in rural house construction and structural timber.',
        ],
      },
      {
        name: 'Alastonia (හවරිනුග / ඇට්ටෝනියා)',
        img: '/img/alastonia.jpg',
        alt: 'Alastonia',
        paragraphs: [
          'Soft yet stable, alastonia is a lightweight wood used for ceiling panels, light furniture, and carving work.',
        ],
      },
    ],
  },
]
