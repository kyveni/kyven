"use client";

import { useEffect, useState } from "react";

const TARGET = 5000;

export default function Stats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => {});
  }, []);

  const progress = Math.min((count / TARGET) * 100, 100);

  return (
    <section className="border-y border-white/10 bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">

            <div className="py-10 text-center">
              <h2 className="text-5xl font-bold text-white">{count}</h2>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                WAITLIST MEMBERS
              </p>
            </div>

            <div className="py-10 text-center">
              <h2 className="text-5xl font-bold text-white">
                {Math.round(progress)}%
              </h2>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                FOUNDER TARGET
              </p>
            </div>

            <div className="py-10 text-center">
              <h2 className="text-5xl font-bold text-white">
                Q3 2026
              </h2>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                PUBLIC LAUNCH
              </p>
            </div>

          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-3 flex justify-between text-sm text-zinc-400">
            <span>Founder waitlist progress</span>
            <span className="text-lime-300">
              {count} / {TARGET}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-lime-400"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-zinc-500">
            Early members will receive priority access when Kyven launches.
          </p>
        </div>

      </div>
    </section>
  );
}
