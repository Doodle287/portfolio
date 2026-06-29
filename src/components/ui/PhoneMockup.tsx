import { motion } from 'framer-motion'

interface Props {
  src: string
  alt: string
  className?: string
  /** Pass true to keep the layoutId shared-element transition between card and modal. */
  layoutId?: string
  priority?: boolean
}

/** A clean device frame wrapping a 9:19.5 portrait screenshot. */
export default function PhoneMockup({ src, alt, className = '', layoutId, priority }: Props) {
  return (
    <motion.div
      layoutId={layoutId}
      className={`relative aspect-[406/912] rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[5px] shadow-2xl ${className}`}
    >
      {/* side buttons */}
      <span className="absolute -left-[2px] top-[22%] h-9 w-[2px] rounded-full bg-white/15" />
      <span className="absolute -right-[2px] top-[30%] h-12 w-[2px] rounded-full bg-white/15" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] bg-black">
        {/* notch */}
        <span className="absolute left-1/2 top-2 z-10 h-[5px] w-1/3 -translate-x-1/2 rounded-full bg-white/25" />
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </motion.div>
  )
}
