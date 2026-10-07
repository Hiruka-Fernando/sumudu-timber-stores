import type { WoodSection } from '../data/products'
import RichText from './RichText'
import '../styles/Products.css'

export default function ProductSection({ section }: { section: WoodSection }) {
  return (
    <section className="container my-5" id={section.id}>
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
  )
}
