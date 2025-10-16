

const Hero = () => {
    
  return (
    <div className=''>
    {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
             backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/placeholder-background.png')`
          }}
        />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="md:text-8xl font-bold text-white mb-6 leading-tight">
            Newrium Foundation
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your powers are within you. Transforming our humanity together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/tutorials">
              <button 
                className="flex items-center space-x-2 text-white border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                <span>Get Started</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero