import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, ChevronDown } from 'lucide-react'
import MagneticButton from '../MagneticButton'
import Counter from '../ui/Counter'
import { profile, stats } from '../../lib/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* rotating gradient ring accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] hidden -translate-x-1/2 -translate-y-1/2 sm:block">
        <div className="animate-spin-slow opacity-50">
          <div
            className="h-[34rem] w-[34rem] rounded-full lg:h-[44rem] lg:w-[44rem]"
            style={{
              background:
                'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.5), transparent 35%, rgba(34,211,238,0.4), transparent 70%)',
              maskImage: 'radial-gradient(circle, transparent 58%, #000 60%, #000 62%, transparent 64%)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 58%, #000 60%, #000 62%, transparent 64%)',
            }}
          />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-edge relative text-center"
      >
        <motion.div variants={item} className="mb-7 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm text-white/75">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </motion.div>

        <motion.p variants={item} className="mb-4 font-mono text-sm tracking-widest text-brand-400 sm:text-base">
          {profile.role.toUpperCase()}
        </motion.p>

        <h1 className="text-[clamp(2.75rem,11vw,8rem)] font-bold leading-[0.95] tracking-tight">
          <motion.span variants={item} className="block text-white">
            {profile.firstName}
          </motion.span>
          <motion.span variants={item} className="block text-gradient">
            {profile.lastName}
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#contact">
            <Mail className="h-[18px] w-[18px]" />
            Get in Touch
          </MagneticButton>
          <MagneticButton href="#projects" variant="outline">
            View Projects
            <ArrowUpRight className="h-[18px] w-[18px]" />
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-white/50 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
