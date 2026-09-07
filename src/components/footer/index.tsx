import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400">
            One Top
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Building meaningful digital solutions for modern
            businesses.
          </p>

          <p className="mt-3 font-medium">
            One Vision. One Team. One Top.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Company</h3>

          <div className="mt-5 space-y-3 text-slate-400">
            <Link to="/about" className="block hover:text-white">
              About Us
            </Link>

            <Link to="/teams" className="block hover:text-white">
              Teams
            </Link>

            <Link to="/services" className="block hover:text-white">
              Services
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Resources</h3>

          <div className="mt-5 space-y-3 text-slate-400">
            <Link to="/blogs" className="block hover:text-white">
              Blog
            </Link>

            <Link
              to="/create-blog"
              className="block hover:text-white"
            >
              Create Blog
            </Link>

            <Link to="/login" className="block hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-slate-800 py-6 text-sm text-slate-500">
        © 2026 One Top. All rights reserved.
      </div>
    </footer>
  );
}