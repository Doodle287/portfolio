import Reveal from '../Reveal'

interface Props {
  label: string
  title: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ label, title, align = 'left' }: Props) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <p className="mb-3 font-mono text-sm text-brand-400">
        <span className="text-white/30">//</span> {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
    </Reveal>
  )
}
