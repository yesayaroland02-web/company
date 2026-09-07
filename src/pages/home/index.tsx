import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Membangun website modern, cepat, dan responsif untuk kebutuhan bisnis.",
  },
  {
    number: "02",
    title: "Digital Solutions",
    description:
      "Mengembangkan solusi digital yang membantu meningkatkan efisiensi operasional.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Merancang pengalaman pengguna yang sederhana, menarik, dan mudah digunakan.",
  },
];

const testimonials = [
  {
    quote:
      "One Top helped us create a better digital experience for our customers.",
    name: "Michael Anderson",
    role: "Business Owner",
  },
  {
    quote:
      "The team is professional, creative, and understands our business needs.",
    name: "Sarah Williams",
    role: "Marketing Manager",
  },
  {
    quote:
      "A reliable partner for building modern digital solutions.",
    name: "David Miller",
    role: "Startup Founder",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#020617] dark:text-white">
      {/* Hero Section */}
      <section className="bg-slate-950 px-6 py-24 text-white dark:bg-[#020617] lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
              One Vision. One Team. One Top.
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              We Build
              <span className="block text-indigo-400">
                Digital Solutions
              </span>
              That Matter.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              One Top membantu bisnis berkembang melalui solusi teknologi
              yang inovatif, efisien, dan dirancang untuk masa depan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Explore Services
              </Link>

              <Link
                to="/about"
                className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-1">
              <div className="rounded-[22px] bg-slate-900 p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-300">
                    ONE TOP
                  </span>

                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
                    Digital Innovation
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-800 p-5">
                    <p className="text-3xl font-bold text-indigo-400">
                      10+
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Projects Completed
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-800 p-5">
                    <p className="text-3xl font-bold text-indigo-400">
                      5+
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Years Experience
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-800 p-5">
                  <p className="text-sm text-slate-400">
                    Our mission
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Turning ideas into impactful digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white px-6 py-24 text-slate-900 transition-colors dark:bg-[#020617] dark:text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Who We Are
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white">
                A team driven by
                <span className="block text-indigo-600 dark:text-indigo-400">
                  innovation and purpose.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                One Top adalah perusahaan teknologi yang berfokus pada
                pengembangan solusi digital untuk membantu bisnis menjadi
                lebih produktif dan kompetitif.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Kami percaya bahwa teknologi yang baik bukan hanya tentang
                fitur, tetapi juga tentang pengalaman, efisiensi, dan
                dampak nyata bagi pengguna.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-block font-semibold text-indigo-600 transition hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-24 text-slate-900 transition-colors dark:bg-[#0f172a] dark:text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
              Solutions designed for your growth.
            </h2>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Kami menyediakan layanan digital yang membantu bisnis
              berkembang lebih cepat dan lebih terarah.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#111827] dark:text-white"
              >
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {service.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-block font-semibold text-indigo-600 transition hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 py-24 text-slate-900 transition-colors dark:bg-[#020617] dark:text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Client Stories
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
              What our clients say.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-700 dark:bg-[#111827]"
              >
                <div className="text-3xl text-indigo-600 dark:text-indigo-400">
                  “
                </div>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {testimonial.quote}
                </p>

                <div className="mt-6">
                  <p className="font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold">
              Ready to build something great?
            </h2>

            <p className="mt-3 text-indigo-100">
              Let's turn your ideas into meaningful digital solutions.
            </p>
          </div>

          <Link
            to="/services"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
}