import { SITE } from '../config/site'
import '../styles/WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappUrl}
      className="whatsapp-float d-flex align-items-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="d-none d-md-inline">Contact Us Today&nbsp;</span>
      <i className="fab fa-whatsapp ms-2"></i>
    </a>
  )
}
