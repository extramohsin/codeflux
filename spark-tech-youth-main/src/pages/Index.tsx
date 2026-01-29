
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Workshops from '@/components/Workshops';
import WhyCodeFlux from '@/components/WhyCodeFlux';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <Helmet>
        <title>CodeFlux | AI for Professionals & Startups in Nagpur</title>
        <meta name="description" content="CodeFlux is India's best AI startup for non-tech professionals. We provide physical, on-ground AI training for Doctors, Lawyers, and Teachers. Learn smart AI use in Nagpur." />
        <link rel="canonical" href="https://codeflux.social/" />
        <meta name="keywords" content="codeflux, code flux, code flax, AI for professionals, ai smart use, learning ai physically, best ai startup in india, nagpur startups, automation for doctors" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="CodeFlux | AI for Professionals & Startups in Nagpur" />
        <meta property="og:description" content="CodeFlux is India's best AI startup for non-tech professionals. We provide physical, on-ground AI training for Doctors, Lawyers, and Teachers. Learn smart AI use in Nagpur." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeflux.social/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "CodeFlux",
              "alternateName": ["CodeFlux Nagpur", "Code Flux"],
              "url": "https://codeflux.social",
              "logo": "https://codeflux.social/logo.png",
              "description": "Practical AI workshops for Doctors, Teachers, and Professionals in Nagpur.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.instagram.com/codefluxofficial"
              ],
              "priceRange": "₹₹",
              "knowsAbout": ["Artificial Intelligence", "Robotics", "Prompt Engineering"]
            }
          `}
        </script>
      </Helmet>

      {/* Global Animated Background - Fixed across entire site */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large floating orb - top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Large floating orb - bottom left */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 via-pink-500/25 to-blue-500/20 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Medium orb - top left */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/25 to-blue-400/20 rounded-full blur-2xl animate-float-medium"></div>
        
        {/* Medium orb - bottom right */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-pink-400/25 to-purple-400/20 rounded-full blur-2xl animate-float-slow"></div>
        
        {/* Center large glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/15 via-purple-300/10 to-indigo-300/15 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full blur-2xl animate-float-fast"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-400/25 to-indigo-400/20 rounded-full blur-2xl animate-float-medium"></div>
        
        {/* Subtle moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 animate-gradient-shift"></div>
      </div>

      <Navigation />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Workshops />
        <WhyCodeFlux />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
