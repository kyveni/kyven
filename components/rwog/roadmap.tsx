import { Globe, Rocket, Sprout, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'

const STEPS = [
  {
    no: '01',
    title: 'The Forest Awakens',
    desc: 'A frog stirs in the pond. The story begins and the first believers arrive.',
    Icon: Sprout,
  },
  {
    no: '02',
    title: 'Community',
    desc: 'The forest fills with friends. We grow together, loud and green.',
    Icon: Users,
  },
  {
    no: '03',
    title: 'Deployment',
    desc: 'The token goes live. Contract and launchpad are verified right here.',
    Icon: Rocket,
  },
  {
    no: '04',
    title: 'From the Pond to the World',
    desc: 'One leap at a time, RWOG hops far beyond the pond it started in.',
    Icon: Globe,
  },
]

export function Roadmap() {
  return (
    <section className="relative z-10 py-24 md:py-28" id="roadmap">
      <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
        <SectionHeading eyebrow="Forest path" title="Four simple steps." />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ no, title, desc, Icon }) => (
            <article
              key={no}
              className="border-line group flex min-h-[220px] flex-col rounded-3xl border bg-white/[0.035] p-7 transition-colors hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <small className="text-lime text-sm font-black tracking-[0.12em]">{no}</small>
                <span className="border-line bg-lime/10 grid h-10 w-10 place-items-center rounded-full border">
                  <Icon className="h-5 w-5 text-lime" />
                </span>
              </div>
              <h3 className="font-display mt-8 mb-2 text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-muted">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
