import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import Header from "@/components/common/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GenZilla",
  description: "GenZilla is a platform for every genAI enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <html lang="en">
        <body className={`${fontSans.variable} font-sans antialiased`}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster
            toastOptions={{
              className: "bg-gray-800 text-white",
              style: {
                fontSize: "0.875rem",
                padding: "0.5rem 1rem",
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
