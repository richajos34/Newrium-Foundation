"use client"

import React from "react";

type Variant = "tall" | "wide";

export interface BlogCardProps {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  date?: string | Date;
  excerpt?: string;
  /** tall = left mock, wide = right mock */
  variant?: Variant;
  className?: string;
}

function formatDate(d?: string | Date) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  // xx.xx.xxxx style
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  href,
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  date,
  excerpt,
  variant = "tall",
  className = "",
}) => {
  const isTall = variant === "tall";

  return (
    <article
      className={`max-w-[300px] group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition
                  hover:shadow-md hover:-translate-y-0.5 ${className}`}
    >
      <a href={href} aria-label={title} className="block focus:outline-none">
        {/* Image */}
        <div
          className={`overflow-hidden rounded-2xl ${isTall ? "p-4" : "p-2"} pb-0`}
        >
          <div
            className={`w-full overflow-hidden rounded-xl bg-neutral-200
                        ${isTall ? "aspect-[4/5]" : "aspect-video"}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${isTall ? "p-5" : "p-4"} space-y-2 text-left`}>
          <div className="space-y-1">
            <h3 className="text-base font-semibold tracking-tight text-gray-900 line-clamp-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-gray-700 line-clamp-1">{subtitle}</p>
            )}
          </div>

          {/* Wide variant: show short excerpt lines like the mock */}
          {!isTall && excerpt && (
            <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
          )}

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-medium text-gray-500">
              {formatDate(date)}
            </span>

            {/* Read more */}
            <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900">
              Read More
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
              >
                <path
                  d="M5 12h14m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
