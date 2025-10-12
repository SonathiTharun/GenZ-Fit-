import { AnimatePresence, motion } from 'framer-motion'

export default function GymModal({ open, gym, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal" role="dialog" aria-modal="true" aria-label="Gym details" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <motion.div className="modal-card" initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{y:30,opacity:0}}>
            <button className="modal-close" onClick={onClose} aria-label="Close">\u2715</button>
            <div className="modal-media">
              <img src={gym?.images?.[0]} alt="" />
            </div>
            <div className="modal-content">
              <h3>{gym?.name}</h3>
              <p className="muted">{gym?.city} — {gym?.address?.line1}</p>
              <div className="chips">{(gym?.amenities||[]).map((a,i)=>(<span key={i} className="chip">{a}</span>))}</div>
              <div className="modal-actions">
                <a href="#" className="btn btn-primary">View Memberships</a>
                <a href="#" className="btn btn-ghost">Contact</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

