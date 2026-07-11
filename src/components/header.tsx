import { CodeIcon } from "@phosphor-icons/react/ssr"
import { getTranslations } from "next-intl/server"
import { Container } from "@/components/container"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks } from "@/lib/site"

export async function Header() {
  const t = await getTranslations("nav")

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-4.5">
        <a
          href="#top"
          className="flex items-center gap-2 font-heading text-base font-semibold tracking-tight text-foreground"
        >
          <CodeIcon size={18} className="text-accent" />
          Mateus Quintino
        </a>

        <div className="flex items-center gap-5.5">
          <nav className="hidden items-center gap-6.5 text-sm text-foreground-muted min-[560px]:flex">
            {navLinks.map((link) => {
              const slug = link.href.slice(1) as "sobre" | "experiencia" | "educacao" | "contato"
              return (
                <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
                  {t(slug)}
                </a>
              )
            })}
          </nav>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
