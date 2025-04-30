
import { Book, MessageCircle, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Users size={36} className="text-skill-purple" />,
    title: "Connect by Skill",
    description: "Find perfect skill matches through our recommendation system that pairs complementary expertise."
  },
  {
    icon: <Book size={36} className="text-skill-teal" />,
    title: "Learn & Teach",
    description: "Both teach what you know and learn what you don't in a collaborative, supportive environment."
  },
  {
    icon: <MessageCircle size={36} className="text-skill-orange" />,
    title: "Seamless Communication",
    description: "Chat directly with potential tutors and schedule sessions through integrated tools."
  },
  {
    icon: <Star size={36} className="text-skill-purple" />,
    title: "Build Reputation",
    description: "Earn ratings and reviews that showcase your skills and teaching ability to the community."
  }
];

const FeatureSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Skill Exchange Works
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our platform makes skill bartering simple, transparent, and rewarding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
