import { Plane, Mail, CalendarClock, Database, Search } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Travel Management",
    description: "End-to-end trip planning — flights, hotels, itineraries, and logistics coordinated seamlessly.",
  },
  {
    icon: Mail,
    title: "Inbox & Email Management",
    description: "A clean, prioritized inbox. I filter, respond, flag, and keep your communication on track.",
  },
  {
    icon: CalendarClock,
    title: "Schedule & Calendar Management",
    description: "Meetings, reminders, and time blocks organized so your days run without conflicts.",
  },
  {
    icon: Database,
    title: "Data Entry",
    description: "Accurate, well-structured records and spreadsheets you can actually rely on.",
  },
  {
    icon: Search,
    title: "Research",
    description: "Thorough, well-organized research that turns questions into clear, actionable answers.",
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">What I do</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
              Services that give you time back
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">
            A full suite of executive and administrative support, tailored to how you work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group flex flex-col rounded-3xl border border-border bg-card p-8 transition-colors hover:border-accent ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{service.description}</p>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-3xl bg-foreground p-8 text-background">
            <h3 className="font-display text-2xl font-extrabold text-balance">Need something else?</h3>
            <p className="mt-2 leading-relaxed text-background/70 text-pretty">
              Let&apos;s talk about the tasks slowing you down.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
