import { ImageResponse } from "next/og"
import { hasLocale } from "next-intl"
import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { siteConfig } from "@/lib/site"

export const runtime = "edge"
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requested } = await params
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
  const t = await getTranslations({ locale, namespace: "hero" })

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0c0c0f",
        color: "#f2f2f4",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 26,
          color: "#9b8cff",
          marginBottom: 28,
        }}
      >
        <span>{"</>"}</span>
        <span>{siteConfig.name}</span>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 900,
          letterSpacing: "-0.02em",
        }}
      >
        {t("headline")}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 36,
          fontSize: 28,
          color: "#8f8f98",
        }}
      >
        React · TypeScript · .NET · GraphQL · PostgreSQL
      </div>
    </div>,
    { ...size },
  )
}
