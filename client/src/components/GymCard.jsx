import { motion } from 'framer-motion'

export default function GymCard({ gym, onOpen }) {
  return (
    <motion.button
      className="gym-card"
      onClick={() => onOpen(gym)}
      whileHover={{ scale: 1.02, rotateZ: -0.4 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Open details for ${gym.name}`}
    >
      <div className="gallery">
        <img src={gym.images?.[0]} alt="" loading="lazy" />
      </div>
      <div className="info">
        <div className="row">
          <h4>{gym.name}</h4>
          <span className="rating">★ {gym.rating?.toFixed(1)} <span className="count">({gym.reviewsCount?.toLocaleString?.()})</span></span>
        </div>
        <p className="muted">{gym.city} 3 {gym.address?.line1}</p>
        <div className="chips">
          {(gym.facilities||[]).slice(0,4).map((f,i) => <span key={i} className="chip">{f}</span>)}
        </div>
      </div>
    </motion.button>
  )
}

