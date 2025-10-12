import { motion } from 'framer-motion'

export default function ClassCard({ item, onOpen }) {
  return (
    <motion.button
      className="class-card"
      onClick={() => onOpen(item)}
      whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Open details for ${item.title}`}
    >
      <div className="cover" aria-hidden>
        {item.preview?.type === 'video' ? (
          <video src={item.preview.src} muted autoPlay loop playsInline preload="metadata" />
        ) : (
          <img src={item.preview?.src} alt="" loading="lazy" />
        )}
      </div>
      <div className="content">
        <div className="meta">
          <span className="badge">{item.type}</span>
          <span className="rating" aria-label={`${item.rating} stars`}>
            {'★'.repeat(Math.round(item.rating))}
            <span className="count">({item.reviews.toLocaleString()})</span>
          </span>
        </div>
        <h4>{item.title}</h4>
        <p className="muted">{item.instructor} • {item.gym}</p>
        <div className="footer">
          <span className="slots">{item.capacity - item.enrolled} slots left</span>
          <span className="time">{item.schedule?.[0]?.day} {item.schedule?.[0]?.start}</span>
        </div>
      </div>
    </motion.button>
  )
}

