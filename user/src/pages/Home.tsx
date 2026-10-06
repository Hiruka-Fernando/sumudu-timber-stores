import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import '../styles/Home.css'

type Slide = { title: string; text: string }
type Product = { name: string; img: string; text: string }
type Featurette = {
  heading: string
  highlight: string
  text: string
  to: string
  img: string
  alt: string
  reverse?: boolean
}

const slides: Slide[] = [
  {
    title: 'Crafted by Nature, Perfected by Tradition',
    text: "At Sumudu Timber Stores, We bring you the Finest Sri Lankan Timber, carefully sourced, Precisely Cut & Crafted. With decades of Trust, Expert Saw-Milling, and a passion for wood, We turn nature's strength into your everyday comfort.",
  },
  {
    title: 'Crafting Quality Timber for Generations',
    text: 'Supplying premium hardwood with excellence and integrity since 1990.',
  },
  {
    title: 'Trusted by Industry Professionals',
    text: 'Delivering top-tier sawmilling solutions for commercial and residential use.',
  },
  {
    title: 'Built on Sustainability',
    text: 'Preserving nature while producing quality timber you can rely on',
  },
]

const products: Product[] = [
  {
    name: 'Teak (තේක්ක)',
    img: '/img/teak.jpg',
    text: 'Renowned for its durability and water resistance, teak is ideal for furniture, boat decks, and outdoor structures.',
  },
  {
    name: 'Nedun (නැදුන්)',
    img: '/img/nedun.jpg',
    text: 'A premium hardwood known for its fine grain and reddish-brown hue, perfect for high-end furniture and carving.',
  },
  {
    name: 'Mahogany (මහෝගනී)',
    img: '/img/mahogany.jpg',
    text: 'Elegant and timeless, mahogany is favored for its smooth texture, deep color, and use in luxury furniture and instruments.',
  },
]

const featurettes: Featurette[] = [
  {
    heading: 'Our',
    highlight: 'Services',
    text: "At Sumudu Timbers & Sawmills, we deliver excellence in every grain. From premium imported and local timber to precision sawmilling, custom furniture, and sustainable logging, our services are designed to meet the highest standards of quality and craftsmanship. Whether you're building, designing, or exporting, trust us to provide reliable, tailored solutions that stand the test of time.",
    to: '/services',
    img: '/img/services.jpg',
    alt: 'Our services',
  },
  {
    heading: 'About',
    highlight: 'Us',
    text: "Sumudu Timber Stores & Sawmills has grown into a renowned timber milling company with decades of experience in the industry. Our legacy is built on sustainability, craftsmanship, and long-standing trust. We are committed to providing premium timber while preserving nature's balance.",
    to: '/about',
    img: '/img/aboutus.jpg',
    alt: 'About us',
    reverse: true,
  },
  {
    heading: 'Why Choose',
    highlight: 'Sumudu Timbers & Sawmills?',
    text: "At Sumudu Timbers & Sawmills, we don't just supply timber, we build lasting trust. We take pride in delivering high-quality timber and personalized service from the moment you reach out. Whether you need expert advice or reliable supply, we're here to make your experience smooth and rewarding.",
    to: '/contact',
    img: '/img/us.jpg',
    alt: 'Why choose us',
  },
]

export default function Home() {
  usePageTitle('Sumudu Timber Stores & Sawmills | Quality Timber Supplier Sri Lanka')

  return (
    <>
      {/* ---------- Hero carousel ---------- */}
      <Carousel className="home-carousel" interval={5000}>
        {slides.map((s) => (
          <Carousel.Item key={s.title}>
            <img src="/img/banner.jpg" alt="Banner" />
            <Carousel.Caption>
              <h1>{s.title}</h1>
              <p>{s.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container marketing">
        {/* ---------- Featured timbers ---------- */}
        <div className="row">
          {products.map((p) => (
            <div className="col-lg-4 product-col" key={p.name}>
              <div className="d-flex justify-content-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-circle img-fluid product-thumb"
                />
              </div>
              <h2>{p.name}</h2>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center">
          <Link className="btn btn-secondary" to="/products">
            View details &raquo;
          </Link>
        </p>

        {/* ---------- Services / About / Why choose us ---------- */}
        {featurettes.map((f) => (
          <div key={f.heading}>
            <hr className="featurette-divider" />
            <div className="row featurette align-items-center">
              <div className={`col-md-7 ${f.reverse ? 'order-md-2' : ''}`}>
                <h2 className="featurette-heading">
                  {f.heading} <span className="text-muted">{f.highlight}</span>
                </h2>
                <p className="lead">{f.text}</p>
                <p>
                  <Link className="btn btn-secondary" to={f.to}>
                    View details &raquo;
                  </Link>
                </p>
              </div>
              <div className={`col-md-5 mt-5 ${f.reverse ? 'order-md-1' : ''}`}>
                <img
                  src={f.img}
                  alt={f.alt}
                  className="featurette-image img-fluid mx-auto d-block shadow-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        ))}

        <hr className="featurette-divider" />
      </div>

      {/* ---------- Locate us ---------- */}
      <section className="py-5 locate-us" id="locate-us">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="text-dark fw-bold">Locate Us</h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="rounded shadow overflow-hidden locate-map">
                <iframe
                  title="Sumudu Timber locations"
                  src="https://www.google.com/maps/d/embed?mid=1wySEUO-SQbQ0MiwMXAjJ_jHzfXrlhTE&ehbc=2E312F"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <p className="mb-3">
                  <i className="fas fa-map-marker-alt text-danger me-2"></i>
                  <strong>Head Office</strong>
                  <br />
                  Sumudu Timber Stores,
                  <br />
                  Semarippuwa,
                  <br />
                  Kakkapalliya.
                  <br />
                  032-2051982 / 077-7559182
                </p>

                <p className="mb-3">
                  <i className="fas fa-map-marker-alt text-danger me-2"></i>
                  <strong>Branches</strong>
                  <br />
                  Sumudu Timber Stores,
                  <br />
                  Chilaw Road,
                  <br />
                  New Town,
                  <br />
                  Madampe.
                  <br />
                  032-2247090
                </p>

                <p className="mb-0">
                  Sumudu Sawmills &amp; Timber Stores,
                  <br />
                  Kurunegala Road,
                  <br />
                  New Town,
                  <br />
                  Madampe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}