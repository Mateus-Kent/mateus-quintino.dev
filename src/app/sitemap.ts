import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? siteUrl : `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: {
        "pt-BR": siteUrl,
        en: `${siteUrl}/en`,
      },
    },
  }))
}
