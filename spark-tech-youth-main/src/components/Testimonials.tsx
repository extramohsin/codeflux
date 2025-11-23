import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
      quote:
        "The AI workshop was eye-opening. I built my first mini project and learned how to use ChatGPT for real study tasks.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "School Teacher",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
      quote:
        "Practical, engaging, and relevant. My students loved the hands-on activities. The team made AI simple for everyone.",
      rating: 5,
    },
    {
      name: "Ayesha Khan",
      role: "Law Student",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop&crop=face",
      quote:
        "I now use AI for case summaries and notes. The legal-focused workshop was tailored perfectly to our needs.",
      rating: 4,
    },
    {
      name: "Dr. Mehta",
      role: "Medical Professional",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=120&h=120&fit=crop&crop=face",
      quote:
        "Time-saving tools for documentation and presentation. Highly recommended for healthcare learners.",
      rating: 5,
    },
    {
      name: "Shafeeque sir , primary teacher",
      designation: "New English High School",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=60&h=60&fit=crop&crop=face",
      quote:
        "CodeFlux taught me to use AI tools that saved me hours on my project. Nice session for our future education to school students.",
      bgClass: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      name: "Naina, 2nd year",
      designation: "Computer Science student",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=60&h=60&fit=crop&crop=face",
      quote:
        "We students were completely engaged throughout the workshop. The practical approach and real-world applications made complex concepts easy to understand. Highly recommended!",
      bgClass: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      name: "Sneha Patil",
      role: "College Student",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e94aa90?w=120&h=120&fit=crop&crop=face",
      quote:
        "The Coding Bootcamp with AI made programming fun. I finally feel confident writing and debugging code.",
      rating: 5,
    },
    {
      name: "Vikas Gupta",
      role: "Principal",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=120&h=120&fit=crop&crop=face",
      quote:
        "Well-structured and youth-led. The team inspired 200+ students at our campus in a single day.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Voices From Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from students, teachers, and institutions who learned
            with CodeFlux.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/codefluxofficial/?igsh=dXVpczl1emozcnhj#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit CodeFlux on Instagram"
              className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-600"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/codeflux-team/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit CodeFlux on LinkedIn"
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@Codeflux998"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit CodeFlux on YouTube"
              className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll border-0"
            >
              <div className="flex items-center mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                {t.quote}
              </blockquote>
              <div
                className="flex"
                role="img"
                aria-label={`Rating: ${t.rating} out of 5`}
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    aria-hidden="true"
                    className={
                      idx < t.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
