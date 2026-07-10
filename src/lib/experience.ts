export type ExperienceEntry = {
  tag: string
  company: string
  role: string
  period: string
  logo: string
  logoAlt: string
  description: string
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    tag: "frontend jr.",
    company: "Guep Technology S/A",
    role: "Desenvolvedor Frontend Jr.",
    period: "fev 2022 – out 2023",
    logo: "/images/guep_logo.svg",
    logoAlt: "Guep Technology",
    description:
      "Desenvolvimento de interfaces com Angular e TypeScript, com foco em componentes reutilizáveis, integração de APIs e usabilidade em sistemas de grande escala.",
    tags: ["Angular", "TypeScript", "Angular Material"],
  },
  {
    tag: "backend jr.",
    company: "Guep Technology S/A",
    role: "Desenvolvedor Backend Jr.",
    period: "out 2023 – out 2024",
    logo: "/images/guep_logo.svg",
    logoAlt: "Guep Technology",
    description:
      "Desenvolvimento e manutenção de sistemas como o Score (cadastro de motoristas), Kavuka (histórico de motoristas), Backoffice e Processo Limpo, com Node, Express, Sequelize e Redis.",
    tags: ["Node", "Express", "Sequelize", "Redis"],
  },
  {
    tag: "fullstack pleno",
    company: "Leapfone",
    role: "Desenvolvedor Fullstack Pleno",
    period: "abr 2025 – presente",
    logo: "/images/leapfone_logo.svg",
    logoAlt: "Leapfone",
    description:
      "Front-end com React, TypeScript e MUI Joy UI integrado via GraphQL, back-end em .NET e PostgreSQL com APIs REST e gRPC, aplicando DDD e Clean Code. Containerização com Docker e observabilidade com Sentry.",
    tags: ["React", ".NET", "GraphQL", "PostgreSQL", "Docker"],
  },
]
