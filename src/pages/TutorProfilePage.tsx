
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Star, Calendar, Clock, Video } from "lucide-react";
import TutorReviews from "@/components/TutorReviews";

const TutorProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, fetch tutor data based on the id
  const tutor = {
    id,
    name: "Sarah Miller",
    avatar: "",
    skills: ["JavaScript", "React", "Node.js", "Web Development", "TypeScript"],
    rating: 4.8,
    reviewCount: 24,
    location: "New York, NY",
    bio: "Full-stack developer with 5+ years of experience. I love teaching web development concepts and helping others build their projects. My teaching approach focuses on practical, hands-on learning with real-world examples.",
    education: "B.S. Computer Science, Stanford University",
    experience: "Senior Developer at TechCorp (2020-Present), Frontend Lead at WebApp Inc. (2018-2020)",
    availability: "Weekends and weekday evenings",
    isOnline: true,
    completedExchanges: 18,
    joinedDate: "January 2022",
    languages: ["English", "Spanish"]
  };
  
  const reviews = [
    {
      id: "1",
      author: {
        name: "Alex Johnson",
        avatar: ""
      },
      rating: 5,
      date: "June 15, 2023",
      text: "Sarah is an excellent teacher! She helped me understand React hooks in just one session. Very patient and knowledgeable."
    },
    {
      id: "2",
      author: {
        name: "Maria Garcia",
        avatar: ""
      },
      rating: 5,
      date: "May 3, 2023",
      text: "I had a great experience learning JavaScript fundamentals. Sarah explains concepts clearly and provides helpful resources."
    },
    {
      id: "3",
      author: {
        name: "David Lee",
        avatar: ""
      },
      rating: 4,
      date: "April 22, 2023",
      text: "Very helpful with my Node.js project. Would definitely recommend for backend development help."
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Card className="border border-gray-200 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex flex-col items-center">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={tutor.avatar} />
                  <AvatarFallback className="bg-skill-purple text-white text-4xl">
                    {tutor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="mt-4 flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(tutor.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < tutor.rating
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-300"
                        } mr-0.5`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {tutor.rating} ({tutor.reviewCount} reviews)
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold">{tutor.name}</h1>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-skill-purple hover:bg-skill-darkPurple">
                      <Link to={`/chat/${tutor.id}`}>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Message
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Session
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{tutor.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Education</h3>
                    <p className="text-gray-900">{tutor.education}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Member Since</h3>
                    <p className="text-gray-900">{tutor.joinedDate}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Languages</h3>
                    <p className="text-gray-900">{tutor.languages.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Completed Exchanges</h3>
                    <p className="text-gray-900">{tutor.completedExchanges}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Availability</h3>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-500" />
                      <span className="text-gray-900">{tutor.availability}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Session Format</h3>
                    <div className="flex items-center">
                      {tutor.isOnline && (
                        <div className="flex items-center mr-4">
                          <Video size={16} className="mr-2 text-gray-500" />
                          <span className="text-gray-900">Online</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-500" />
                        <span className="text-gray-900">In-Person</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="bg-skill-purple/10 text-skill-purple border-skill-purple/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="reviews">
          <TabsList className="mb-6 bg-white border">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews">
            <TutorReviews reviews={reviews} />
          </TabsContent>
          <TabsContent value="experience">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">Senior Developer at TechCorp</h4>
                  <p className="text-gray-600 mb-2">2020 - Present</p>
                  <p className="text-gray-800">
                    Leading frontend development for enterprise applications. Mentoring junior developers and implementing best practices for code quality and performance.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Frontend Lead at WebApp Inc.</h4>
                  <p className="text-gray-600 mb-2">2018 - 2020</p>
                  <p className="text-gray-800">
                    Managed a team of 5 frontend developers building responsive web applications. Implemented component libraries and design systems.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TutorProfilePage;
