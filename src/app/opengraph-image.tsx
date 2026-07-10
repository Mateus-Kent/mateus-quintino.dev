import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const runtime = "edge"
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
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
        Fullstack por completo: interfaces, APIs e dados que funcionam juntos.
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
