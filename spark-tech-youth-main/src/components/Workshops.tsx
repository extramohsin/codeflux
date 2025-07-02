import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Workshops = () => {
  const [openCurriculum, setOpenCurriculum] = useState<number | null>(null);

  const workshops = [
    {
      title: "AI Tools for Daily Productivity 🤖",
      description:
        "A beginner-friendly workshop where we teach how to use AI tools to make your daily work easier whether you're a student, teacher, or non-IT professional.",
      image:
        "https://i.postimg.cc/G2xrdTpT/Flux-Dev-Diverse-group-of-people-student-teacher-doctor-and-bu-1.jpg",
      duration: "1.5 hours",
      level: "Beginner",
      Audience: "Everyone",
      curriculum: {
        students: [
          "Basic AI concepts",
          "ChatGPT for homework",
          "AI image generation",
          "Ethical AI usage",
        ],
        "Office workers": [
          "Advanced prompting",
          "AI research tools",
          "Code generation",
          "AI in academics",
        ],
        Professors: [
          "AI for lesson planning",
          "Automated grading",
          "Content creation",
          "Student engagement tools",
        ],
      },
    },
    {
      title: "AI for school 🏫",
      description:
        "Designed specifically for school environments to introduce students and teachers to AI in a simple and fun way for greater productivity.",
      image:
        "https://i.postimg.cc/qRbbspbZ/Flux-Dev-School-classroom-with-students-using-laptops-and-inte-2.jpg",
      duration: "3 hours",
      level: "Beginner to Intermediate",
      Audience: "School Students, Teachers",
      curriculum: {
        "Shool students": [
          "What is AI?",
          "Find perfect explination videos",
          "Ethical use of AI",
          "Make your digital personality",
        ],
        "High school students": [
          "What is AI?",
          "ChatGPT for homework help",
          "Image generation fun",
          "Make your digital avatar",
        ],
        teachers: [
          "Smart teaching with ChatGPT",
          "Making worksheets & quizzes",
          "Visual content creation",
          "Interactive classroom tools",
        ],
      },
    },
    {
      title: "AI for Medical Professionals 🏥",
      description:
        "A workshop tailored to help doctors, nurses, and medical students use AI to improve productivity and documentation.",
      image:
        "https://i.postimg.cc/XJCLC95X/Lucid-Realism-Doctors-and-nurses-in-scrubs-using-AI-tools-on-a-0.jpg",
      duration: "1.5 hours",
      level: "Beginner",
      Audience: "Medical Students, Doctors, Healthcare Staff",
      curriculum: {
        "Medical students": [
          "AI for research and study notes",
          "Case summaries using ChatGPT",
          "Diagram/image-based learning",
          "Ethical usage in medical AI",
        ],
        "Teaching profesionals": [
          "Making reports easily",
          "Making infographics for understanding complex medical concepts",
          "Making Educational videos",
          "Planning assignments",
        ],
        "Doctors & Staffs": [
          "Medical report summarization",
          "Time-saving content generation",
          "Email, form, and letter drafting",
          "AI for presentations and CME",
        ],
      },
    },
    {
      title: "AI for Lawyers ⚖️",
      description:
        "Helps law students and professionals automate drafting, research, and case summarization using AI tools.",
      image:
        "https://i.postimg.cc/WbbrRM4r/Flux-Dev-A-closeup-portrait-of-a-diverse-group-of-lawyers-with-3.jpg",
      duration: "3 hours",
      level: "Beginner to Intermediate",
      Audience: "Law Students, Lawyer",
      curriculum: {
        "Law Students": [
          "AI for case law research",
          "Note-making & summaries",
          "Legal document formatting",
          " AI debate practice tools",
        ],
        "Lawyers & Legal Assistants": [
          "Drafting contracts with AI",
          " Automating legal notices",
          "Email writing & report prep",
          "Court case summaries",
        ],
        teachers: [
          "Educational videos",
          "Lecture recording",
          "Interactive content",
          "Student engagement videos",
        ],
      },
    },
    {
      title: "AI for Content Creators 🎥",
      description:
        "Learn how to generate ideas, scripts, visuals, and social media content using powerful AI tools.",
      image:
        "https://i.postimg.cc/XNxGgpgv/Flux-Dev-A-cinematic-portrait-photograph-of-Young-content-crea-0.jpg",
      duration: "1.5 hours",
      level: "Beginner",
      Audience: "Creators, Influencers, Marketers",
      curriculum: {
        "Social media manager ": [
          "Caption, hook & script writing",
          "Idea generation using ChatGPTy",
          "Product Branding with Ai",
          "Making AI avatar of product",
        ],
        Beginners: [
          "Idea generation using ChatGPT",
          "Caption, hook & script writing",
          "Canva AI for design",
          " Voiceover tools with AI",
        ],
        "Passion Creators": [
          "Educational materials design",
          "Video script automation",
          "Post scheduling using AI",
          "Animated video creatioon with AI",
        ],
      },
    },
    {
      title: "Coding with AI Bootcamp 💻",
      description:
        "A hands-on bootcamp to teach beginners how to code smarter using AI assistants and automation tools.",
      image:
        "https://i.postimg.cc/qMVJyrP7/Flux-Schnell-Students-coding-on-laptops-with-floating-lines-of-2.jpg",
      duration: "5 hours",
      level: "Beginner-Advance",
      Audience: "School/College Students, Non-Coders",
      curriculum: {
        "School & College Students": [
          "Python basics with AI help",
          "ChatGPT for code generation",
          "SMini project: TicTacToe game/shopping cart",
          "Google Colab intro",
        ],
        "Non-IT Learners": [
          "Non-IT Learners",
          "Paper reviewing tools",
          "AI for debugging code",
          "Using ChatGPT as a coding coach",
        ],
      },
    },
    {
      title: " Soft Skills Training & AI Communication 🗣️",
      description:
        "Improve your communication, confidence, and presentation skills with the help of AI tools and real-time feedback.",
      image:
        "https://i.postimg.cc/QxJ37Tg6/Flux-Schnell-animated-Person-practicing-a-presentation-with-AI-2.jpg",
      duration: "2 hours",
      level: "Beginner",
      Audience: "Primary Students, High school students",
      curriculum: {
        "Primary Students": [
          "How to present yourself",
          "Confident public speaking Games",
          "Communication & team collaboration",
          "Personal Idea Pitching",
        ],
        "High school students": [
          "High school students",
          "How to think as a businessman",
          "Slide & pitch deck creation",
          "How to improve your personality",
        ],
      },
    },
    {
      title: "  Career Launchpad With AI🚀",
      description:
        "A complete skill-building session combining AI, coding, resume making, and soft skills to launch your career the smart way.",
      image:
        "https://i.postimg.cc/dVVzTSV1/Flux-Schnell-animated-Young-professionals-preparing-resumes-an-0.jpg",
      duration: "2 hours",
      level: "Beginner-Intermidate",
      Audience: "University Students, Job Seekers",
      curriculum: {
        "University Students": [
          "How to present yourself",
          "Build resume & cover letter with AI",
          "Communication & team collaboration",
          "Finding Ideas for as the indusrty requirment",
        ],
        "Job seekers": [
          "Build resume & cover letter with AI",
          "Automate job applications",
          "LinkedIn optimization using AI",
          " Find jobs/internships using AI tools",
        ],
      },
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleCurriculum = (index: number) => {
    setOpenCurriculum(openCurriculum === index ? null : index);
  };

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-codeflux bg-clip-text text-transparent">
            Our Workshops & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive, hands-on learning experiences designed to spark
            curiosity and build practical skills. Hover over cards to see more
            details!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {workshops.map((workshop, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-on-scroll border-0 relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-purple-600">
                    {workshop.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {workshop.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex justify-between">
                    <span>⏱️ Duration:</span>
                    <span className="font-semibold">{workshop.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>👥 Audience:</span>
                    <span className="font-semibold">{workshop.Audience}</span>
                  </div>
                </div>

                {/* Curriculum Dropdown */}
                <Collapsible
                  open={openCurriculum === index}
                  onOpenChange={() => toggleCurriculum(index)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full mb-3 text-sm flex items-center justify-between hover:bg-blue-50 border-blue-200"
                    >
                      View Curriculum
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openCurriculum === index ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-1 text-sm">
                        {Object.keys(workshop.curriculum)[0]}
                      </h5>
                      <ul className="text-xs text-blue-700 space-y-1">
                        {Object.values(workshop.curriculum)[1].map(
                          (item, idx) => (
                            <li key={idx}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-medium text-purple-800 mb-1 text-sm">
                        {Object.keys(workshop.curriculum)[1]}
                      </h5>
                      <ul className="text-xs text-purple-700 space-y-1">
                        {Object.values(workshop.curriculum)[1].map(
                          (item, idx) => (
                            <li key={idx}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-1 text-sm">
                        {Object.keys(workshop.curriculum)[2]}
                      </h5>
                      <ul className="text-xs text-green-700 space-y-1">
                        {Object.values(workshop.curriculum)[1].map(
                          (item, idx) => (
                            <li key={idx}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-codeflux text-white hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    Book This Workshop 🚀
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Card className="inline-block p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Want to customize a workshop for your institution? 🎯
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              We can adapt any workshop to match your curriculum, student
              interests, and available time slots. Serving all across
              Maharashtra!
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-gradient-codeflux text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Get Custom Workshop 🚀
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
