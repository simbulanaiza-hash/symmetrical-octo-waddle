import Image from "next/image"

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border">
            <Image
              src="/aiza.png"
              alt="Aiza Simbulan, Executive and Admin Virtual Assistant, in a charcoal blazer"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -right-4 rounded-2xl bg-accent px-6 py-4 text-accent-foreground shadow-lg">
            <div className="font-display text-3xl font-extrabold leading-none">100%</div>
            <div className="text-xs font-medium">Reliable &amp; organized</div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About me</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            The details are handled, so you can lead.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              I&apos;m Aiza Simbulan, an Executive &amp; Admin Virtual Assistant based in the Philippines. I partner with
              founders, executives, and small teams to keep their operations running smoothly behind the scenes.
            </p>
            <p>
              From coordinating complex travel and taming overflowing inboxes to managing calendars and organizing data,
              I bring structure and calm to the busiest schedules — so nothing slips through the cracks.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <dt className="text-sm text-muted-foreground">Focus</dt>
              <dd className="mt-1 font-display text-xl font-bold">Executive Support</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Based in</dt>
              <dd className="mt-1 font-display text-xl font-bold">Philippines</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
