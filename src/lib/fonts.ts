import { IBM_Plex_Mono, Inter, Sora } from "next/font/google";

/**
 * Sora stands in for "Ora" (geometric display font used for headings,
 * marca and destaques). Swap to next/font/local with the real Ora files
 * when available — only this loader needs to change, the --font-heading
 * variable and font-heading Tailwind utility stay the same.
 */
export const fontHeading = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
