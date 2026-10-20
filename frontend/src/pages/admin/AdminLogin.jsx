import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft, HeartHandshake, LockKeyhole, ShieldCheck } from 'lucide-react'
import './Admin.css'

const API_URL = 'http://127.0.0.1:5000/api'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (sessionStorage.getItem('admin_token')) {
    return <Navigate to="/admin/dashboard" replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to sign in.')
      }

      sessionStorage.setItem('admin_token', data.access_token)
      sessionStorage.setItem('admin_email', data.admin.email)

      navigate('/admin/dashboard', { replace: true })
    } catch (err) {
      setError(
        err instanceof TypeError
          ? 'Cannot connect to the server. Make sure the backend is running.'
          : err.message,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-login-card">
        <Link to="/" className="admin-back-link">
          <ArrowLeft size={17} />
          Back to public website
        </Link>

        <div className="admin-brand-icon">
          <HeartHandshake size={34} />
        </div>

        <span className="admin-eyebrow">RESTRICTED ACCESS</span>
        <h1>Administrator login</h1>
        <p className="admin-description">
          Sign in to manage Ansar Welfare Organization website content.
        </p>

        <div className="admin-security-note">
          <ShieldCheck size={20} />
          <span>Authorized administrator access only</span>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <label htmlFor="admin-email">Email address</label>
          <input
            id="admin-email"
            type="email"
            autoComplete="username"
            placeholder="Enter administrator email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="admin-password">Password</label>
          <div className="admin-password-field">
            <LockKeyhole size={18} />
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {error && (
            <p className="admin-error" role="alert">
              {error}
            </p>
          )}

          <button className="admin-submit-button" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in securely'}
          </button>
        </form>

        <p className="admin-login-footer">
          This area is reserved for the organization administrator.
        </p>
      </div>
    </div>
  )
}
