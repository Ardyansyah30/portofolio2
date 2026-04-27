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
    <main className="relative bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* GLOW KIRI */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />

      {/* GLOW KANAN */}
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full -z-10" />

      {/* RADIAL LIGHT (HALUS BANGET) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* CONTENT */}
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