import { SectionHeading } from './section-heading'

export function Story() {
  return (
    <section className="relative z-10 py-24 md:py-28" id="story">
      <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
        <SectionHeading
          eyebrow="The story"
          title="Every forest starts with one frog."
          lead="Every journey starts with one step. RWOG has just begun — and the forest grows with every new friend who follows along."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-[0.86fr_1.14fr]">
          <article className="border-line relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl border bg-panel p-8 shadow-forest backdrop-blur-xl">
            <svg
              viewBox="0 0 600 450"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-70"
            >
              <defs>
                <radialGradient id="storyGlow">
                  <stop stopColor="#89ff60" stopOpacity=".42" />
                  <stop offset="1" stopColor="#062014" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="310" cy="210" r="190" fill="url(#storyGlow)" />
              <path d="M0 390 Q120 260 235 390 T500 385 T680 390 V450 H0Z" fill="#0d3a22" />
              <path
                d="M20 440 Q130 280 240 440 M220 450 Q350 245 480 450"
                fill="none"
                stroke="#1f6d3c"
                strokeWidth="35"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="font-display relative text-3xl font-bold">RWOG has awakened.</h3>
            <p className="relative mt-3 leading-relaxed text-muted">
              Follow the journey as the forest begins to grow. No promises, no noise — just a frog,
              a community, and a road ahead.
            </p>
          </article>

          <article className="border-line grid place-items-center rounded-3xl border bg-panel p-12 text-center shadow-forest backdrop-blur-xl">
            <p className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight font-black tracking-[-0.03em] text-balance">
              &ldquo;From the pond to the <span className="text-lime">world.</span>&rdquo;
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
