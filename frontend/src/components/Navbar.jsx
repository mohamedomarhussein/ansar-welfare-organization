import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeartHandshake, Menu, X, Languages, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const links = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'donations', path: '/donations' },
  { key: 'lectures', path: '/lectures' },
  { key: 'contact', path: '/contact' },
]

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'sw', label: 'Kiswahili' },
  { code: 'so', label: 'Soomaali' },
  { code: 'ar', label: 'العربية' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, changeLanguage, t } = useLanguage()

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleLanguageChange(event) {
    changeLanguage(event.target.value)
    closeMenu()
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
              {t(link.key)}
            </NavLink>
          ))}

          <label className="language-selector">
            <Languages size={18} aria-hidden="true" />

            <span className="sr-only">{t('chooseLanguage')}</span>

            <select
              value={language}
              onChange={handleLanguageChange}
              aria-label={t('chooseLanguage')}
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown size={15} className="language-chevron" aria-hidden="true" />
          </label>
        </nav>
      </div>
    </header>
  )
}
