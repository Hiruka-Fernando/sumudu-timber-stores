import { Link } from 'react-router-dom'
import { SITE } from '../config/site'
import { usePageMeta } from '../hooks/usePageMeta'
import '../styles/ThankYou.css'

export default function ThankYou() {
  usePageMeta({ title: 'Thank You | Sumudu Timber Stores & Sawmills' })

  return (
    <div className="thank-you-page">
      <div className="thank-you-box">
        <h1>Thank You for Reaching Out!</h1>
        <p>
          We’ve received your message and truly appreciate your interest. A member of our team
          will get back to you shortly.
        </p>
        <p>
          If your matter is urgent, feel free to call us directly at{' '}
          <strong>{SITE.phoneLocal}</strong>.
        </p>
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  )
}
