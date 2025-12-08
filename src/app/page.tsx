import Hero from '@/components/Hero';

export default function Page(){
  return (
    <div className="w-screen max-w-none mx-auto">
      <Hero />
      <div className="pt-16">
        {/* Page content goes here */}
      </div>
    </div>
  )
}