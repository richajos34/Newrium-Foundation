import React from "react";
import Image from "next/image";

export interface BlogBannerProps {
    imageSrc: string;
    imageAlt?: string;
    articleTitle: string;
    articleSummary: string;
}

export default function BlogBanner({
    imageSrc,
    imageAlt,
    articleTitle,
    articleSummary,
}: BlogBannerProps) {
    return (
    <div className="relative w-full h-100 items-center pl-12.5 bg-gray-200 flex">
        <img
        src={imageSrc}
        alt={imageAlt}
        className="w-1/2 h-3/4 object-cover"
        />
        <div className = "pl-12.5 w-1/2 h-3/4 flex flex-col items-start space-y-5">
            <p className = "text-4xl font-bold">
                {articleTitle}
            </p>
            <p className = "text-2xl">
                {articleSummary}
            </p>
            <p className = "text-2xl mt-auto">
                Read More (need button component)
            </p>
        </div>
    </div>
    );
}