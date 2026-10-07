import WhatsAppButton from '../components/WhatsAppButton'
import { usePageMeta } from '../hooks/usePageMeta'
import '../styles/About.css'

const highlights = [
  {
    icon: 'fa-tree',
    title: 'Wide Timber Selection',
    text: 'From Kempas to Mahogany, we supply premium imported and local wood for any project.',
  },
  {
    icon: 'fa-industry',
    title: 'Modern Sawmilling',
    text: 'Using advanced bandsaw technology, we deliver accurate and efficient timber cuts.',
  },
  {
    icon: 'fa-couch',
    title: 'Custom Furniture',
    text: 'We build strong, beautiful furniture tailored to your style and budget.',
  },
]

const reasons = [
  'Honest pricing with no compromise on quality',
  'Tailored timber cutting to your specific dimensions',
  'Fast and friendly service from inquiry to delivery',
  'Trusted by local builders, contractors & homeowners',
  'Years of experience with a loyal returning customer base',
]

export default function About() {
  usePageMeta({
    title: 'Sumudu Timber Stores & Sawmills | About Us – Trusted Timber Supplier in Sri Lanka',
    description:
      'Learn about Sumudu Timber Stores, a trusted timber supplier in Sri Lanka offering quality teak, mahogany, nedun, and other timber for furniture, doors, and construction. Island-wide timber supply available.',
    keywords:
      'about Sumudu Timber, trusted timber store, timber supplier Sri Lanka, teak wood, mahogany wood, nedun timber, kempes, grandis, coconut wood, pinewood, chinaberry, jak wood, margosa wood, suriyamara wood',
  })

  return (
    <section id="about" className="about-page py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="about-title mb-3">About Us</h2>
          <p className="fs-5 text-dark">Reliable Timber • Precision Sawmilling • Custom Furniture</p>
        </div>

        <div className="row align-items-center g-4 mb-5">
          <div className="col-md-6">
            <img src="/img/team.jpg" alt="Our Team" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <p className="about-text mb-3">
              <strong>Sumudu Timber Stores and Sawmill</strong> is a trusted provider of quality
              timber, sawmilling services, and custom-made furniture in Sri Lanka. With years of
              experience, we supply both imported and local timber to builders, contractors, and
              homeowners at competitive prices.
            </p>
            <p className="about-text">
              Our mission is to deliver affordable, high-quality wood products by combining
              traditional craftsmanship with modern technology. Whether it’s sawing timber to your
              size or crafting long-lasting furniture, we focus on precision, durability, and
              customer satisfaction.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {highlights.map((h) => (
            <div className="col-md-4" key={h.title}>
              <div className="bg-white rounded p-4 shadow-sm text-center h-100">
                <i className={`fas ${h.icon} about-icon`}></i>
                <h3 className="mt-3 fs-5 text-dark">{h.title}</h3>
                <p className="text-muted small">{h.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h3 className="about-subtitle">Why Choose Us</h3>
          <ul className="mt-3 list-unstyled about-reasons">
            {reasons.map((r) => (
              <li key={r}>✔️ {r}</li>
            ))}
          </ul>
        </div>

        <WhatsAppButton />
      </div>
    </section>
  )
}
