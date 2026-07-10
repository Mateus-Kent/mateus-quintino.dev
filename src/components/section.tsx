import type { ReactNode } from "react"

export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`flex flex-col gap-9 border-t border-border py-16 ${className}`}>
      {children}
    </section>
  )
}
