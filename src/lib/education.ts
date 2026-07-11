export type EducationEntry = {
  id: "pos-tech" | "ih-dublin" | "fecap" | "itb"
  logo?: string
  logoAlt?: string
}

export const education: EducationEntry[] = [
  {
    id: "pos-tech",
    logo: "/images/fiap_logo.jpeg",
    logoAlt: "FIAP",
  },
  {
    id: "ih-dublin",
    logo: "/images/international_house_logo.jpeg",
    logoAlt: "International House Dublin",
  },
  {
    id: "fecap",
    logo: "/images/fecap_logo.jpeg",
    logoAlt: "Fecap",
  },
  {
    id: "itb",
    logo: "/images/itb_barueri_fieb_logo.jpeg",
    logoAlt: "ITB",
  },
]
