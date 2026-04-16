import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";
import CVViewer from "../components/CVViewer";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen px-6 md:px-20">
      <Navbar />
      <Hero />
      <About />

      <Education />

      <Skills />
      <Experience />
      <Projects />


      <Contact />
    </main>
  );
}