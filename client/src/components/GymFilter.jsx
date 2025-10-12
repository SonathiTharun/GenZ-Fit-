import { useEffect, useState } from 'react'

export default function GymFilter({ onChange }) {
  const [q, setQ] = useState('')
  const [city, setCity] = useState('all')
  const [facility, setFacility] = useState('all')

  useEffect(() => { onChange({ q, city, facility }) }, [q, city, facility, onChange])

  return (
    <div className="filter-bar" role="region" aria-label="Gym filters">
      <input className="input" type="search" placeholder="Search gyms, city..." value={q} onChange={(e)=>setQ(e.target.value)} aria-label="Search gyms" />
      <select className="select" value={city} onChange={(e)=>setCity(e.target.value)} aria-label="Filter by city">
        <option value="all">ALL CITIES</option>
        <option>New York</option>
        <option>San Francisco</option>
        <option>Austin</option>
      </select>
      <select className="select" value={facility} onChange={(e)=>setFacility(e.target.value)} aria-label="Filter by facility">
        <option value="all">ALL FACILITIES</option>
        <option>Pool</option>
        <option>Sauna</option>
        <option>CrossFit</option>
        <option>Climbing</option>
      </select>
    </div>
  )
}

