import { Link } from 'react-router-dom'
import { SITE } from '../config/site'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white-50">About Us</Link></li>
              <li><Link to="/services" className="text-white-50">Our Services</Link></li>
              <li><Link to="/contact" className="text-white-50">Contact</Link></li>
              <li><a href="#" className="text-white-50">Careers</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li><Link to="/timber-planks" className="text-white-50">Timber Planks</Link></li>
              <li><Link to="/wooden-beams" className="text-white-50">Wooden Beams</Link></li>
              <li><Link to="/custom-cuts" className="text-white-50">Custom Cuts</Link></li>
              <li><Link to="/byproducts" className="text-white-50">Sawdust &amp; Byproducts</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">FAQs</a></li>
              <li><a href="#" className="text-white-50">Blog</a></li>
              <li><a href="#" className="text-white-50">Timber Guide</a></li>
              <li><a href="#" className="text-white-50">Warranty Info</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled text-white-50">
              <li>{SITE.email}</li>
              <li>Phone: {SITE.phone}</li>
              <li>Address: {SITE.address}</li>
            </ul>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-outline-light btn-sm"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-arrow-up me-1"></i> Back to top
        </button>

        <div className="text-center mt-4">
          <small>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}
