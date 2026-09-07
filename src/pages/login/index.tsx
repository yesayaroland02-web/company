import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Backendless from "../../services/backendless/index";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [checkingLogin, setCheckingLogin] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const validLogin =
          await Backendless.UserService.isValidLogin();

        if (validLogin) {
          navigate("/blogs", { replace: true });
        }
      } catch (error) {
        console.error("Gagal memeriksa login:", error);
      } finally {
        setCheckingLogin(false);
      }
    };

    checkLogin();
  }, [navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await Backendless.UserService.login(
        email.trim(),
        password,
        true
      );

      alert("Login berhasil!");

      navigate("/blogs", { replace: true });
    } catch (error) {
      console.error("Login gagal:", error);
      setError("Email atau password salah.");
    } finally {
      setLoading(false);
    }
  };

  if (checkingLogin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-gray-950">
        <p className="text-gray-700 dark:text-gray-300">
          Memeriksa login...
        </p>
      </div>
    );
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20 dark:bg-gray-950">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
        <p className="font-semibold uppercase tracking-widest text-indigo-600">
          One Top
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
          Login
        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Login untuk membuat dan mempublikasikan blog.
        </p>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-white">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-white">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}