import type { Metadata, Viewport } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { ThemeProvider } from "@/components/theme-provider"
import { fontBody, fontHeading, fontMono } from "@/lib/fonts"
import { siteConfig, siteUrl, socialLinks } from "@/lib/site"
import { skillGroups } from "@/lib/skills"
import "./globals.css"

const techSkills = skillGroups.filter((group) => group.icon !== "globe").flatMap((group) => group.items)
const languages = skillGroups.find((group) => group.icon === "globe")?.items ?? []

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteUrl,
  jobTitle: siteConfig.role,
  email: `mailto:${socialLinks.email}`,
  sameAs: [socialLinks.linkedin, socialLinks.github],
  worksFor: {
    "@type": "Organization",
    name: "Leapfone",
  },
  knowsAbout: techSkills,
  knowsLanguage: languages.map((language) => ({
    "@type": "Language",
    name: language.split(" – ")[0],
  })),
}

const shareTitle = `${siteConfig.name} — ${siteConfig.role}`

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0f" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: shareTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mateus Quintino",
    "desenvolvedor fullstack",
    "desenvolvedor react",
    "desenvolvedor .net",
    "engenheiro de software",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: shareTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <JsonLd data={personJsonLd} />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
