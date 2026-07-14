export function Tools() {
  const tools = [
    { name: "Google Workspace", category: "Productivity" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Calendly", category: "Scheduling" },
    { name: "Notion", category: "Organization" },
    { name: "Trello", category: "Project Management" },
    { name: "Slack", category: "Communication" },
    { name: "Zoom", category: "Communication" },
    { name: "ChatGPT", category: "AI Assistant" },
    { name: "Gemini", category: "AI Assistant" },
    { name: "Claude", category: "AI Assistant" },
    { name: "Booking.com", category: "Travel" },
  ]

  const categories = Array.from(new Set(tools.map((t) => t.category)))

  return (
    <section id="tools" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          My toolkit
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-6xl">
          Tools & platforms I use daily
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          I&apos;m proficient with a modern suite of productivity, communication, and
          AI tools to deliver seamless support and drive efficiency.
        </p>

        <div className="mt-16 space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-5 font-display text-xl font-bold text-foreground">
                {category}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tools
                  .filter((t) => t.category === category)
                  .map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-lg border border-border bg-secondary px-5 py-4 transition-all hover:border-accent hover:bg-background"
                    >
                      <p className="font-medium text-foreground">{tool.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
