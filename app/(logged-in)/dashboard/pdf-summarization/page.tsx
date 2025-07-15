"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoaderCircle, FileText } from "lucide-react";
import { useState } from "react";

export default function PdfSummarizationPage() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("No file selected");
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setSummary("");
    setFile(selectedFile || null);
    setFileName(selectedFile ? selectedFile.name : "No file selected");
  };

  const handleSummarize = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/pdf-summarize", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setSummary(data.summary || "No summary available");
    } catch (error) {
      console.error("Error:", error);
      setSummary("Failed to process file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex flex-col items-center p-8 text-purple-900">
      <div className="max-w-2xl w-full bg-white/90 rounded-lg shadow-lg p-6 flex flex-col gap-6 border border-purple-300">
        <h1 className="text-4xl font-bold text-purple-700 tracking-tight">
          PDF Summarization
        </h1>
        <p className="text-purple-600 text-center font-medium">
          Upload a PDF and get a concise summary in seconds!
        </p>
        <div className="flex flex-col items-center gap-4">
          <label
            htmlFor="file"
            className="inline-flex items-center justify-start gap-10 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium w-full rounded-md shadow-sm cursor-pointer transition border border-purple-700 p-4"
          >
            <FileText className="w-20 h-20" />
            <span>Choose PDF</span>
          </label>
          <input
            type="file"
            id="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
          <p className="text-sm text-purple-800 font-medium">{fileName}</p>
        </div>

        <Button
          onClick={handleSummarize}
          className="bg-purple-600 hover:bg-purple-700 text-white w-full disabled:opacity-50"
          disabled={!file || loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <LoaderCircle className="animate-spin h-5 w-5" />
              <span>Summarizing...</span>
            </div>
          ) : (
            "Summarize PDF"
          )}
        </Button>

        {summary && (
          <div className="bg-purple-50 p-4 rounded shadow border border-purple-200">
            <h2 className="text-lg font-semibold text-purple-700 mb-2">
              📄 Summary
            </h2>
            <p className="text-purple-800 whitespace-pre-line">{summary}</p>
          </div>
        )}

        <Link href="/dashboard" className="w-full">
          <Button className="bg-purple-300 hover:bg-purple-400 text-purple-900 w-full">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
