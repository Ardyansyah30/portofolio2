export default function Skills() {
  const skills = [
    "IT Support",
    "Backend Developer",
    "Android Developer",
    "Machine Learning",
    "Project Management",
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <div key={i} className="bg-white/10 px-4 py-2 rounded-lg">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}