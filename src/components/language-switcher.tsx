"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"

const locales = [
  { code: "pt-BR", label: "PT" },
  { code: "en", label: "EN" },
] as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex items-center gap-1 font-mono text-xs text-foreground-muted">
      {locales.map(({ code, label }, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && <span aria-hidden>/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            aria-current={locale === code}
            className={`transition-colors hover:text-accent ${locale === code ? "text-accent" : ""}`}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  )
}
