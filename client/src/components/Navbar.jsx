import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { to: '/gyms', label: 'Gyms' },
  { to: '/classes', label: 'Classes' },
  { to: '#diet', label: 'Diet Plans', external: true },
  { to: '#mental', label: 'Mental Fitness', external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-row">
        <Link to="/" className="brand" aria-label="GenZ.Fit home">
          <span className="logo-dot" />
          <motion.span
            initial={{opacity:0, y:4}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}
          >GenZ.Fit</motion.span>
        </Link>

        <ul className="nav-links" role="menubar">
          {links.map((l) => (
            <li key={l.label} role="none">
              {l.external ? (
                <a className={`link ${pathname===l.to ? 'active':''}`} href={l.to} role="menuitem">{l.label}</a>
              ) : (
                <Link className={`link ${pathname===l.to ? 'active':''}`} to={l.to} role="menuitem">{l.label}</Link>
              )}
            </li>
          ))}
          <li>
            <Link className="btn btn-primary" to="/classes" aria-label="Get started">Get Started</Link>
          </li>
        </ul>
      </nav>
      <motion.div className="progress" style={{ scaleX: 0 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8 }} />
    </header>
  )
}

