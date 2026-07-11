# Graph Report - .  (2026-07-11)

## Corpus Check
- 50 files · ~51,184 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 248 nodes · 296 edges · 26 communities (11 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.9)
- Token cost: 268,165 input · 0 output

## Community Hubs (Navigation)
- App Shell & Layout
- Biome Config Values
- Portfolio Page Sections
- Profile & Tech Stack
- TypeScript Compiler Options
- Dev Dependencies
- Runtime Dependencies
- NPM Scripts
- Site Preview Screenshot
- TS Project References
- Biome Linter Rules
- Caveman Mode Skill
- ITB Institution Logo
- Next.js Config
- PostCSS Config
- Fecap Institution Logo
- Fiap Institution Logo
- Guep Institution Logo
- International House Logo
- Leapfone Company Logo
- README Header Banner
- App Icon 192x192
- App Icon 512x512
- Apple Touch Icon
- Favicon 16x16
- Favicon 32x32

## God Nodes (most connected - your core abstractions)
1. `Mateus Quintino (CV)` - 17 edges
2. `compilerOptions` - 16 edges
3. `Portfolio Website` - 10 edges
4. `formatter` - 9 edges
5. `scripts` - 8 edges
6. `include` - 7 edges
7. `Mateus Quintino Portfolio Homepage` - 7 edges
8. `Reveal()` - 6 edges
9. `SectionHeading()` - 6 edges
10. `Section()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Mateus Quintino (CV)` --semantically_similar_to--> `Mateus Quintino`  [INFERRED] [semantically similar]
  public/documents/CV2026.pdf → README.md
- `React (CV skill)` --semantically_similar_to--> `React`  [INFERRED] [semantically similar]
  public/documents/CV2026.pdf → README.md
- `TypeScript (CV skill)` --semantically_similar_to--> `TypeScript`  [INFERRED] [semantically similar]
  public/documents/CV2026.pdf → README.md
- `pnpm` --conceptually_related_to--> `sharp (allowed build dependency)`  [INFERRED]
  README.md → pnpm-workspace.yaml

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Leapfone Backend Stack** — public_documents_cv2026_dotnet, public_documents_cv2026_postgresql, public_documents_cv2026_docker, public_documents_cv2026_sentry [EXTRACTED 0.85]
- **Portfolio Frontend Stack** — readme_nextjs, readme_react, readme_typescript, readme_tailwindcss [EXTRACTED 0.90]

## Communities (26 total, 15 thin omitted)

### Community 0 - "App Shell & Layout"
Cohesion: 0.08
Nodes (19): metadata, personJsonLd, techSkills, viewport, size, Container(), Footer(), Header() (+11 more)

### Community 1 - "Biome Config Values"
Cohesion: 0.06
Nodes (33): source, assist, actions, enabled, css, parser, files, ignoreUnknown (+25 more)

### Community 2 - "Portfolio Page Sections"
Cohesion: 0.13
Nodes (18): AboutSection(), contactCards, ContactSection(), EducationSection(), contentVariants, dotVariants, ExperienceSection(), Reveal() (+10 more)

### Community 3 - "Profile & Tech Stack"
Cohesion: 0.07
Nodes (29): sharp (allowed build dependency), Angular, Docker, .NET, Fecap, FIAP + Alura Pós Tech - AI Scientist, GraphQL, Guep Technology S/A (+21 more)

### Community 4 - "TypeScript Compiler Options"
Cohesion: 0.10
Nodes (21): dom, dom.iterable, esnext, ./src/*, compilerOptions, allowJs, esModuleInterop, incremental (+13 more)

### Community 5 - "Dev Dependencies"
Cohesion: 0.13
Nodes (15): @biomejs/biome, devDependencies, @biomejs/biome, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+7 more)

### Community 6 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): framer-motion, next, next-themes, dependencies, framer-motion, next, next-themes, @phosphor-icons/react (+5 more)

### Community 7 - "NPM Scripts"
Cohesion: 0.17
Nodes (11): name, private, scripts, build, dev, format, lint, lint:fix (+3 more)

### Community 8 - "Site Preview Screenshot"
Cohesion: 0.22
Nodes (11): Contact Call-to-Action (Email, LinkedIn, Github, Curriculo), Dark Mode UI Design, Experience Timeline Component, Guep Technology S/A, Leapfone (current employer), Mateus Quintino, Navigation Sections (sobre, experiencia, educacao, contato), Mateus Quintino Portfolio Homepage (+3 more)

### Community 9 - "TS Project References"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 10 - "Biome Linter Rules"
Cohesion: 0.29
Nodes (7): next, react, linter, domains, enabled, rules, preset

## Knowledge Gaps
- **131 isolated node(s):** `$schema`, `enabled`, `clientKind`, `useIgnoreFile`, `ignoreUnknown` (+126 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Dependencies` to `NPM Scripts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `NPM Scripts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `TS Project References`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `$schema`, `enabled`, `clientKind` to the rest of the system?**
  _131 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Should `Biome Config Values` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._
- **Should `Portfolio Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.1265597147950089 - nodes in this community are weakly interconnected._