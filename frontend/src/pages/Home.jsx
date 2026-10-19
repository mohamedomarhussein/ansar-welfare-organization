import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  BookOpen,
  Utensils,
  HandHeart,
  ArrowRight,
  MoonStar,
  Users,
  Heart,
} from 'lucide-react'

import heroImage from '../assets/hero.png'

const activities = [
  {
    icon: HeartHandshake,
    title: 'Supporting Needy Muslims',
    description:
      'We bring together charitable contributions from fellow Muslims to help needy people and families in our community.',
    link: '/donations',
    linkText: 'Support our work',
  },
  {
    icon: BookOpen,
    title: 'Friday-Night Muhadhara',
    description:
      'We organize Islamic lectures at different mosques, welcoming different sheikhs to share beneficial knowledge and religious reminders.',
    link: '/lectures',
    linkText: 'Explore Islamic lectures',
  },
  {
    icon: Utensils,
    title: 'Ramadan Iftar Programmes',
    description:
      'During the blessed month of Ramadan, we provide free Iftar meals with the support and generosity of fellow Muslims and donors.',
    link: '/donations',
    linkText: 'Help provide Iftar',
  },
]

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <span className="home-eyebrow">
              <Heart size={16} />
              Serving our community since 2019
            </span>

            <h1>
              Together, we can make a
              <span> meaningful difference.</span>
            </h1>

            <p className="home-hero-description">
              Ansar Welfare Organization brings Muslims together to support
              those in need, share Islamic knowledge through Muhadhara, and
              provide free Iftar meals during Ramadan.
            </p>

            <div className="home-hero-actions">
              <Link to="/donations" className="button button-primary">
                Donate to support our work
                <ArrowRight size={18} />
              </Link>

              <Link to="/about" className="button button-secondary">
                Discover our mission
              </Link>
            </div>

            <p className="home-hero-trust">
              <HeartHandshake size={18} />
              Community compassion. Shared responsibility. Charitable giving.
            </p>
          </div>

          <div className="home-hero-image-wrap">
            <img
              src={heroImage}
              alt="Community charity and support"
              className="home-hero-image"
            />

            <div className="home-image-caption">
              <span className="home-caption-icon">
                <HandHeart size={23} />
              </span>
              <div>
                <strong>Every contribution matters</strong>
                <p>Helping us reach those who need support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-introduction section">
        <div className="container home-introduction-inner">
          <span className="section-label">Who we are</span>

          <h2>
            A community united by compassion, faith and service.
          </h2>

          <p>
            Established in 2019, Ansar Welfare Organization is a community
            welfare initiative dedicated to helping needy Muslims and
            encouraging charitable giving. We believe that when people come
            together with sincere intentions, their generosity can bring
            meaningful support and hope to those facing hardship.
          </p>

          <p>
            Our work is sustained by voluntary charitable contributions
            from fellow Muslims and supporters. We do not have another
            source of income, so community generosity is essential to
            maintaining our activities.
          </p>

          <Link to="/about" className="text-link">
            Learn about Ansar Welfare Organization
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="home-activities section">
        <div className="container">
          <div className="section-heading home-section-heading">
            <span className="section-label">What we do</span>
            <h2>Serving our community in meaningful ways</h2>
            <p>
              Our activities focus on charitable assistance, Islamic
              learning, and supporting the community during Ramadan.
            </p>
          </div>

          <div className="home-activity-grid">
            {activities.map(({ icon: Icon, title, description, link, linkText }) => (
              <article className="home-activity-card" key={title}>
                <div className="home-activity-icon">
                  <Icon size={29} />
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <Link to={link} className="text-link">
                  {linkText}
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-muhadhara-section section">
        <div className="container home-feature-grid">
          <div className="home-feature-icon">
            <MoonStar size={54} />
          </div>

          <div className="home-feature-content">
            <span className="section-label">Faith and learning</span>
            <h2>Bringing people together through Muhadhara</h2>

            <p>
              Our Friday-night Muhadhara programmes bring community
              members together at different mosques to benefit from
              Islamic lectures delivered by different sheikhs. These
              gatherings provide opportunities for religious learning,
              reflection and strengthening community ties.
            </p>

            <Link to="/lectures" className="button button-secondary">
              Visit the Islamic Lectures page
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-iftar-section section">
        <div className="container home-feature-grid home-iftar-grid">
          <div className="home-feature-icon">
            <Utensils size={50} />
          </div>

          <div className="home-feature-content">
            <span className="section-label">Ramadan charity</span>
            <h2>Sharing the blessings of Iftar</h2>

            <p>
              During Ramadan, Ansar Welfare Organization works to provide
              free Iftar meals for Muslims who need them. This programme
              depends on charitable donations from fellow Muslims and
              supporters who want to share the blessings of Ramadan with
              others.
            </p>

            <p>
              Your contribution can help us plan and support these
              community efforts. Contact us to learn about current
              arrangements and donation needs.
            </p>

            <Link to="/donations" className="button button-primary">
              Support Ramadan Iftar
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-donation-section section">
        <div className="container home-donation-inner">
          <div className="home-donation-icon">
            <Users size={34} />
          </div>

          <span className="section-label">Be part of the good</span>

          <h2>Our work depends on your generosity.</h2>

          <p>
            Ansar Welfare Organization has no other source of income.
            Contributions from fellow Muslims and community supporters
            help make our charitable activities possible. Whether you
            contribute money, food, or other suitable assistance, your
            support can help us serve people in need.
          </p>

          <div className="home-donation-actions">
            <Link to="/donations" className="button button-primary">
              Find ways to donate
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="button button-secondary">
              Contact our organization
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
