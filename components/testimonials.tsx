import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Aiza took over my inbox and calendar within a week and I never looked back. She anticipates what I need before I ask.",
    name: "Lynette S.",
    role: "Startup Founder",
  },
  {
    quote:
      "Meticulous, reliable, and proactive. The data work she did for us was flawless and saved my team countless hours.",
    name: "Carlos T.",
    role: "Business Owner",
  },
  {
    quote:
      "Our travel planning used to be chaos. Aiza turned it into a calm, organized process with detailed itineraries every time.",
    name: "Cindy D.",
    role: "Traveller",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            What clients say.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-8">
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-pretty">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
