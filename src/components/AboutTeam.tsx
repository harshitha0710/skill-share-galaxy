
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Emily Chen",
    role: "Founder & CEO",
    bio: "Former education consultant who saw how financial barriers prevent access to quality learning. Passionate about democratizing education.",
    avatar: "EC"
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    bio: "Full-stack developer and AI enthusiast. Believes technology should connect people rather than replace human interaction.",
    avatar: "MJ"
  },
  {
    name: "Sofia Rodriguez",
    role: "Community Director",
    bio: "Community building expert with experience in education nonprofits. Dedicated to creating inclusive learning environments.",
    avatar: "SR"
  },
  {
    name: "Daniel Kim",
    role: "Product Manager",
    bio: "Former teacher who understands both educational needs and user experience. Focused on making the platform intuitive and effective.",
    avatar: "DK"
  }
];

const AboutTeam = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The passionate individuals behind SkillGalaxy who believe in the power of knowledge exchange.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-skill-purple text-white text-xl">{member.avatar}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-skill-purple font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
