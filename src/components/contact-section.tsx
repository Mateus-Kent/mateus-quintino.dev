import {
  EnvelopeSimpleIcon,
  FileArrowDownIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react/ssr"
import { getLocale, getTranslations } from "next-intl/server"
import type { ComponentType } from "react"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { socialLinks } from "@/lib/site"

export async function ContactSection() {
  const t = await getTranslations("contact")
  const locale = (await getLocale()) as keyof typeof socialLinks.resume
  const resumeHref = socialLinks.resume[locale] ?? socialLinks.resume["pt-BR"]

  const contactCards: {
    key: "email" | "linkedin" | "github" | "resume"
    icon: ComponentType<{ size?: number }>
    href: string
    external?: boolean
    download?: string
  }[] = [
    { key: "email", icon: EnvelopeSimpleIcon, href: `mailto:${socialLinks.email}` },
    { key: "linkedin", icon: LinkedinLogoIcon, href: socialLinks.linkedin, external: true },
    { key: "github", icon: GithubLogoIcon, href: socialLinks.github, external: true },
    {
      key: "resume",
      icon: FileArrowDownIcon,
      href: resumeHref,
      download: locale === "en" ? "Mateus_Quintino_CV_EN.pdf" : "Mateus_Quintino_CV_PTBR.pdf",
    },
  ]

  return (
    <Section id="contato">
      <Reveal>
        <SectionHeading icon={<PaperPlaneTiltIcon size={19} />} title={t("title")} />
      </Reveal>

      <Reveal delay={0.05} className="flex flex-wrap items-center justify-between gap-8">
        <p className="max-w-[24ch] font-heading text-2xl font-semibold tracking-tight text-foreground">
          {t("tagline")}
        </p>

        <div className="flex flex-wrap gap-4">
          {contactCards.map(({ key, icon: Icon, href, external, download }) => (
            <a
              key={key}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              download={download}
              className="group flex w-22 flex-col items-center gap-2.5 rounded-[14px] border border-border bg-background-alt px-2.5 py-4.5 transition-transform hover:-translate-y-1 hover:border-accent hover:bg-accent-soft"
            >
              <span className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                <Icon size={20} />
              </span>
              <span className="text-center text-xs text-foreground-muted group-hover:text-accent">
                {t(`cards.${key}`)}
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
