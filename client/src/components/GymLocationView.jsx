import { motion } from 'framer-motion'

export default function GymLocationView({ gyms=[], onSelect }) {
  return (
    <div className="location-view" role="region" aria-label="Location view">
      {gyms.map((g, i) => (
        <motion.button key={i} className="pin" whileHover={{scale:1.1}} onClick={()=>onSelect?.(g)} style={{ left: `${20 + (i*15)%60}%`, top: `${30 + (i*12)%40}%` }}>
          <span className="dot" />
          <span className="label">{g.city}</span>
        </motion.button>
      ))}
      <div className="map-bg" aria-hidden />
    </div>
  )
}

