import { useState } from 'react'
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { SITE } from '../config/site'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/services', label: 'SERVICES' },
  { to: '/about', label: 'ABOUT' },
  { to: '/gallery', label: 'GALLERY' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const close = () => setExpanded(false)

  return (
    <BsNavbar
      expand="md"
      bg="dark"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid>
        <Link className="navbar-brand" to="/" onClick={close}>
          {SITE.name}
        </Link>
        <BsNavbar.Toggle aria-controls="navbarCollapse" />
        <BsNavbar.Collapse id="navbarCollapse">
          <Nav className="me-auto mb-2 mb-md-0">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={close}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}
