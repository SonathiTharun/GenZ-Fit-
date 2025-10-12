import { motion } from 'framer-motion'
import CanvasScene from './CanvasScene'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import useParallax from '../hooks/useParallax'

export default function Hero3D() {
  const reduced = usePrefersReducedMotion()
  const ref = useParallax(10)
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-canvas">
        <CanvasScene reduced={reduced} />
      </div>
      <motion.div
        className="hero-content container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 ref={ref}>Train in 3D. Perform IRL.</h1>
        <p>Immersive workouts, smarter plans, mindful recovery.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#classes">Start Free Trial</a>
          <a className="btn btn-ghost" href="#gyms">Explore Gyms</a>
        </div>
      </motion.div>
    </section>
  )
}

