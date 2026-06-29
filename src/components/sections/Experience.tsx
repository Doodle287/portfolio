import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { experience } from '../../lib/data'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading label="career" title="Experience" />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* animated rail */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-brand-500 via-iris-500 to-transparent sm:left-[7px]"
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* dot */}
                <span
                  className={`absolute -left-8 top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-10 ${
                    job.current ? '' : ''
                  }`}
                >
                  {job.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  )}
                  <span
                    className={`relative h-3.5 w-3.5 rounded-full border-2 ${
                      job.current
                        ? 'border-emerald-300 bg-emerald-400'
                        : 'border-brand-400 bg-base'
                    }`}
                  />
                </span>

                <div className="ring-grad rounded-2xl glass p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-brand-300">{job.date}</span>
                    {job.current && (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-sm font-medium text-brand-300/90">{job.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{job.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
