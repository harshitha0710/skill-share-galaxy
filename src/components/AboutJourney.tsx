
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    year: "2020",
    title: "The Idea",
    description: "SkillGalaxy began as a concept in our founder's notebook - what if we created a platform where skills, not money, were the currency?"
  },
  {
    year: "2021",
    title: "First Beta",
    description: "We launched our first beta with 100 users in a local community, testing the skill matching algorithm and core exchange mechanics."
  },
  {
    year: "2022",
    title: "Platform Launch",
    description: "Official launch of SkillGalaxy, introducing our rating system, chat functionality, and skill verification process."
  },
  {
    year: "2023",
    title: "Growing Community",
    description: "Reached 10,000 users globally and expanded our skill categories to cover over 200 different subject areas."
  },
  {
    year: "Today",
    title: "Continuous Innovation",
    description: "Constantly improving our platform based on community feedback, enhancing the matching algorithm, and expanding our reach."
  }
];

const AboutJourney = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Journey</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From idea to thriving community, the SkillGalaxy story is just beginning.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          {/* Line connecting milestones */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0 hidden md:block"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`relative z-10 flex flex-col md:flex-row items-center md:items-start mb-12 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:pl-12 md:pr-0'}`}>
                <Card className="border border-gray-200 card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:hidden h-8"></div>
              
              <div className="bg-skill-purple text-white rounded-full w-12 h-12 flex items-center justify-center font-bold z-20 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                {milestone.year}
              </div>
              
              <div className={`hidden md:block md:w-1/2 ${index % 2 !== 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                {index % 2 !== 0 && <div className="h-full"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
