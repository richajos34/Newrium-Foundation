import Carousel from "@/components/Carousel";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white text-center py-6">
      <div className="mb-2 font-bold text-lg">Newrium Foundation</div>

      <div className="text-white text-sm">
        &copy; {year} Newrium Foundation. All rights reserved.
      </div>

      <div className="mt-2">
        <a href="#main" className="underline">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
