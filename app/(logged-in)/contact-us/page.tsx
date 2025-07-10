"use client";

import { Mail, Phone, Clock } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Contact GenZilla
          </h1>
          <p className="text-lg text-gray-600">
            We’re here to assist you with any inquiries or support requests.
            Feel free to reach out to our team.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 rounded-lg p-8 bg-gray-50">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <Mail className="w-6 h-6 text-gray-700 mb-2" />
            <h3 className="font-semibold mb-1 text-lg">Email</h3>
            <a
              href="mailto:support@genzilla.ai"
              className="text-blue-600 hover:underline text-sm"
            >
              support@genzilla.ai
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <Phone className="w-6 h-6 text-gray-700 mb-2" />
            <h3 className="font-semibold mb-1 text-lg">Phone</h3>
            <p className="text-sm text-gray-700">+91 98765 43210</p>
          </div>

          {/* Office Hours */}
          <div className="flex flex-col items-center text-center">
            <Clock className="w-6 h-6 text-gray-700 mb-2" />
            <h3 className="font-semibold mb-1 text-lg">Office Hours</h3>
            <p className="text-sm text-gray-700 text-center leading-snug">
              Monday to Friday
              <br />
              9:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>

        {/* Optional: Additional Support Message */}
        <div className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GenZilla Technologies Pvt. Ltd. <br />
          All rights reserved.
        </div>
      </div>
    </main>
  );
}
