export default function CVViewer() {
  return (
    <section id="cv" className="mt-20">

      <h2 className="text-3xl text-center font-semibold mb-6">
        Curriculum Vitae
      </h2>

      <div className="w-full h-[800px] border border-gray-800 rounded-lg overflow-hidden">
        <iframe
          src="/cv.pdf"
          className="w-full h-full"
        />
      </div>

    </section>
  );
}