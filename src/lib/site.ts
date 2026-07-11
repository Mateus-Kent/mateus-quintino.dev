export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mateus-quintino.dev"

export const siteConfig = {
  name: "Mateus Quintino",
  url: siteUrl,
}

export const navLinks = [
  { href: "#sobre" },
  { href: "#experiencia" },
  { href: "#educacao" },
  { href: "#contato" },
] as const

export const socialLinks = {
  github: "https://github.com/Mateus-Kent",
  linkedin: "https://www.linkedin.com/in/mateusqsantos/",
  email: "mateusquent2003@gmail.com",
  resume: {
    "pt-BR": "/documents/CV_MateusQuintino2026_PTBR.pdf",
    en: "/documents/Recume_MateusQuintino2026_EN.pdf",
  },
} as const
