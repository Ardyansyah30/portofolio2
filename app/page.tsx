import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Education from "../components/Education";

export default function Home() {
  return (
    <main className="relative bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-20 h-72 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl -z-10" />

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <TechStack />
      <Contact />
      <Education />
    </main>
  );
}
