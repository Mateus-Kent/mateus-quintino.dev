import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { ThemeProvider } from "@/components/theme-provider"
import { routing } from "@/i18n/routing"
import { fontBody, fontHeading, fontMono } from "@/lib/fonts"
import { siteConfig, siteUrl, socialLinks } from "@/lib/site"
import { skillGroups } from "@/lib/skills"
import "./globals.css"

const techSkills = skillGroups.filter((group) => group.icon !== "globe").flatMap((group) => group.items)

const languageNames: Record<string, string> = { pt: "Portuguese", en: "English" }

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })
  const shareTitle = `${siteConfig.name} — ${t("role")}`
  const description = t("description")
  const canonical = locale === routing.defaultLocale ? siteUrl : `${siteUrl}/${locale}`

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: shareTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: t.raw("keywords") as string[],
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
      canonical,
      languages: {
        "pt-BR": siteUrl,
        en: `${siteUrl}/en`,
        "x-default": siteUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
      url: canonical,
      siteName: siteConfig.name,
      title: shareTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
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
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0f" },
  ],
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "meta" })
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteUrl,
    jobTitle: t("role"),
    email: `mailto:${socialLinks.email}`,
    sameAs: [socialLinks.linkedin, socialLinks.github],
    worksFor: {
      "@type": "Organization",
      name: "Leapfone",
    },
    knowsAbout: techSkills,
    knowsLanguage: Object.entries(languageNames).map(([, name]) => ({
      "@type": "Language",
      name,
    })),
  }

  return (
    <html
      lang={locale}
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <JsonLd data={personJsonLd} />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
