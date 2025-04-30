
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Edit } from "lucide-react";

const ViewProfilePage = () => {
  // In a real application, this data would come from an API or context
  // This is mock data for demonstration
  const [profile, setProfile] = useState({
    displayName: "Jane Smith",
    location: "San Francisco, CA",
    bio: "I'm passionate about teaching web development and learning piano.",
    education: "BS Computer Science, Stanford University",
    avatar: "",
    skillsToTeach: ["JavaScript", "React", "Node.js", "Web Development"],
    skillsToLearn: ["Piano", "Music Production", "Photography"],
    availability: "weeknights",
    isAvailableOnline: true,
    rating: 4.8,
    reviewsCount: 24
  });

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <Button variant="outline" asChild>
              <Link to="/profile" className="flex items-center gap-2">
                <Edit size={16} />
                Edit Profile
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Avatar */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-skill-purple text-white flex items-center justify-center text-4xl mb-3">
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.displayName} className="w-full h-full rounded-full object-cover" />
                ) : (
                  profile.displayName.charAt(0)
                )}
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mt-1">
                  <span className="text-yellow-500 text-lg mr-1">★</span>
                  <span className="font-semibold">{profile.rating}</span>
                  <span className="text-gray-500 ml-1">({profile.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{profile.displayName}</h2>
                <p className="text-gray-600">{profile.location}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About Me</h3>
                <p className="text-gray-700">{profile.bio}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-gray-700">{profile.education}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Skills I Teach</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skillsToTeach.map((skill) => (
                    <span key={skill} className="bg-skill-purple text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Skills I Want to Learn</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skillsToLearn.map((skill) => (
                    <span key={skill} className="bg-white border border-skill-purple text-skill-purple px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Availability</h3>
                  <p className="text-gray-700">
                    {profile.availability === "weekends" && "Weekends only"}
                    {profile.availability === "weeknights" && "Weekday evenings"}
                    {profile.availability === "weekdays" && "Weekdays"}
                    {profile.availability === "flexible" && "Flexible"}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Online Sessions</h3>
                  <p className="text-gray-700">
                    {profile.isAvailableOnline ? "Available" : "Not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfilePage;
