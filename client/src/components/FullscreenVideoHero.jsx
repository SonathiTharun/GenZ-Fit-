import { motion } from 'framer-motion'

export default function FullscreenVideoHero({
  videoUrl,
  poster,
  title = 'Elevate your fitness.',
  subtitle = 'Professional coaching, immersive tech, real results.',
}) {
  return (
    <section className="video-hero" aria-label="Hero">
      <div className="video-bg" aria-hidden>
        <video
          src={videoUrl}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
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
        <motion.div className="cta-row" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.6}}>
          <a href="/classes" className="btn btn-primary">Start Free Trial</a>
          <a href="/gyms" className="btn btn-ghost">Find a Gym</a>
        </motion.div>
      </motion.div>

      <div className="scroll-cue" aria-hidden>
        <span className="dot" />
      </div>
    </section>
  )
}

