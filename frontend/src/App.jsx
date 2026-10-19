import { useState } from 'react'
import {
  HandHeart,
  Heart,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Users,
  Target,
  Eye,
  BookOpen,
} from 'lucide-react'
import './App.css'

const organization = {
  name: 'Ansar Welfare Organization',
  founded: '2019',
  address: 'Iftin, opposite Sada Mosque',
  phones: ['0721133156', '0723003071'],
  email: 'ansarwelfareorganization7@gmail.com',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="site-wrapper">
      {/* Navigation */}
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">
              <HandHeart size={30} strokeWidth={1.8} />
            </span>

            <span className="brand-text">
              <strong>ANSAR</strong>
              <span>WELFARE ORGANIZATION</span>
            </span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a className="nav-contact" href="#about" onClick={closeMenu}>
              Our Organization
              <ArrowRight size={17} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HOME */}
        <section className="hero" id="home">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="container hero-layout">
            <div className="hero-content">
              <div className="hero-label">
                <span className="hero-label-icon">
                  <Heart size={15} fill="currentColor" />
                </span>
                SERVING OUR COMMUNITY SINCE {organization.founded}
              </div>

              <h1>
                Together, we can
                <br />
                make a <span>difference.</span>
              </h1>

              <p className="hero-description">
                Welcome to Ansar Welfare Organization. We believe in the
                power of compassion, generosity, and community. Together,
                we can bring hope to families, support people in need, and
                build a stronger future for everyone.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#about">
                  Discover Our Organization
                  <ArrowRight size={19} />
                </a>

                <a className="button button-secondary" href="#about">
                  Learn About Us
                </a>
              </div>

              <div className="hero-trust">
                <span className="trust-icon">
                  <ShieldCheck size={23} />
                </span>
                <div>
                  <strong>Faith. Compassion. Community.</strong>
                  <p>Working together to make a meaningful difference.</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-top">
                  <span className="hero-card-icon">
                    <HandHeart size={43} strokeWidth={1.5} />
                  </span>
                  <span className="hero-card-status">
                    <span />
                    A COMMUNITY OF CARING
                  </span>
                </div>

                <div className="hero-card-illustration">
                  <div className="illustration-circle circle-one" />
                  <div className="illustration-circle circle-two" />

                  <div className="illustration-center">
                    <HandHeart size={86} strokeWidth={1.3} />
                  </div>

                  <div className="floating-icon floating-icon-one">
                    <Heart size={23} fill="currentColor" />
                  </div>

                  <div className="floating-icon floating-icon-two">
                    <Users size={25} />
                  </div>

                  <div className="floating-icon floating-icon-three">
                    <BookOpen size={23} />
                  </div>
                </div>

                <div className="hero-card-message">
                  <span className="message-line" />
                  <div>
                    <h3>Small acts. Lasting impact.</h3>
                    <p>
                      Every act of kindness brings us closer together.
                    </p>
                  </div>
                </div>

                <div className="hero-card-footer">
                  <span>
                    <Heart size={16} fill="currentColor" />
                    Compassion
                  </span>
                  <span>
                    <Users size={16} />
                    Togetherness
                  </span>
                </div>
              </div>

              <div className="floating-note">
                <span className="floating-note-icon">
                  <ShieldCheck size={22} />
                </span>
                <span>
                  <strong>Established in 2019</strong>
                  <small>Committed to community service</small>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span>
                <HandHeart size={19} />
                Charity and compassion
              </span>
              <span>
                <BookOpen size={19} />
                Islamic education
              </span>
              <span>
                <Users size={19} />
                Community support
              </span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="container">
            <div className="about-heading">
              <span className="section-eyebrow">
                <span />
                GET TO KNOW US
              </span>

              <h2>
                About <span>Ansar Welfare Organization</span>
              </h2>

              <p>
                Learn about who we are, what we believe, and our commitment
                to serving our community with compassion and sincerity.
              </p>
            </div>

            <div className="about-intro">
              <div className="about-intro-icon">
                <HandHeart size={43} strokeWidth={1.5} />
              </div>

              <div>
                <span className="about-small-label">WHO WE ARE</span>
                <h3>A commitment to people and community.</h3>

                <p>
                  Ansar Welfare Organization is a community-focused
                  organization established in {organization.founded}.
                  We are dedicated to charitable service, Islamic learning,
                  and supporting people who need assistance.
                </p>

                <p>
                  We believe that a caring community is built when people
                  come together, share their blessings, and help one another.
                  Through generosity and collective responsibility, we aim
                  to bring hope, strengthen relationships, and make a
                  positive difference in people's lives.
                </p>
              </div>
            </div>

            <div className="about-pillars">
              <article className="pillar-card">
                <div className="pillar-icon">
                  <Target size={27} />
                </div>
                <span className="pillar-label">OUR PURPOSE</span>
                <h3>Our Mission</h3>
                <p>
                  To support vulnerable members of our community through
                  charitable giving, practical assistance, Islamic education,
                  and acts of kindness.
                </p>
              </article>

              <article className="pillar-card pillar-card-featured">
                <div className="pillar-icon">
                  <Eye size={27} />
                </div>
                <span className="pillar-label">OUR ASPIRATION</span>
                <h3>Our Vision</h3>
                <p>
                  To build a compassionate and united community where
                  people support one another and everyone has an opportunity
                  to live with dignity and hope.
                </p>
              </article>

              <article className="pillar-card">
                <div className="pillar-icon">
                  <Heart size={27} />
                </div>
                <span className="pillar-label">WHAT GUIDES US</span>
                <h3>Our Values</h3>
                <p>
                  Compassion, generosity, faith, honesty, service, and
                  collective responsibility guide our commitment to
                  the people we serve.
                </p>
              </article>
            </div>

            <div className="organization-details">
              <div className="details-heading">
                <span className="details-heading-icon">
                  <ShieldCheck size={25} />
                </span>
                <div>
                  <span className="about-small-label">CONNECT WITH US</span>
                  <h3>Our Organization</h3>
                  <p>
                    Learn more about Ansar Welfare Organization or contact
                    us using the details below.
                  </p>
                </div>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-icon">
                    <MapPin size={22} />
                  </span>
                  <div>
                    <span className="detail-label">OUR LOCATION</span>
                    <strong>{organization.address}</strong>
                    <small>Garissa, Kenya</small>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">
                    <Phone size={22} />
                  </span>
                  <div>
                    <span className="detail-label">PHONE NUMBERS</span>
                    {organization.phones.map((phone) => (
                      <a href={`tel:${phone}`} key={phone}>
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">
                    <Mail size={22} />
                  </span>
                  <div>
                    <span className="detail-label">EMAIL ADDRESS</span>
                    <a href={`mailto:${organization.email}`}>
                      {organization.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-closing">
              <div className="closing-icon">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <h3>Every act of kindness matters.</h3>
                <p>
                  Together, we can continue building a community rooted
                  in compassion, faith, and generosity.
                </p>
              </div>
              <a className="closing-link" href="#home">
                Back to Home
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <HandHeart size={27} />
            </span>
            <span className="brand-text">
              <strong>ANSAR</strong>
              <span>WELFARE ORGANIZATION</span>
            </span>
          </a>

          <p>
            Faith in action. Compassion for all.
          </p>

          <span className="footer-copyright">
            © {new Date().getFullYear()} Ansar Welfare Organization
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
