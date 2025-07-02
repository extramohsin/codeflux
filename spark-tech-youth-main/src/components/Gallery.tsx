import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://i.postimg.cc/wBtpPxZL/Whats-App-Image-2025-07-02-at-23-30-17.jpg",
      title: "AI Workshop at Anjuman College",
      description:
        "Non-Teaching exploring ChatGPT and AI video generation tools",
    },
    {
      src: "https://i.postimg.cc/cHRwRWxG/Whats-App-Image-2025-07-02-at-23-39-38.jpg",
      title: "AI for productivity boost for teacher",
      description:
        "Teaching school/universities teachers the best use of ai and how to make thier teaching more funn for students.",
    },
    {
      src: "https://i.postimg.cc/cLGKcjzs/Whats-App-Image-2025-07-02-at-23-39-38-1.jpg",
      title:
        "Masterclass for teachers with the absolute use of AI all over India  ",
      description:
        "Teachers understanding the Fun of ai and how to make it benifical for students",
    },
    {
      src: "https://i.postimg.cc/pdhLbJ40/Whats-App-Image-2025-07-02-at-23-42-14.jpg",
      title: "Students Creating their first portfolio website.",
      description:
        "Engineering students making thier  first portfoio website using AI and coding with us",
    },
    {
      src: "https://i.postimg.cc/rmGcMnJ9/Whats-App-Image-2025-07-02-at-23-42-13.jpg",
      title: "ITaking the challenge up to deploy thier projects",
      description:
        "Students understanding the website and uploading on github with codeflux ",
    },
    {
      src: "https://i.postimg.cc/3NSwQf8c/Whats-App-Image-2025-07-02-at-23-42-13-1.jpg",
      title: "Workshop of Ai webcraft jam",
      description:
        "From understanding Ai and its origin to implementing ai on coding, went for all with codeflux.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Workshop Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a peek into our interactive workshops and see the excitement of
            students discovering the world of technology!
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12 animate-on-scroll">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {images[currentIndex].title}
                </h3>
                <p className="text-white/90">
                  {images[currentIndex].description}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 hover:bg-white rounded-full p-3 shadow-lg"
            size="icon"
          >
            <ArrowLeft size={20} />
          </Button>
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 hover:bg-white rounded-full p-3 shadow-lg"
            size="icon"
          >
            <ArrowRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-purple-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-on-scroll">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                currentIndex === index
                  ? "ring-4 ring-purple-500 scale-105"
                  : "hover:scale-105 hover:shadow-lg"
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-24 object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  currentIndex === index
                    ? "bg-purple-500/20"
                    : "bg-black/0 hover:bg-black/10"
                } transition-all duration-300`}
              ></div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <Card className="inline-block p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Ready to create these moments at your school? 📸
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Every workshop is a new adventure in learning. Let's capture the
              excitement of discovery together with your students!
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-primary text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Book Your Workshop 🎯
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
