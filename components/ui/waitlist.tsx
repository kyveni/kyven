"use client";

import { FormEvent, useEffect, useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  const [memberCount, setMemberCount] = useState<number | null>(null);

  async function loadMemberCount() {
    try {
      const response = await fetch("/api/waitlist", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      if (response.ok) {
        setMemberCount(data.count);
      }
    } catch {
      // Statistik tidak mengganggu fungsi utama form.
    }
  }

  useEffect(() => {
    loadMemberCount();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setPosition(null);
    setAlreadyJoined(false);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSuccess(false);
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setSuccess(true);
      setAlreadyJoined(Boolean(data.alreadyJoined));
      setPosition(data.position);
      setEmail("");

      await loadMemberCount();
    } catch {
      setSuccess(false);
      setMessage("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="waitlist"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 text-xs tracking-[0.35em] text-white/40">
          JOIN WAITLIST
        </p>

        <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
          Ready to join?
        </h2>

        <p className="mt-6 text-base text-white/55 md:text-lg">
          Early access is limited. Be among the first to experience Kyven.
        </p>

        {memberCount !== null && (
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
            <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

            <span>
              <strong className="font-medium text-white">
                {memberCount}
              </strong>{" "}
              {memberCount === 1 ? "builder has" : "builders have"} already
              joined Kyven
            </span>
          </div>
        )}

        {!success ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              disabled={loading}
              className="min-h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-6 text-white outline-none placeholder:text-white/40 focus:border-lime-400 disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={loading}
              className="min-h-14 rounded-full bg-lime-400 px-8 font-medium text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        ) : (
          <div className="mt-12 rounded-3xl border border-lime-400/20 bg-lime-400/10 px-6 py-6 text-lime-300">
            <p className="text-lg font-medium">
              {alreadyJoined
                ? "You're already on the list!"
                : "🎉 You're on the list!"}
            </p>

            <p className="mt-2">
              Your spot is <strong>#{position}</strong>
            </p>
          </div>
        )}

        {message && !success && (
          <p className="mt-5 text-sm text-red-400">{message}</p>
        )}
      </div>
    </section>
  );
}
