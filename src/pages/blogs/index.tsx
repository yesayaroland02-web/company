import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Backendless from "../../services/backendless";

interface Blog {
  objectId: string;
  title?: string;
  content?: string;
  created?: number;
}

export default function Blogs() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await Backendless.Data.of("Blogs").find();

        setBlogs((result as Blog[]) || []);
      } catch (error) {
        console.error("Gagal mengambil blog:", error);
        setError("Gagal mengambil data blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 p-8 dark:bg-gray-950">
        <p className="text-gray-700 dark:text-gray-300">
          Loading blog...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
          Blog
        </h1>

        {error && (
          <p className="mb-6 rounded-lg bg-red-100 p-4 text-red-600">
            {error}
          </p>
        )}

        {blogs.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            Belum ada blog yang dipublish.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              const title = blog.title ?? "Tanpa Judul";
              const content = blog.content ?? "";

              return (
                <article
                  key={blog.objectId}
                  className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-900"
                >
                  <h2 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                    {title}
                  </h2>

                  <p className="mb-5 whitespace-pre-line text-gray-600 dark:text-gray-300">
                    {content.slice(0, 150)}
                    {content.length > 150 ? "..." : ""}
                  </p>

                  <button
                    onClick={() => navigate(`/blogs/${blog.objectId}`)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    Read More
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}