'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './section-heading'

const ITEMS = [
  { q: 'What is RWOG?', a: 'RWOG is a frog from the forest — a community-first project with a simple story and a long journey ahead.' },
  { q: 'Has RWOG launched?', a: 'Not yet. When it does, the contract address and launchpad link will appear on this page.' },
  { q: 'Where will the contract address be published?', a: 'On this website and the official X account. Never trust an address from anywhere else.' },
  { q: 'Where will RWOG launch?', a: 'The official launchpad link will appear here after deployment.' },
  { q: 'Where can I follow RWOG?', a: 'Follow @Rwog_xyz on X for every update on the journey.' },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative z-10 py-24 md:py-28" id="faq">
      <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
        <SectionHeading eyebrow="FAQ" title="Simple answers." />

        <div className="mt-10 grid max-w-[860px] gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="border-line rounded-2xl border bg-white/[0.035] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold"
                >
                  {item.q}
                  <ChevronDown
                    className={`text-lime h-5 w-5 flex-none transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="min-h-0 leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
