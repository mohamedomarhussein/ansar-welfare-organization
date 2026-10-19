import { BookOpen, CalendarDays, Clock, MapPin, PlayCircle } from 'lucide-react'

export default function IslamicLectures() {
  return (
    <div className="lectures-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Knowledge • Faith • Community</span>
          <h1>Islamic Lectures & Muhadhara</h1>
          <p>
            A place to discover Islamic learning opportunities,
            community lectures and recorded reminders.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="lectures-intro">
          <div className="lectures-intro-icon">
            <BookOpen size={34} />
          </div>
          <div>
            <span className="section-label">Learn and reflect</span>
            <h2>Growing together through knowledge</h2>
            <p>
              Islamic lectures and Muhadhara can help bring community
              members together for learning, reflection and beneficial
              discussion. This page will share confirmed announcements
              and recordings as they become available.
            </p>
          </div>
        </div>

        <div className="lecture-topics">
          <article className="lecture-topic">
            <BookOpen size={25} />
            <h3>Qur'an and Sunnah</h3>
            <p>
              Learning opportunities focused on understanding Islamic
              teachings and putting beneficial knowledge into practice.
            </p>
          </article>

          <article className="lecture-topic">
            <CalendarDays size={25} />
            <h3>Community Muhadhara</h3>
            <p>
              Announcements for community lectures and religious
              gatherings when dates and venues are confirmed.
            </p>
          </article>

          <article className="lecture-topic">
            <PlayCircle size={25} />
            <h3>Recorded Lectures</h3>
            <p>
              A future collection of lecture recordings and educational
              resources shared by the organization.
            </p>
          </article>
        </div>

        <div className="lecture-announcements">
          <div className="lecture-announcements-icon">
            <CalendarDays size={30} />
          </div>
          <div>
            <span className="section-label">Announcements</span>
            <h2>Upcoming lectures</h2>
            <p>
              No upcoming lecture dates have been published here yet.
              Please contact the organization for the latest Muhadhara
              announcements.
            </p>
            <div className="lecture-contact-info">
              <span>
                <Clock size={17} />
                Check with the organization for confirmed times
              </span>
              <span>
                <MapPin size={17} />
                Iftin, opposite Sada Mosque
              </span>
            </div>
            <a className="button button-primary" href="tel:0721133156">
              Ask about upcoming lectures
            </a>
          </div>
        </div>
      </section>

      <section className="section lectures-bottom">
        <div className="container">
          <span className="section-label">Stay connected</span>
          <h2>Don't miss future announcements.</h2>
          <p>
            Contact Ansar Welfare Organization to ask about upcoming
            Islamic lectures, community gatherings and recordings.
          </p>
          <a
            className="button button-secondary"
            href="mailto:ansarwelfareorganization7@gmail.com"
          >
            Contact the organization
          </a>
        </div>
      </section>
    </div>
  )
}
