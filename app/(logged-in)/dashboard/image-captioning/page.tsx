// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function ImageCaptioningPage() {
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [caption, setCaption] = useState("");

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setImagePreview(URL.createObjectURL(file));
//       setCaption("");
//     }
//   };

//   const generateCaption = () => {
//     if (!imagePreview) return;
//     setCaption("");
//     setImagePreview(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-8 flex flex-col items-center">
//       <header className="w-full max-w-4xl mb-8 flex justify-between items-center">
//         <h1 className="text-4xl font-extrabold text-orange-600 flex items-center gap-2">
//           📸 Image Captioning
//         </h1>
//         <Link href="/dashboard">
//           <Button className="bg-orange-500 hover:bg-orange-600 text-white">
//             Back to Dashboard
//           </Button>
//         </Link>
//       </header>

//       {/* Image upload + preview */}
//       <div className="w-full max-w-lg bg-white rounded-lg shadow p-6 flex flex-col items-center gap-4">
//         <input
//           type="file"
//           accept="image/*"
//           id="imageUpload"
//           className="hidden"
//           onChange={handleImageChange}
//         />
//         <label
//           htmlFor="imageUpload"
//           className="cursor-pointer px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-md transition"
//         >
//           Choose Image
//         </label>

//         {imagePreview ? (
//           <Image
//             src={imagePreview}
//             alt="Preview"
//             width={512}
//             height={256}
//             className="w-full max-h-64 object-contain rounded-md border border-orange-300"
//             style={{ objectFit: "contain" }}
//           />
//         ) : (
//           <div className="w-full h-64 flex items-center justify-center text-orange-300 border-2 border-dashed border-orange-300 rounded-md">
//             No image selected
//           </div>
//         )}

//         <Button
//           disabled={!imagePreview}
//           onClick={generateCaption}
//           className="bg-orange-600 hover:bg-orange-700 text-white w-full"
//         >
//           Generate Caption
//         </Button>

//         {caption && (
//           <p className="text-center text-orange-700 font-semibold mt-4">
//             {caption}
//           </p>
//         )}
//       </div>

//       {/* Captions gallery */}
//       {caption && (
//         <section className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <div
//               className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
//             >
//               <Image
//                 src={imagePreview || ""}
//                 alt={`Image`}
//                 width={400}
//                 height={160}
//                 className="w-full h-40 object-cover rounded-md mb-3"
//                 style={{ objectFit: "cover" }}
//               />
//               <p className="text-orange-800 font-medium mb-3">{caption}</p>
//             </div>
//         </section>
//       )}
//     </div>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function ImageCaptioningPage() {
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

      <div className="w-full max-w-lg bg-white rounded-lg shadow p-6 flex flex-col items-center gap-4 border border-dashed border-orange-300">
        <AlertCircle size={40} className="text-orange-600" />
        <h2 className="text-xl font-semibold text-orange-700 text-center">
          Feature Unavailable
        </h2>
        <p className="text-orange-600 text-center mb-4">
          Image captioning is coming soon! Stay tuned for updates.
        </p>

        <label
          htmlFor="imageUpload"
          className="cursor-not-allowed px-6 py-3 bg-orange-300 text-white rounded-md opacity-60"
        >
          Choose Image
        </label>

        <Button
          disabled
          className="bg-orange-300 text-white w-full opacity-60 cursor-not-allowed"
        >
          Generate Caption
        </Button>
      </div>
    </div>
  );
}
