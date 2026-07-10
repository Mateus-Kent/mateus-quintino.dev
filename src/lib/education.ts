export type EducationEntry = {
  title: string
  org: string
  period: string
  description: string
  logo?: string
  logoAlt?: string
}

export const education: EducationEntry[] = [
  {
    title: "Pós Tech – AI Scientist",
    org: "FIAP + Alura",
    period: "mar 2026 – dez 2026",
    description:
      "Programa intensivo de ciência de dados e IA, com machine learning, deep learning, IA generativa, NLP, MLOps e práticas de deploy e monitoramento de modelos.",
    logo: "/images/fiap_logo.jpeg",
    logoAlt: "FIAP",
  },
  {
    title: "International House Dublin",
    org: "Intercâmbio",
    period: "set 2025 – out 2025",
    description: "Estudo de inglês, módulo B2.2, em Dublin.",
    logo: "/images/international_house_logo.jpeg",
    logoAlt: "International House Dublin",
  },
  {
    title: "Fecap – Análise e Desenvolvimento de Sistemas",
    org: "Fecap",
    period: "jan 2022 – dez 2023",
    description:
      "Desenvolvimento de aplicações back-end, web e mobile com C#, JavaScript e Python, além de fundamentos de IoT, análise de dados e machine learning.",
    logo: "/images/fecap_logo.jpeg",
    logoAlt: "Fecap",
  },
  {
    title: "ITB – Técnico em Tecnologia da Informação",
    org: "ITB",
    period: "jan 2019 – dez 2021",
    description: "Lógica de programação, linguagens de programação, sistemas operacionais e banco de dados.",
    logo: "/images/itb_barueri_fieb_logo.jpeg",
    logoAlt: "ITB",
  },
]
