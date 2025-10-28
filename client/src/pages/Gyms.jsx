import { useMemo, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import GymsHero3D from '../components/GymsHero3D'
import GymFilter from '../components/GymFilter'
import GymCard from '../components/GymCard'
import GymLocationView from '../components/GymLocationView'
import GymModal from '../components/GymModal'

const mockGyms = [
  { id:1, name:'Pulse Lab Downtown', description:'High-performance training hub', city:'New York', address:{line1:'123 Mercer St'}, coordinates:{lat:40.72,lng:-73.99}, facilities:['CrossFit','Sauna','Climbing'], amenities:['Towels','Showers','Lockers'], images:['https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1920&auto=format&fit=crop'], pricing:[{tier:'Basic', monthly:39},{tier:'Pro', monthly:69}], hours:{Mon:{open:'06:00',close:'22:00'}}, rating:4.7, reviewsCount:1340 },
  { id:2, name:'Neon Strength', description:'Strength-first community gym', city:'Austin', address:{line1:'55 Barton Springs'}, coordinates:{lat:30.26,lng:-97.74}, facilities:['Strength','Cardio'], amenities:['Parking','Sauna'], images:['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop'], pricing:[{tier:'Basic', monthly:29},{tier:'Elite', monthly:79}], hours:{Mon:{open:'05:30',close:'23:00'}}, rating:4.6, reviewsCount:880 },
  { id:3, name:'Elevate West', description:'Group classes and recovery lounge', city:'San Francisco', address:{line1:'200 Market St'}, coordinates:{lat:37.79,lng:-122.41}, facilities:['Yoga','Cardio','Pool'], amenities:['Towels','Spa'], images:['https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1920&auto=format&fit=crop'], pricing:[{tier:'Premium', monthly:89}], hours:{Mon:{open:'06:00',close:'21:00'}}, rating:4.8, reviewsCount:1175 }
]

export default function Gyms() {
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ q:'', city:'all', facility:'all' })
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => { const t = setTimeout(() => setLoading(false), 600); return () => clearTimeout(t) }, [])

  const gyms = useMemo(() => {
    const q = filters.q.toLowerCase()
    return mockGyms.filter(g => (
      (filters.city==='all' || g.city===filters.city) &&
      (filters.facility==='all' || (g.facilities||[]).includes(filters.facility)) &&
      (g.name.toLowerCase().includes(q) || g.city.toLowerCase().includes(q))
    ))
  }, [filters])

  const onOpen = useCallback((g)=>{ setSelected(g); setOpen(true) },[])

  return (
    <div>
      <Hero
        title="Gyms"
        subtitle="Find your space. Facilities that match your energy."
      >
        <div className="cta-row">
          <a href="#list" className="btn btn-primary">Explore Gyms</a>
          <a href="#map" className="btn btn-ghost">View Map</a>
        </div>
        <GymsHero3D />
      </Hero>

      <section className="container pad-xl" id="list">
        <GymFilter onChange={setFilters} />
        <div className="gyms-grid">
          {loading ? (
            [...Array(6)].map((_,i) => <div key={i} className="gym-card skeleton" aria-hidden />)
          ) : (
            gyms.map((gym) => (
              <GymCard key={gym.id} gym={gym} onOpen={onOpen} />
            ))
          )}
        </div>
      </section>

      <section className="container pad-xl" id="map">
        <h2>Nearby Gyms</h2>
        <GymLocationView gyms={gyms} onSelect={onOpen} />
      </section>

      <GymModal open={open} gym={selected} onClose={() => setOpen(false)} />
    </div>
  )
}

