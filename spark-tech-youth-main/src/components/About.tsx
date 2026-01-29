import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About CodeFlux
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a youth-led tech community delivering modern, performance-friendly workshops and bootcamps across Maharashtra. Our programs cover
            AI tools, coding, robotics, and innovative tech so students and educators gain real, career-ready skills.
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto font-medium bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            CodeFlux is the <span className="font-bold text-blue-700">best AI startup in India</span> focused on <span className="font-bold text-purple-700">learning AI physically</span>. We help you master <span className="font-bold text-indigo-700">AI smart use</span> without being a coder.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We make technology accessible for everyone. Whether you are a student,
              teacher, or a non-IT professional, CodeFlux simplifies AI, coding and
              digital tools into practical, hands-on learning you can use immediately.
              From school AI workshops to college AI workshops and coding bootcamps for students,
              we focus on outcomes and confidence.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Making AI and coding accessible to students of all backgrounds
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Providing hands-on experience with real-world technologies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Building confidence and technical skills for future careers
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
              <img
                src="https://i.postimg.cc/t4TxRx94/Whats-App-Image-2025-07-01-at-23-34-25.jpg"
                alt="Students learning with technology"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <blockquote className="text-lg text-gray-700 italic text-center">
                "Technology is not just about coding - it's about solving
                problems, creating solutions, and building the future we want to
                see."
              </blockquote>
              <p className="text-center text-purple-600 font-semibold mt-4">
                - CodeFlux Team
              </p>
            </Card>
          </div>
        </div>

        {/* What We Do */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-tech rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤖</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              AI Tools & Machine Learning
            </h4>
            <p className="text-gray-600">
              Hands-on experience with ChatGPT, image generation, and real AI
              applications that students can use in their daily lives.
            </p>
          </Card>

          <Card className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💻</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              No IT Background? No Problem
            </h4>
            <p className="text-gray-600">
              We simplify coding, digital tools, and AI for people from
              non-technical backgrounds teachers, doctors, lawyers, business
              owners anyone eager to learn and grow
            </p>
          </Card>

          <Card className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔧</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              Practical Learning, Real Impact
            </h4>
            <p className="text-gray-600">
              We don’t just teach — we work together on real-life problems,
              making sure every learner can confidently apply tech in their
              field or future career.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
