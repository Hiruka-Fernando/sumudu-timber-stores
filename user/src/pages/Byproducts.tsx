import ProductListPage from '../components/ProductListPage'
import { byproducts } from '../data/productPages'

export default function Byproducts() {
  return <ProductListPage page={byproducts} />
}
