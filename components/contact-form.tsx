"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const message = String(formData.get("message") ?? "")
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:simbulanaiza@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-background/15 p-10 text-center">
        <CheckCircle2 className="size-12 text-accent" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-bold">Your email is ready</h3>
        <p className="mt-2 text-background/70 text-pretty">
          Your email app has opened with the message addressed to me. Review it and press send to finish.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-background/15 p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-background/70">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-xl border border-background/20 bg-transparent px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-background/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-background/20 bg-transparent px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-background/70">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="resize-none rounded-xl border border-background/20 bg-transparent px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none"
          placeholder="Tell me a little about what you need..."
        />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
      >
        Send message
        <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
