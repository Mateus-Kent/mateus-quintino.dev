import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import messages from "../../messages/pt-BR.json"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: messages.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fcfcfa",
    theme_color: "#0c0c0f",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
