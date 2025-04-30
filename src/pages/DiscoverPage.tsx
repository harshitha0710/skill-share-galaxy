
import { useState } from "react";
import TutorFilters from "@/components/TutorFilters";
import TutorCard, { TutorProps } from "@/components/TutorCard";

// Mock data for tutors
const mockTutors: TutorProps[] = [
  {
    id: "1",
    name: "Sarah Miller",
    avatar: "",
    skills: ["JavaScript", "React", "Web Development"],
    rating: 4.8,
    reviewCount: 24,
    location: "New York, NY",
    isOnline: true
  },
  {
    id: "2",
    name: "David Chen",
    avatar: "",
    skills: ["Python", "Machine Learning", "Data Science"],
    rating: 5.0,
    reviewCount: 18,
    location: "San Francisco, CA",
    isOnline: true
  },
  {
    id: "3",
    name: "Jennifer Lee",
    avatar: "",
    skills: ["UI/UX Design", "Figma", "Adobe XD"],
    rating: 4.5,
    reviewCount: 12,
    location: "Chicago, IL",
    isOnline: false
  },
  {
    id: "4",
    name: "Michael Johnson",
    avatar: "",
    skills: ["Node.js", "Express", "MongoDB"],
    rating: 4.6,
    reviewCount: 9,
    location: "Austin, TX",
    isOnline: true
  },
  {
    id: "5",
    name: "Maria Rodriguez",
    avatar: "",
    skills: ["Spanish", "English", "Teaching"],
    rating: 4.9,
    reviewCount: 32,
    location: "Miami, FL",
    isOnline: false
  },
  {
    id: "6",
    name: "Robert Williams",
    avatar: "",
    skills: ["Photography", "Photoshop", "Lightroom"],
    rating: 4.7,
    reviewCount: 15,
    location: "Los Angeles, CA",
    isOnline: true
  },
];

const DiscoverPage = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    skills: [] as string[],
    minRating: 0,
    availability: "all",
    onlineOnly: false
  });
  
  const [tutors] = useState<TutorProps[]>(mockTutors);
  
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    console.log("Applied filters:", newFilters);
    
    // In a real app, this would call an API with the filters
    // and update the tutors state with the results
  };
  
  const filteredTutors = tutors.filter(tutor => {
    // Apply search term filter
    if (filters.searchTerm && !tutor.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
        !tutor.skills.some(skill => skill.toLowerCase().includes(filters.searchTerm.toLowerCase()))) {
      return false;
    }
    
    // Apply skills filter
    if (filters.skills.length > 0 && 
        !filters.skills.some(skill => tutor.skills.includes(skill))) {
      return false;
    }
    
    // Apply rating filter
    if (tutor.rating < filters.minRating) {
      return false;
    }
    
    // Apply online only filter
    if (filters.onlineOnly && !tutor.isOnline) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Discover Tutors</h1>
        
        <TutorFilters onFilterChange={handleFilterChange} />
        
        <div>
          {filteredTutors.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No tutors match your filters</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutors.map(tutor => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
