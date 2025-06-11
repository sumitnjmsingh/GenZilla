import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <footer className="bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-white">
            <h3 className="text-xl font-semibold mb-2">GenZilla</h3>
            <p className="text-sm max-w-xs">
              Elevate your workflow with AI-driven summarization, paraphrasing,
              and translation tools.
            </p>
          </div>
          <div className="flex gap-6 text-white text-sm">
            <Link href="#" className="hover:text-teal-600 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-teal-600 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-teal-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-200 text-white text-xs text-center py-4">
          &copy; {new Date().getFullYear()} GenZilla. All rights reserved.
        </div>
      </footer>
    </>
  );
}
