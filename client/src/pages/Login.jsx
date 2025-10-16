import { useState } from 'react'
import axios from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await axios.post('/login', { email, password })
      localStorage.setItem('token', res.data.token)
      onLogin()
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    }
    navigate('/')
  }

  return (
    <>
      <main className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Welcome Back</h2>
          <p className="subtitle">Please login to your account</p>

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />

          <div className="button-group">
            <button type="submit" className="btn btn-primary">Login</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.href = '/register'}
            >
              Sign Up
            </button>
          </div>

          <p className="admin-link">
            Admin access?{' '}
            <span onClick={() => window.location.pathname = '/admin-login'}>
              Login as Admin
            </span>
          </p>

          {error && <p className="error-message">{error}</p>}
        </form>
      </main>

      <style jsx>{`
        .login-container {
          max-width: 400px;
          margin: 4rem auto;
          padding: 2.5rem;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .login-form h2 {
          font-size: 1.75rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          color: #1a202c;
        }

        .subtitle {
          text-align: center;
          font-size: 0.95rem;
          color: #718096;
          margin-bottom: 1rem;
        }

        .login-form label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #4a5568;
        }

        .login-form input {
          padding: 0.75rem 1rem;
          border: 1px solid #cbd5e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }

        .login-form input:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.3);
        }

        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        @media (min-width: 640px) {
          .button-group {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .btn {
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          width: 100%;
        }

        .btn-primary {
          background-color: #3182ce;
          color: white;
        }

        .btn-primary:hover {
          background-color: #2b6cb0;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background-color: #edf2f7;
          color: #2d3748;
        }

        .btn-secondary:hover {
          background-color: #e2e8f0;
          transform: translateY(-1px);
        }

        .admin-link {
          font-size: 0.9rem;
          text-align: center;
          margin-top: 1rem;
          color: #4a5568;
        }

        .admin-link span {
          color: #3182ce;
          cursor: pointer;
          font-weight: 500;
        }

        .admin-link span:hover {
          text-decoration: underline;
        }

        .error-message {
          color: #e53e3e;
          font-size: 0.9rem;
          text-align: center;
          margin-top: 1rem;
        }
      `}</style>
    </>
  )
}