"use client"

import { GithubLogoIcon, LinkedinLogoIcon, TerminalWindowIcon } from "@phosphor-icons/react"
import { motion, type Variants } from "framer-motion"
import { useTranslations } from "next-intl"
import { socialLinks } from "@/lib/site"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
}

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="flex flex-col gap-7 py-16">
      <motion.div
        variants={fadeUp}
        custom={0.05}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-2 font-mono text-xs text-accent"
      >
        <TerminalWindowIcon size={16} />
        {t("eyebrow")}
      </motion.div>

      <motion.h1
        variants={fadeUp}
        custom={0.16}
        initial="hidden"
        animate="visible"
        className="max-w-[16ch] text-[clamp(38px,5.6vw,62px)] font-heading leading-[1.1] font-bold tracking-[-0.02em] text-foreground"
      >
        {t("headline")}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        custom={0.3}
        initial="hidden"
        animate="visible"
        className="max-w-[56ch] text-lg text-foreground-muted"
      >
        {t("paragraph")}
      </motion.p>

      <motion.div variants={fadeUp} custom={0.44} initial="hidden" animate="visible" className="flex flex-wrap gap-3.5">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-5 py-2.75 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          <GithubLogoIcon size={17} />
          {t("cta")}
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.75 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinLogoIcon size={17} />
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}
