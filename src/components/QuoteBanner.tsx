// src/components/QuoteBanner.tsx
import React from "react";

type QuoteBannerProps = {
  lines: string[]; // each line of the quote
};

export default function QuoteBanner({ lines }: QuoteBannerProps) {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-full max-w-5xl flex items-stretch">
        {/* Left dark bar */}
        <div className="w-2 bg-neutral-700" />

        {/* Quote background */}
        <div className="flex-1 bg-neutral-200 px-12 py-10 flex items-center justify-center">
          <p className="text-center text-lg leading-relaxed text-neutral-900">
            {/* Opening quote */}
            <span className="text-3xl align-top mr-4">“</span>

            {/* Quote text: multiple lines */}
            <span className="inline-block text-left">
              {lines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </span>

            {/* Closing quote */}
            <span className="text-3xl align-top ml-4">”</span>
          </p>
        </div>

        {/* Right dark bar */}
        <div className="w-2 bg-neutral-700" />
      </div>
    </section>
  );
}
