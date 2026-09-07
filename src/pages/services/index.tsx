const services = [
  {
    title: "Web Development",
    price: "Start from Rp 5.000.000",
    description:
      "Website modern, responsive, cepat, dan sesuai kebutuhan bisnis.",
    features: [
      "Responsive Design",
      "Modern UI",
      "SEO Friendly",
      "Performance Optimization",
    ],
    testimonial:
      "One Top berhasil membuat website perusahaan kami terlihat jauh lebih profesional.",
  },
  {
    title: "UI/UX Design",
    price: "Start from Rp 3.000.000",
    description:
      "Desain digital yang berfokus pada kemudahan dan pengalaman pengguna.",
    features: [
      "User Research",
      "Wireframe",
      "UI Design",
      "Interactive Prototype",
    ],
    testimonial:
      "Desain yang dibuat sangat mudah digunakan dan sesuai dengan target pengguna kami.",
  },
  {
    title: "Digital Solution",
    price: "Custom Pricing",
    description:
      "Solusi digital khusus yang disesuaikan dengan masalah dan proses bisnis.",
    features: [
      "Business Analysis",
      "Custom Application",
      "API Integration",
      "Maintenance",
    ],
    testimonial:
      "One Top membantu kami mengotomatisasi proses bisnis yang sebelumnya manual.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen transition-colors">
      {/* Hero Services */}
      <section className="bg-slate-950 px-6 py-24 text-white dark:bg-[#020617]">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-indigo-400">
            Our Services
          </p>

          <h1 className="mt-5 text-5xl font-bold">
            Solutions built for growth.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Dari ide hingga implementasi, kami membantu bisnis membangun
            pengalaman digital yang lebih baik.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="bg-slate-50 px-6 py-24 transition-colors dark:bg-[#0f172a]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm transition-colors dark:border-slate-700 dark:bg-[#111827] dark:text-white"
            >
              {/* Title */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {service.title}
              </h2>

              {/* Price */}
              <p className="mt-2 font-semibold text-indigo-600 dark:text-indigo-400">
                {service.price}
              </p>

              {/* Description */}
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-slate-700 dark:text-slate-300"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              {/* Testimonial */}
              <div className="mt-8 rounded-xl bg-slate-50 p-5 dark:bg-[#1e293b]">
                <p className="italic leading-7 text-slate-600 dark:text-slate-300">
                  "{service.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}