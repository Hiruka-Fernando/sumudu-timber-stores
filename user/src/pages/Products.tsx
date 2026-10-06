import { Link } from 'react-router-dom'
import RichText from '../components/RichText'
import WhatsAppButton from '../components/WhatsAppButton'
import { woodSections } from '../data/products'
import { usePageTitle } from '../hooks/usePageTitle'
import '../styles/Products.css'

export default function Products() {
  usePageTitle('Sumudu Timber Stores & Sawmills | Timber Products – Teak, Mahogany, Nedun & More')

  return (
    <div className="products-page">
      {/* ---------- Hero ---------- */}
      <section className="products-hero text-center d-flex align-items-center justify-content-center">
        <div className="products-hero-box p-4 rounded">
          <h2 className="section-title mb-3">Woods</h2>
          <p className="lead text-light">Explore Our Range of Quality Timber</p>
          <p className="text-light">
            From imported hardwoods to locally processed options, we offer durable, high-grade
            timber for roofing, ceilings, flooring, and interior finishes.
          </p>
          <Link className="btn btn-outline-light" to="/timber-planks">
            More Products
          </Link>
        </div>
      </section>

      {/* ---------- Roofing / Local Wood / Other Wood ---------- */}
      {woodSections.map((section) => (
        <section className="container my-5" key={section.id} id={section.id}>
          <h2
            className={`section-title mb-4 ${
              section.align === 'center' ? 'text-center' : 'section-title-left'
            }`}
          >
            {section.title}
          </h2>

          {section.subtitle && <p className="text-center text-muted mb-5">{section.subtitle}</p>}

          <div className="row g-4">
            {section.items.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.name}>
                <div className="card h-100 shadow-sm">
                  <img src={item.img} className="card-img-top" alt={item.alt} loading="lazy" />
                  <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    {item.paragraphs.map((p, i) => (
                      <p key={i}>
                        <RichText text={p} />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <WhatsAppButton />
    </div>
  )
}
