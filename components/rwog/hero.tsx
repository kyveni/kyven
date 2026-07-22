'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Leaf } from 'lucide-react'
import { RWOG_CONFIG } from '@/lib/rwog-config'

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current
    const card = cardRef.current
    if (!stage || !card) return
    const r = stage.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-3px)`
  }

  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <section className="relative flex min-h-[100svh] items-center pt-28 pb-20" id="top">
      <div className="relative z-10 mx-auto grid w-[min(1160px,calc(100%-40px))] items-center gap-12 md:grid-cols-[1.04fr_0.96fr] md:gap-14">
        {/* Copy */}
        <div className="text-center md:text-left">
          <span className="border-line bg-lime/10 text-lime-soft inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-black tracking-[0.12em] uppercase">
            <span className="bg-lime h-2 w-2 rounded-full shadow-[0_0_14px_var(--color-lime)]" />
            The living forest
          </span>

          <h1 className="font-display my-6 text-[clamp(3.4rem,9vw,7.4rem)] leading-[0.84] font-bold tracking-[-0.055em] text-balance">
            FROM THE <span className="text-lime block">POND TO THE WORLD.</span>
          </h1>

          <p className="mx-auto max-w-[560px] text-lg leading-relaxed text-muted md:mx-0">
            Welcome to RWOG. A small frog begins its journey from the pond to the world — one leap,
            one leaf, one believer at a time.
          </p>

          <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={RWOG_CONFIG.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-lime inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black text-[#09200f] shadow-[0_10px_32px_rgba(168,255,87,0.18)] transition-transform hover:-translate-y-0.5"
            >
              Enter through X <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#story"
              className="border-line inline-flex items-center justify-center gap-2 rounded-full border bg-white/5 px-6 py-3.5 text-sm font-black text-foreground transition-colors hover:bg-white/10"
            >
              <Leaf className="h-4 w-4 text-lime" />
              Explore the forest
            </a>
          </div>

          <p className="mt-5 text-sm text-muted-2">
            Official X: <span className="text-lime-soft font-bold">{RWOG_CONFIG.twitterHandle}</span>
          </p>
        </div>

        {/* Mascot */}
        <div
          ref={stageRef}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          className="relative grid min-h-[380px] place-items-center md:min-h-[560px]"
        >
          <div className="animate-breathe absolute aspect-square w-[78%] rounded-full bg-[radial-gradient(circle,rgba(162,255,77,0.24),rgba(39,123,71,0.08)_50%,transparent_72%)] blur-lg" />
          <div
            ref={cardRef}
            className="relative aspect-square w-[min(460px,92%)] transition-transform duration-150 will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image
              src="/rwog-mascot.webp"
              alt="RWOG frog mascot in an enchanted forest"
              fill
              priority
              sizes="(max-width: 768px) 92vw, 460px"
              className="animate-idle object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div className="border-line absolute bottom-8 left-2 max-w-[240px] rounded-2xl border bg-[rgba(4,22,12,0.88)] px-4 py-3.5 text-sm leading-snug font-bold shadow-forest backdrop-blur-md md:left-0">
            A living forest.
            <br />A stronger community.
            <span className="border-line absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-r border-b bg-[rgba(4,22,12,0.88)]" />
          </div>
        </div>
      </div>

      {/* Forest silhouette */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-52 w-full opacity-90"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#06170d"
          d="M0 168L70 114l52 40 92-94 76 89 74-44 88 53 83-92 80 82 87-38 71 48 78-85 94 91 70-44 92 49 73-76 80 75 72-43 70 43v52H0z"
        />
        <path
          fill="#092417"
          opacity=".9"
          d="M0 191l95-64 66 56 84-42 75 47 93-79 65 75 90-48 86 49 81-86 96 85 83-41 84 48 81-73 85 68 93-57 85 61v30H0z"
        />
      </svg>
    </section>
  )
}
