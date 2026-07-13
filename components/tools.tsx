const tools = [
  { name: "Google Workspace", slug: "google-workspace", use: "Email, files & collaboration" },
  { name: "Calendly", slug: "calendly", use: "Appointment scheduling" },
  { name: "Notion", slug: "notion", use: "Documentation & planning" },
  { name: "Trello", slug: "trello", use: "Task & project tracking" },
  { name: "ChatGPT", slug: "openai", use: "AI-assisted productivity" },
  { name: "Gemini", slug: "google-gemini", use: "Research & content support" },
  { name: "Claude", slug: "claude", use: "Analysis & writing support" },
  { name: "Booking.com", slug: "bookingdotcom", use: "Travel reservations" },
  { name: "Microsoft 365", slug: "microsoft-365", use: "Documents & administration" },
  { name: "Slack", slug: "slack", use: "Team communication" },
  { name: "Zoom", slug: "zoom", use: "Virtual meetings" },
]

export function Tools() {
  return (
    <section id="tools" className="border-y border-border bg-card px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">My toolkit</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
              Tools I use to keep work moving
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground text-pretty">
            Familiar platforms for organized communication, scheduling, research, travel, and collaboration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <article
              key={tool.name}
              className={`group flex min-h-44 flex-col justify-between border-b border-r border-border p-5 transition-colors hover:bg-accent/10 md:p-6 ${
                index === tools.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-background p-2.5 ring-1 ring-border transition-transform group-hover:-translate-y-1">
                <img
                  src={`https://thesvg.org/icons/${tool.slug}/default.svg`}
                  alt=""
                  width="28"
                  height="28"
                  loading="lazy"
                  className="size-7 object-contain"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold">{tool.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tool.use}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
