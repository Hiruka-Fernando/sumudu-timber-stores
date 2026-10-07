import { usePageMeta } from '../hooks/usePageMeta'
import type { ProductPageData } from '../data/productPages'
import ProductHero from './ProductHero'
import ProductSection from './ProductSection'
import '../styles/Products.css'

// Shared layout for Timber Planks, Wooden Beams, Custom Cuts and Byproducts.
export default function ProductListPage({ page }: { page: ProductPageData }) {
  usePageMeta(page.meta)

  return (
    <div className="products-page">
      <ProductHero title={page.hero.title} lead={page.hero.lead} body={page.hero.body} />
      <ProductSection section={page.section} />
    </div>
  )
}
