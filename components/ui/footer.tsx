import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">

        <h2 className="text-lg tracking-[0.25em] text-white">
          KY<span className="text-[#C8FF3D]">V</span>EN
        </h2>

        <div className="flex items-center gap-6 text-sm text-zinc-500">

          <Link
            href="https://x.com/kyveniApp"
            target="_blank"
            className="hover:text-white"
          >
            X
          </Link>

          <span>© 2026</span>

        </div>

      </div>
    </footer>
  );
}