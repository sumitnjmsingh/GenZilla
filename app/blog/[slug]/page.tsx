// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

const blogPosts = {
  "code-generation-transform": {
    title: "How Generative AI is Transforming Software Development",
    date: "June 19, 2025",
    author: "Sumit Singh",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image: "/blogs/code-generation-ai.jpg",
    content: `
      Discover how AI-driven tools can write, refactor, and debug code faster than ever.
      From startups to enterprises, generative models are reshaping the future of engineering.

      In this post, we explore:
      - Real-world use cases for AI code generation
      - Best practices for integrating it into workflows
      - Security and ethical considerations
    `,
  },
  "image-generation-explained": {
    title: "Visual Creativity Unleashed: AI-Powered Image Generation Explained",
    date: "June 12, 2025",
    author: "Arnav Thakur",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    image: "/blogs/image-generation-explained.jpeg",
    content: `
      Text-to-image generation is enabling artists and designers to create visuals from pure imagination.

      Learn how tools like Stable Diffusion and DALL·E work, the challenges of prompt engineering,
      and how creative teams are using them in advertising, product design, and storytelling.
    `,
  },
  "huggingface-langchain-nlp": {
    title: "Mastering Language Tasks with Hugging Face + LangChain",
    date: "June 5, 2025",
    author: "Sumit Singh",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image: "/blogs/language-workflows.png",
    content: `
      From translation to summarization, LLMs are revolutionizing language tasks.
      This blog breaks down how to use Hugging Face models and LangChain pipelines to build intelligent NLP apps.

      You’ll learn:
      - The architecture behind LangChain
      - How to call Hugging Face LLMs in Python
      - Deployment strategies for scalable GenAI services
    `,
  },
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 bg-white text-gray-900">
      <header className="mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-800">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <img
            src={post.avatar}
            alt={post.author}
            width={36}
            height={36}
            className="rounded-full border border-gray-300"
          />
          <span>
            By <span className="font-medium text-gray-700">{post.author}</span>{" "}
            | {post.date}
          </span>
        </div>
      </header>

      <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-md mb-10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <article className="prose prose-lg md:prose-xl prose-slate max-w-none">
        {post.content.split("\n").map((para, i) => (
          <p key={i}>{para.trim()}</p>
        ))}
      </article>

      <footer className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
        Powered by{" "}
        <span className="font-semibold text-indigo-600">GenZilla</span> |
        Hugging Face + LangChain
      </footer>
    </main>
  );
}
