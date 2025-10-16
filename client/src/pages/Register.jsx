import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    console.log('Registering:', { name, email, phone, password })
    // Add registration logic here
    navigate('/')

  }

  return (
    <>
      <main className="register-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleRegister} className="register-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Full Name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            placeholder="+91 98765 43210"
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
            <button type="submit" className="btn btn-primary">Register</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.href = '/login'}
            >
              Login
            </button>
          </div>
        </form>
      </main>

      <style jsx>{`
        .register-container {
          max-width: 400px;
          margin: 4rem auto;
          padding: 2.5rem;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .register-container h2 {
          font-size: 1.75rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          color: #1a202c;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .register-form label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #4a5568;
        }

        .register-form input {
          padding: 0.75rem 1rem;
          border: 1px solid #cbd5e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }

        .register-form input:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.3);
        }

        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
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
      `}</style>
    </>
  )
}