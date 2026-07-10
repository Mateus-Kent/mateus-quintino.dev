"use client";

import {
  ArrowRightIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex w-full max-w-2xl flex-col gap-6"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
          fullstack pleno
        </span>

        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Mateus Quintino
        </h1>

        <p className="text-lg leading-relaxed text-foreground/80">
          Construo produtos web do frontend ao backend, com foco em performance, acessibilidade e
          boas práticas de engenharia.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="mailto:contato@mateus-quintino.dev"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-mono text-sm text-background transition-opacity hover:opacity-90"
          >
            <EnvelopeSimpleIcon size={18} weight="bold" />
            Fale comigo
            <ArrowRightIcon size={16} weight="bold" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-foreground/15 p-3 transition-colors hover:bg-foreground/5"
          >
            <GithubLogoIcon size={20} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-foreground/15 p-3 transition-colors hover:bg-foreground/5"
          >
            <LinkedinLogoIcon size={20} />
          </a>
        </div>
      </motion.div>
    </main>
  );
}
