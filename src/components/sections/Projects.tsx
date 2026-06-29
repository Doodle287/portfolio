import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import PhoneMockup from '../ui/PhoneMockup'
import ProjectModal from './ProjectModal'
import { useTilt } from '../../lib/hooks'
import { projects, type Project } from '../../lib/data'

const badgeClass: Record<Project['badge']['tone'], string> = {
  lead: 'border-brand-400/40 bg-brand-500/15 text-brand-300',
  solo: 'border-cyan-400/40 bg-cyan-500/15 text-cyan-300',
  scratch: 'border-iris-400/40 bg-iris-500/15 text-iris-400',
  contrib: 'border-white/15 bg-white/[0.06] text-white/70',
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const tilt = useTilt<HTMLButtonElement>(6)
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        onClick={onOpen}
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1000 }}
        whileHover={{ y: -8 }}
        className="ring-grad group relative flex h-full w-full flex-col overflow-hidden rounded-3xl glass p-5 text-left"
        aria-label={`View ${project.name} case study`}
      >
        {/* accent wash */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-20 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent[0]}, transparent 70%)` }}
        />

        <div className="relative mb-5 flex items-end justify-center pt-2">
          <div className="w-32 transition-transform duration-500 group-hover:-translate-y-1 sm:w-36">
            <PhoneMockup
              src={project.cover}
              alt={`${project.name} preview`}
              layoutId={`phone-${project.id}`}
              priority={index < 3}
            />
          </div>
        </div>

        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className="rounded-full px-2.5 py-1 text-[11px] font-medium"
            style={{
              color: project.accent[1],
              background: `${project.accent[0]}1c`,
              border: `1px solid ${project.accent[0]}44`,
            }}
          >
            {project.type}
          </span>
          <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${badgeClass[project.badge.tone]}`}>
            {project.badge.label}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.cardStack.map((s) => (
            <span key={s} className="chip text-[11px]">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-300 opacity-70 transition-opacity group-hover:opacity-100">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </motion.button>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading label="portfolio" title="Featured Projects" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
