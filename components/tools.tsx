import Image from "next/image"

const tools = [
  {
    name: "Google Workspace",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-workspace/default.svg",
    category: "Productivity",
  },
  {
    name: "Microsoft 365",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/microsoft-365-copilot/default.svg",
    category: "Productivity",
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/notion/default.svg",
    category: "Productivity",
  },
  {
    name: "Trello",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/trello/default.svg",
    category: "Project Management",
  },
  {
    name: "Calendly",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/calendly/default.svg",
    category: "Scheduling",
  },
  {
    name: "Slack",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/slack/default.svg",
    category: "Communication",
  },
  {
    name: "Zoom",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/zoom/default.svg",
    category: "Communication",
  },
  {
    name: "Booking.com",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/bookingdotcom/default.svg",
    category: "Travel",
  },
  {
    name: "ChatGPT",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai/default.svg",
    category: "AI",
  },
  {
    name: "Gemini",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-gemini/default.svg",
    category: "AI",
  },
  {
    name: "Claude",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/claude-ai/default.svg",
    category: "AI",
  },
]

export function Tools() {
  return (
    <section id="tools" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">My toolkit</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
          Tools I work with
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          I stay up to date with the platforms and apps that keep modern executives and businesses running smoothly.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 transition-shadow hover:shadow-md"
            >
              <div className="flex size-14 items-center justify-center rounded-xl bg-secondary p-2">
                <img
                  src={tool.icon}
                  alt={tool.name + " logo"}
                  width={40}
                  height={40}
                  className="size-10 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground leading-tight">{tool.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
