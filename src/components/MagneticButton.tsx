import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMagnetic } from '../lib/hooks'

interface Props {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  external?: boolean
  onClick?: (e: React.MouseEvent) => void
  className?: string
}

export default function MagneticButton({
  href,
  children,
  variant = 'primary',
  external,
  onClick,
  className = '',
}: Props) {
  const m = useMagnetic(0.3)

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300'
  const styles =
    variant === 'primary'
      ? 'text-white shadow-glow'
      : 'text-white/85 glass hover:text-white'

  return (
    <motion.a
      ref={m.ref}
      href={href}
      onClick={onClick}
      onMouseMove={m.onMouseMove}
      onMouseLeave={m.onMouseLeave}
      style={{ x: m.x, y: m.y }}
      whileTap={{ scale: 0.96 }}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-500 via-iris-500 to-cyan-500 transition-all duration-300 group-hover:brightness-110" />
      )}
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-500 via-iris-500 to-cyan-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
      )}
      {children}
    </motion.a>
  )
}
