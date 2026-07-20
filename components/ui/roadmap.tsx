const milestones = [
  {
    title: "Brand Identity",
    status: "Complete",
    dotClass: "bg-lime-400",
  },
  {
    title: "Landing Page",
    status: "Complete",
    dotClass: "bg-lime-400",
  },
  {
    title: "Waitlist",
    status: "Complete",
    dotClass: "bg-lime-400",
  },
  {
    title: "Robinhood Integration",
    status: "In Progress",
    dotClass: "bg-yellow-400",
  },
  {
    title: "Public Launch",
    status: "Planned",
    dotClass: "bg-zinc-500",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-y border-white/10 bg-black px-7 py-32 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
          Road to launch
        </p>

        <h2 className="mt-7 max-w-3xl text-4xl font-medium leading-tight text-white md:text-6xl">
          Building, one milestone at a time.
        </h2>

        <div className="mt-20 md:mt-28">
          {milestones.map((milestone) => (
            <div
              key={milestone.title}
              className="flex items-center justify-between gap-5 border-b border-white/10 py-8"
            >
              <div className="flex min-w-0 items-center gap-5">
                <span
                  className={`h-4 w-4 shrink-0 rounded-full ${milestone.dotClass}`}
                />

                <h3 className="text-xl text-white md:text-2xl">
                  {milestone.title}
                </h3>
              </div>

              <p className="shrink-0 text-right text-base text-zinc-500 md:text-lg">
                {milestone.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
