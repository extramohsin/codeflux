import { Card } from "@/components/ui/card";

const WhyCodeFlux = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Real-Time Demos",
      description:
        "No boring lectures! Students see AI tools, code, and robots in action immediately.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🤖",
      title: "Latest AI Tools",
      description:
        "Hands-on experience with ChatGPT, DALL-E, GitHub Copilot, and emerging technologies.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: "🔧",
      title: "Hands-On Learning",
      description:
        "Every student gets to build, code, and create something they can take home.",
      gradient: "from-green-400 to-blue-500",
    },
    {
      icon: "📋",
      title: "Resume Building",
      description:
        "Projects and certificates that actually matter for college applications and internships.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: "👥",
      title: "Peer-to-Peer Learning",
      description:
        "Young instructors who speak the same language and understand student challenges.",
      gradient: "from-pink-400 to-red-500",
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      description:
        "Real insights into tech careers, internships, and what skills companies actually want.",
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Why Choose CodeFlux?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another coding bootcamp. We're your bridge to the
            future of technology, designed specifically for today's students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll border-0"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCodeFlux;
