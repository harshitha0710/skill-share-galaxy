
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for demonstration

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-skill-purple">
              Skill<span className="text-skill-teal">Galaxy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-skill-purple font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-skill-purple font-medium">
              About Us
            </Link>
            <Link to="/discover" className="text-gray-700 hover:text-skill-purple font-medium">
              Discover
            </Link>
            {isLoggedIn && (
              <Link to="/chat/1" className="text-gray-700 hover:text-skill-purple font-medium">
                Messages
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Button variant="outline" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                <Button className="bg-skill-purple hover:bg-skill-darkPurple" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            ) : (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                      <User size={20} />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/view-profile"
                              className="block p-2 hover:bg-gray-100 rounded-md"
                            >
                              View Profile
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/profile"
                              className="block p-2 hover:bg-gray-100 rounded-md"
                            >
                              Edit Profile
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            Logout
                          </Button>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-skill-purple font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-skill-purple font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/discover" 
              className="block text-gray-700 hover:text-skill-purple font-medium"
              onClick={toggleMenu}
            >
              Discover
            </Link>
            {isLoggedIn && (
              <>
                <Link 
                  to="/chat/1" 
                  className="block text-gray-700 hover:text-skill-purple font-medium"
                  onClick={toggleMenu}
                >
                  Messages
                </Link>
                <Link 
                  to="/view-profile" 
                  className="block text-gray-700 hover:text-skill-purple font-medium"
                  onClick={toggleMenu}
                >
                  View Profile
                </Link>
              </>
            )}
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
              {!isLoggedIn ? (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/login" onClick={toggleMenu}>Log In</Link>
                  </Button>
                  <Button className="bg-skill-purple hover:bg-skill-darkPurple w-full" asChild>
                    <Link to="/register" onClick={toggleMenu}>Register</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/profile" onClick={toggleMenu}>Edit Profile</Link>
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
