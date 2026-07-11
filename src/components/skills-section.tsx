import { DatabaseIcon, GlobeIcon, LayoutIcon, ToolboxIcon } from "@phosphor-icons/react/ssr"
import { getTranslations } from "next-intl/server"
import type { ComponentType } from "react"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import type { SkillGroup } from "@/lib/skills"
import { skillGroups } from "@/lib/skills"

const groupIcons: Record<SkillGroup["icon"], ComponentType<{ size?: number; className?: string }>> = {
  layout: LayoutIcon,
  database: DatabaseIcon,
  globe: GlobeIcon,
}

export async function SkillsSection() {
  const t = await getTranslations("skills")

  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading icon={<ToolboxIcon size={19} />} title={t("title")} />
      </Reveal>

      <Reveal delay={0.05} className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.icon]
          return (
            <div key={group.icon} className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-foreground-muted">
                <Icon size={16} className="text-accent" />
                {t(`groupLabels.${group.icon}`)}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-border px-3 py-1.5 text-sm">
                    {group.icon === "globe" ? t(`languages.${item}` as "languages.pt" | "languages.en") : item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </Reveal>
    </Section>
  )
}
