'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { RWOG_CONFIG, getLaunchState } from '@/lib/rwog-config'
import { SectionHeading } from './section-heading'

export function Launch() {
  const state = getLaunchState()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!state.hasContract) return
    try {
      await navigator.clipboard.writeText(state.contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section className="relative z-10 py-24 md:py-28" id="launch">
      <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
        <SectionHeading
          eyebrow="Token launch"
          title="Verified links live here."
          lead="The official contract address and launchpad link will appear here after deployment. Always verify against the official X account before trading."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          {/* Contract address */}
          <article className="border-line rounded-3xl border bg-panel p-8 shadow-forest backdrop-blur-xl">
            <span className="border-line bg-lime/10 text-lime-soft inline-flex rounded-full border px-3 py-2 text-xs font-black tracking-wide uppercase">
              {state.statusLabel}
            </span>
            <h3 className="font-display mt-6 mb-2 text-2xl font-bold">Contract address</h3>
            <p className="leading-relaxed text-muted">
              The official contract address will appear here.
            </p>

            <div className="border-line mt-5 flex items-center gap-3 rounded-2xl border bg-black/25 p-3.5">
              <span
                className={`min-w-0 flex-1 font-mono ${
                  state.hasContract ? 'text-lime-soft' : 'text-muted-2'
                } overflow-hidden break-all sm:whitespace-nowrap sm:text-ellipsis`}
              >
                {state.hasContract ? state.contractAddress : 'Not published yet'}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!state.hasContract}
                aria-label="Copy contract address"
                title="Copy contract address"
                className="border-line grid h-11 w-11 flex-none place-items-center rounded-full border bg-white/5 text-foreground transition-colors enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {state.hasContract
                ? 'Contract address published. Always verify before trading.'
                : 'Available after deployment.'}
            </p>
          </article>

          {/* Launchpad */}
          <article className="border-line rounded-3xl border bg-panel p-8 shadow-forest backdrop-blur-xl">
            <span className="text-lime text-xs font-black tracking-[0.16em] uppercase">
              Official launchpad
            </span>
            <h3 className="font-display mt-4 mb-2 text-2xl font-bold">Official launchpad.</h3>
            <p className="leading-relaxed text-muted">
              The official launchpad link will appear here.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={state.hasLaunchpad ? state.launchpadUrl : undefined}
                target={state.hasLaunchpad ? '_blank' : undefined}
                rel="noreferrer"
                aria-disabled={!state.hasLaunchpad}
                className={`bg-lime inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black text-[#09200f] transition-transform ${
                  state.hasLaunchpad
                    ? 'hover:-translate-y-0.5'
                    : 'pointer-events-none opacity-40 grayscale'
                }`}
              >
                Open launchpad <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={RWOG_CONFIG.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="border-line inline-flex items-center justify-center rounded-full border bg-white/5 px-5 py-3 text-sm font-black text-foreground transition-colors hover:bg-white/10"
              >
                Verify on X
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {state.hasLaunchpad
                ? 'Official launchpad link published.'
                : 'Launchpad: not published yet.'}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
