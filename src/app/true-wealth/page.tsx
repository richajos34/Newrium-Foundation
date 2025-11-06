import BlogBanner from "@/components/BlogBanner";

export default function About(){
    return (
        <section className="space-y-6">
            <h1 className="text-xl font-bold">True Wealth</h1>
            <BlogBanner
            imageSrc="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            articleTitle="Article Title"
            articleSummary="Summary on the article"
            />
        </section>
    )
  }