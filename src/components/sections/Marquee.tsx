import { marquee } from '../../lib/data'

function Row({ reverse }: { reverse?: boolean }) {
  const items = [...marquee, ...marquee]
  return (
    <div className="flex w-max">
      <ul className={`flex items-center gap-10 pr-10 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {items.map((word, i) => (
          <li key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl font-medium text-white/30 transition-colors hover:text-white/70 sm:text-3xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-7"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      }}
    >
      <div className="flex flex-col gap-5">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
