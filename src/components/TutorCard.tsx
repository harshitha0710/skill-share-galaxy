
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

export interface TutorProps {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  rating: number;
  reviewCount: number;
  location: string;
  isOnline: boolean;
}

const TutorCard = ({ tutor }: { tutor: TutorProps }) => {
  return (
    <Card className="border border-gray-200 overflow-hidden card-hover">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={tutor.avatar} alt={tutor.name} />
            <AvatarFallback className="bg-skill-purple text-white">
              {tutor.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Link to={`/tutors/${tutor.id}`} className="hover:text-skill-purple">
              <h3 className="font-semibold text-lg">{tutor.name}</h3>
            </Link>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
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
                {tutor.rating.toFixed(1)} ({tutor.reviewCount} reviews)
              </span>
            </div>
            <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
              <span>{tutor.location}</span>
              {tutor.isOnline && (
                <Badge variant="outline" className="ml-2 bg-green-100 hover:bg-green-100 text-green-800 border-green-200">
                  Online
                </Badge>
              )}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tutor.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-skill-purple/10 text-skill-purple hover:bg-skill-purple/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-gray-50 p-4 flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link to={`/tutors/${tutor.id}`}>View Profile</Link>
        </Button>
        <Button asChild size="sm" className="bg-skill-purple hover:bg-skill-darkPurple">
          <Link to={`/chat/${tutor.id}`}>
            <MessageCircle className="mr-2 h-4 w-4" /> Message
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TutorCard;
