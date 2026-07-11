import { UserIcon } from "@phosphor-icons/react/ssr"
import { getTranslations } from "next-intl/server"
import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-foreground">{children}</strong>
}

export async function AboutSection() {
  const t = await getTranslations("about")
  const highlight = (chunks: ReactNode) => <Highlight>{chunks}</Highlight>

  return (
    <Section id="sobre">
      <Reveal>
        <SectionHeading icon={<UserIcon size={19} />} title={t("title")} />
      </Reveal>

      <Reveal delay={0.05} className="flex flex-col gap-3.5 text-base text-foreground-muted">
        <p>{t.rich("paragraph1", { highlight })}</p>
        <p>{t.rich("paragraph2", { highlight })}</p>
        <p>{t("paragraph3")}</p>
      </Reveal>
    </Section>
  )
}
