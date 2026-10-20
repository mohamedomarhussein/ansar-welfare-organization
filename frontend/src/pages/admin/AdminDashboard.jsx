import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  AlertCircle,
  CheckCircle2,
  HeartHandshake,
  LogOut,
  Save,
  ShieldCheck,
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

export default function AdminDashboard() {
  const navigate = useNavigate()
  const token = sessionStorage.getItem('admin_token')
  const adminEmail = sessionStorage.getItem('admin_email') || 'Administrator'

  const [content, setContent] = useState(emptyContent)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (!token) return

    async function loadContent() {
      try {
        const authResponse = await fetch(`${API_URL}/admin/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (authResponse.status === 401) {
          handleLogout()
          return
        }

        if (!authResponse.ok) {
          throw new Error('Could not verify administrator access.')
        }

        const response = await fetch(`${API_URL}/content`)
        if (!response.ok) throw new Error('Could not load website content.')

        const data = await response.json()
        setContent({ ...emptyContent, ...data.content })
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

    loadContent()
  }, [token])

  function handleLogout() {
    sessionStorage.removeItem('admin_token')
    sessionStorage.removeItem('admin_email')
    navigate('/admin/login', { replace: true })
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

      const data = await response.json()

      if (response.status === 401) {
        handleLogout()
        return
      }

      if (!response.ok) {
        throw new Error(data.message || 'Unable to save changes.')
      }

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
          <p>Manage the public information displayed on your organization website.</p>
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
              <label htmlFor="homepage_announcement">
                Homepage announcement
              </label>
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
                {content.homepage_announcement.length}/5000 characters
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

        <p className="admin-dashboard-note">
          <ShieldCheck size={17} />
          Administrative changes require an authenticated session.
        </p>
      </main>
    </div>
  )
}
