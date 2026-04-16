export default function Skills() {
  const skills = [
    "IT Support",
    "Troubleshooting",
    "Hardware Maintenance",
    "React.js",
    "Next.js",
    "Laravel",
    "Flutter",
    "MySQL",
    "Machine Learning",
    "Project Management",
  ];

  return (
    <section className="mt-20 text-center">
      <h2 className="text-3xl font-semibold">Skills</h2>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-800 px-4 py-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}