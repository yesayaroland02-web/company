import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Backendless from "../../services/backendless/index";

export default function CreateBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !author.trim()) {
      setError("Judul, author, dan content wajib diisi.");
      return;
    }

    setError("");
    setLoading(true);

    try {
    const blogData = {
        title: title.trim(),
        Content: content.trim(),
        author: author.trim(),
        tags: tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== ""),
        };

      console.log("Data yang disimpan:", blogData);

      const savedBlog = await Backendless.Data.of("Blogs").save(blogData);

      console.log("Blog berhasil disimpan:", savedBlog);

      alert("Blog berhasil dipublish!");

      navigate("/blogs");
    } catch (error) {
      console.error("Gagal publish blog:", error);
      setError("Gagal publish blog. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

    const handleLogout = async () => {
    try {
        await Backendless.UserService.logout();

        alert("Berhasil logout!");

        navigate("/login", { replace: true });
    } catch (error) {
        console.error("Gagal logout:", error);
    }
    };

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl">
        <p className="font-semibold uppercase tracking-widest text-indigo-600">
          One Top Blog
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
          Create New Blog
        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Bagikan informasi dan insight terbaru dari One Top.
        </p>

        <button
          onClick={handleLogout}
          type="button"
          className="mt-5 rounded-lg border border-red-200 px-5 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          Logout
        </button>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900"
        >
          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-white">
              Blog Title
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-white">
              Author
            </label>

            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="One Top Team"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-white">
              Tags
            </label>

            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Technology, Business"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-white">
              Content
            </label>

            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={12}
              placeholder="Write your article..."
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </form>
      </div>
    </section>
  );
}