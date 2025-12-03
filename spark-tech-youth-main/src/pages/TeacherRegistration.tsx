import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Users } from "lucide-react";

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  whatsapp_number: z.string().min(10, "WhatsApp number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  school_name: z.string().min(2, "School name must be at least 2 characters"),
  grade_level: z.string().min(1, "Please select a grade level"),
  subject_area: z.string().min(1, "Please select a subject area"),
  pressure_points: z.array(z.string()).min(1, "Please select at least one pressure point"),
  expectation: z.string().min(1, "Please select your biggest expectation"),
});

const gradeLevels = [
  "Pre-Primary (Nursery / LKG / UKG)",
  "Primary Section (Class 1 - 5)",
  "Middle School (Class 6 - 8)",
  "Secondary / High School (Class 9 - 10)",
  "Senior Secondary / Junior College (Class 11 - 12)",
];

const subjectAreas = [
  "All Subjects / Mother Teacher (Pre-Primary & Primary)",
  "Science (Physics, Chemistry, Biology)",
  "Mathematics",
  "Languages (English, Hindi, Marathi, Sanskrit, etc.)",
  "Social Sciences (History, Geog, Civics, Econ)",
  "Computer Science / IT",
  "Co-curricular (Arts, Sports, Music)",
];

const pressurePoints = [
  "Creating Creative Worksheets & Activities (for LKG-5)",
  "Writing Report Card Remarks & Observations",
  "Drafting Question Papers & MCQs (for 9-12)",
  "Creating Lesson Plans & Notes",
  "Handling Administrative Work / Registers",
  "Explaining Complex Concepts simply",
];

const expectations = [
  "I want to save time on paperwork.",
  "I want to make my classes more interesting/visual.",
  "I want to learn how to make Question Papers fast.",
  "I am new to AI and just want to learn the basics.",
];

const TeacherRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registeredName, setRegisteredName] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      whatsapp_number: "",
      email: "",
      school_name: "",
      grade_level: "",
      subject_area: "",
      pressure_points: [],
      expectation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("workshop_registrations_dec20")
        .insert([values]);

      if (error) throw error;

      setRegisteredName(values.full_name);
      setIsSuccess(true);
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navigation />
        <div className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <Card className="w-full max-w-2xl border-2 border-green-600 shadow-xl overflow-hidden">
            <div className="bg-green-600 p-6 flex justify-center">
              <CheckCircle2 className="h-20 w-20 text-white" />
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-3xl font-bold text-green-800">Registration Confirmed!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6 pt-6">
              <p className="text-xl text-gray-700">
                We have reserved a seat for <span className="font-bold text-green-700">{registeredName}</span> at Rathor Lawn.
              </p>
              <p className="text-lg text-gray-600">
                See you on <span className="font-semibold">Dec 20 at 4:00 PM</span>.
              </p>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-100 mt-6">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center justify-center gap-2">
                  <Users className="h-5 w-5" />
                  Stay Updated
                </h3>
                <p className="text-gray-600 mb-4">Join our exclusive WhatsApp group for event updates and resources.</p>
                <Button 
                  asChild 
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg transition-all hover:scale-105"
                >
                  <a href="https://chat.whatsapp.com/L2CbHa9ddTb7JLe2z58WR6?mode=hqrt1" target="_blank" rel="noopener noreferrer">
                    Join WhatsApp Group
                  </a>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 text-center text-sm text-gray-500 py-4 justify-center">
              Codeflux & TiE Nagpur
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-3xl shadow-2xl border-t-8 border-t-[#1a365d]">
          <CardHeader className="text-center space-y-4 pb-8 bg-white rounded-t-lg">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
              Teacher Training Workshop
            </div>
            <CardTitle className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1a365d] to-[#7c3aed]">
              Codeflux & TiE Present: <br/>Smart Teaching With AI
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master the tools that will save you time and transform your classroom.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-10 bg-white">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Personal Details Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
                    <span className="bg-[#1a365d] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                    Personal Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} className="bg-gray-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="whatsapp_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input placeholder="For event updates" {...field} className="bg-gray-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} className="bg-gray-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="school_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>School Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name of your school" {...field} className="bg-gray-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Professional Profile Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
                    <span className="bg-[#1a365d] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                    Professional Profile
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="grade_level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Which Grade Level do you primarily teach?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-50">
                                <SelectValue placeholder="Select Grade Level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {gradeLevels.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject_area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What is your main Subject Area?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-50">
                                <SelectValue placeholder="Select Subject Area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subjectAreas.map((subject) => (
                                <SelectItem key={subject} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Challenges & Expectations Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
                    <span className="bg-[#1a365d] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                    Challenges & Expectations
                  </h3>

                  <FormField
                    control={form.control}
                    name="pressure_points"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Where do you face the most pressure? (Select all that apply)</FormLabel>
                          <FormDescription>
                            This helps us tailor the workshop to your needs.
                          </FormDescription>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {pressurePoints.map((item) => (
                            <FormField
                              key={item}
                              control={form.control}
                              name="pressure_points"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item}
                                    className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer leading-tight">
                                      {item}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expectation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What is your biggest expectation from this workshop?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Select your biggest expectation" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {expectations.map((expectation) => (
                              <SelectItem key={expectation} value={expectation}>
                                {expectation}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-[#1a365d] to-[#7c3aed] hover:from-[#152c4e] hover:to-[#6d28d9] transition-all duration-300 shadow-lg hover:shadow-xl" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Reserving your seat..." : "Reserve My Seat (Free)"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t p-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
            <span>Limited Seats Available at Rathor Lawn.</span>
            <span className="font-semibold text-[#1a365d]">Collaboration by Codeflux & TiE.</span>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherRegistration;
