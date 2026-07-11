import { GraduationCapIcon } from "@phosphor-icons/react/ssr"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import type { EducationEntry } from "@/lib/education"
import { education } from "@/lib/education"

function EducationItem({
  title,
  org,
  period,
  description,
  logo,
  logoAlt,
  isFirst,
}: {
  title: string
  org: string
  period: string
  description: string
  logo?: string
  logoAlt?: string
  isFirst: boolean
}) {
  return (
    <div className={`flex gap-4.5 py-5 ${isFirst ? "" : "border-t border-border"}`}>
      <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-background-alt">
        {logo ? (
          <Image src={logo} alt={logoAlt ?? title} width={38} height={38} className="h-full w-full object-cover" />
        ) : (
          <GraduationCapIcon size={19} className="text-accent" />
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
        <div className="font-mono text-xs text-foreground-muted">
          {org} · {period}
        </div>
        <p className="max-w-[56ch] text-sm text-foreground-muted">{description}</p>
      </div>
    </div>
  )
}

export async function EducationSection() {
  const t = await getTranslations("education")

  return (
    <Section id="educacao">
      <Reveal>
        <SectionHeading icon={<GraduationCapIcon size={19} />} title={t("title")} />
      </Reveal>

      <div>
        {education.map((entry: EducationEntry, index) => (
          <Reveal key={entry.id} delay={index * 0.05}>
            <EducationItem
              title={t(`entries.${entry.id}.title`)}
              org={t(`entries.${entry.id}.org`)}
              period={t(`entries.${entry.id}.period`)}
              description={t(`entries.${entry.id}.description`)}
              logo={entry.logo}
              logoAlt={entry.logoAlt}
              isFirst={index === 0}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
