
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-skill-purple">
                Skill<span className="text-skill-teal">Galaxy</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              A community-driven platform for skill exchange and knowledge sharing without monetary constraints.
              Connect, learn, and grow together.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-skill-purple">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-skill-purple">About Us</Link>
              </li>
              <li>
                <Link to="/discover" className="text-gray-600 hover:text-skill-purple">Discover Tutors</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-skill-purple">FAQs</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-skill-purple">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-skill-purple">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-skill-purple">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} SkillGalaxy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
