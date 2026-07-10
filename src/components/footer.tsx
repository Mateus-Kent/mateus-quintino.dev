import { Container } from "@/components/container"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border pt-6.5 pb-14 text-xs text-foreground-muted">
      <Container className="flex flex-wrap justify-between gap-2">
        <span>{siteConfig.name} — fullstack developer</span>
        <span>© {year}</span>
      </Container>
    </footer>
  )
}
