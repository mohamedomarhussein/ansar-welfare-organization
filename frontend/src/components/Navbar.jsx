import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeartHandshake, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Donations', path: '/donations' },
  { label: 'Islamic Lectures', path: '/lectures' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header
      className="site-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 99999,
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container nav-container">
        <Link
          to="/"
          className="brand"
          aria-label="Ansar Welfare Organization home"
          onClick={closeMenu}
        >
          <span className="brand-icon">
            <HeartHandshake size={27} />
          </span>

          <span className="brand-name">
            <strong>Ansar Welfare</strong>
            <small>Organization</small>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? 'mobile-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
