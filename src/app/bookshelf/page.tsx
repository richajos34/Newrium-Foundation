import BlogCard from "@/components/BlogCard"
import BookCard from "@/components/BookCard"
import Carousel from "@/components/Carousel"

export default function FAQ() {
  return <div>
    <BookCard author="Author" description="Description" coverUrl="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" title="My Favorite Books"></BookCard>
    <BlogCard href="" imageSrc="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688" title="My Favorite Books"></BlogCard>
    <div style={{ width: "1200px", backgroundColor: "gray", padding: "50px" }}>
      {(() => {
        const images = [
          "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
          "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=688",
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
          "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
        ];
        const rand = () => images[Math.floor(Math.random() * images.length)];
        return (
          <Carousel itemsToShow={4}>
            {Array.from({ length: 5 }).map((_, i) => (
              <BookCard
                key={i}
                author="Author"
                description="Description"
                coverUrl={rand()}
                title="My Favorite Books"
              />
            ))}
          </Carousel>
        );
      })()}
    </div>
  </div>
}