import { NavBar } from '@/components/ui/NavBar'
import { HeroSection } from '@/components/ui/HeroSection'
import { AboutSection } from '@/components/ui/AboutSection'
import { ProjectsSection } from '@/components/ui/ProjectsSection'
import { SkillsSection } from '@/components/ui/SkillsSection'
import { CertificationsSection } from '@/components/ui/CertificationsSection'
import { HardwareSection } from '@/components/ui/HardwareSection'
import { ContactSection } from '@/components/ui/ContactSection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

function SectionWrapper({
  id,
  titleEn,
  titleRu,
  accentClass,
  barClass,
  children,
}: {
  id: string
  titleEn: string
  titleRu?: string
  accentClass: string
  barClass: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className={`w-1 h-8 rounded-full flex-shrink-0 ${barClass}`} />
            <h2 className={`text-3xl sm:text-4xl font-black ${accentClass}`}>
              {titleEn}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <AboutSection />

      <SectionWrapper
        id="projects"
        titleEn="Projects"
        accentClass="text-neon-cyan neon-text"
        barClass="bg-neon-cyan"
      >
        <ProjectsSection />
      </SectionWrapper>

      <SectionWrapper
        id="skills"
        titleEn="Skills"
        accentClass="text-neon-green neon-text-green"
        barClass="bg-neon-green"
      >
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper
        id="certifications"
        titleEn="Certifications"
        accentClass="text-neon-pink"
        barClass="bg-neon-pink"
      >
        <CertificationsSection />
      </SectionWrapper>

      <SectionWrapper
        id="hardware"
        titleEn="Hardware & Repair"
        accentClass="text-neon-purple"
        barClass="bg-neon-purple"
      >
        <HardwareSection />
      </SectionWrapper>

      <ContactSection />
    </main>
  )
}
