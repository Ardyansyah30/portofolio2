import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-16">

      {/* FOTO PROFIL */}
      <div className="w-40 h-40 relative mb-6">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="rounded-full object-cover border-4 border-gray-800 shadow-lg"
        />
      </div>

      {/* NAMA */}
      <h1 className="text-4xl md:text-5xl font-bold">
        Muhammad Ardy Ansyah
      </h1>

      {/* ROLE */}
      <p className="mt-4 text-gray-400">
        IT Support • Web Developer • Mobile Developer
      </p>

      {/* DESKRIPSI */}
      <p className="mt-4 text-gray-500 max-w-xl">
        Lulusan Politeknik Negeri Padang dengan pengalaman di bidang IT Support,
        pengembangan web, dan aplikasi mobile.
      </p>

      {/* BUTTON */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">

        {/* DOWNLOAD CV */}
        <a
          href="/cv.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg font-semibold"
        >
          Download CV
        </a>

        {/* VIEW CV (SCROLL KE BAWAH) */}
        <a
          href="#cv"
          className="border border-gray-600 hover:border-white px-6 py-2 rounded-lg"
        >
          View CV
        </a>

        {/* CONTACT */}
        <a
          href="#contact"
          className="border border-gray-600 hover:border-white px-6 py-2 rounded-lg"
        >
          Contact
        </a>

      </div>

    </section>
  );
}