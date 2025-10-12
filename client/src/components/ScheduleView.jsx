import { useMemo } from 'react'
import { motion } from 'framer-motion'

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

export default function ScheduleView({ items=[], onSelect }) {
  const grouped = useMemo(() => {
    const map = Object.fromEntries(DAYS.map(d => [d, []]))
    items.forEach(c => (c.schedule||[]).forEach(s => { if (map[s.day]) map[s.day].push({...c, _s:s}) }))
    return map
  }, [items])

  return (
    <div className="schedule" role="region" aria-label="Weekly schedule">
      {DAYS.map((d, idx) => (
        <div key={d} className="col">
          <div className="day">{d}</div>
          <div className="slots">
            {grouped[d].length === 0 ? <div className="muted small">No classes</div> :
              grouped[d].map((c, i) => (
                <motion.button key={i} className="slot" onClick={() => onSelect?.(c)} whileHover={{scale:1.02}}>
                  <span className="title">{c.title}</span>
                  <span className="time">{c._s.start} - {c._s.end}</span>
                </motion.button>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

