import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  HandHeart,
  BookOpen,
  Utensils,
  Users,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'

const activities = [
  {
    icon: HandHeart,
    title: 'Charitable Assistance',
    description:
      'Helping needy Muslims and families through voluntary contributions and community support.',
  },
  {
    icon: BookOpen,
    title: 'Islamic Lectures',
    description:
      'Organizing Friday-night Muhadhara at different mosques, featuring different sheikhs.',
  },
  {
    icon: Utensils,
    title: 'Ramadan Iftar',
    description:
      'Providing free Iftar meals during Ramadan with the support of charitable donors.',
  },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="container">
          <span className="section-label">About our organization</span>

          <h1>Faith expressed through compassion and service.</h1>

          <p>
            Since 2019, Ansar Welfare Organization has worked to bring
            Muslims together to support people in need, encourage Islamic
            learning, and share the blessings of Ramadan.
          </p>

          <Link to="/donations" className="button button-primary">
            Support our work
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section container about-story-section">
        <div className="about-story-icon">
          <HeartHandshake size={43} />
        </div>

        <div className="about-story-content">
          <span className="section-label">Our story</span>

          <h2>Established in 2019 to serve the community</h2>

          <p>
            Ansar Welfare Organization was established in 2019 with a
            commitment to helping needy Muslims and encouraging a spirit
            of generosity within the community.
          </p>

          <p>
            We believe that supporting people facing hardship is a shared
            responsibility. By bringing together contributions from
            compassionate Muslims and supporters, we seek to direct
            generosity towards charitable activities that benefit the
            community.
          </p>

          <p>
            Our activities include assisting needy people, organizing
            Friday-night Muhadhara at different mosques with different
            sheikhs, and providing free Iftar programmes during Ramadan.
          </p>

          <p>
            We are sustained by charitable contributions from fellow
            Muslims and supporters. The organization does not have another
            source of income, making the generosity of the community
            essential to continuing this work.
          </p>
        </div>
      </section>

      <section className="about-activities-section section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Our activities</span>
            <h2>How we serve</h2>
            <p>
              Our work brings together charitable support, Islamic
              education and community care.
            </p>
          </div>

          <div className="about-activity-grid">
            {activities.map(({ icon: Icon, title, description }) => (
              <article className="about-activity-card" key={title}>
                <div className="about-activity-icon">
                  <Icon size={29} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container about-principles-section">
        <div className="about-principles-heading">
          <span className="section-label">What guides us</span>
          <h2>Principles behind our work</h2>
        </div>

        <div className="about-principle">
          <HandHeart size={25} />
          <div>
            <h3>Compassion</h3>
            <p>
              Treating people experiencing hardship with kindness,
              dignity and respect.
            </p>
          </div>
        </div>

        <div className="about-principle">
          <Users size={25} />
          <div>
            <h3>Community participation</h3>
            <p>
              Encouraging Muslims and supporters to contribute towards
              charitable work according to their ability.
            </p>
          </div>
        </div>

        <div className="about-principle">
          <ShieldCheck size={25} />
          <div>
            <h3>Responsible stewardship</h3>
            <p>
              Recognizing that charitable contributions are a trust and
              should be handled responsibly for their intended purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="about-support-section section">
        <div className="container about-support-inner">
          <span className="section-label">Help us continue</span>

          <h2>Community generosity makes our work possible.</h2>

          <p>
            Your contribution can support charitable assistance,
            Muhadhara activities and Ramadan Iftar programmes. We welcome
            people who want to learn more, contribute, or work with us
            to support the community.
          </p>

          <div className="about-support-actions">
            <Link to="/donations" className="button button-primary">
              Explore donation options
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="button button-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
