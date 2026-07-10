import {
  EnvelopeSimpleIcon,
  FileArrowDownIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react/ssr"
import type { ComponentType } from "react"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { socialLinks } from "@/lib/site"

const contactCards: {
  label: string
  icon: ComponentType<{ size?: number }>
  href: string
  external?: boolean
  download?: string
}[] = [
  { label: "E-mail", icon: EnvelopeSimpleIcon, href: `mailto:${socialLinks.email}` },
  { label: "LinkedIn", icon: LinkedinLogoIcon, href: socialLinks.linkedin, external: true },
  { label: "Github", icon: GithubLogoIcon, href: socialLinks.github, external: true },
  { label: "Currículo", icon: FileArrowDownIcon, href: socialLinks.resume, download: "Mateus_Quintino_CV.pdf" },
]

export function ContactSection() {
  return (
    <Section id="contato">
      <Reveal>
        <SectionHeading icon={<PaperPlaneTiltIcon size={19} />} title="Contato" />
      </Reveal>

      <Reveal delay={0.05} className="flex flex-wrap items-center justify-between gap-8">
        <p className="max-w-[24ch] font-heading text-2xl font-semibold tracking-tight text-foreground">
          Aberto a novas oportunidades e conversas.
        </p>

        <div className="flex flex-wrap gap-4">
          {contactCards.map(({ label, icon: Icon, href, external, download }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              download={download}
              className="group flex w-22 flex-col items-center gap-2.5 rounded-[14px] border border-border bg-background-alt px-2.5 py-4.5 transition-transform hover:-translate-y-1 hover:border-accent hover:bg-accent-soft"
            >
              <span className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                <Icon size={20} />
              </span>
              <span className="text-center text-xs text-foreground-muted group-hover:text-accent">{label}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
