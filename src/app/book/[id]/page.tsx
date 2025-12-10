import React from "react";

export default function BookPage({ params }: { params: { id: string } }) {
  // TODO: replace with real data later (using params.id)
  const book = {
    category: "Finance",
    title: "Book Title",
    author: "Author",
    rating: 3,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate ex ligula,
maximus iaculis ex feugiat vitae. Morbi a ornare erat. Aliquam sed risus in quam
convallis bibendum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate ex ligula,
maximus iaculis ex feugiat vitae. Morbi a ornare erat. Aliquam sed risus in quam
convallis bibendum.`,
    editors:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    published: "00. 0000",
    language: "English",
    isbn: "000 0 00000000 0000 0",
    reviews: [
      {
        id: 1,
        name: "Name",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        name: "Name",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  };

  return (
    // Nav bar is handled by layout.tsx, so just the page content here
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-10 pt-16 pb-24">
        {/* Back arrow */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-8 text-sm text-neutral-700 hover:text-black flex items-center gap-2"
        >
          <span className="text-xl">&lt;</span>
        </button>

        <div className="grid gap-16 lg:grid-cols-[260px,1fr]">
          {/* LEFT: cover + main info */}
          <div className="flex flex-col items-start gap-8">
            {/* Book cover */}
            <div className="w-[210px] h-[280px] bg-neutral-200 border border-neutral-600 border-b-[6px]" />

            {/* Text info */}
            <div className="space-y-1">
              <p className="text-sm text-sky-600">{book.category}</p>
              <h1 className="text-3xl font-semibold tracking-tight">
                {book.title}
              </h1>

              <p className="mt-3 text-base text-neutral-800">Author</p>
              <p className="text-base text-neutral-800">Rating</p>

              {/* Stars */}
              <div className="mt-1 flex gap-1 text-[18px] text-amber-400">
                {"★".repeat(book.rating)}
                {"★".repeat(0)}
                {"☆".repeat(5 - book.rating)}
              </div>
            </div>

            {/* Start Reading button */}
            <button className="mt-6 rounded-full bg-[#3E7897] px-7 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#2f647f] transition">
              Start Reading
            </button>
          </div>

          {/* RIGHT: description + side column */}
          <div className="grid gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            {/* Description */}
            <section>
              <h2 className="text-lg font-semibold tracking-tight">
                Description
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-800 whitespace-pre-line">
                {book.description}
              </p>
            </section>

            {/* Side info with orange divider */}
            <aside className="pl-10 border-l-2 border-[#D98C4D] text-sm text-neutral-900 space-y-5">
              <div>
                <h3 className="font-semibold mb-1">Editors</h3>
                <p className="text-sm leading-relaxed">
                  {book.editors}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Published</h3>
                <p>{book.published}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Language</h3>
                <p>{book.language}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">ISBN</h3>
                <p>{book.isbn}</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-16">
          <h2 className="text-lg font-semibold tracking-tight mb-6">
            Reviews
          </h2>

          <div className="space-y-8">
            {book.reviews.map((review) => (
              <div key={review.id} className="flex items-start gap-4">
                {/* Circle avatar */}
                <div className="mt-1 h-10 w-10 rounded-full border border-neutral-500" />
                <div>
                  <p className="text-sm font-medium mb-1">{review.name}</p>
                  <p className="text-sm leading-relaxed text-neutral-800 max-w-xl">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
