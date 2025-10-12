import { useEffect, useState } from 'react'

const TYPES = ['all', 'yoga', 'hiit', 'strength', 'cardio']

export default function ClassFilter({ onChange }) {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')

  useEffect(() => { onChange({ search, type }) }, [search, type, onChange])

  return (
    <div className="filter-bar" role="region" aria-label="Class filters">
      <label className="sr-only" htmlFor="search">Search</label>
      <input
        id="search"
        type="search"
        className="input"
        placeholder="Search classes, instructor, gym..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search classes"
      />

      <label className="sr-only" htmlFor="type">Type</label>
      <select id="type" className="select" value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by type">
        {TYPES.map((t) => (<option key={t} value={t}>{t.toUpperCase()}</option>))}
      </select>
    </div>
  )
}

