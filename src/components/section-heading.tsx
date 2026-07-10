import type { ReactNode } from "react"

export function SectionHeading({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center text-accent" aria-hidden>
        {icon}
      </span>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
    </div>
  )
}
