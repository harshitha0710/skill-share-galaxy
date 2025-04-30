
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-skill-purple/10 via-white to-skill-teal/10 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Exchange Skills, <span className="text-skill-purple">Expand</span> Horizons
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Connect with others who have complementary skills, create meaningful exchanges, 
            and grow together. No money involved, just shared knowledge and community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-skill-purple hover:bg-skill-darkPurple button-hover text-lg py-6 px-8">
              <Link to="/register">Join SkillGalaxy</Link>
            </Button>
            <Button asChild variant="outline" className="button-hover text-lg py-6 px-8">
              <Link to="/discover">Explore Skills</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
