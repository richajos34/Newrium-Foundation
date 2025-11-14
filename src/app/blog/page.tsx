import React from 'react';
import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  const blogPosts = [
    {
      href: "/blog/post-1",
      imageSrc: "https://www.nicepng.com/png/detail/35-354519_pokemon-png-chibi.png",
      imageAlt: "Blog post",
      title: "Blog Post Title 1",
      subtitle: "Subtitle",
      date: "2024-11-01",
      excerpt: "This is a brief excerpt of the blog post content.",
      variant: "tall" as const,
    },
    {
      href: "/blog/post-2",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTro6YIXhJMh9RHstXs3335OmOYItGWlczuZQ&s",
      imageAlt: "Blog post",
      title: "Blog Post Title 2",
      subtitle: "Subtitle",
      date: "2024-10-28",
      excerpt: "This is a brief excerpt of the blog post content.",
      variant: "tall" as const,
    },
    {
      href: "/blog/post-3",
      imageSrc: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/profile/photos/24664934/original/Charmander.jpg",
      imageAlt: "Blog post",
      title: "Blog Post Title 3",
      subtitle: "Subtitle",
      date: "2024-10-25",
      excerpt: "This is a brief excerpt of the blog post content.",
      variant: "tall" as const,
    },
    {
      href: "/blog/post-4",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuy_TZgUmTh05I7wnMncbWcmDDwMqMkJ0wA&s",
      imageAlt: "Blog post",
      title: "Blog Post Title 4",
      subtitle: "Subtitle",
      date: "2024-10-20",
      excerpt: "This is a brief excerpt of the blog post content.",
      variant: "tall" as const,
    },
    {
      href: "/blog/post-5",
      imageSrc: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/26810132/original/f16356ae4c5c5b0d6bd0606052fd85c31ec22345/do-a-little-animal-chibi-on-illustrator.jpg",
      imageAlt: "Blog post",
      title: "Blog Post Title 5",
      subtitle: "Subtitle",
      date: "2024-10-15",
      excerpt: "This is a brief excerpt of the blog post content.",
      variant: "tall" as const,
    },
    {
      href: "/blog/post-6",
      imageSrc: "https://i.pinimg.com/170x/c2/fe/da/c2feda5d93d9b31a97ec3bd004351bc5.jpg",
      imageAlt: "Blog post",
      title: "Blog Post Title 6",
      subtitle: "Subtitle",
      date: "2024-10-10",
      excerpt: "This is a brief excerpt of the blog post content.",
      variant: "tall" as const,
    },
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gray-200 py-16 text-center -mx-8 mb-8">
        <h1 className="text-5xl font-bold text-gray-900">BLOGS</h1>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}