import SectionHeading from '../ui/SectionHeading'
import Reveal from '../Reveal'
import { aboutParagraphs, aboutInfo } from '../../lib/data'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading label="about me" title="Who I Am" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="relative space-y-6 pl-6">
              <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-brand-500 via-iris-500 to-transparent" />
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-white/70 sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {aboutInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.label}
                    className="ring-grad flex items-center gap-4 rounded-2xl glass p-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-cyan-500/15 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/40">{info.label}</div>
                      <div className="text-sm font-medium text-white">{info.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
