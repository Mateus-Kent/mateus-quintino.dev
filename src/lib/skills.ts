export type SkillGroup = {
  icon: "layout" | "database" | "globe"
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    icon: "layout",
    label: "Frontend",
    items: ["React", "Angular", "TypeScript", "MUI Joy UI", "Material UI"],
  },
  {
    icon: "database",
    label: "Backend & infra",
    items: [".NET", "Node / Express", "NestJS", "GraphQL", "PostgreSQL", "MySQL", "Docker", "Sentry"],
  },
  {
    icon: "globe",
    label: "Idiomas",
    items: ["Português – nativo", "Inglês – avançado B2.2"],
  },
]
