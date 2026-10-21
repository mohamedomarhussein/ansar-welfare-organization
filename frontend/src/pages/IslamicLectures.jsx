import { useEffect, useState } from 'react'
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  Clock,
  MapPin,
  UserRound,
  Building2,
  ArrowDown,
} from 'lucide-react'

const API_URL = 'http://127.0.0.1:5000/api'

function formatDate(dateString) {
  if (!dateString) return 'Date to be announced'

  const date = new Date(`${dateString}T00:00:00`)

  if (Number.isNaN(date.getTime())) return dateString

  return new Intl.DateTimeFormat('en-KE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export default function IslamicLectures() {
  const [lectures, setLectures] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadLectures() {
      try {
        const response = await fetch(`${API_URL}/muhadhara`)
        const data = await response.json().catch(() => ({}))

        if (!response.ok) {
          throw new Error(
            data.message || 'Could not load lecture announcements.',
          )
        }

        if (active) {
          setLectures(Array.isArray(data.lectures) ? data.lectures : [])
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof TypeError
              ? 'Lecture announcements are temporarily unavailable. Please contact the organization for current details.'
              : err.message,
          )
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadLectures()

    return () => {
      active = false
    }
  }, [])

  // Put the most recent lecture date first.
  const sortedLectures = [...lectures].sort((a, b) => {
    const dateA = a.date || ''
    const dateB = b.date || ''

    if (dateA !== dateB) {
      return dateB.localeCompare(dateA)
    }

    return (b.id || 0) - (a.id || 0)
  })

  const latestLecture = sortedLectures[0]
  const previousLectures = sortedLectures.slice(1)

  return (
    <div className="lectures-page">
      <section className="page-hero lectures-hero">
        <div className="container">
          <span className="section-label">
            KNOWLEDGE • FAITH • COMMUNITY
          </span>

          <h1>Islamic Lectures &amp; Muhadhara</h1>

          <p>
            Stay connected with Islamic learning and community Muhadhara
            gatherings organized by Ansar Welfare Organization.
          </p>

          <a href="#latest-muhadhara" className="lectures-hero-link">
            Explore latest Muhadhara <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section className="section container lectures-content">
        <div className="lectures-intro">
          <div className="lectures-intro-icon">
            <BookOpen size={34} />
          </div>

          <div>
            <span className="section-label">Learn and reflect</span>
            <h2>Growing together through Islamic knowledge</h2>
            <p>
              Our Muhadhara gatherings bring the community together to learn
              from different sheikhs at different mosques. Find the topic,
              speaker, venue, date and time of each published announcement below.
            </p>
          </div>
        </div>

        <div className="lecture-list-section" id="latest-muhadhara">
          <div className="lecture-list-heading">
            <span className="section-label">Community announcements</span>
            <h2>Muhadhara announcements</h2>
            <p>
              Read the event details carefully before attending.
            </p>
          </div>

          {loading ? (
            <div className="lecture-state-message">
              Loading Muhadhara announcements...
            </div>
          ) : error ? (
            <div
              className="lecture-state-message lecture-state-error"
              role="alert"
            >
              <AlertCircle size={22} />
              <p>{error}</p>
            </div>
          ) : !latestLecture ? (
            <div className="lecture-announcements">
              <div className="lecture-announcements-icon">
                <CalendarDays size={32} />
              </div>

              <div>
                <span className="section-label">Stay connected</span>
                <h2>No Muhadhara announcements yet</h2>
                <p>
                  New Muhadhara announcements will appear here when they are
                  published by Ansar Welfare Organization. Contact us for
                  information about upcoming gatherings.
                </p>

                <div className="lecture-contact-info">
                  <span>
                    <Clock size={17} />
                    Ask us about event times
                  </span>

                  <span>
                    <MapPin size={17} />
                    Iftin, opposite Sada Mosque
                  </span>
                </div>

                <a className="button button-primary" href="tel:0721133156">
                  Contact the organization
                </a>
              </div>
            </div>
          ) : (
            <>
              <article className="latest-muhadhara-card">
                <div className="latest-muhadhara-banner">
                  <div className="latest-muhadhara-book">
                    <BookOpen size={30} />
                  </div>

                  <span className="latest-muhadhara-badge">
                    Latest Muhadhara
                  </span>
                </div>

                <div className="latest-muhadhara-body">
                  <span className="latest-muhadhara-eyebrow">
                    LECTURE TOPIC
                  </span>

                  <h2>
                    {latestLecture.topic || 'Islamic Muhadhara'}
                  </h2>

                  {latestLecture.details && (
                    <p className="latest-muhadhara-description">
                      {latestLecture.details}
                    </p>
                  )}

                  <div className="latest-muhadhara-information">
                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <UserRound size={21} />
                      </span>

                      <div>
                        <span className="latest-muhadhara-info-label">
                          SPEAKER / SHEIKH
                        </span>
                        <strong>
                          {latestLecture.sheikh_name
                            ? `Sheikh ${latestLecture.sheikh_name.replace(/^Sheikh\s+/i, '')}`
                            : 'To be announced'}
                        </strong>
                      </div>
                    </div>

                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <Building2 size={21} />
                      </span>

                      <div>
                        <span className="latest-muhadhara-info-label">
                          MOSQUE
                        </span>
                        <strong>
                          {latestLecture.mosque_name || 'To be announced'}
                        </strong>
                        <span className="latest-muhadhara-location">
                          {latestLecture.location || 'Location to be announced'}
                        </span>
                      </div>
                    </div>

                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <CalendarDays size={21} />
                      </span>

                      <div>
                        <span className="latest-muhadhara-info-label">
                          DATE
                        </span>
                        <strong>{formatDate(latestLecture.date)}</strong>
                      </div>
                    </div>

                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <Clock size={21} />
                      </span>

                      <div>
                        <span className="latest-muhadhara-info-label">
                          TIME
                        </span>
                        <strong>
                          {latestLecture.time || 'Time to be announced'}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="latest-muhadhara-footer">
                    <BookOpen size={18} />
                    <span>
                      Organized by Ansar Welfare Organization
                    </span>
                  </div>
                </div>
              </article>

              {previousLectures.length > 0 && (
                <section className="previous-muhadhara-section">
                  <div className="previous-muhadhara-heading">
                    <div>
                      <span className="section-label">
                        From our announcements
                      </span>
                      <h2>Previous Muhadhara</h2>
                      <p>
                        Explore other published Muhadhara announcements.
                      </p>
                    </div>

                    <span className="previous-muhadhara-count">
                      {previousLectures.length}{' '}
                      {previousLectures.length === 1 ? 'event' : 'events'}
                    </span>
                  </div>

                  <div className="previous-muhadhara-grid">
                    {previousLectures.map((lecture) => (
                      <article
                        className="previous-muhadhara-card"
                        key={lecture.id}
                      >
                        <div className="previous-muhadhara-card-icon">
                          <BookOpen size={22} />
                        </div>

                        <span className="previous-muhadhara-label">
                          MUHADHARA
                        </span>

                        <h3>{lecture.topic || 'Islamic Muhadhara'}</h3>

                        <div className="previous-muhadhara-detail">
                          <UserRound size={17} />
                          <span>
                            <strong>Sheikh:</strong>{' '}
                            {lecture.sheikh_name
                              ? `Sheikh ${lecture.sheikh_name.replace(/^Sheikh\s+/i, '')}`
                              : 'To be announced'}
                          </span>
                        </div>

                        <div className="previous-muhadhara-detail">
                          <Building2 size={17} />
                          <span>
                            <strong>Mosque:</strong>{' '}
                            {lecture.mosque_name || 'To be announced'}
                          </span>
                        </div>

                        <div className="previous-muhadhara-detail">
                          <MapPin size={17} />
                          <span>
                            {lecture.location || 'Location to be announced'}
                          </span>
                        </div>

                        <div className="previous-muhadhara-date">
                          <CalendarDays size={17} />
                          <span>{formatDate(lecture.date)}</span>
                        </div>

                        <div className="previous-muhadhara-time">
                          <Clock size={17} />
                          <span>{lecture.time || 'Time to be announced'}</span>
                        </div>

                        {lecture.details && (
                          <p className="previous-muhadhara-description">
                            {lecture.details}
                          </p>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section lectures-bottom">
        <div className="container">
          <span className="section-label">Stay connected</span>
          <h2>Join us in learning and growing together.</h2>
          <p>
            Contact Ansar Welfare Organization for information about upcoming
            Islamic lectures, Muhadhara gatherings and other community programs.
          </p>

          <div className="lectures-contact-actions">
            <a
              className="button button-primary"
              href="tel:0721133156"
            >
              Call us: 0721 133 156
            </a>

            <a
              className="button button-secondary"
              href="mailto:ansarwelfareorganization7@gmail.com"
            >
              Email the organization
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
