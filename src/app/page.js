import Hero from "../components/Hero/Hero";
import CurrentlyBuilding from "../components/CurrentlyBuilding/CurrentlyBuilding";
import Research from "../components/Research/Research";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CurrentlyBuilding />
      <Research />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
