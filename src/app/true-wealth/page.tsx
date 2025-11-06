import BlogBanner from "@/components/BlogBanner";
import Carousel from "@/components/Carousel";

export default function TrueWealthPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>True Wealth</h1>
        <section className="space-y-6">
        <h1 className="text-xl font-bold">True Wealth</h1>
        <Carousel itemsToShow={1}>
          <BlogBanner
              imageSrc="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
              articleTitle="Article Title"
              articleSummary="Summary on the article"
          />
          <BlogBanner
          imageSrc="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
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
