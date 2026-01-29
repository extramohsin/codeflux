
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-28 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center mb-12">
            <div className="relative w-32 h-32 z-10">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-xl" />
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-1 ring-gray-200/50 bg-white">
                <img
                  src="/lovable-uploads/9f8ba864-aa13-4e8f-91fd-441bd6b5cd37.png"
                  alt="CodeFlux logo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Tagline */}
          <div className="relative">
            {/* Background Logo - Animated and Modern */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              {/* Gradient Overlay Behind Logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-indigo-400/5 animate-pulse" />
              
              {/* Animated Logo */}
              <div className="relative animate-float">
                <img
                  src="/codeflux-logo-bg.png"
                  alt=""
                  className="w-full max-w-4xl opacity-15 select-none drop-shadow-2xl"
                  style={{
                    filter: 'blur(0.5px) brightness(1.1)',
                    animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite'
                  }}
                  aria-hidden="true"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl animate-pulse" />
              </div>
            </div>
            
            {/* Text Content */}
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Ignite AI for Professionals
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                with CodeFlux
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A youth-led community delivering premium, hands-on workshops in
            <span className="font-semibold text-blue-700"> AI tools, coding, robotics,</span> and innovation. Ideal for
            <span className="font-semibold text-purple-700"> school AI workshops, college AI workshops,</span> and
            <span className="font-semibold text-indigo-700"> coding bootcamps for students</span> across India.
          </p>

          {/* Tech Icons */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🤖</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">💻</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">⚡</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              aria-label="Book a workshop"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
            >
              Book a Workshop 🎯
            </Button>
            <Button
              aria-label="Learn with CodeFlux"
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
            >
              Learn With Us ✨
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">800+</div>
              <div className="text-gray-600 text-sm">Students Taught</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">30+</div>
              <div className="text-gray-600 text-sm">Workshops Conducted</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600 text-sm">Schools Visited</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-600 text-sm">Hands-on Learning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
