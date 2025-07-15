"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  coverImage?: string;
  authorId: string;
  createdAt: string;
  published: boolean;
  authorImage?: string;
  authorName?: string;
}

export default function LatestBlogs() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs/latest");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="px-6 md:px-20 py-16 bg-white text-black">
      <h2 className="text-3xl font-bold mb-10">Latest Blogs</h2>

      <div className="text-right mt-2 mb-2">
        <Link
          href="/blog/create"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-lime-600 hover:text-white hover:bg-indigo-700 rounded-lg shadow transition"
        >
          Create a Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedBlog(post)}
            className="cursor-pointer bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <div className="h-48 w-full relative">
              <Image
                src={post.coverImage || "/placeholder.jpg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500 flex items-center justify-between mb-2">
                <span>BLOG</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <h3 className="text-md font-semibold mb-3">{post.title}</h3>
              <div className="flex items-center gap-2 mt-auto">
                {post.authorImage ? (
                  <Image
                    src={post.authorImage}
                    alt={post.authorName || "Author"}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                )}
                <span className="text-sm text-gray-700">
                  {post.authorName || "Unknown Author"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl shadow-lg p-6">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6 bg-white" />
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>

            {selectedBlog.coverImage && (
              <div className="mb-4 h-48 w-full relative">
                <Image
                  src={selectedBlog.coverImage}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}


            <div className="prose max-w-full text-gray-800">
              {selectedBlog.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
