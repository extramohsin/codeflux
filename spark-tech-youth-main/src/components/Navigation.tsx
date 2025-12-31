
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-md' : 'bg-white/60 backdrop-blur-xl border-b border-gray-200/40'
    }`}>
      <nav role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-gray-200">
              <img 
                src="/lovable-uploads/9f8ba864-aa13-4e8f-91fd-441bd6b5cd37.png" 
                alt="CodeFlux Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeFlux
            </span>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('home')}
                aria-label="Go to Home"
                className="group relative text-gray-800 hover:text-black transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                aria-label="Go to About"
                className="group relative text-gray-800 hover:text-black transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('workshops')}
                aria-label="Go to Workshops"
                className="group relative text-gray-800 hover:text-black transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Workshops
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                aria-label="Go to Gallery"
                className="group relative text-gray-800 hover:text-black transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Gallery
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                aria-label="Go to Contact"
                className="group relative text-gray-800 hover:text-black transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              onClick={() => scrollToSection('contact')}
              aria-label="Book a session"
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-blue-50 transition-colors"
          >
            {isOpen ? <X size={24} className="text-blue-600" /> : <Menu size={24} className="text-blue-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl rounded-b-3xl border border-blue-100 p-6 mx-4 mt-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('workshops')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Workshops
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-codeflux text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 mt-4"
              >
                Join Workshop
              </Button>
            </div>
          </div>
        )}
      </div>
      </nav>
    </header>
  );
};

export default Navigation;
