
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-skill-purple/10 via-white to-skill-teal/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            About <span className="text-skill-purple">SkillGalaxy</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            We're building a world where knowledge flows freely, unhindered by financial barriers.
            Our mission is to democratize learning through skill exchange.
          </p>
          <Button asChild className="bg-skill-purple hover:bg-skill-darkPurple button-hover">
            <Link to="/register">Join Our Community</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
