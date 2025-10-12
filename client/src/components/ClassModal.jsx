import { AnimatePresence, motion } from 'framer-motion'

export default function ClassModal({ open, item, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal" role="dialog" aria-modal="true" aria-label="Class details"
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <motion.div className="modal-card" initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{y:30,opacity:0}}>
            <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
            <div className="modal-media">
              {item?.preview?.type === 'video' ? (
                <video src={item.preview.src} muted autoPlay loop playsInline preload="metadata" />
              ) : (
                <img src={item?.preview?.src} alt="" />
              )}
            </div>
            <div className="modal-content">
              <h3>{item?.title}</h3>
              <p className="muted">{item?.type?.toUpperCase()} • {item?.instructor} • {item?.gym}</p>
              <p>Capacity: {item?.capacity} • Enrolled: {item?.enrolled}</p>
              <div className="modal-actions">
                <a href="#" className="btn btn-primary">Book Now</a>
                <a href="#" className="btn btn-ghost">Add to Calendar</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

