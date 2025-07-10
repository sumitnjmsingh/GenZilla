import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <footer className="mt-auto bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-black">
            <h3 className="text-xl font-semibold mb-2">GenZilla</h3>
            <p className="text-md max-w-sm">
              Elevate your workflow with AI-driven summarization, paraphrasing,
              and translation tools.
            </p>
          </div>
          <div className="flex gap-6 text-black text-sm items-center">
            <Link
              href="/privacy-policy"
              className="hover:text-lime-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-lime-600 transition"
            >
              Terms of Service
            </Link>
            <Link href="/contact-us" className="py-1.5 px-1.5 rounded-md bg-lime-600 transition ">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="text-black text-md text-center py-4">
          &copy; {new Date().getFullYear()} GenZilla. All rights reserved.
        </div>
      </footer>
    </>
  );
}
