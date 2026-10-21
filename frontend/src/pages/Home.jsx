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
  ShieldCheck,
} from 'lucide-react'

import heroImage from '../assets/hero.png'

const activities = [
  {
    icon: HeartHandshake,
    title: 'Supporting People in Need',
    description:
      'We bring our community together through charitable contributions to support needy people and families facing hardship.',
    link: '/donations',
    linkText: 'Support our work',
  },
  {
    icon: BookOpen,
    title: 'Friday-Night Muhadhara',
    description:
      'We organize Islamic lectures at different mosques, welcoming different sheikhs to share beneficial knowledge and religious reminders.',
    link: '/lectures',
    linkText: 'Explore Muhadhara',
  },
  {
    icon: Utensils,
    title: 'Free Ramadan Iftar',
    description:
      'During Ramadan, we work to provide free Iftar meals with the help and generosity of fellow Muslims and charitable supporters.',
    link: '/donations',
    linkText: 'Help provide Iftar',
  },
]

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero section */}
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
              Welcome to Ansar Welfare Organization. We bring people
              together to support those in need, share Islamic knowledge
              through Muhadhara, and provide free Iftar meals during Ramadan.
              Every act of generosity can bring hope to someone in need.
            </p>

            <div className="home-hero-actions">
              <Link to="/donations" className="button button-primary">
                Make a Contribution
                <ArrowRight size={18} />
              </Link>

              <Link to="/about" className="button button-secondary">
                About Our Organization
              </Link>
            </div>

            <p className="home-hero-trust">
              <HeartHandshake size={18} />
              Compassion, faith, and service to our community.
            </p>
          </div>

          <div className="home-hero-image-wrap">
            <img
              src={heroImage}
              alt="Community members coming together to support charitable work"
              className="home-hero-image"
            />

            <div className="home-image-caption">
              <span className="home-caption-icon">
                <HandHeart size={23} />
              </span>

              <div>
                <strong>Every contribution matters</strong>
                <p>Your generosity helps us support people in need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="home-introduction section">
        <div className="container home-introduction-inner">
          <span className="section-label">Welcome to Ansar</span>

          <h2>
            A community united by compassion, faith, and service.
          </h2>

          <p>
            Established in 2019, Ansar Welfare Organization is dedicated
            to supporting needy people and encouraging charitable giving
            within our community. We believe that by working together,
            sharing what we have, and caring for one another, we can make
            a meaningful difference in people's lives.
          </p>

          <p>
            Our activities are supported by voluntary contributions from
            fellow Muslims and community supporters. Their generosity
            enables us to continue our charitable work, organize Islamic
            lectures, and provide free Iftar meals during Ramadan.
          </p>

          <Link to="/about" className="text-link">
            Learn more about our mission
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Main activities */}
      <section className="home-activities section">
        <div className="container">
          <div className="section-heading home-section-heading">
            <span className="section-label">Our activities</span>

            <h2>Working together to make a difference</h2>

            <p>
              Our work focuses on charitable assistance, Islamic learning,
              and sharing the blessings of Ramadan with our community.
            </p>
          </div>

          <div className="home-activity-grid">
            {activities.map(
              ({ icon: Icon, title, description, link, linkText }) => (
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
              ),
            )}
          </div>
        </div>
      </section>

      {/* Muhadhara */}
      <section className="home-muhadhara-section section">
        <div className="container home-feature-grid">
          <div className="home-feature-icon">
            <MoonStar size={54} />
          </div>

          <div className="home-feature-content">
            <span className="section-label">Faith and learning</span>

            <h2>Growing together through Muhadhara</h2>

            <p>
              Every Friday night, we organize Islamic lectures at different
              mosques, with different sheikhs sharing beneficial religious
              knowledge and reminders. These gatherings encourage learning,
              reflection, and stronger connections within our community.
            </p>

            <Link to="/lectures" className="button button-secondary">
              Explore Islamic Lectures
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Iftar */}
      <section className="home-iftar-section section">
        <div className="container home-feature-grid home-iftar-grid">
          <div className="home-feature-icon">
            <Utensils size={50} />
          </div>

          <div className="home-feature-content">
            <span className="section-label">Ramadan charity</span>

            <h2>Sharing the blessings of Iftar</h2>

            <p>
              During the blessed month of Ramadan, Ansar Welfare
              Organization works to provide free Iftar meals. This
              programme is made possible through contributions from
              fellow Muslims and generous supporters who want to help
              others share in the blessings of Ramadan.
            </p>

            <p>
              Your contribution can help sustain these community efforts.
              Get in touch with us to learn more about supporting our
              charitable activities.
            </p>

            <Link to="/donations" className="button button-primary">
              Support Our Iftar Programme
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Donation call to action */}
      <section className="home-donation-section section">
        <div className="container home-donation-inner">
          <div className="home-donation-icon">
            <Users size={34} />
          </div>

          <span className="section-label">Be part of the good</span>

          <h2>Together, we can help those in need.</h2>

          <p>
            Our charitable activities depend on the generosity of fellow
            Muslims and community supporters. Contributions of money,
            food, and other suitable items can help us continue serving
            people in need. Every contribution, big or small, is an
            opportunity to make a positive difference.
          </p>

          <div className="home-donation-actions">
            <Link to="/donations" className="button button-primary">
              Discover Ways to Donate
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="button button-secondary">
              Contact Us
            </Link>
          </div>

          <p className="home-hero-trust">
            <ShieldCheck size={18} />
            Every contribution helps sustain our community activities.
          </p>
        </div>
      </section>
    </main>
  )
}
