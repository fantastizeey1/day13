// app/page.tsx (or wherever your main component is located)
"use client"; // Mark this file as a client component

import { useTheme } from "@/ThemeContext"; // Adjust the import path as necessary
import Image from "next/image";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <main className="flex flex-col items-center justify-center mt-10">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h2 className="mt-4 text-3xl font-semibold">
          Day or Night, We’ve Got You Covered!
        </h2>
        <p className="mt-2 text-center max-w-md">
          This is a simple hero section that adapts to your theme preference.
          Toggle between day and night modes for an enjoyable experience!
        </p>

        <div className="flex gap-4 mt-6">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-600 px-4 py-2"
            href="#"
          >
            Get Started
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center bg-gray-200 text-gray-800 gap-2 hover:bg-gray-300 px-4 py-2"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="mt-auto mb-4 text-sm">
        <p>© fantastizeey 2024 My Fun Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
