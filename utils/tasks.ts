interface Task {
  title: string;
  description: string;
  route: string;
  bgGradient: string;
}

import {
  FileText,
  Repeat,
  Languages,
  PenTool,
  Mic,
  Image as ImageIcon,
} from "lucide-react";

export const tasks: Task[] = [
  {
    title: "Paraphrasing",
    description: "Rewrite text to improve clarity or style.",
    route: "/dashboard/paraphrasing",
    bgGradient: "from-purple-600 to-purple-800",
  },
  {
    title: "Question Answering",
    description: "Ask AI questions about your data.",
    route: "/dashboard/question-answering",
    bgGradient: "from-green-600 to-green-800",
  },
  {
    title: "Content Generation",
    description: "Generate blog posts, social media content, and more.",
    route: "/dashboard/content-generation",
    bgGradient: "from-yellow-600 to-yellow-800",
  },
  {
    title: "Translation",
    description: "Translate text between languages.",
    route: "/dashboard/translation",
    bgGradient: "from-teal-600 to-teal-800",
  },
  {
    title: "Image Generation",
    description: "Generate images from text prompts.",
    route: "/dashboard/image-generation",
    bgGradient: "from-pink-600 to-pink-800",
  },
  {
    title: "Image Captioning",
    description: "Generate captions for images.",
    route: "/dashboard/image-captioning",
    bgGradient: "from-orange-600 to-orange-800",
  },
  {
    title: "Speech-to-Text",
    description: "Convert audio recordings to text.",
    route: "/dashboard/speech-to-text",
    bgGradient: "from-red-600 to-red-800",
  },
  {
    title: "Text-to-Speech",
    description: "Generate natural-sounding voices from text.",
    route: "/dashboard/text-to-speech",
    bgGradient: "from-indigo-600 to-indigo-800",
  },
  {
    title: "Code Generation",
    description: "Generate code snippets from descriptions.",
    route: "/dashboard/code-generation",
    bgGradient: "from-gray-700 to-gray-900",
  },
  {
    title: "Code Explanation",
    description: "Explain or refactor your code.",
    route: "/dashboard/code-explanation",
    bgGradient: "from-emerald-600 to-emerald-800",
  },
  {
    title: "Data Analysis & Visualization",
    description: "Analyze datasets and generate plots.",
    route: "/dashboard/data-analysis",
    bgGradient: "from-cyan-600 to-cyan-800",
  },
];

export const sections = [
    {
      title: "PDF Summarization",
      desc: "Upload a PDF file to get concise summaries quickly and efficiently.",
      icon: FileText,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Paraphrasing",
      desc: "Rewrite and improve the style of your text effortlessly.",
      icon: Repeat,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Translation",
      desc: "Translate text into multiple languages with precision.",
      icon: Languages,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Content Generation",
      desc: "Create blog posts, social media content, and more seamlessly.",
      icon: PenTool,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Speech-to-Text",
      desc: "Convert audio recordings into text transcripts instantly.",
      icon: Mic,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Image Generation",
      desc: "Create stunning images from text prompts using advanced AI.",
      icon: ImageIcon,
      color: "from-orange-500 to-orange-700",
    },
  ];
