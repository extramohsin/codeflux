
import { useState, useEffect } from 'react';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-blue-200">
              <img 
                src="/lovable-uploads/9f8ba864-aa13-4e8f-91fd-441bd6b5cd37.png" 
                alt="CodeFlux Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeFlux
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('workshops')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Workshops
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-codeflux text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Join Workshop
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
  );
};

export default Navigation;
