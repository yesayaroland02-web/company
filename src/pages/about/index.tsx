const teamMembers = [
  {
    name: "Daniel Wilson",
    role: "Chief Executive Officer",
    bio: "Leading One Top with a focus on innovation, collaboration, and sustainable digital growth.",
  },
  {
    name: "Sophia Anderson",
    role: "Product Manager",
    bio: "Turning business requirements into meaningful digital products and customer experiences.",
  },
  {
    name: "James Miller",
    role: "Technology Lead",
    bio: "Responsible for building reliable, scalable, and modern technology solutions.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "One Top Founded",
    description: "One Top dimulai sebagai tim pengembangan digital.",
  },
  {
    year: "2023",
    title: "Growing Together",
    description: "Kami memperluas layanan ke UI/UX dan digital solutions.",
  },
  {
    year: "2026",
    title: "Digital Innovation",
    description: "Terus menciptakan solusi untuk kebutuhan bisnis modern.",
  },
];

const culture = [
  {
    title: "Innovation",
    description:
      "Kami selalu mencari cara baru untuk menghasilkan solusi yang lebih baik.",
  },
  {
    title: "Collaboration",
    description:
      "Kami percaya produk terbaik dibuat melalui kerja sama yang kuat.",
  },
  {
    title: "Impact",
    description:
      "Setiap solusi harus memberikan manfaat nyata kepada pengguna.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#020617] dark:text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white dark:bg-[#020617]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            About One Top
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight">
            Building technology with
            <span className="text-indigo-400"> purpose.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            One Top adalah perusahaan teknologi yang membantu bisnis
            membangun solusi digital modern, efektif, dan mudah digunakan.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="bg-white px-6 py-24 transition-colors dark:bg-[#0f172a]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Our History
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
              From one idea to one great team.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>
              One Top didirikan dengan satu tujuan sederhana: membantu bisnis
              memanfaatkan teknologi untuk menyelesaikan masalah nyata.
            </p>

            <p>
              Berawal dari tim kecil yang mengembangkan website dan aplikasi,
              One Top berkembang menjadi perusahaan digital yang berfokus pada
              web development, UI/UX design, dan digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-slate-50 px-6 py-24 transition-colors dark:bg-[#020617]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white">
            Our Journey
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm transition-colors dark:border-slate-700 dark:bg-[#111827] dark:text-white"
              >
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {milestone.year}
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  {milestone.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-white px-6 py-24 transition-colors dark:bg-[#020617]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Our Culture
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
              Values that define us.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {culture.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-700 dark:bg-[#111827]"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-950 px-6 py-24 text-white transition-colors dark:bg-[#020617]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">
            Meet our leadership.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors dark:border-slate-700 dark:bg-[#111827]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold">
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-1 text-indigo-400">
                  {member.role}
                </p>

                <p className="mt-4 leading-7 text-slate-400 dark:text-slate-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}