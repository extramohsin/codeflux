
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl animate-pulse-glow">
              <img 
                src="/lovable-uploads/9f8ba864-aa13-4e8f-91fd-441bd6b5cd37.png" 
                alt="CodeFlux Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Ignite the Spark of
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate youth-led initiative introducing school and college students to 
            <span className="font-semibold text-blue-700"> AI tools, coding, robotics,</span> and real-world technology
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
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Invite Us to Your School 🎯
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Join Workshop ✨
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600 text-sm">Students Inspired</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">25+</div>
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
