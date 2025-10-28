import { motion } from 'framer-motion'

export default function Hero({
  videoUrl,
  poster,
  title = 'Elevate your fitness.',
  subtitle = 'Professional coaching, immersive tech, real results.',
  children,
}) {
  return (
    <section className="video-hero" aria-label="Hero">
      <div className="video-bg" aria-hidden>
        {videoUrl ? (
          <video
            src={videoUrl}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          children
        )}
        <div className="video-overlay" />
      </div>

      <motion.div
        className="video-content container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}}>
          {title}
        </motion.h1>
        <motion.p className="muted" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}}>
          {subtitle}
        </motion.p>
        <motion.div
  className="cta-row"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', maxWidth: '300px', margin: '0 auto' }}
>
  <a href="/classes" className="btn btn-primary" style={{ width: '100%' }}>Start Free Trial</a>
  <a href="/gyms" className="btn btn-ghost" style={{ width: '100%' }}>Find a Gym</a>
  <a href="/login" className="btn btn-ghost" style={{ width: '100%' }}>Login</a>
  <a href="/register" className="btn btn-ghost" style={{ width: '100%' }}>Sign Up</a>
</motion.div>
      </motion.div>

      <div className="scroll-cue" aria-hidden>
        <span className="dot" />
      </div>
    </section>
  )
}
