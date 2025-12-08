import React from 'react';

export default function PillarsPage() {
  return (
    <main>
      {/* Hero Image Collage */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <img 
      src="Screenshot 2025-12-07 at 6.31.22 PM.png" 
      alt="The Four Pillars" 
      className="w-full object-contain"
    />
  </div>
</section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-blue-900 to-gray-800 text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/c6af840efa8bec7cacc3ce9a2c8273d3d618750d (1).jpg"
            alt="City skyline"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-black/50" />  {/* adjust /50 for more or less darkness */}

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">LEARN TO INVEST WISELY</h2>
          <button className="bg-[#55A5BC] hover:bg-[#4b94a8] text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            CHECK OUT THE INVESTMENTS PAGE
          </button>
        </div>
      </section>


{/* Pillars Section */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto space-y-32">

    {/* First Pillar */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-poppins mb-4 text-black">THE FIRST PILLAR</h3>
        <p className="font-DB_sans mb-6 text-black">
          This pillar is very important because of the following reasons:
        </p>
        <ul className="font-DB_sans space-y-2 mb-8 text-black">
          <li>- Reason 1</li>
          <li>- Reason 2</li>
          <li>- Reason 3</li>
          <li>- Reason 4</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <img 
          src="Property 1=Default.png" 
          alt="First Pillar" 
          className="w-80 h-80 object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Second Pillar */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center order-2 md:order-1">
        <img 
          src="Vector 7.png" 
          alt="Second Pillar" 
          className="w-80 h-80 object-contain rounded-lg"
        />
      </div>

      <div className="order-1 md:order-2">
        <h3 className="text-3xl font-poppins mb-4 text-black">THE SECOND PILLAR</h3>
        <p className="font-DB_sans mb-6 text-black">
          This pillar is very important because of the following reasons:
        </p>
        <ul className="font-DB_sans space-y-2 mb-8 text-black">
          <li>- Reason 1</li>
          <li>- Reason 2</li>
          <li>- Reason 3</li>
          <li>- Reason 4</li>
        </ul>
      </div>
    </div>

    {/* Third Pillar */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-poppins mb-4 text-black">THE THIRD PILLAR</h3>
        <p className="font-DB_sans mb-6 text-black">
          This pillar is very important because of the following reasons:
        </p>
        <ul className="font-DB_sans space-y-2 mb-8 text-black">
          <li>- Reason 1</li>
          <li>- Reason 2</li>
          <li>- Reason 3</li>
          <li>- Reason 4</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <img
          src="5.png"
          alt="Third Pillar"
          className="w-80 h-80 object-contain rounded-lg"
        />
      </div>
    </div>

    {/* Fourth Pillar */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center order-2 md:order-1">
        <img
          src="Vector 7.png"
          alt="Fourth Pillar"
          className="w-80 h-80 object-contain rounded-lg"
        />
      </div>

      <div className="order-1 md:order-2">
        <h3 className="text-3xl font-poppins mb-4 text-black">THE FOURTH PILLAR</h3>
        <p className="font-DB_sans mb-6 text-black">
          This pillar is very important because of the following reasons:
        </p>
        <ul className="font-DB_sans space-y-2 mb-8 text-black">
          <li>- Reason 1</li>
          <li>- Reason 2</li>
          <li>- Reason 3</li>
          <li>- Reason 4</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Combined Pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-poppins mb-12 text-black">
            THE FOUR PILLARS TOGETHER
          </h2>
          <div className="w-96 h-96 mx-auto flex justify-center items-center">
            <img
              src="Group 54.png"
              alt="Four Pillars Together"
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-3xl font-poppins mt-12 text-black">
            WILL LEAD TO GREATNESS
          </h3>
        </div>
      </section>
    </main>
  );
}