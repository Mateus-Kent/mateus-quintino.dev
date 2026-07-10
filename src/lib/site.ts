export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mateus-quintino.dev"

export const siteConfig = {
  name: "Mateus Quintino",
  description: "Desenvolvedor fullstack pleno.",
  url: siteUrl,
}

export const navLinks = [
  { href: "#sobre", label: "sobre" },
  { href: "#experiencia", label: "experiência" },
  { href: "#educacao", label: "educação" },
  { href: "#contato", label: "contato" },
] as const

export const socialLinks = {
  github: "https://github.com/Mateus-Kent",
  linkedin: "https://www.linkedin.com/in/mateusqsantos/",
  email: "mateusquent2003@gmail.com",
  resume: "/documents/CV2026.pdf",
} as const
