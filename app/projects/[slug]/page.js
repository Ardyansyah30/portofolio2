import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="p-10 text-white">Project tidak ditemukan</div>;
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen px-6 md:px-20 py-10">

      {/* BACK BUTTON */}
      <Link href="/" className="text-gray-400 hover:text-white">
        ← Kembali
      </Link>

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold mt-6">
        {project.title}
      </h1>

      <p className="text-gray-400 mt-2">{project.desc}</p>

      {/* IMAGE */}
      <div className="mt-8">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* TECH STACK */}
      <div className="mt-6 flex flex-wrap gap-3">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-800 px-4 py-2 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CONTENT */}
      <div className="mt-8 text-gray-300 whitespace-pre-line leading-relaxed">
        {project.content}
      </div>

    </main>
  );
}