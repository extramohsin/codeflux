const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20">
                <img
                  src="/lovable-uploads/9f8ba864-aa13-4e8f-91fd-441bd6b5cd37.png"
                  alt="CodeFlux Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold">CodeFlux</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Igniting the spark of innovation in young minds through hands-on
              technology education. Building the future, one student at a time
              across Maharashtra.
            </p>
            <blockquote className="text-blue-300 italic font-medium">
              "TECH BEGINS HERE" ✨
            </blockquote>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#workshops"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 codefluxhelp@gmail.com</p>
              <p>📱 +91 9325808063</p>
              <p>📍 All across Maharashtra, India</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 transition-colors"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center hover:from-indigo-700 hover:to-blue-700 transition-colors"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                📺
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CodeFlux. All rights reserved. Made with ❤️ for students
              everywhere.
              <br />
              Designed & developed by Mohsin Malik.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
