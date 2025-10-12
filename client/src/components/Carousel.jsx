import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slidesData = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop', alt: 'Strength training' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Workout video sample' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1546484959-f9a53db9fe49?q=80&w=1920&auto=format&fit=crop', alt: 'Yoga class' }
]

export default function Carousel({ interval = 4500 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const touchStartX = useRef(null)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slidesData.length), interval)
    return () => clearInterval(timer.current)
  }, [paused, interval])

  const go = (delta) => setIndex((i) => (i + delta + slidesData.length) % slidesData.length)

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; setPaused(true) }
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - (touchStartX.current ?? 0)
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1)
    setPaused(false)
  }

  return (
    <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="carousel-viewport" aria-live="polite">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="slide"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {slidesData[index].type === 'image' ? (
              <img src={slidesData[index].src} alt={slidesData[index].alt} loading="lazy" />
            ) : (
              <video src={slidesData[index].src} muted autoPlay loop playsInline preload="metadata" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="nav prev" onClick={() => go(-1)} aria-label="Previous slide">‹</button>
      <button className="nav next" onClick={() => go(1)} aria-label="Next slide">›</button>

      <div className="dots" role="tablist" aria-label="Carousel Pagination">
        {slidesData.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'dot active' : 'dot'}
            onClick={() => setIndex(i)}
            role="tab"
            aria-selected={i === index}
            aria-controls={`slide-${i}`}
          />
        ))}
      </div>
    </div>
  )
}

