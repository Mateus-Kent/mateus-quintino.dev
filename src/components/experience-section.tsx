"use client"

import { StackIcon } from "@phosphor-icons/react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import type { ExperienceEntry } from "@/lib/experience"
import { experience } from "@/lib/experience"

const dotVariants = {
  hidden: { borderColor: "var(--border)", backgroundColor: "var(--background)" },
  visible: { borderColor: "var(--accent)", backgroundColor: "var(--accent)" },
}

const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function TimelineItem({ tag, company, role, period, logo, logoAlt, description, tags }: ExperienceEntry) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0% 0% -25% 0%" }}
      className="relative py-5.5 pl-7.5"
    >
      <motion.span
        variants={dotVariants}
        transition={{ duration: 0.2 }}
        className="absolute top-6.5 -left-1.75 z-10 h-3 w-3 rounded-full border-2"
      />

      <motion.div
        variants={contentVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-3.5"
      >
        <span className="inline-block w-fit rounded bg-accent-soft px-2.5 py-0.75 font-mono text-xs text-accent">
          {tag}
        </span>

        <div className="flex items-start gap-4">
          <Image
            src={logo}
            alt={logoAlt}
            width={52}
            height={52}
            className="shrink-0 rounded-xl border border-border bg-background-alt object-cover"
          />
          <div className="flex min-w-0 flex-1 flex-col gap-0.75">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-heading text-lg font-semibold text-foreground">{company}</h3>
              <span className="font-mono text-xs text-foreground-muted whitespace-nowrap">{period}</span>
            </div>
            <div className="text-sm text-foreground-muted">{role}</div>
          </div>
        </div>

        <p className="max-w-[56ch] text-sm text-foreground-muted">{description}</p>

        <div className="flex flex-wrap gap-1.75">
          {tags.map((t) => (
            <span key={t} className="rounded-[5px] border border-border px-2.5 py-1 text-xs text-foreground-muted">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.75"],
  })
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <Section id="experiencia">
      <Reveal>
        <SectionHeading icon={<StackIcon size={19} />} title="Experiência" />
      </Reveal>

      <div ref={trackRef} className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-border" />
        <motion.div className="absolute top-0 left-0 w-0.5 bg-accent" style={{ height: fillHeight }} />

        <div className="flex flex-col-reverse">
          {experience.map((entry) => (
            <TimelineItem key={`${entry.company}-${entry.tag}`} {...entry} />
          ))}
        </div>
      </div>
    </Section>
  )
}
