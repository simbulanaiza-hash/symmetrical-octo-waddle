import Image from "next/image"

const projects = [
  {
    title: "YouTube Channel Setup SOP",
    category: "Process Documentation",
    image: "/portfolio/youtube-sop.png",
    imageAlt: "Standard operating procedure for setting up a branded YouTube channel",
    description:
      "A clear, repeatable SOP covering channel requirements, brand consistency, prerequisites, and step-by-step setup guidance.",
  },
  {
    title: "Three-Month Executive Calendar",
    category: "Calendar Management",
    image: "/portfolio/executive-calendar.png",
    imageAlt: "Three-month executive calendar organized by week, priority focus, and milestones",
    description:
      "A 12-week executive plan organizing discovery, strategy, implementation, reviews, optimization, and handover milestones.",
  },
  {
    title: "UK eCommerce Market Research",
    category: "Research",
    image: "/portfolio/ecommerce-research.png",
    imageAlt: "Research report about operational challenges for UK ecommerce brands",
    description:
      "A focused research brief identifying digital, economic, logistical, financial, and omnichannel challenges affecting small brands.",
  },
  {
    title: "Executive Task Tracker",
    category: "Executive Support",
    image: "/portfolio/executive-task-tracker.png",
    imageAlt: "Executive support and operational task summary spreadsheet",
    description:
      "A detailed operational tracker aligning task categories, priorities, deadlines, assigned tools, required actions, and business impact.",
  },
  {
    title: "Travel Management Meeting Notes",
    category: "Meeting Administration",
    image: "/portfolio/meeting-notes.png",
    imageAlt: "Formal travel management meeting notes with agenda and action items",
    description:
      "Concise meeting minutes documenting attendees, agenda topics, discussion outcomes, operational decisions, and accountable follow-ups.",
  },
  {
    title: "Client Travel Booking Case Study",
    category: "Travel Management",
    image: "/portfolio/travel-case-study.png",
    imageAlt: "Client travel booking case study for a family vacation in Paris",
    description:
      "An end-to-end family travel case covering flights, accommodation, transfers, guided tours, visa support, insurance, and itinerary planning.",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Portfolio</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Sample work built for organized operations.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            A selection of practical documents, trackers, research, and planning systems that demonstrate my executive and administrative support skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-balance">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
