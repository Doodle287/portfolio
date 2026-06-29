import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { skills } from '../../lib/data'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading label="expertise" title="Technical Skills" />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6 }}
                className="ring-grad group relative overflow-hidden rounded-2xl glass p-6"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-cyan-500/15 text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
