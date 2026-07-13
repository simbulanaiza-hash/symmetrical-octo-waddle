const tools = [
  { name: "Google Workspace", slug: "google-workspace", use: "Email, files & collaboration" },
  { name: "Calendly", slug: "calendly", use: "Meeting scheduling" },
  { name: "Notion", slug: "notion", use: "Documentation & planning" },
  { name: "Trello", slug: "trello", use: "Task management" },
  { name: "ChatGPT", slug: "openai", use: "AI-assisted workflows" },
  { name: "Gemini", slug: "google-gemini", use: "Research & AI support" },
  { name: "Claude", slug: "claude", use: "Analysis & writing" },
  { name: "Booking.com", slug: "booking-com", use: "Travel reservations" },
  { name: "Microsoft 365", slug: "microsoft-365", use: "Office productivity" },
  { name: "Slack", slug: "slack", use: "Team communication" },
  { name: "Zoom", slug: "zoom", use: "Virtual meetings" },
]

export function Tools() {
  return (
    <section id="tools" className="border-y border-border bg-card px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">My toolkit</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-6xl">
            Tools I use to keep work moving.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Familiar with the platforms modern teams rely on for communication, planning, travel, research, and daily operations.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool) => (
            <li
              key={tool.name}
              className="flex min-h-36 flex-col justify-between rounded-2xl border border-border bg-background p-5 transition-transform hover:-translate-y-1"
            >
              <img
                src={`https://thesvg.org/icons/${tool.slug}/default.svg`}
                alt={`${tool.name} logo`}
                width="32"
                height="32"
                className="size-8 object-contain object-left"
                loading="lazy"
              />
              <div className="mt-6">
                <h3 className="font-display text-base font-bold">{tool.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tool.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
