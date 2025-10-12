import { useEffect, useRef } from 'react'

export default function useParallax(strength = 20) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const { innerWidth:w, innerHeight:h } = window
      const x = (e.clientX - w/2) / w
      const y = (e.clientY - h/2) / h
      el.style.transform = `translate3d(${x*strength}px, ${y*strength}px, 0)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [strength])
  return ref
}

