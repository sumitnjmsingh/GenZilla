"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, ImagePlus } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !image) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", `${content}`);
      formData.append("published", "true");

      const formData_image = new FormData();
      formData_image.append("file", image);
      formData_image.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
      );

      const cloudRes = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData_image,
        }
      );

      const cloudData = await cloudRes.json();

      if (!cloudData.secure_url) {
        toast.error("Cloudinary upload failed.");
        return;
      }
      formData.append("coverImage", cloudData.secure_url);

      const res = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      const data = await res.json();
      toast.success("Blog published!");
      console.log("Created blog:", data);

      setTitle("");
      setContent("");
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while submitting the blog.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-emerald-50 to-indigo-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white/90 border border-gray-200 shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          ✍️ Publish Your Blog on{" "}
          <span className="text-lime-600">GenZilla</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Blog Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Building with Hugging Face + LangChain"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-500 focus:outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Blog Content
            </label>
            <textarea
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your full blog content here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:outline-none shadow-sm"
            ></textarea>
          </div>
          <div className="text-right mb-2">
            <a
              href="/dashboard/content-generation"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow transition"
            >
              ✨ Generate Content with Gen AI
            </a>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Cover Image
            </label>

            <div
              onClick={handleUploadClick}
              className="border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center text-center transition"
            >
              <ImagePlus className="w-10 h-10 text-gray-400 mb-2" />
              <p className="text-gray-600 text-sm">
                Click to upload or drag & drop
              </p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, up to 2MB</p>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
            </div>
            <div className="text-right mt-3 mb-2">
              <a
                href="/dashboard/image-generation"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow transition"
              >
                🖼️ Generate Image with Gen AI
              </a>
            </div>

            {preview && (
              <Image
                width={400}
                height={200}
                unoptimized   
                src={preview}
                alt="Preview"
                className="mt-4 max-h-64 w-full object-cover rounded-xl border border-gray-300 shadow"
              />  
            )}
          </div>

          <div className="text-center pt-6">
            <Button
              type="submit"
              className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
            >
              <UploadCloud className="h-5 w-5 mr-2" />
              Publish Blog
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
