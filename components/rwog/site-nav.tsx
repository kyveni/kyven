'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { RWOG_CONFIG } from '@/lib/rwog-config'

const LINKS = [
  { href: '#story', label: 'Story' },
  { href: '#launch', label: 'Launch' },
  { href: '#status', label: 'Status' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-line border-b bg-[rgba(3,18,10,0.82)] backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-[rgba(3,18,10,0.9)] via-[rgba(3,18,10,0.35)] to-transparent backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-[min(1160px,calc(100%-40px))] items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-display text-lg font-bold tracking-[0.14em]">
          <span className="border-lime relative block h-9 w-9 overflow-hidden rounded-full border-2 shadow-[0_0_20px_rgba(168,255,87,0.25)]">
            <Image src="/rwog-mascot.webp" alt="" fill sizes="36px" className="object-cover" />
          </span>
          RWOG
        </a>

        <div className="hidden items-center gap-7 text-sm font-extrabold text-muted md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={RWOG_CONFIG.twitterUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-lime hidden items-center justify-center rounded-full px-4 py-2.5 text-sm font-black text-[#09200f] shadow-[0_10px_32px_rgba(168,255,87,0.18)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Follow on X
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="border-line grid h-10 w-10 place-items-center rounded-full border bg-white/5 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-line border-t bg-[rgba(3,18,10,0.96)] backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-[min(1160px,calc(100%-40px))] flex-col py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-line/60 border-b py-3 text-base font-extrabold text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={RWOG_CONFIG.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-lime mt-4 inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-black text-[#09200f]"
            >
              Follow on X
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
