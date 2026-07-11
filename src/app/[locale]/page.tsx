import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Container } from "@/components/container"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { Hero } from "@/components/hero"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Container>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </Container>
    </main>
  )
}
