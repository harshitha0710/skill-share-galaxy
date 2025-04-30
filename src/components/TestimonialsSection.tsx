
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Learned Python",
    text: "SkillGalaxy helped me find someone to teach me Python in exchange for my graphic design skills. It was a win-win!",
    avatar: "AJ",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "JavaScript Tutor",
    text: "I've been able to sharpen my teaching skills while learning photography. The platform makes scheduling and communication so easy.",
    avatar: "MG",
    rating: 4
  },
  {
    name: "David Chen",
    role: "Language Exchange",
    text: "I'm learning Spanish while teaching Mandarin. The rating system helps ensure quality exchanges and builds trust.",
    avatar: "DC",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Real experiences from people who've exchanged skills on SkillGalaxy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-gray-200 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} mr-1`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-skill-purple text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
