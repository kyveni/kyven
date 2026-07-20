export default function About() {
  const roadmap = [
    {
      title: "Brand Identity",
      status: "Complete",
      color: "bg-[#C8FF3D]",
    },
    {
      title: "Landing Page",
      status: "Complete",
      color: "bg-line-400",
    },
    {
      title: "Waitlist",
      status: "complete",
      color: "bg-line-400",
    },
    {
      title: "Robinhood Integration",
      status: "In Progress",
      color: "bg-yellow-400",
    },
    {
      title: "Public Launch",
      status: "planned",
      color: "bg-zinc-500",
    },
  ];

  return (
    <section className="border-t border-white/10 bg-black py-28">
      <div className="mx-auto max-w-5xl px-6">

        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Road to Launch
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-white">
          Building, one milestone at a time.
        </h2>

        <div className="mt-20 space-y-8">

          {roadmap.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between border-b border-white/10 pb-6"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-3 w-3 rounded-full ${item.color}`}
                />

                <span className="text-lg text-white">
                  {item.title}
                </span>
              </div>

              <span className="text-zinc-500">
                {item.status}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
