import { useCallback, useEffect, useMemo, useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import ClassesHero3D from '../components/ClassesHero3D'
import ClassFilter from '../components/ClassFilter'
import ClassCard from '../components/ClassCard'
import ScheduleView from '../components/ScheduleView'
import ClassModal from '../components/ClassModal'

const mock = [
  { id:1, title:'Sunrise Yoga Flow', type:'yoga', instructor:'Ava Chen', capacity:24, enrolled:18, gym:'Downtown Studio', rating:4.8, reviews:1260,
    schedule:[{day:'Mon', start:'07:00', end:'08:00'}, {day:'Wed', start:'07:00', end:'08:00'}],
    preview:{ type:'image', src:'https://images.unsplash.com/photo-1546484959-f9a53db9fe49?q=80&w=1920&auto=format&fit=crop' }},
  { id:2, title:'HIIT Power 45', type:'hiit', instructor:'Marcus Lee', capacity:18, enrolled:17, gym:'Westside Gym', rating:4.6, reviews:940,
    schedule:[{day:'Tue', start:'18:00', end:'18:45'},{day:'Thu', start:'18:00', end:'18:45'}],
    preview:{ type:'video', src:'https://www.w3schools.com/html/mov_bbb.mp4' }},
  { id:3, title:'Strength Fundamentals', type:'strength', instructor:'Riley Stone', capacity:16, enrolled:12, gym:'East End Box', rating:4.7, reviews:720,
    schedule:[{day:'Sat', start:'10:00', end:'11:00'}],
    preview:{ type:'image', src:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop' }},
  { id:4, title:'Cardio Groove', type:'cardio', instructor:'Nova Park', capacity:30, enrolled:22, gym:'Uptown Arena', rating:4.5, reviews:520,
    schedule:[{day:'Fri', start:'17:00', end:'18:00'}],
    preview:{ type:'image', src:'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1920&auto=format&fit=crop' }},
]

export default function Classes() {
  const reduced = usePrefersReducedMotion()
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({ search:'', type:'all' })
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => { const t = setTimeout(() => setLoading(false), 600); return () => clearTimeout(t) }, [])

  const items = useMemo(() => {
    const q = filter.search.toLowerCase()
    return mock.filter(m => (
      (filter.type === 'all' || m.type === filter.type) &&
      (m.title.toLowerCase().includes(q) || m.instructor.toLowerCase().includes(q) || m.gym.toLowerCase().includes(q))
    ))
  }, [filter])

  const onOpen = useCallback((it) => { setSelected(it); setOpen(true) }, [])

  return (
    <div>
      <section className="classes-hero">
        <div className="classes-hero-bg" />
        <ClassesHero3D />
        <motion.div className="classes-hero-content container" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
          <h1>Classes</h1>
          <p className="muted">Train your way. Yoga, HIIT, strength, cardio — pick your vibe.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#list">Browse Classes</a>
            <a className="btn btn-ghost" href="#schedule">View Schedule</a>
          </div>
        </motion.div>
      </section>

      <section className="container pad-xl" id="list">
        <ClassFilter onChange={setFilter} />
        <div className="cards">
          {loading ? (
            [...Array(6)].map((_,i) => <div key={i} className="class-card skeleton" aria-hidden />)
          ) : (
            items.map((item) => (
              <ClassCard key={item.id} item={item} onOpen={onOpen} />
            ))
          )}
        </div>
      </section>

      <section className="container pad-xl" id="featured">
        <h2>Popular This Week</h2>
        <div className="featured">
          {items.slice(0,4).map((item) => (
            <motion.div key={item.id} className="featured-card" whileHover={{scale:1.02}}>
              <div className="thumb"><img src={item.preview?.src} alt="" loading="lazy"/></div>
              <div className="info"><strong>{item.title}</strong><span className="muted">{item.reviews.toLocaleString()} reviews</span></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container pad-xl" id="schedule">
        <h2>Schedule</h2>
        <ScheduleView items={items} onSelect={onOpen} />
      </section>

      <ClassModal open={open} item={selected} onClose={() => setOpen(false)} />
    </div>
  )
}

