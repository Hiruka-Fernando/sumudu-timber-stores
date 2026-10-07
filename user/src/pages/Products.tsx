import { Link } from 'react-router-dom'
import ProductHero from '../components/ProductHero'
import ProductSection from '../components/ProductSection'
import WhatsAppButton from '../components/WhatsAppButton'
import { woodSections } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'
import '../styles/Products.css'

export default function Products() {
  usePageMeta({
    title: 'Sumudu Timber Stores & Sawmills | Timber Products – Teak, Mahogany, Nedun & More',
    description:
      'Explore the wide range of timber products offered by Sumudu Timber Stores, including teak, mahogany, nedun, kempes, grandis, pine, and more. High-quality timber available island-wide in Sri Lanka.',
    keywords:
      'teak wood, mahogany wood, nedun timber, kempes, grandis, coconut wood, pinewood, chinaberry, jak wood, margosa wood, suriyamara wood, timber supplier Sri Lanka, Sumudu Timber products, buy timber Sri Lanka',
  })

  return (
    <div className="products-page">
      <ProductHero
        title="Woods"
        lead="Explore Our Range of Quality Timber"
        body={[
          'From imported hardwoods to locally processed options, we offer durable, high-grade timber for roofing, ceilings, flooring, and interior finishes.',
        ]}
      >
        <Link className="btn btn-outline-light" to="/timber-planks">
          More Products
        </Link>
      </ProductHero>

      {woodSections.map((section) => (
        <ProductSection key={section.id} section={section} />
      ))}

      <WhatsAppButton />
    </div>
  )
}
