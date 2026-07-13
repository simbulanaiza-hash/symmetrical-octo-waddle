import { ArrowUpRight, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span className="flex size-2 rounded-full bg-accent" aria-hidden="true" />
          Available for new clients
        </div>

        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl">
          Executive &amp; Admin
          <br />
          <span className="text-accent">Virtual Assistant</span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {
              "I'm Aiza Simbulan — I help busy founders and executives reclaim their time by running their inbox, calendar, travel, and day-to-day operations with precision."
            }
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <MapPin className="size-4 text-accent" />
              Based in the Philippines
            </div>
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Let&apos;s work together
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
