"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Generative AI is Transforming Software Development",
    date: "June 19, 2025",
    description:
      "Exploring code generation, debugging, and AI-assisted programming.",
    author: {
      name: "Sumit Singh",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    image: "/blogs/code-generation-ai.jpg",
    href: "/blog/code-generation-transform",
  },
  {
    id: 2,
    title: "Visual Creativity Unleashed: AI-Powered Image Generation Explained",
    date: "June 12, 2025",
    description:
      "Behind the scenes of how generative models turn text into stunning visuals.",
    author: {
      name: "Arnav Thakur",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    image: "/blogs/image-generation-explained.jpeg",
    href: "/blog/image-generation-explained",
  },
  {
    id: 3,
    title: "Mastering Language Tasks with Hugging Face + LangChain",
    date: "June 5, 2025",
    description:
      "Using powerful LLMs for summarization, translation, and paraphrasing workflows.",
    author: {
      name: "Sumit Singh",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    image: "/blogs/language-workflows.png",
    href: "/blog/huggingface-langchain-nlp",
  },
];

export default function LatestBlogs() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-black">
      <h2 className="text-3xl font-bold mb-10">Latest Blogs</h2>
      <div className="text-right mt-2 mb-2">
        <a
          href="/blog/create"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-lime-600 hover:text-white hover:bg-indigo-700 rounded-lg shadow transition"
        >
          Create a Blog
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.id} href={post.href}>
            <div className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
              <div className="h-48 w-full relative">
                <Image
                  src={post.image}
                  alt={post.description}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 flex items-center justify-between mb-2">
                  <span>BLOG</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-md font-semibold mb-3">{post.title}</h3>
                <div className="flex items-center gap-2 mt-auto">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-sm">{post.author.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
