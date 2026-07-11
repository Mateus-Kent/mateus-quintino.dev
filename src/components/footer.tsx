import { getTranslations } from "next-intl/server"
import { Container } from "@/components/container"
import { siteConfig } from "@/lib/site"

export async function Footer() {
  const t = await getTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border pt-6.5 pb-14 text-xs text-foreground-muted">
      <Container className="flex flex-wrap justify-between gap-2">
        <span>
          {siteConfig.name} — {t("role")}
        </span>
        <span>© {year}</span>
      </Container>
    </footer>
  )
}
