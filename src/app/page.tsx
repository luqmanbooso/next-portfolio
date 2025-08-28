import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}