'use client';

import { motion } from "framer-motion";

const techStack = [
  { name: "Node.js", category: "Backend", level: "Advanced", description: "REST API, Express, server architecture" },
  { name: "Express.js", category: "Backend", level: "Advanced", description: "API routing, middleware, performance" },
  { name: "React", category: "Frontend", level: "Advanced", description: "SPA, component design, state management" },
  { name: "Next.js", category: "Frontend", level: "Advanced", description: "SSR, SSG, performance optimization" },
  { name: "JavaScript", category: "Frontend", level: "Advanced", description: "ES6+, DOM, async patterns" },
  { name: "TypeScript", category: "Frontend", level: "Intermediate", description: "Typed code, interfaces, safer scaling" },
  { name: "Android Studio", category: "Mobile", level: "Intermediate", description: "Android app development and debugging" },
  { name: "Java", category: "Mobile", level: "Intermediate", description: "Android logic, OOP, lifecycle management" },
  { name: "Kotlin", category: "Mobile", level: "Intermediate", description: "Modern Android development and coroutine use" },
  { name: "MySQL", category: "Database", level: "Advanced", description: "Relational data modeling, queries, optimization" },
  { name: "PostgreSQL", category: "Database", level: "Intermediate", description: "Structured storage, indexing, transactions" },
  { name: "MongoDB", category: "Database", level: "Intermediate", description: "NoSQL data storage and flexible schemas" },
  { name: "Git", category: "Tools", level: "Advanced", description: "Version control, branching, collaboration" },
  { name: "Docker", category: "Tools", level: "Intermediate", description: "Containerization, deployment workflows" },
  { name: "Linux", category: "Tools", level: "Intermediate", description: "Server maintenance dan command line" },
  { name: "Trello", category: "Tools", level: "Advanced", description: "Project tracking and task coordination" },
  { name: "VS Code", category: "Tools", level: "Advanced", description: "Productive development environment" },
];

const categories = ["Backend", "Frontend", "Mobile", "Database", "Tools"];

const proficiencyColor = {
  Advanced: "bg-cyan-500",
  Intermediate: "bg-slate-500",
  Beginner: "bg-slate-600",
};

export default function TechStack() {
  return (
    <section className="py-24 px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Tech Stack</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Teknologi Profesional</h2>
          <p className="mt-4 text-slate-400 leading-8">
            Stack teknis yang mendukung keandalan, performa, dan produktivitas dalam proyek IT profesional.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category) => (
            <div key={category} className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                  <p className="mt-1 text-sm text-slate-400">Skill dan tools utama di area ini.</p>
                </div>
              </div>

              <div className="space-y-4">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">{tech.name}</p>
                          <p className="mt-2 text-sm text-slate-400">{tech.description}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white ${proficiencyColor[tech.level]}`}>
                          {tech.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
