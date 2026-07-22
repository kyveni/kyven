import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { RWOG_CONFIG } from '@/lib/rwog-config'

export function CtaFooter() {
  const year = new Date().getFullYear()

  return (
    <>
      <section className="relative z-10 py-24 md:py-28">
        <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
          <div className="border-line rounded-[2.25rem] border bg-[radial-gradient(circle_at_80%_20%,rgba(168,255,87,0.2),transparent_30%),rgba(9,38,24,0.78)] p-10 text-center shadow-forest md:p-16">
            <span className="text-lime text-xs font-black tracking-[0.16em] uppercase">
              The forest is open
            </span>
            <h2 className="font-display mt-4 mb-4 text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.95] font-bold tracking-[-0.045em] text-balance">
              Follow the journey.
            </h2>
            <p className="mx-auto mb-7 max-w-[560px] text-lg leading-relaxed text-muted">
              Follow RWOG on X for the journey ahead — every leap, every update, straight from the
              pond.
            </p>
            <a
              href={RWOG_CONFIG.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-lime inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black text-[#09200f] shadow-[0_10px_32px_rgba(168,255,87,0.18)] transition-transform hover:-translate-y-0.5"
            >
              Follow {RWOG_CONFIG.twitterHandle} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-line relative z-10 border-t py-16">
        <div className="mx-auto flex w-[min(1160px,calc(100%-40px))] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 font-display text-lg font-bold tracking-[0.14em]">
              <span className="border-lime relative block h-9 w-9 overflow-hidden rounded-full border-2 shadow-[0_0_20px_rgba(168,255,87,0.25)]">
                <Image src="/rwog-mascot.webp" alt="" fill sizes="36px" className="object-cover" />
              </span>
              RWOG
            </div>
            <p className="mt-4 max-w-[520px] leading-relaxed text-muted">
              Every forest starts with one frog.
              <br />
              From the pond to the world.
            </p>
          </div>
          <p className="leading-relaxed text-muted">
            © {year} RWOG · Official X:{' '}
            <a
              href={RWOG_CONFIG.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="text-lime-soft font-bold hover:underline"
            >
              {RWOG_CONFIG.twitterHandle}
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
