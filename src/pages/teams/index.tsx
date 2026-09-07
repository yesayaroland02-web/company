import { useEffect, useState } from "react";

interface TeamMember {
  login: {
    uuid: string;
  };

  name: {
    first: string;
    last: string;
  };

  picture: {
    large: string;
  };

  email: string;

  location: {
    country: string;
  };
}

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Project Manager",
  "Mobile Developer",
  "QA Engineer",
  "Product Designer",
  "DevOps Engineer",
];

export default function Teams() {
  const [teams, setTeams] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=8"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }

        const data = await response.json();

        setTeams(data.results);
      } catch (error) {
        console.error(error);
        setError("Failed to load team members.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#020617] dark:text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-center text-white dark:bg-[#020617]">
        <p className="font-semibold uppercase tracking-widest text-indigo-400">
          Our Team
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          People behind One Top.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Meet the people who turn ideas into meaningful digital products.
        </p>
      </section>

      {/* Team Members */}
      <section className="bg-slate-50 px-6 py-24 transition-colors dark:bg-[#0f172a]">
        <div className="mx-auto max-w-7xl">
          {loading && (
            <p className="mb-8 text-center text-slate-500 dark:text-slate-400">
              Loading team members...
            </p>
          )}

          {error && (
            <p className="mb-8 text-center text-red-500">
              {error}
            </p>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map((member, index) => (
              <div
                key={member.login.uuid}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#111827] dark:text-white"
              >
                {/* Profile Image */}
                <img
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  className="h-64 w-full object-cover"
                />

                {/* Profile Information */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {member.name.first} {member.name.last}
                  </h2>

                  <p className="mt-1 font-medium text-indigo-600 dark:text-indigo-400">
                    {roles[index]}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Passionate technology professional from{" "}
                    {member.location.country} dedicated to building
                    impactful digital solutions.
                  </p>

                  <p className="mt-4 break-all text-sm text-slate-400 dark:text-slate-400">
                    {member.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}