export default function Features() {
  const features = [
    {
      number: "01",
      title: "Built for Robinhood",
      description:
        "Purpose-built for projects launching within the Robinhood ecosystem.",
    },
    {
      number: "02",
      title: "Community First",
      description:
        "Everyone gets the same opportunity to participate from day one.",
    },
    {
      number: "03",
      title: "Transparent",
      description:
        "No hidden allocations. No unfair advantages.",
    },
  ];

  return (
    <section id="features" className="scroll-mt-20 border-t border-white/10 bg-black py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Why Kyven
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-semibold text-white">
            Built for the next generation of launches.
          </h2>
        </div>

        <div className="space-y-12">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="border-t border-white/10 pt-10"
            >
              <p className="text-sm text-[#C8FF3D]">
                {feature.number}
              </p>

              <h3 className="mt-3 text-2xl font-medium text-white">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-xl leading-8 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}