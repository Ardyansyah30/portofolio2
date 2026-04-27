'use client';

import { motion } from "framer-motion";

export default function TechStack() {
  const techStack = [
    // Backend & Web
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "Python", category: "Language" },
    
    // Mobile
    { name: "Android Studio", category: "Mobile" },
    { name: "Java", category: "Mobile" },
    { name: "Kotlin", category: "Mobile" },
    
    // Databases
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    
    // Machine Learning
    { name: "TensorFlow", category: "ML" },
    { name: "Scikit-learn", category: "ML" },
    { name: "Pandas", category: "ML" },
    
    // Tools & Platforms
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Linux", category: "Tools" },
    { name: "Trello", category: "Tools" },
    { name: "VS Code", category: "Tools" },
  ];

  const categories = [...new Set(techStack.map(t => t.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24">
      <h2 className="text-3xl mb-16 text-center">Tech Stack</h2>

      <div className="max-w-6xl mx-auto px-6">
        {categories.map((category) => (
          <motion.div key={category} className="mb-12">
            {/* Category Title */}
            <h3 className="text-lg font-semibold text-blue-400 mb-6 pl-2 border-l-2 border-blue-500">
              {category}
            </h3>

            {/* Tech Items Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              {techStack
                .filter((tech) => tech.category === category)
                .map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative"
                  >
                    {/* Glass Card */}
                    <div className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-lg px-4 py-3 cursor-pointer transition-all duration-300 group-hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-blue-500/20 glass-shine h-full flex items-center justify-center text-center">
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
