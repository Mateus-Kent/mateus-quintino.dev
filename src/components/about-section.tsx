import { UserIcon } from "@phosphor-icons/react/ssr"
import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-foreground">{children}</strong>
}

export function AboutSection() {
  return (
    <Section id="sobre">
      <Reveal>
        <SectionHeading icon={<UserIcon size={19} />} title="Sobre" />
      </Reveal>

      <Reveal delay={0.05} className="flex flex-col gap-3.5 text-base text-foreground-muted">
        <p>
          Sou desenvolvedor <Highlight>Full Stack</Highlight> com experiência no desenvolvimento de software para
          grandes empresas do setor de logística e, atualmente, atuo na <Highlight>Leapfone</Highlight>, startup de
          aluguel de smartphones, focado na construção de aplicações escaláveis.
        </p>
        <p>
          Tenho experiência no desenvolvimento de aplicações frontend e backend utilizando <Highlight>React</Highlight>,{" "}
          <Highlight>TypeScript</Highlight>, <Highlight>Angular</Highlight>, <Highlight>Node.js</Highlight>,{" "}
          <Highlight>Express</Highlight>, <Highlight>NestJS</Highlight>, <Highlight>GraphQL</Highlight>,{" "}
          <Highlight>.NET</Highlight> e <Highlight>PostgreSQL</Highlight>, além de trabalhar com bibliotecas como{" "}
          <Highlight>MUI Joy UI</Highlight> e ferramentas de monitoramento e observabilidade, como{" "}
          <Highlight>Sentry</Highlight>.
        </p>
        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas e busco aplicar boas práticas de arquitetura, código
          limpo e desenvolvimento de software para entregar soluções robustas, eficientes e de alta qualidade.
        </p>
      </Reveal>
    </Section>
  )
}
