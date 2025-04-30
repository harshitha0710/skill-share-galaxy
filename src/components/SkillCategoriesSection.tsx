
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Technology",
    skills: ["Web Development", "Data Science", "Mobile Apps", "AI & Machine Learning"],
    color: "bg-blue-100 border-blue-200"
  },
  {
    title: "Creative Arts",
    skills: ["Graphic Design", "Photography", "Video Editing", "Music Production"],
    color: "bg-purple-100 border-purple-200"
  },
  {
    title: "Languages",
    skills: ["English", "Spanish", "Chinese", "French"],
    color: "bg-green-100 border-green-200"
  },
  {
    title: "Business",
    skills: ["Marketing", "Finance", "Project Management", "Entrepreneurship"],
    color: "bg-amber-100 border-amber-200"
  },
  {
    title: "Lifestyle",
    skills: ["Cooking", "Fitness", "Meditation", "Interior Design"],
    color: "bg-red-100 border-red-200"
  },
  {
    title: "Academic",
    skills: ["Math", "Science", "Literature", "History"],
    color: "bg-teal-100 border-teal-200"
  }
];

const SkillCategoriesSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Skills by Category
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the wide range of skills available for exchange on our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`border card-hover animate-fade-in ${category.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <Link 
                        to={`/discover?skill=${skill.replace(' ', '+')}`}
                        className="text-gray-700 hover:text-skill-purple transition-colors"
                      >
                        {skill}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCategoriesSection;
