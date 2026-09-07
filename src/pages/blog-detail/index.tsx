import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Backendless from "../../services/backendless/index";

interface Blog {
  objectId: string;
  title?: string;
  Content?: string;
  author?: string;
  tags?: string[];
  created?: number;
}


export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!id) {
        setError("ID blog tidak ditemukan.");
        setLoading(false);
        return;
      }

      try {
        const result = await Backendless.Data.of("Blogs").find({
          where: `objectId = '${id}'`,
        });

        console.log("Data detail blog:", result);

        const blogs = result as Blog[];

        if (!blogs || blogs.length === 0) {
          setError("Blog tidak ditemukan.");
        } else {
          setBlog(blogs[0]);
        }
      } catch (error) {
        console.error("Gagal mengambil detail blog:", error);
        setError("Gagal mengambil detail blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 p-8 dark:bg-gray-950">
        <p className="text-gray-700 dark:text-gray-300">
          Loading blog...
        </p>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="min-h-screen bg-gray-100 p-8 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-red-500">
            {error || "Blog tidak ditemukan."}
          </p>

          <button
            onClick={() => navigate("/blogs")}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            ← Kembali ke Blog
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10 dark:bg-gray-950">
      <article className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md dark:bg-gray-900">
        <button
          onClick={() => navigate("/blogs")}
          className="mb-8 text-blue-600 hover:underline"
        >
          ← Kembali ke Blog
        </button>

        <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
          {blog.title || "Tanpa Judul"}
        </h1>

        {blog.author && (
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Oleh: {blog.author}
          </p>
        )}

        {blog.created && (
          <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            {new Date(blog.created).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}

        <div className="whitespace-pre-line text-lg leading-8 text-gray-700 dark:text-gray-300">
          {blog.Content || "Konten blog kosong."}
        </div>
      </article>
    </main>
  );
}