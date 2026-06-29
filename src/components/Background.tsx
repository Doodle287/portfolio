import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Ambient futuristic backdrop: drifting aurora blobs, a faint tech grid,
 * and a lightweight connected-particle constellation on canvas.
 * Fixed behind all content; fully disabled for reduced-motion users.
 */
export default function Background() {
  const reduce = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (reduce) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    type P = { x: number; y: number; vx: number; vy: number }
    let pts: P[] = []

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(72, Math.floor((w * h) / 24000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]
          const b = pts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22
            ctx.strokeStyle = `rgba(129,140,248,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = 'rgba(165,180,252,0.55)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reduce])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* tech grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
        }}
      />

      {/* aurora blobs */}
      {!reduce && (
        <>
          <motion.div
            className="absolute -left-32 -top-24 h-[40rem] w-[40rem] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35), transparent 65%)' }}
            animate={{ x: [0, 80, -30, 0], y: [0, 50, 90, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[-10rem] top-24 h-[36rem] w-[36rem] rounded-full blur-[130px]"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.32), transparent 65%)' }}
            animate={{ x: [0, -70, 20, 0], y: [0, 60, -20, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-12rem] left-1/3 h-[34rem] w-[34rem] rounded-full blur-[140px]"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.22), transparent 65%)' }}
            animate={{ x: [0, 50, -40, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
