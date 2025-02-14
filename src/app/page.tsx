import Hero from "@/components/hero";
import AboutPage from "./about/page";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
