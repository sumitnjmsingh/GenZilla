"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function ImageCaptioningPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [captionsList, setCaptionsList] = useState<
    { id: number; image: string; text: string }[]
  >([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setCaption("");
    }
  };

  const generateCaption = () => {
    // Dummy caption generation logic
    if (!imagePreview) return;
    const newCaption = `This is a beautiful image! (Caption #${
      captionsList.length + 1
    })`;
    setCaption(newCaption);

    setCaptionsList((prev) => [
      ...prev,
      { id: prev.length + 1, image: imagePreview, text: newCaption },
    ]);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-8 flex flex-col items-center">
      <header className="w-full max-w-4xl mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-orange-600 flex items-center gap-2">
          📸 Image Captioning
        </h1>
        <Link href="/dashboard">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Back to Dashboard
          </Button>
        </Link>
      </header>

      {/* Image upload + preview */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow p-6 flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          className="hidden"
          onChange={handleImageChange}
        />
        <label
          htmlFor="imageUpload"
          className="cursor-pointer px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-md transition"
        >
          Choose Image
        </label>

        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full max-h-64 object-contain rounded-md border border-orange-300"
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center text-orange-300 border-2 border-dashed border-orange-300 rounded-md">
            No image selected
          </div>
        )}

        <Button
          disabled={!imagePreview}
          onClick={generateCaption}
          className="bg-orange-600 hover:bg-orange-700 text-white w-full"
        >
          Generate Caption
        </Button>

        {caption && (
          <p className="text-center text-orange-700 font-semibold mt-4">
            {caption}
          </p>
        )}
      </div>

      {/* Captions gallery */}
      {captionsList.length > 0 && (
        <section className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {captionsList.map(({ id, image, text }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img
                src={image}
                alt={`Image caption #${id}`}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <p className="text-orange-800 font-medium mb-3">{text}</p>
              <a
                href={image}
                download={`image-caption-${id}.jpg`}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition text-center"
              >
                Download Image
              </a>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
