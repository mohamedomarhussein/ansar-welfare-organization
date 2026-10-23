import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  Edit3,
  HeartHandshake,
  LogOut,
  MapPin,
  PlusCircle,
  Save,
  ShieldCheck,
  Trash2,
  X,
} from 'lucide-react'
import './Admin.css'

const API_URL = 'http://127.0.0.1:5000/api'

const fields = [
  { key: 'organization_name', label: 'Organization name' },
  { key: 'office_address', label: 'Office address' },
  { key: 'phone_primary', label: 'Primary phone number' },
  { key: 'phone_secondary', label: 'Secondary phone number' },
  { key: 'email', label: 'Public contact email', type: 'email' },
  { key: 'paybill', label: 'M-Pesa Paybill number' },
  { key: 'account_number', label: 'M-Pesa account number' },
]

const emptyContent = {
  organization_name: '',
  office_address: '',
  phone_primary: '',
  phone_secondary: '',
  email: '',
  paybill: '',
  account_number: '',
  homepage_announcement: '',
}

const emptyLecture = {
  mosque_name: '',
  location: '',
  date: '',
  time: '',
  sheikh_name: '',
  topic: '',
  details: '',
  is_published: false,
}

async function readResponse(response) {
  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || data.error || 'The request could not be completed.')
  }

  return data
}

function getToday() {
  const now = new Date()
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return localDate.toISOString().slice(0, 10)
}

function formatDate(dateString) {
  if (!dateString) return 'Date not set'

  const date = new Date(`${dateString}T00:00:00`)

  if (Number.isNaN(date.getTime())) return dateString

  return new Intl.DateTimeFormat('en-KE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export default function AdminDashboard() {
  const navigate = useNavigate()
  const token = sessionStorage.getItem('admin_token')
  const adminEmail = sessionStorage.getItem('admin_email') || 'Administrator'

  const [content, setContent] = useState(emptyContent)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [lectures, setLectures] = useState([])
  const [lecturesLoading, setLecturesLoading] = useState(true)
  const [lectureError, setLectureError] = useState('')
  const [lectureSuccess, setLectureSuccess] = useState('')
  const [lectureSaving, setLectureSaving] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [lectureForm, setLectureForm] = useState(emptyLecture)

  useEffect(() => {
    if (!token) return

    async function loadDashboard() {
      try {
        const authResponse = await fetch(`${API_URL}/admin/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (authResponse.status === 401) {
          handleLogout()
          return
        }

        await readResponse(authResponse)

        const contentResponse = await fetch(`${API_URL}/content`)
        const contentData = await readResponse(contentResponse)
        setContent({ ...emptyContent, ...(contentData.content || {}) })

        await loadLectures()
      } catch (err) {
        setError(
          err instanceof TypeError
            ? 'Cannot connect to the backend. Make sure Flask is running.'
            : err.message,
        )
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
    // Load when the authenticated session changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  function handleLogout() {
    sessionStorage.removeItem('admin_token')
    sessionStorage.removeItem('admin_email')
    navigate('/admin/login', { replace: true })
  }

  async function loadLectures() {
    setLecturesLoading(true)
    setLectureError('')

    try {
      const response = await fetch(`${API_URL}/admin/muhadhara`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.status === 401) {
        handleLogout()
        return
      }

      const data = await readResponse(response)
      setLectures(Array.isArray(data.lectures) ? data.lectures : [])
    } catch (err) {
      setLectureError(
        err instanceof TypeError
          ? 'Could not connect to the backend to load Muhadhara announcements.'
          : err.message,
      )
    } finally {
      setLecturesLoading(false)
    }
  }

  function updateField(key, value) {
    setContent((current) => ({ ...current, [key]: value }))
    setSuccess('')
  }

  async function handleSave(event) {
    event.preventDefault()
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch(`${API_URL}/admin/content`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      })

      if (response.status === 401) {
        handleLogout()
        return
      }

      await readResponse(response)
      setSuccess('Your website information has been saved successfully.')
    } catch (err) {
      setError(
        err instanceof TypeError
          ? 'Cannot connect to the backend. Check that Flask is running.'
          : err.message,
      )
    } finally {
      setSaving(false)
    }
  }

  function updateLectureField(key, value) {
    setLectureForm((current) => ({ ...current, [key]: value }))
    setLectureError('')
    setLectureSuccess('')
  }

  function resetLectureForm() {
    setLectureForm(emptyLecture)
    setEditingId(null)
    setLectureError('')
    setLectureSuccess('')
  }

  function editLecture(lecture) {
    setEditingId(lecture.id)
    setLectureForm({
      mosque_name: lecture.mosque_name || '',
      location: lecture.location || '',
      date: lecture.date || '',
      time: lecture.time || '',
      sheikh_name: lecture.sheikh_name || '',
      topic: lecture.topic || '',
      details: lecture.details || '',
      is_published: Boolean(lecture.is_published),
    })
    setLectureError('')
    setLectureSuccess('')
    document.getElementById('muhadhara-editor')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  async function handleLectureSave(event) {
    event.preventDefault()
    setLectureSaving(true)
    setLectureError('')
    setLectureSuccess('')

    const url = editingId
      ? `${API_URL}/admin/muhadhara/${editingId}`
      : `${API_URL}/admin/muhadhara`

    try {
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(lectureForm),
      })

      if (response.status === 401) {
        handleLogout()
        return
      }

      await readResponse(response)

      setLectureSuccess(
        editingId
          ? 'Muhadhara announcement updated successfully.'
          : lectureForm.is_published
            ? 'Muhadhara announcement created and published.'
            : 'Muhadhara announcement saved as a draft.',
      )

      setLectureForm(emptyLecture)
      setEditingId(null)
      await loadLectures()
    } catch (err) {
      setLectureError(
        err instanceof TypeError
          ? 'Cannot connect to the backend. Check that Flask is running.'
          : err.message,
      )
    } finally {
      setLectureSaving(false)
    }
  }

  async function togglePublished(lecture) {
    setLectureError('')
    setLectureSuccess('')

    try {
      const response = await fetch(`${API_URL}/admin/muhadhara/${lecture.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_published: !lecture.is_published }),
      })

      if (response.status === 401) {
        handleLogout()
        return
      }

      await readResponse(response)
      setLectureSuccess(
        lecture.is_published
          ? 'Announcement unpublished. It is no longer visible to visitors.'
          : 'Announcement published and available to website visitors.',
      )
      await loadLectures()
    } catch (err) {
      setLectureError(
        err instanceof TypeError
          ? 'Cannot connect to the backend.'
          : err.message,
      )
    }
  }

  async function deleteLecture(lecture) {
    const confirmed = window.confirm(
      `Delete the Muhadhara announcement for "${lecture.topic}"? This cannot be undone.`,
    )

    if (!confirmed) return

    setLectureError('')
    setLectureSuccess('')

    try {
      const response = await fetch(`${API_URL}/admin/muhadhara/${lecture.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.status === 401) {
        handleLogout()
        return
      }

      await readResponse(response)

      if (editingId === lecture.id) resetLectureForm()

      setLectureSuccess('Muhadhara announcement deleted.')
      await loadLectures()
    } catch (err) {
      setLectureError(
        err instanceof TypeError
          ? 'Cannot connect to the backend.'
          : err.message,
      )
    }
  }

  if (!token) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <div className="admin-dashboard-page">
      <header className="admin-dashboard-header">
        <div className="admin-dashboard-brand">
          <span className="admin-dashboard-logo">
            <HeartHandshake size={27} />
          </span>
          <div>
            <strong>Ansar Welfare</strong>
            <span>Administration</span>
          </div>
        </div>

        <div className="admin-account">
          <div className="admin-account-details">
            <ShieldCheck size={19} />
            <span>{adminEmail}</span>
          </div>
          <button type="button" className="admin-logout-button" onClick={handleLogout}>
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      <main className="admin-dashboard-content">
        <div className="admin-dashboard-heading">
          <span className="admin-eyebrow">WEBSITE MANAGEMENT</span>
          <h1>Admin dashboard</h1>
          <p>
            Manage your organization information and publish Muhadhara
            announcements for the community.
          </p>
        </div>

        {loading ? (
          <div className="admin-loading">Loading website information...</div>
        ) : (
          <form className="admin-editor-card" onSubmit={handleSave}>
            <div className="admin-card-heading">
              <div>
                <h2>Organization information</h2>
                <p>Changes are saved to the website database.</p>
              </div>
              <ShieldCheck size={25} />
            </div>

            {error && (
              <div className="admin-message admin-message-error" role="alert">
                <AlertCircle size={19} />
                {error}
              </div>
            )}

            {success && (
              <div className="admin-message admin-message-success" role="status">
                <CheckCircle2 size={19} />
                {success}
              </div>
            )}

            <div className="admin-fields-grid">
              {fields.map((field) => (
                <div className="admin-field" key={field.key}>
                  <label htmlFor={field.key}>{field.label}</label>
                  <input
                    id={field.key}
                    type={field.type || 'text'}
                    value={content[field.key] || ''}
                    onChange={(event) => updateField(field.key, event.target.value)}
                    required
                    maxLength={250}
                  />
                </div>
              ))}
            </div>

            <div className="admin-field admin-announcement-field">
              <label htmlFor="homepage_announcement">Homepage announcement</label>
              <textarea
                id="homepage_announcement"
                rows={4}
                maxLength={5000}
                placeholder="Write an announcement for website visitors, or leave it empty."
                value={content.homepage_announcement || ''}
                onChange={(event) =>
                  updateField('homepage_announcement', event.target.value)
                }
              />
              <small>
                {(content.homepage_announcement || '').length}/5000 characters
              </small>
            </div>

            <div className="admin-save-row">
              <p>Review your changes before saving.</p>
              <button
                type="submit"
                className="admin-submit-button admin-save-button"
                disabled={saving || loading}
              >
                <Save size={18} />
                {saving ? 'Saving changes...' : 'Save website information'}
              </button>
            </div>
          </form>
        )}

        <section className="admin-editor-card admin-muhadhara-section">
          <div className="admin-card-heading">
            <div>
              <span className="admin-eyebrow">COMMUNITY PROGRAMS</span>
              <h2>Muhadhara announcements</h2>
              <p>
                Add lecture details and choose whether to publish them on the
                public Islamic Lectures page.
              </p>
            </div>
            <BookOpen size={27} />
          </div>

          {lectureError && (
            <div className="admin-message admin-message-error" role="alert">
              <AlertCircle size={19} />
              {lectureError}
            </div>
          )}

          {lectureSuccess && (
            <div className="admin-message admin-message-success" role="status">
              <CheckCircle2 size={19} />
              {lectureSuccess}
            </div>
          )}

          <form
            id="muhadhara-editor"
            className="admin-lecture-form"
            onSubmit={handleLectureSave}
          >
            <h3>{editingId ? 'Edit announcement' : 'Add a Muhadhara announcement'}</h3>

            <div className="admin-fields-grid">
              <div className="admin-field">
                <label htmlFor="mosque_name">Mosque name</label>
                <input
                  id="mosque_name"
                  value={lectureForm.mosque_name}
                  onChange={(event) => updateLectureField('mosque_name', event.target.value)}
                  placeholder="e.g. Sada Mosque"
                  maxLength={200}
                  required
                />
              </div>

              <div className="admin-field">
                <label htmlFor="location">Location / address</label>
                <input
                  id="location"
                  value={lectureForm.location}
                  onChange={(event) => updateLectureField('location', event.target.value)}
                  placeholder="e.g. Iftin, Garissa"
                  maxLength={300}
                  required
                />
              </div>

              <div className="admin-field">
                <label htmlFor="date">Lecture date</label>
                <input
                  id="date"
                  type="date"
                  min={getToday()}
                  value={lectureForm.date}
                  onChange={(event) => updateLectureField('date', event.target.value)}
                  required
                />
              </div>

              <div className="admin-field">
                <label htmlFor="time">Lecture time</label>
                <input
                  id="time"
                  value={lectureForm.time}
                  onChange={(event) => updateLectureField('time', event.target.value)}
                  placeholder="e.g. Friday, 8:00 PM"
                  maxLength={50}
                  required
                />
              </div>

              <div className="admin-field">
                <label htmlFor="sheikh_name">Sheikh's name</label>
                <input
                  id="sheikh_name"
                  value={lectureForm.sheikh_name}
                  onChange={(event) => updateLectureField('sheikh_name', event.target.value)}
                  placeholder="Enter the speaker's name"
                  maxLength={200}
                  required
                />
              </div>

              <div className="admin-field">
                <label htmlFor="topic">Lecture topic</label>
                <input
                  id="topic"
                  value={lectureForm.topic}
                  onChange={(event) => updateLectureField('topic', event.target.value)}
                  placeholder="Enter the Muhadhara topic"
                  maxLength={250}
                  required
                />
              </div>
            </div>

            <div className="admin-field admin-announcement-field">
              <label htmlFor="details">Additional information (optional)</label>
              <textarea
                id="details"
                rows={3}
                value={lectureForm.details}
                onChange={(event) => updateLectureField('details', event.target.value)}
                placeholder="Add any extra information for attendees."
              />
            </div>

            <label className="admin-publish-option">
              <input
                type="checkbox"
                checked={lectureForm.is_published}
                onChange={(event) => updateLectureField('is_published', event.target.checked)}
              />
              <span>
                <strong>Publish this announcement</strong>
                <small>
                  When enabled, visitors can see this announcement on the Islamic
                  Lectures page.
                </small>
              </span>
            </label>

            <div className="admin-save-row">
              <p>
                {editingId
                  ? 'Save your changes when you are ready.'
                  : 'Unpublished announcements remain visible only in the admin dashboard.'}
              </p>
              <div className="admin-lecture-form-actions">
                {editingId && (
                  <button
                    type="button"
                    className="admin-logout-button"
                    onClick={resetLectureForm}
                  >
                    <X size={17} />
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className="admin-submit-button admin-save-button"
                  disabled={lectureSaving}
                >
                  <Save size={18} />
                  {lectureSaving
                    ? 'Saving...'
                    : editingId
                      ? 'Update announcement'
                      : 'Save announcement'}
                </button>
              </div>
            </div>
          </form>

          <div className="admin-lecture-list-heading">
            <div>
              <h3>Manage existing announcements</h3>
              <p>{lectures.length} announcement{lectures.length === 1 ? '' : 's'} in the system</p>
            </div>
            <button
              type="button"
              className="admin-logout-button"
              onClick={loadLectures}
              disabled={lecturesLoading}
            >
              {lecturesLoading ? 'Refreshing...' : 'Refresh list'}
            </button>
          </div>

          {lecturesLoading ? (
            <div className="admin-loading">Loading Muhadhara announcements...</div>
          ) : lectures.length === 0 ? (
            <div className="admin-empty-lectures">
              <CalendarDays size={30} />
              <strong>No Muhadhara announcements yet</strong>
              <p>Use the form above to add the first announcement.</p>
            </div>
          ) : (
            <div className="admin-lecture-list">
              {lectures.map((lecture) => (
                <article className="admin-lecture-item" key={lecture.id}>
                  <div className="admin-lecture-item-main">
                    <div className="admin-lecture-item-title">
                      <h4>{lecture.topic}</h4>
                      <span
                        className={`admin-status ${
                          lecture.is_published ? 'admin-status-published' : 'admin-status-draft'
                        }`}
                      >
                        {lecture.is_published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                    <p className="admin-lecture-speaker">Sheikh {lecture.sheikh_name}</p>
                    <div className="admin-lecture-meta">
                      <span><MapPin size={15} /> {lecture.mosque_name} — {lecture.location}</span>
                      <span><CalendarDays size={15} /> {formatDate(lecture.date)}</span>
                      <span><Clock size={15} /> {lecture.time}</span>
                    </div>
                    {lecture.details && <p className="admin-lecture-details">{lecture.details}</p>}
                  </div>

                  <div className="admin-lecture-actions">
                    <button
                      type="button"
                      className="admin-action-button"
                      onClick={() => editLecture(lecture)}
                    >
                      <Edit3 size={16} />
                      Edit
                    </button>
                    <button
                      type="button"
                      className="admin-action-button"
                      onClick={() => togglePublished(lecture)}
                    >
                      {lecture.is_published ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      type="button"
                      className="admin-action-button admin-action-danger"
                      onClick={() => deleteLecture(lecture)}
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <p className="admin-dashboard-note">
          <ShieldCheck size={17} />
          Administrative changes require an authenticated session.
        </p>
      </main>
    </div>
  )
}
