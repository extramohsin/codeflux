
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    phone: '',
    message: '',
    workshopType: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent! 🎉",
      description: "We'll get back to you within 24 hours to discuss your workshop needs.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      school: '',
      phone: '',
      message: '',
      workshopType: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi CodeFlux! I'm interested in organizing a workshop at our institution. Can we discuss the details?");
    window.open(`https://wa.me/919325808063?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-codeflux bg-clip-text text-transparent">
            Let's Start Something Amazing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring cutting-edge technology education to your institution? 
            We're excited to work with you across Maharashtra and create an unforgettable learning experience!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white dark:bg-gray-800 shadow-xl animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Book Your Workshop 📝</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                    placeholder="john@school.edu"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    School/Institution *
                  </label>
                  <Input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    required
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Your Institution Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Workshop Interest
                </label>
                <select
                  name="workshopType"
                  value={formData.workshopType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a workshop type</option>
                  <option value="ai-tools">AI Tools for Students</option>
                  <option value="python">Python Programming</option>
                  <option value="web-dev">Web Development</option>
                  <option value="video-creation">Video Creation & Editing</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="ai-teachers">AI for Teachers</option>
                  <option value="robotics">Robotics & Arduino</option>
                  <option value="data-science">Data Science</option>
                  <option value="game-dev">Game Development</option>
                  <option value="custom">Custom Workshop</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Tell us about your requirements
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Number of students, grade level, any specific topics you'd like us to cover, preferred dates..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-codeflux text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Send Message 🚀
              </Button>
            </form>
          </Card>

          {/* Quick Contact & Info */}
          <div className="space-y-8 animate-on-scroll">
            {/* WhatsApp Contact */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">💬</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Quick Connect on WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Need immediate assistance or have urgent questions? 
                  Reach out to us directly on WhatsApp!
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Chat on WhatsApp 📱
                </Button>
              </div>
            </Card>

            {/* Contact Details */}
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">codefluxhelp@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">WhatsApp</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 9325808063</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Coverage Area</p>
                    <p className="text-gray-600 dark:text-gray-300">All across Maharashtra</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Response Time</p>
                    <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Coverage Areas */}
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-0 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">🏛️ We Serve Across Maharashtra</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="text-center">Mumbai</div>
                <div className="text-center">Pune</div>
                <div className="text-center">Nagpur</div>
                <div className="text-center">Nashik</div>
                <div className="text-center">Aurangabad</div>
                <div className="text-center">Solapur</div>
                <div className="text-center">Kolhapur</div>
                <div className="text-center">Sangli</div>
              </div>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-4">
                And many more cities across Maharashtra!
              </p>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">Follow Our Journey</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  🐦
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                >
                  📺
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
