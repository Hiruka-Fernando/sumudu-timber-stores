import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Byproducts from './pages/Byproducts'
import Contact from './pages/Contact'
import CustomCuts from './pages/CustomCuts'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Services from './pages/Services'
import ThankYou from './pages/ThankYou'
import TimberPlanks from './pages/TimberPlanks'
import WoodenBeams from './pages/WoodenBeams'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone page: no navbar / footer */}
        <Route path="thank-you" element={<ThankYou />} />

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="timber-planks" element={<TimberPlanks />} />
          <Route path="wooden-beams" element={<WoodenBeams />} />
          <Route path="custom-cuts" element={<CustomCuts />} />
          <Route path="byproducts" element={<Byproducts />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
