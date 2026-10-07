import WhatsAppButton from '../components/WhatsAppButton'
import { SITE } from '../config/site'
import { useBodyClass } from '../hooks/useBodyClass'
import { usePageMeta } from '../hooks/usePageMeta'
import '../styles/Contact.css'

const infoRows = [
  { icon: 'fa-phone', text: SITE.phoneLocal },
  { icon: 'fa-envelope', text: SITE.email },
  { icon: 'fa-map-marker-alt', text: SITE.address },
  { icon: 'fa-clock', text: SITE.hours },
]

export default function Contact() {
  usePageMeta({
    title: 'Sumudu Timber Stores & Sawmills | Contact – Timber Orders & Inquiries Island-wide',
    description:
      'Get in touch with Sumudu Timber Stores for timber inquiries or orders. High-quality teak, mahogany, nedun, and other timber supplied island-wide in Sri Lanka.',
    keywords:
      'contact Sumudu Timber, timber inquiry Sri Lanka, buy timber Sri Lanka, teak wood, mahogany wood, nedun timber, kempes, grandis, coconut wood, pinewood, chinaberry, jak wood, margosa wood, suriyamara wood',
  })
  // The contact page has its own blue theme (page background + footer colour).
  useBodyClass('contact-theme')

  // FormSubmit redirects here after a successful submission.
  const thankYouUrl = `${window.location.origin}/thank-you`

  return (
    <div className="container py-5 mt-5 contact-page">
      <h2 className="section-title text-center mb-4">Contact Us</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="p-4 bg-white rounded shadow-sm h-100">
            <h4 className="mb-3">Get In Touch</h4>
            {infoRows.map((row, i) => (
              <p
                key={row.icon}
                className={`d-flex align-items-center contact-info ${
                  i < infoRows.length - 1 ? 'mb-2' : ''
                }`}
              >
                <i className={`fas ${row.icon} me-2`}></i>&nbsp;{row.text}
              </p>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 bg-white rounded shadow-sm h-100">
            <h4 className="mb-3">Send Us a Message</h4>
            <form action={SITE.formUrl} method="POST">
              <input type="hidden" name="_next" value={thankYouUrl} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                className="d-none"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="your mobile number (+94)"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Write your message here..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="btn btn-custom w-100">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <iframe
          title="Sumudu Timber locations"
          src={SITE.mapEmbedUrl}
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <WhatsAppButton />
    </div>
  )
}
