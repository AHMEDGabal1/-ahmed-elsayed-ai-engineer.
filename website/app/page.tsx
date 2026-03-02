import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { AgencyVision } from "@/components/AgencyVision";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingContact } from "@/components/ui/FloatingContact";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AgencyVision />
        <ExperienceEducation />
        <Contact />
      </main>
      <FloatingContact />
    </>
  );
}

