export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
}) {
  return (
    <div>
      <span className="text-lime text-xs font-black tracking-[0.16em] uppercase">{eyebrow}</span>
      <h2 className="font-display mt-4 mb-6 text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.95] font-bold tracking-[-0.045em] text-balance">
        {title}
      </h2>
      {lead ? <p className="max-w-[720px] text-lg leading-relaxed text-muted text-pretty">{lead}</p> : null}
    </div>
  )
}
