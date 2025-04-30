
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="section bg-gradient-to-r from-skill-purple to-skill-darkPurple text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Skill Exchange Journey?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Join our growing community of learners and teachers. Share what you know,
          learn what you don't, and connect with amazing people along the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-white text-skill-purple hover:bg-gray-100 button-hover text-lg py-6 px-8">
            <Link to="/register">Create Your Profile</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 button-hover text-lg py-6 px-8">
            <Link to="/discover">Browse Skills Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
