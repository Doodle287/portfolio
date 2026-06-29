import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '../../lib/data'
import PhoneMockup from '../ui/PhoneMockup'
import StoreButton from '../ui/StoreButton'

const badgeClass: Record<Project['badge']['tone'], string> = {
  lead: 'border-brand-400/40 bg-brand-500/15 text-brand-300',
  solo: 'border-cyan-400/40 bg-cyan-500/15 text-cyan-300',
  scratch: 'border-iris-400/40 bg-iris-500/15 text-iris-400',
  contrib: 'border-white/15 bg-white/[0.06] text-white/70',
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [a1, a2] = project.accent

  const scrollGallery = (dir: number) => {
    const el = galleryRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="fixed inset-0 z-[90]">
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* scroll layer */}
      <div
        className="absolute inset-0 overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <motion.article
          initial={{ opacity: 0, y: 40, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.985 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong relative mx-auto my-4 w-full max-w-5xl overflow-hidden rounded-3xl sm:my-8"
        >
          {/* accent glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full opacity-40 blur-[90px]"
            style={{ background: `radial-gradient(circle, ${a1}, transparent 70%)` }}
          />

          {/* top bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.07] bg-base/40 px-5 py-3 backdrop-blur-md sm:px-8">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-white/70 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-5 pb-10 pt-8 sm:px-10">
            {/* hero */}
            <div className="grid items-center gap-8 sm:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ color: a2, background: `${a1}1f`, border: `1px solid ${a1}55` }}
                  >
                    {project.type}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeClass[project.badge.tone]}`}
                  >
                    {project.badge.label}
                  </span>
                </div>
                <h1
                  className="text-4xl font-bold tracking-tight sm:text-5xl"
                  style={{
                    backgroundImage: `linear-gradient(120deg, #fff, ${a2})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {project.name}
                </h1>
                <p className="mt-1.5 text-sm font-medium uppercase tracking-wider text-white/45">
                  {project.subtitle}
                </p>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">{project.intro}</p>
                {project.stores.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stores.map((s) => (
                      <StoreButton key={s.kind} store={s} />
                    ))}
                  </div>
                )}
              </div>

              <div className="mx-auto w-44 sm:w-52">
                <PhoneMockup
                  src={project.cover}
                  alt={`${project.name} app`}
                  layoutId={`phone-${project.id}`}
                  priority
                />
              </div>
            </div>

            {/* gallery */}
            <div className="mt-14">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">App Gallery</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollGallery(-1)}
                    aria-label="Previous"
                    className="flex h-9 w-9 items-center justify-center rounded-full glass text-white/70 hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => scrollGallery(1)}
                    aria-label="Next"
                    className="flex h-9 w-9 items-center justify-center rounded-full glass text-white/70 hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div
                ref={galleryRef}
                className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
              >
                {project.shots.map((shot) => (
                  <figure key={shot.src} className="snap-start shrink-0">
                    <div className="w-[140px] sm:w-[160px]">
                      <PhoneMockup src={shot.src} alt={shot.caption} />
                    </div>
                    <figcaption className="mt-3 text-center text-xs text-white/50">{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* features */}
            <div className="mt-14">
              <h2 className="mb-5 text-lg font-semibold text-white">Key Features</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.features.map((f) => {
                  const Icon = f.icon
                  return (
                    <div key={f.title} className="rounded-2xl glass p-5">
                      <div
                        className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: `${a1}22`, color: a2 }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mb-1 font-semibold text-white">{f.title}</h4>
                      <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* tech */}
            <div className="mt-14">
              <h2 className="mb-4 text-lg font-semibold text-white">Tech Stack</h2>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <span key={t} className="chip text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* about */}
            <div className="mt-14">
              <h2 className="mb-4 text-lg font-semibold text-white">About This Project</h2>
              <div className="max-w-3xl space-y-4">
                {project.about.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-white/65">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-white/[0.07] pt-6 text-center text-xs text-white/35">
              © 2026 Abdyjelil Tuvakov · {project.name} Case Study
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
