"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link href="#hero" aria-label="Kyven home" className="text-xl font-semibold tracking-[0.2em] text-white transition-opacity hover:opacity-80">
          KY<span className="text-[#C8FF3D]">V</span>EN
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white">Features</Link>
          <Link href="#faq" className="text-sm text-zinc-400 transition-colors hover:text-white">FAQ</Link>
          <Link href="https://x.com/kyveniApp" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 transition-colors hover:text-white">X</Link>
        </nav>
        <Link href="#waitlist" className="rounded-full bg-[#C8FF3D] px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8FF6B]">Join Waitlist</Link>
      </div>
    </header>
  );
}
