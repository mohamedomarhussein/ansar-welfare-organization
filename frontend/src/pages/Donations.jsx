import { useState } from 'react'
import {
  Heart,
  Smartphone,
  Banknote,
  FileText,
  Utensils,
  HandHeart,
  Copy,
  CheckCircle,
} from 'lucide-react'

const donationMethods = [
  { name: 'M-Pesa', icon: Smartphone },
  { name: 'Cash', icon: Banknote },
  { name: 'Cheque', icon: FileText },
  { name: 'Food', icon: Utensils },
  { name: 'Others', icon: HandHeart },
]

export default function Donations() {
  const [method, setMethod] = useState('M-Pesa')
  const [copiedField, setCopiedField] = useState('')

  async function copyValue(value, fieldName) {
    let copied = false

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value)
        copied = true
      }
    } catch {
      // Try the compatibility fallback below.
    }

    if (!copied) {
      const textArea = document.createElement('textarea')
      textArea.value = value
      textArea.setAttribute('readonly', '')
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      textArea.style.top = '0'
      document.body.appendChild(textArea)
      textArea.select()
      textArea.setSelectionRange(0, textArea.value.length)

      try {
        copied = document.execCommand('copy')
      } catch {
        copied = false
      }

      textArea.remove()
    }

    if (copied) {
      setCopiedField(fieldName)
      window.setTimeout(() => setCopiedField(''), 2200)
    } else {
      window.prompt(`Copy this ${fieldName}:`, value)
    }
  }

  return (
    <div className="donations-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Give with compassion</span>
          <h1>Your generosity can change a life.</h1>
          <p>
            Ansar Welfare Organization brings Muslims together to support
            needy people, organize Islamic lectures, and provide Iftar
            programmes during Ramadan. Your contribution helps sustain
            this community work.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="donation-layout">
          <div className="donation-intro">
            <span className="section-label">Make a difference</span>
            <h2>Every contribution matters.</h2>
            <p>
              Established in 2019, Ansar Welfare Organization depends on
              charitable contributions from fellow Muslims and supporters.
              We have no other source of income, so your generosity is
              important to the continuation of our activities.
            </p>

            <div className="donation-note">
              <Heart size={23} />
              <div>
                <h3>Give according to your ability</h3>
                <p>
                  Your support can help us assist needy Muslims, organize
                  Friday-night Muhadhara at different mosques, and provide
                  free Iftar meals during Ramadan.
                </p>
              </div>
            </div>
          </div>

          <div className="donation-card">
            <h2>Choose a donation method</h2>
            <p className="donation-card-description">
              Select how you would like to contribute.
            </p>

            <div className="donation-methods">
              {donationMethods.map(({ name, icon: Icon }) => (
                <button
                  type="button"
                  key={name}
                  className={`donation-method ${method === name ? 'active' : ''}`}
                  onClick={() => setMethod(name)}
                  aria-pressed={method === name}
                >
                  <Icon size={21} />
                  <span>{name}</span>
                </button>
              ))}
            </div>

            {method === 'M-Pesa' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <Smartphone size={24} />
                  <h3>M-Pesa Paybill</h3>
                </div>

                <p>
                  Use these details in your M-Pesa menu. Each value has
                  its own copy button.
                </p>

                <div className="payment-row">
                  <div className="payment-row-text">
                    <span>Business number (Paybill)</span>
                    <strong>4133187</strong>
                  </div>
                  <button
                    type="button"
                    className="payment-copy-button"
                    onClick={() => copyValue('4133187', 'Paybill number')}
                  >
                    <Copy size={17} /> Copy Paybill
                  </button>
                </div>

                <div className="payment-row">
                  <div className="payment-row-text">
                    <span>Account number</span>
                    <strong>01100611210001</strong>
                  </div>
                  <button
                    type="button"
                    className="payment-copy-button"
                    onClick={() => copyValue('01100611210001', 'account number')}
                  >
                    <Copy size={17} /> Copy Account
                  </button>
                </div>

                <div className="mpesa-instructions">
                  <h4>How to donate using M-Pesa</h4>
                  <ol>
                    <li>Open M-Pesa on your phone.</li>
                    <li>Select Lipa na M-Pesa, then Pay Bill.</li>
                    <li>Enter the Paybill number shown above.</li>
                    <li>Enter the account number shown above.</li>
                    <li>Enter your donation amount and confirm the details.</li>
                    <li>Keep your M-Pesa confirmation message.</li>
                  </ol>
                </div>

                <p className="payment-disclaimer">
                  Please verify the Paybill and account details before
                  sending money.
                </p>

                <div className="payment-status-note">
                  <strong>Online payment status</strong>
                  <p>
                    Automated STK Push payments are not yet enabled.
                    These are manual Paybill instructions only. Never
                    share your M-Pesa PIN with anyone.
                  </p>
                </div>
              </div>
            )}

            {method === 'Cash' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <Banknote size={24} />
                  <h3>Cash donations</h3>
                </div>
                <p>
                  Contact or visit our office to arrange a cash contribution
                  and ask how your donation will be acknowledged.
                </p>
                <p className="office-detail">
                  <strong>Office:</strong> Iftin, opposite Sada Mosque
                </p>
                <a className="button button-primary" href="tel:0721133156">
                  Contact our office
                </a>
              </div>
            )}

            {method === 'Cheque' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <FileText size={24} />
                  <h3>Cheque donations</h3>
                </div>
                <p>
                  Contact our office for cheque payee details and
                  instructions before preparing your cheque.
                </p>
                <a className="button button-primary" href="tel:0721133156">
                  Request cheque details
                </a>
              </div>
            )}

            {method === 'Food' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <Utensils size={24} />
                  <h3>Food contributions</h3>
                </div>
                <p>
                  Contact us first to coordinate suitable food items,
                  quantities, and delivery arrangements for community
                  support or Ramadan Iftar.
                </p>
                <a className="button button-primary" href="tel:0721133156">
                  Arrange a contribution
                </a>
              </div>
            )}

            {method === 'Others' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <HandHeart size={24} />
                  <h3>Other contributions</h3>
                </div>
                <p>
                  For other forms of support or partnership, contact
                  our team to discuss suitable arrangements.
                </p>
                <a
                  className="button button-primary"
                  href="mailto:ansarwelfareorganization7@gmail.com"
                >
                  Contact us by email
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section donation-contact-section">
        <div className="container donation-contact">
          <div>
            <span className="section-label">Need assistance?</span>
            <h2>We are happy to help.</h2>
            <p>
              Contact Ansar Welfare Organization if you have questions
              about contributing or supporting our work.
            </p>
          </div>

          <div className="donation-contact-details">
            <a href="tel:0721133156">0721 133 156</a>
            <a href="tel:0723003071">0723 003 071</a>
            <a href="mailto:ansarwelfareorganization7@gmail.com">
              ansarwelfareorganization7@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
