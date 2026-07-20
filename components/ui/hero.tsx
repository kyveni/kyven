"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <BackgroundBeams />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(200,255,61,0.08),transparent_30%)]" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-7 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-zinc-400 sm:text-xs">Waitlist now open</p>
        </div>
        <h1 className="max-w-4xl text-balance text-[clamp(3rem,12vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
          Launch the next <span className="text-[#C8FF3D]">community</span><br className="hidden sm:block" /> on Robinhood.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          Build, launch, and grow community-driven projects with a platform designed for modern builders.
        </p>
        <a href="#waitlist" className="mt-9">
          <Button className="h-13 rounded-full bg-[#C8FF3D] px-8 text-base font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8FF6B] hover:shadow-lg hover:shadow-[#C8FF3D]/20">
            Join Waitlist <ArrowRight />
          </Button>
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500">
          <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#C8FF3D] shadow-[0_0_14px_rgba(200,255,61,0.7)]" />Early access</span>
          <span className="size-1 rounded-full bg-zinc-700" />
          <span>Launching soon</span>
        </div>
      </div>
    </section>
  );
}
