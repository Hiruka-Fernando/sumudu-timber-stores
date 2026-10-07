import { Link } from 'react-router-dom'
import RichText from '../components/RichText'
import { serviceRows } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'
import '../styles/Services.css'

export default function Services() {
  usePageMeta({
    title:
      'Sumudu Timber Stores & Sawmills | Timber Services – Cutting, Delivery & Island-wide Supply',
    description:
      'Sumudu Timber Stores provides professional timber services, including timber cutting, delivery, and supply for furniture and construction projects, island-wide across Sri Lanka.',
    keywords:
      'timber cutting services, wood delivery Sri Lanka, timber supply, furniture timber, construction timber, Sumudu Timber services, teak wood, mahogany wood, nedun timber, buy timber Sri Lanka',
  })

  return (
    <div className="services-page">
      {/* ---------- Hero ---------- */}
      <div className="services-hero position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-white">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Our Services</h1>
          <p className="lead fw-normal">
            From sawmilling to custom timber processing, discover what we can do for you.
          </p>
          <Link className="btn btn-outline-light" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>

      {/* ---------- Service cards ---------- */}
      {serviceRows.map((row, r) => (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" key={r}>
          {row.map((card, i) => (
            <div
              key={card.title}
              className={`${card.tone === 'dark' ? 'bg-dark' : 'bg-secondary'} text-white ${
                i === 0 ? 'me-md-3' : ''
              } pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}
            >
              <div className="my-3 py-3">
                <h2 className="display-5">{card.title}</h2>
                <p className="lead">
                  <RichText text={card.text} />
                </p>
              </div>
              <div className="bg-light shadow-sm mx-auto service-card">
                <img src={card.img} alt={card.title} className="img-fluid service-img" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
