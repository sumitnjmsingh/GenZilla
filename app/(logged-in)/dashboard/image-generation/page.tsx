"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { LoaderCircle, ImageIcon } from "lucide-react";
import Image from "next/image";

export default function ImageGenerationPage() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string>("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      console.error("Prompt cannot be empty");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://genzilla-pythonbackend.onrender.com/api/text-to-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: prompt }),
        }
      );

      if (!response.ok) throw new Error("Failed to Generate Image");

      const data = await response.json();
      const newImageUrl = data.image_url;
      if (!newImageUrl) {
        console.error("No image URL returned from API");
        return;
      }
      setGeneratedImage(newImageUrl);
      setPrompt("");
    } catch (error) {
      console.error("Error generating image:", error);
      return;
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "generated-image.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow p-6 flex flex-col items-center gap-6">
        <h1 className="text-4xl text-center font-bold text-purple-600 mb-2">
          Image Generation
        </h1>
        <div className="flex items-center justify-center gap-2">
          <ImageIcon className="md:h-16 md:w-16 h-32 w-32 text-purple-500 mb-4" />
          <p className="text-gray-700 text-center mb-4">
            Create stunning images from your text prompts using powerful
            generative AI.
          </p>
        </div>

        <form
          onSubmit={handleGenerate}
          className="w-full flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your image prompt here..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <Button
            type="submit"
            className="bg-purple-400 hover:bg-purple-600 text-white w-full"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin h-5 w-5" />
                <span>Generating...</span>
              </div>
            ) : (
              "Generate Image"
            )}
          </Button>
        </form>

        <Link href="/dashboard" className="mt-2 w-full">
          <Button className="bg-purple-600 hover:bg-purple-800 text-white w-full">
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {generatedImage && (
        <div className="max-w-6xl w-full mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Generated Images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center p-4">
              <Image
                src={generatedImage}
                alt="Generated Image"
                width={400}
                height={192}
                className="rounded mb-4 w-full h-48 object-cover"
                style={{ objectFit: "cover", width: "100%", height: "12rem" }}
                unoptimized
              />
              <Button
                onClick={() => handleDownload(generatedImage)}
                className="bg-green-500 hover:bg-green-600 text-white w-full"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
