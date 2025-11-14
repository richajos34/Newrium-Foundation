"use client";

import React from "react";

export interface BlogCardProps {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  /** Blogger name shown in the top bar */
  bloggerName?: string;
  /** Category label at the bottom left (e.g. HEALTH) */
  category?: string;
  /** Blog title at the bottom */
  title: string;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  href,
  imageSrc,
  imageAlt = "",
  bloggerName = "Blogger Name",
  category = "HEALTH",
  title,
  className = "",
}) => {
  return (
    <article
      className={`max-w-[320px] rounded-[24px] bg-white shadow-sm ring-1 ring-black/5 overflow-hidden
                  transition hover:shadow-md hover:-translate-y-0.5 ${className}`}
    >
      <a href={href} aria-label={title} className="block focus:outline-none">
        {/* Top bar: avatar + blogger name */}
        <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-gray-100">
          <div className="h-9 w-9 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
            {/* Simple placeholder avatar circle */}
            <span className="text-xs font-semibold text-purple-900">
              {bloggerName.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-sm font-semibold text-gray-900">
            {bloggerName}
          </span>
        </div>

        {/* Image area */}
        <div className="w-full bg-neutral-200">
          <div className="aspect-[3/4] w-full overflow-hidden">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-neutral-300" />
            )}
          </div>
        </div>

        {/* Bottom bar: category + title + bookmark */}
        <div className="flex items-end justify-between px-5 pb-4 pt-3 bg-white">
          <div>
            <p className="text-[11px] font-semibold tracking-wide uppercase text-purple-500">
              {category}
            </p>
            <h3 className="mt-1 text-lg font-semibold leading-snug text-gray-900">
              {title}
            </h3>
          </div>

          {/* Bookmark icon */}
          <button
            type="button"
            aria-label="Save blog"
            className="shrink-0 inline-flex h-9 w-7 items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7 w-7 text-purple-500 fill-purple-500"
            >
              <path d="M7 3.75A1.75 1.75 0 0 1 8.75 2h6.5A1.75 1.75 0 0 1 17 3.75v17.07a.5.5 0 0 1-.78.41L12 18.5l-4.22 2.73a.5.5 0 0 1-.78-.41V3.75Z" />
            </svg>
          </button>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
