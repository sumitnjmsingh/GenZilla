"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  coverImage?: string;
  authorId: string;
  createdAt: string;
  published: boolean;
}

export default function LatestBlogs() {
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
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
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
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  <span className="text-sm text-gray-700">
                    Author ID: {post.authorId.slice(0, 6)}...
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
