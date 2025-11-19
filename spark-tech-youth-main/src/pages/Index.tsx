
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
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CodeFlux - AI Workshops, Robotics & Coding Bootcamps</title>
        <meta name="description" content="CodeFlux offers top-tier AI workshops, robotics bootcamps, and coding courses for schools and colleges. Ignite the spark of innovation today." />
        <link rel="canonical" href="https://codeflux-bcnb.onrender.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="CodeFlux - AI Workshops, Robotics & Coding Bootcamps" />
        <meta property="og:description" content="CodeFlux offers top-tier AI workshops, robotics bootcamps, and coding courses for schools and colleges. Ignite the spark of innovation today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeflux-bcnb.onrender.com/" />
      </Helmet>

      <Navigation />
      
      <main className="flex-grow">
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
