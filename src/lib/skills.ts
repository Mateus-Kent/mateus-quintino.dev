export type SkillGroup = {
  icon: "layout" | "database" | "globe"
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    icon: "layout",
    items: ["React", "Angular", "TypeScript", "MUI Joy UI", "Material UI"],
  },
  {
    icon: "database",
    items: [".NET", "Node / Express", "NestJS", "GraphQL", "PostgreSQL", "MySQL", "Docker", "Sentry"],
  },
  {
    icon: "globe",
    items: ["pt", "en"],
  },
]
