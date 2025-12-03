import BlogBanner from "@/components/BlogBanner";
import Carousel from "@/components/Carousel";

export default function FAQ() {
  return (
    <main style={{ padding: 24 }}>
      <h1>FAQ</h1>
        <Carousel itemsToShow={1}>
          <BlogBanner
              imageSrc="https://images.unsplash.com/photo-1446034295857-c39f8844fad4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              articleTitle="Article Title"
              articleSummary="Summary on the article"
          />
          <BlogBanner
          imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          articleTitle="Article Title 2"
          articleSummary="Summary on the article 2"
          />
        </Carousel>
      <p>
        <a href="/">← Back to home</a>
      </p>
    </main>
  );
}
