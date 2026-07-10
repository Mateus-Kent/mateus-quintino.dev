"use client"

import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full border border-border bg-background-alt" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Alternar para tema claro" : "Alternar para tema escuro"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background-alt text-accent transition-colors hover:border-accent"
    >
      {isDark ? <SunIcon size={17} /> : <MoonStarsIcon size={17} />}
    </button>
  )
}
