const items = [
  "Travel Management",
  "Inbox & Email",
  "Calendar & Scheduling",
  "Data Entry",
  "Research",
  "Executive Support",
]

export function Marquee() {
  return (
    <div className="border-y border-border bg-foreground py-4 text-background">
      <div className="flex items-center gap-4 overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-4">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-4 whitespace-nowrap font-display text-lg font-bold">
              {item}
              <span className="text-accent" aria-hidden="true">
                {"//"}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
