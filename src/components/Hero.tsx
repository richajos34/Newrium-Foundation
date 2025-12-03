

const Hero = () => {
  return (
      <section id="home" className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src="/hero-bg.png" alt=""className="absolute inset-0 w-full h-full object-cover"/>
        
        <div className="relative z-10 w-1/2 text-left ml-30 px-10">
          <h1 className="font-poppins font-semibold text-[40px] md:text-[64px] 
          leading-[120%] tracking-[3%] text-white text-left">
            Newrium <br />
            Foundation Inc.
          </h1>
          
          <p className="font-dm font-normal text-[16px] md:text-[20px] leading-[110%] tracking-[0%]
           text-gray-100 mb-12 max-w-3xl text-left pt-5">
          Newrium Foundation helps Gen Z master financial skills, self-motivation, and confidence - giving you the tools to plan ahead and live intentionally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <a href="/about">
              <button 
                className="flex items-center space-x-2 font-medium text-white  
                bg-(--tangerine) px-7 py-3 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
                <span>Learn More</span>
              </button>
            </a>
            <a href="/contact">
              <button 
                className="flex items-center space-x-2 text-(--foreground) font-medium px-8 py-3
                rounded-xl bg-white hover:bg-(--tangerine) hover:text-white transition-all duration-300">
                <span>Contact</span>
              </button>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Hero