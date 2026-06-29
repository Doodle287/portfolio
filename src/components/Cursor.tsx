import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/** Soft gradient glow that trails the pointer. Desktop / fine-pointer only. */
export default function Cursor() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (reduce) return
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [reduce, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: sx,
        y: sy,
        background: 'radial-gradient(circle, rgba(129,140,248,0.65), rgba(34,211,238,0.18) 60%, transparent 70%)',
        mixBlendMode: 'screen',
        filter: 'blur(2px)',
      }}
    />
  )
}
