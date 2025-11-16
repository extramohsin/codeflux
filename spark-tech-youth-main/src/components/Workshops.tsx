import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

type Curriculum = Record<string, string[]>;
type Workshop = {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  Audience: string;
  curriculum: Curriculum;
};

const Workshops = () => {
  const [openCurriculum, setOpenCurriculum] = useState<number | null>(null);

  const workshops: Workshop[] = [
    {
      title: "AI Tools for Daily Productivity 🤖",
      description:
        "Beginner-friendly, hands-on session using AI to supercharge study, teaching, and work. Perfect for students, teachers, and non-IT professionals.",
      image:
        "https://i.postimg.cc/G2xrdTpT/Flux-Dev-Diverse-group-of-people-student-teacher-doctor-and-bu-1.jpg",
      duration: "1.5 hours",
      level: "Beginner",
      Audience: "Students • Teachers • Professionals",
      curriculum: {
        Students: [
          "What AI can do",
          "ChatGPT for homework and revision",
          "Image generation basics",
          "Ethical AI usage",
        ],
        "Office Workers": [
          "Advanced prompting for reports",
          "Research and summarization tools",
          "Email and document drafting",
          "Presentation assistance",
        ],
        Teachers: [
          "Lesson planning with AI",
          "Automated quiz/worksheet creation",
          "Classroom engagement tools",
          "Content creation workflows",
        ],
      },
    },
    {
      title: "AI for Schools 🏫",
      description:
        "Engaging school AI workshop introducing students and teachers to practical AI tools for productivity and learning.",
      image:
        "https://i.postimg.cc/qRbbspbZ/Flux-Dev-School-classroom-with-students-using-laptops-and-inte-2.jpg",
      duration: "3 hours",
      level: "Beginner–Intermediate",
      Audience: "School Students • Teachers",
      curriculum: {
        "Primary/Middle School": [
          "What is AI?",
          "Find the right explanation videos",
          "Ethical AI usage",
          "Create your digital persona",
        ],
        "High School": [
          "ChatGPT for homework help",
          "Fun image generation",
          "Build a simple digital avatar",
          "Study planning with AI",
        ],
        Teachers: [
          "Smart teaching with ChatGPT",
          "Worksheets & quizzes automation",
          "Visual content creation",
          "Interactive classroom tools",
        ],
      },
    },
    {
      title: "AI for Medical Professionals 🏥",
      description:
        "Tailored for doctors, nurses, and medical students to improve productivity, documentation, and learning with AI tools.",
      image:
        "https://i.postimg.cc/XJCLC95X/Lucid-Realism-Doctors-and-nurses-in-scrubs-using-AI-tools-on-a-0.jpg",
      duration: "1.5 hours",
      level: "Beginner",
      Audience: "Medical Students • Doctors • Healthcare Staff",
      curriculum: {
        "Medical Students": [
          "AI for research and study notes",
          "Case summaries using ChatGPT",
          "Diagram/image-based learning",
          "Ethical usage in medical AI",
        ],
        "Teaching Professionals": [
          "Report creation and formatting",
          "Infographics for complex concepts",
          "Educational video workflows",
          "Assignment planning with AI",
        ],
        "Doctors & Staff": [
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
        "Automate drafting, research, and case summarization using AI tools for law students and professionals.",
      image:
        "https://i.postimg.cc/WbbrRM4r/Flux-Dev-A-closeup-portrait-of-a-diverse-group-of-lawyers-with-3.jpg",
      duration: "3 hours",
      level: "Beginner–Intermediate",
      Audience: "Law Students • Lawyers",
      curriculum: {
        "Law Students": [
          "AI for case law research",
          "Note-making & summaries",
          "Legal document formatting",
          "Debate practice tools with AI",
        ],
        "Lawyers & Legal Assistants": [
          "Drafting contracts with AI",
          "Automating legal notices",
          "Email writing & report preparation",
          "Court case summaries",
        ],
        Teachers: [
          "Educational video workflows",
          "Lecture recording",
          "Interactive content",
          "Student engagement strategies",
        ],
      },
    },
    {
      title: "AI for Content Creators 🎥",
      description:
        "Generate ideas, scripts, visuals, and social media content faster with practical AI workflows.",
      image:
        "https://i.postimg.cc/XNxGgpgv/Flux-Dev-A-cinematic-portrait-photograph-of-Young-content-crea-0.jpg",
      duration: "1.5 hours",
      level: "Beginner",
      Audience: "Creators • Influencers • Marketers",
      curriculum: {
        "Social Media Managers": [
          "Captions, hooks, and script writing",
          "Idea generation using ChatGPT",
          "Product branding with AI",
          "AI product avatars",
        ],
        Beginners: [
          "Idea generation using ChatGPT",
          "Captions, hooks, and scripts",
          "Canva AI for design",
          "Voiceover tools with AI",
        ],
        "Passion Creators": [
          "Educational materials design",
          "Video script automation",
          "Post scheduling using AI",
          "Animated video creation with AI",
        ],
      },
    },
    {
      title: "Coding with AI Bootcamp 💻",
      description:
        "Hands-on bootcamp teaching beginners to code smarter with AI assistants and automation tools.",
      image:
        "https://i.postimg.cc/qMVJyrP7/Flux-Schnell-Students-coding-on-laptops-with-floating-lines-of-2.jpg",
      duration: "5 hours",
      level: "Beginner–Advanced",
      Audience: "School/College Students • Non-Coders",
      curriculum: {
        "School & College Students": [
          "Python basics with AI help",
          "ChatGPT for code generation",
          "Mini project: TicTacToe or shopping cart",
          "Intro to Google Colab",
        ],
        "Non-IT Learners": [
          "Coding fundamentals with AI support",
          "Paper review and summarization tools",
          "AI for code debugging",
          "Using ChatGPT as a coding coach",
        ],
      },
    },
    {
      title: "Soft Skills & AI Communication 🗣️",
      description:
        "Improve communication, confidence, and presentation skills using AI tools and real-time feedback.",
      image:
        "https://i.postimg.cc/QxJ37Tg6/Flux-Schnell-animated-Person-practicing-a-presentation-with-AI-2.jpg",
      duration: "2 hours",
      level: "Beginner",
      Audience: "Primary • High School Students",
      curriculum: {
        "Primary Students": [
          "Present yourself with confidence",
          "Public speaking games",
          "Communication & collaboration",
          "Personal idea pitching",
        ],
        "High School Students": [
          "Think like an entrepreneur",
          "Slide & pitch deck creation",
          "Improve your personality",
          "Peer feedback with AI",
        ],
      },
    },
    {
      title: "Career Launchpad with AI 🚀",
      description:
        "Skill-building session combining AI, coding, resume creation, and soft skills to launch your career smartly.",
      image:
        "https://i.postimg.cc/dVVzTSV1/Flux-Schnell-animated-Young-professionals-preparing-resumes-an-0.jpg",
      duration: "2 hours",
      level: "Beginner–Intermediate",
      Audience: "University Students • Job Seekers",
      curriculum: {
        "University Students": [
          "Present yourself effectively",
          "Resume & cover letter with AI",
          "Communication & collaboration",
          "Idea discovery aligned to industry",
        ],
        "Job Seekers": [
          "Resume & cover letter with AI",
          "Automate job applications",
          "LinkedIn optimization using AI",
          "Find jobs/internships using AI tools",
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
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-purple-600">
                    {workshop.level}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-gray-700 shadow-sm">Beginner-friendly</span>
                  <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-gray-700 shadow-sm">Hands-on</span>
                  <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-gray-700 shadow-sm">Real-world projects</span>
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
                    {Object.entries(workshop.curriculum).map(([group, items], idx) => (
                      <div
                        key={group}
                        className={
                          idx === 0
                            ? "bg-blue-50 p-3 rounded-lg"
                            : idx === 1
                            ? "bg-purple-50 p-3 rounded-lg"
                            : "bg-green-50 p-3 rounded-lg"
                        }
                      >
                        <h5
                          className={
                            idx === 0
                              ? "font-medium text-blue-800 mb-1 text-sm"
                              : idx === 1
                              ? "font-medium text-purple-800 mb-1 text-sm"
                              : "font-medium text-green-800 mb-1 text-sm"
                          }
                        >
                          {group}
                        </h5>
                        <ul
                          className={
                            idx === 0
                              ? "text-xs text-blue-700 space-y-1"
                              : idx === 1
                              ? "text-xs text-purple-700 space-y-1"
                              : "text-xs text-green-700 space-y-1"
                          }
                        >
                          {items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={scrollToContact}
                    aria-label="Book a session"
                    className="w-full bg-gradient-codeflux text-white hover:shadow-lg transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600"
                  >
                    Book a Session 🚀
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
