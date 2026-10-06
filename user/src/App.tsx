import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Products from './pages/Products'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="gallery" element={<Gallery />} />
          {/* TODO as pages are converted: services, about, contact,
              timber-planks, wooden-beams, custom-cuts, byproducts, thank-you */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
