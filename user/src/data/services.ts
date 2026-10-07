export type ServiceCard = {
  title: string
  text: string // "\n" becomes a line break (see <RichText />)
  img: string
  tone: 'dark' | 'secondary'
}

// Two cards per row on desktop.
export const serviceRows: ServiceCard[][] = [
  [
    {
      title: 'Timber Supply',
      text: 'Imported Kempas, local Teak & Mahogany.\nIdeal for construction and carpentry.\nDurable, quality-assured materials.',
      img: '/img/s1.jpg',
      tone: 'dark',
    },
    {
      title: 'Modern Sawmilling',
      text: 'Advanced bandsaw machines.\nPrecise cuts at affordable rates.\nCustom sizing available.',
      img: '/img/s3.jpg',
      tone: 'secondary',
    },
  ],
  [
    {
      title: 'Furniture Making',
      text: 'Custom wood furniture.\nBuilt to your design and budget.\nStylish, durable & elegant.',
      img: '/img/s4.jpg',
      tone: 'secondary',
    },
    {
      title: 'Custom Orders',
      text: 'Need something specific? We cut to your custom size and shape.',
      img: '/img/s2.jpg',
      tone: 'dark',
    },
  ],
  [
    {
      title: 'Logging & Harvesting',
      text: 'Modern techniques for sustainable timber extraction with precision and care.',
      img: '/img/s5.jpg',
      tone: 'dark',
    },
    {
      title: 'Distribution & Export',
      text: 'On-time delivery across the region with careful loading and handling.',
      img: '/img/s6.jpg',
      tone: 'secondary',
    },
  ],
]
