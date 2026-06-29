import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../Reveal'
import { contactLinks, contactBlurb, profile } from '../../lib/data'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading label="let's connect" title="Get in Touch" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-white/70">{contactBlurb}</p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              <span className="text-gradient">{profile.email}</span>
              <ArrowUpRight className="h-6 w-6 text-brand-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="mt-4 font-mono text-sm text-white/45">{profile.location}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const Icon = link.icon
                const external = link.href.startsWith('http')
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -4 }}
                    className="ring-grad group flex items-center gap-4 rounded-2xl glass p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-cyan-500/15 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-wider text-white/40">{link.label}</div>
                      <div className="truncate text-sm font-medium text-white">{link.value}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-300" />
                  </motion.a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
