import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h2 className="text-3xl text-center font-semibold">
        Proyek Saya
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((p) => (
          <div key={p.slug} className="bg-gray-900 p-5 rounded-lg">

            <Image
              src={p.image}
              width={500}
              height={300}
              alt={p.title}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="mt-4 font-bold text-lg">
              {p.title}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {p.desc}
            </p>

            <p className="text-gray-500 mt-3 whitespace-pre-line text-sm">
              {p.content}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}