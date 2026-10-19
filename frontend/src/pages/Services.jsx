import { BookOpen, Utensils, HandHeart, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: <HandHeart size={30} />,
    title: 'Community Welfare',
    text: 'Encouraging community-led support for individuals and families experiencing hardship.',
  },
  {
    icon: <Utensils size={30} />,
    title: 'Food and Essential Support',
    text: 'Supporting initiatives that help address basic needs, including food and essential items.',
  },
  {
    icon: <BookOpen size={30} />,
    title: 'Education and Youth',
    text: 'Encouraging educational opportunities, youth participation, and positive community development.',
  },
  {
    icon: <Users size={30} />,
    title: 'Community Engagement',
    text: 'Bringing people together to identify needs, share ideas, and participate in welfare activities.',
  },
]

export default function Services() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">How we help</span>
          <h1>Our Services</h1>
          <p>Community-focused initiatives built around compassion, dignity, and cooperation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Our areas of focus</span>
            <h2>Support that starts with community</h2>
            <p>Our welfare activities can evolve in response to local needs and available resources.</p>
          </div>
          <div className="cards-grid services-grid">
            {services.map((service) => (
              <article className="feature-card service-card" key={service.title}>
                <div className="feature-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <p className="draft-note">
            These are suggested website descriptions. Please confirm which services are currently offered by the organization before publishing.
          </p>
        </div>
      </section>

      <section className="callout-section">
        <div className="container callout-content">
          <div>
            <span className="section-label section-label-light">Questions or partnership ideas?</span>
            <h2>Let's work together to support our community.</h2>
            <p>Get in touch to ask about our activities and current initiatives.</p>
          </div>
          <Link to="/contact" className="button button-light">Contact Us <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
