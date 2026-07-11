export type ExperienceEntry = {
  id: "guep-frontend" | "guep-backend" | "leapfone"
  tag: string
  company: string
  logo: string
  logoAlt: string
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: "guep-frontend",
    tag: "frontend jr.",
    company: "Guep Technology S/A",
    logo: "/images/guep_logo.svg",
    logoAlt: "Guep Technology",
    tags: ["Angular", "TypeScript", "Angular Material"],
  },
  {
    id: "guep-backend",
    tag: "backend jr.",
    company: "Guep Technology S/A",
    logo: "/images/guep_logo.svg",
    logoAlt: "Guep Technology",
    tags: ["Node", "Express", "Sequelize", "Redis"],
  },
  {
    id: "leapfone",
    tag: "fullstack pleno",
    company: "Leapfone",
    logo: "/images/leapfone_logo.svg",
    logoAlt: "Leapfone",
    tags: ["React", ".NET", "GraphQL", "PostgreSQL", "Docker"],
  },
]
