import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">We would love to hear from you</span>
          <h1>Contact Us</h1>
          <p>Reach out with a question, an idea, or a request for information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-information">
            <span className="section-label">Get in touch</span>
            <h2>Let's start a conversation</h2>
            <p>Use the contact details below to reach Ansar Welfare Organization.</p>

            <div className="contact-card">
              <span className="contact-icon"><Phone size={22} /></span>
              <div><h3>Phone</h3><a href="tel:0721133156">0721 133 156</a><br /><a href="tel:0723003071">0723 003 071</a></div>
            </div>
            <div className="contact-card">
              <span className="contact-icon"><Mail size={22} /></span>
              <div><h3>Email</h3><a href="mailto:ansarwelfareorganization7@gmail.com">ansarwelfareorganization7@gmail.com</a></div>
            </div>
            <div className="contact-card">
              <span className="contact-icon"><MapPin size={22} /></span>
              <div><h3>Location</h3><p>Iftin, opposite Sada Mosque</p></div>
            </div>
            <div className="contact-card">
              <span className="contact-icon"><Clock size={22} /></span>
              <div><h3>Office hours</h3><p>Please contact us to confirm availability.</p></div>
            </div>
          </div>

          <div className="contact-form-panel">
            <h2>Send us an email</h2>
            <p>Your email application will open with your message ready to send.</p>
            <form action="mailto:ansarwelfareorganization7@gmail.com" method="post" encType="text/plain">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="Name" type="text" placeholder="Enter your name" required />

              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="Email" type="email" placeholder="you@example.com" required />

              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="Subject" type="text" placeholder="How can we help?" required />

              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="Message" rows="5" placeholder="Write your message..." required />

              <button className="button button-primary" type="submit">Prepare Email <Mail size={17} /></button>
            </form>
            <p className="form-note">This form uses your device's email application; it does not send messages directly from this website.</p>
          </div>
        </div>
      </section>
    </>
  )
}
