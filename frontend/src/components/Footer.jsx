import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  Smartphone,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">
              <HeartHandshake size={25} />
            </span>

            <span className="brand-name">
              <strong>Ansar Welfare</strong>
              <small>Organization</small>
            </span>
          </Link>

          <p>
            Working together to support people, strengthen our community,
            and build a better future.
          </p>

          <Link to="/donations" className="footer-donate-link">
            Support our work →
          </Link>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/donations">Donations</Link></li>
            <li><Link to="/lectures">Islamic Lectures</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul className="contact-list footer-contact">
            <li>
              <MapPin size={17} />
              <span>Iftin, opposite Sada Mosque</span>
            </li>
            <li>
              <Phone size={17} />
              <a href="tel:0721133156">0721 133 156</a>
            </li>
            <li>
              <Phone size={17} />
              <a href="tel:0723003071">0723 003 071</a>
            </li>
            <li>
              <Mail size={17} />
              <a href="mailto:ansarwelfareorganization7@gmail.com">
                Email the organization
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-donation-info">
          <h3>Support Our Work</h3>
          <ul className="contact-list footer-contact">
            <li>
              <Smartphone size={17} />
              <span>M-Pesa Paybill: <strong>4133187</strong></span>
            </li>
            <li>
              <Smartphone size={17} />
              <span>Account: <strong>01100611210001</strong></span>
            </li>
          </ul>
          <p className="footer-payment-note">
            Please verify payment details before sending a contribution.
          </p>
          <Link to="/donations" className="footer-donate-link">
            View donation instructions →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © {new Date().getFullYear()} Ansar Welfare Organization.
            All rights reserved.
          </p>

          <div>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
