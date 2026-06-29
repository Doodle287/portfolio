import { useRef } from 'react'
import { useMotionValue, useSpring, useReducedMotion, type MotionValue } from 'framer-motion'

/**
 * 3D tilt that follows the pointer. Returns spring-smoothed rotation MotionValues
 * plus handlers to spread on the target element.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 10) {
  const reduce = useReducedMotion()
  const ref = useRef<T>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 180, damping: 16 })
  const rotateY = useSpring(ry, { stiffness: 180, damping: 16 })

  function onMouseMove(e: React.MouseEvent<T>) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    rx.set(-py * max * 2)
    ry.set(px * max * 2)
  }
  function onMouseLeave() {
    rx.set(0)
    ry.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}

/**
 * Magnetic pull toward the pointer for buttons / interactive chips.
 */
export function useMagnetic(strength = 0.35): {
  ref: React.RefObject<HTMLAnchorElement>
  x: MotionValue<number>
  y: MotionValue<number>
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
} {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 250, damping: 18 })
  const y = useSpring(my, { stiffness: 250, damping: 18 })

  function onMouseMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * strength)
    my.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  function onMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return { ref, x, y, onMouseMove, onMouseLeave }
}
