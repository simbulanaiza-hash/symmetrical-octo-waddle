import { Mail, Phone, ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl rounded-4xl bg-foreground px-6 py-16 text-background md:px-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get in touch</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-6xl">
          Let&apos;s take the busywork off your plate.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/70 text-pretty">
          Ready to reclaim your time? Reach out and let&apos;s talk about how I can support you and your team.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-4">
          <a
            href="mailto:simbulanaiza@gmail.com"
            className="group flex items-center justify-between rounded-2xl border border-background/15 p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Mail className="size-5" />
              </div>
              <div>
                <div className="text-sm text-background/60">Email</div>
                <div className="font-semibold">simbulanaiza@gmail.com</div>
              </div>
            </div>
            <ArrowUpRight className="size-5 text-background/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </a>

          <a
            href="tel:+639652959036"
            className="group flex items-center justify-between rounded-2xl border border-background/15 p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Phone className="size-5" />
              </div>
              <div>
                <div className="text-sm text-background/60">Mobile</div>
                <div className="font-semibold">0965 295 9036</div>
              </div>
            </div>
            <ArrowUpRight className="size-5 text-background/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
