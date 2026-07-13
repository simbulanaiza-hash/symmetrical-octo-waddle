export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-display text-lg font-extrabold tracking-tight">
          Aiza Simbulan<span className="text-accent">.</span>
        </div>
        <p className="text-sm text-muted-foreground">Executive &amp; Admin Virtual Assistant · Philippines</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aiza Simbulan
        </p>
      </div>
    </footer>
  )
}
