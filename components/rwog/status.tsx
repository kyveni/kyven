import { RWOG_CONFIG, getLaunchState, shortAddress } from '@/lib/rwog-config'
import { SectionHeading } from './section-heading'

export function Status() {
  const state = getLaunchState()

  const rows: Array<{ label: string; value: string; live?: boolean }> = [
    { label: 'Token', value: state.hasContract ? 'Live' : 'Not launched', live: state.hasContract },
    {
      label: 'Contract address',
      value: state.hasContract ? shortAddress(state.contractAddress) : 'Coming after deployment',
      live: state.hasContract,
    },
    {
      label: 'Launchpad',
      value: state.hasLaunchpad ? 'Available' : 'Coming after deployment',
      live: state.hasLaunchpad,
    },
    { label: 'Official X', value: RWOG_CONFIG.twitterHandle, live: true },
  ]

  return (
    <section className="relative z-10 py-24 md:py-28" id="status">
      <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
        <SectionHeading eyebrow="Current status" title="The journey has just begun." />

        <div className="border-line mt-8 rounded-3xl border bg-panel p-8 shadow-forest backdrop-blur-xl md:p-10">
          <div className="grid gap-1">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-5 border-b border-white/10 py-4 last:border-b-0"
              >
                <span className="text-muted">{row.label}</span>
                <strong className={`flex items-center gap-2 font-bold ${row.live ? 'text-lime-soft' : 'text-foreground'}`}>
                  {row.live ? (
                    <span className="bg-lime h-2 w-2 rounded-full shadow-[0_0_10px_var(--color-lime)]" />
                  ) : null}
                  {row.value}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
