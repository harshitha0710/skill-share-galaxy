
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const skills = [
  "Web Development", "Python", "JavaScript", "React", "Node.js", "Data Science", 
  "Machine Learning", "UI/UX Design", "Graphic Design", "Video Editing", "Photography"
];

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

const TutorFilters = ({ onFilterChange }: FiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState([0]);
  const [availability, setAvailability] = useState("all");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const handleSearch = () => {
    onFilterChange({
      searchTerm,
      skills: selectedSkills,
      minRating: ratingFilter[0],
      availability,
      onlineOnly
    });
  };
  
  const handleReset = () => {
    setSearchTerm("");
    setSelectedSkills([]);
    setRatingFilter([0]);
    setAvailability("all");
    setOnlineOnly(false);
    
    onFilterChange({
      searchTerm: "",
      skills: [],
      minRating: 0,
      availability: "all",
      onlineOnly: false
    });
  };
  
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };
  
  const removeSkill = (skill: string) => {
    setSelectedSkills(prev => prev.filter(s => s !== skill));
  };

  return (
    <div className="w-full mb-8">
      <div className="hidden md:block">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Input
                placeholder="Search by name or skill"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <Select value={availability} onValueChange={setAvailability}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Availability</SelectItem>
                <SelectItem value="weekends">Weekends</SelectItem>
                <SelectItem value="weeknights">Weeknights</SelectItem>
                <SelectItem value="weekdays">Weekdays</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center gap-2">
              <Checkbox 
                id="online" 
                checked={onlineOnly}
                onCheckedChange={(checked) => setOnlineOnly(!!checked)} 
              />
              <Label htmlFor="online">Online only</Label>
            </div>
            
            <Button onClick={handleSearch} className="bg-skill-purple hover:bg-skill-darkPurple">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-medium">Minimum Rating</Label>
                <span className="text-sm">{ratingFilter[0]}</span>
              </div>
              <Slider 
                value={ratingFilter} 
                onValueChange={setRatingFilter}
                min={0}
                max={5}
                step={1}
                className="w-full"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium block mb-2">Skills</Label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant={selectedSkills.includes(skill) ? "default" : "outline"} 
                    className={`cursor-pointer ${
                      selectedSkills.includes(skill) 
                        ? "bg-skill-purple hover:bg-skill-darkPurple" 
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {(searchTerm || selectedSkills.length > 0 || ratingFilter[0] > 0 || availability !== "all" || onlineOnly) && (
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-500">Active filters:</span>
                {selectedSkills.map(skill => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="pl-2 flex items-center gap-1 bg-skill-purple/10 text-skill-purple"
                  >
                    {skill}
                    <button 
                      onClick={() => removeSkill(skill)}
                      className="ml-1 hover:bg-skill-purple/20 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                ))}
                {searchTerm && (
                  <Badge variant="secondary" className="pl-2 flex items-center gap-1 bg-skill-purple/10 text-skill-purple">
                    Search: {searchTerm}
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="ml-1 hover:bg-skill-purple/20 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                )}
                {ratingFilter[0] > 0 && (
                  <Badge variant="secondary" className="pl-2 flex items-center gap-1 bg-skill-purple/10 text-skill-purple">
                    Rating: {ratingFilter[0]}+
                    <button 
                      onClick={() => setRatingFilter([0])}
                      className="ml-1 hover:bg-skill-purple/20 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                )}
                {availability !== "all" && (
                  <Badge variant="secondary" className="pl-2 flex items-center gap-1 bg-skill-purple/10 text-skill-purple">
                    {availability.charAt(0).toUpperCase() + availability.slice(1)}
                    <button 
                      onClick={() => setAvailability("all")}
                      className="ml-1 hover:bg-skill-purple/20 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                )}
                {onlineOnly && (
                  <Badge variant="secondary" className="pl-2 flex items-center gap-1 bg-skill-purple/10 text-skill-purple">
                    Online only
                    <button 
                      onClick={() => setOnlineOnly(false)}
                      className="ml-1 hover:bg-skill-purple/20 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </Badge>
                )}
              </div>
              <Button variant="ghost" onClick={handleReset} className="h-8 px-2 text-sm">
                Clear all
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile filters */}
      <div className="md:hidden">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search by name or skill"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline">
                <SlidersHorizontal size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div>
                  <Label className="text-sm font-medium block mb-2">Availability</Label>
                  <Select value={availability} onValueChange={setAvailability}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Availability</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="weeknights">Weeknights</SelectItem>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="online-mobile" 
                    checked={onlineOnly}
                    onCheckedChange={(checked) => setOnlineOnly(!!checked)} 
                  />
                  <Label htmlFor="online-mobile">Online only</Label>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label className="text-sm font-medium">Minimum Rating</Label>
                    <span className="text-sm">{ratingFilter[0]}</span>
                  </div>
                  <Slider 
                    value={ratingFilter} 
                    onValueChange={setRatingFilter}
                    min={0}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium block mb-2">Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant={selectedSkills.includes(skill) ? "default" : "outline"} 
                        className={`cursor-pointer ${
                          selectedSkills.includes(skill) 
                            ? "bg-skill-purple hover:bg-skill-darkPurple" 
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-6">
                <Button 
                  variant="outline" 
                  className="flex-1" 
                  onClick={() => {
                    handleReset();
                    setMobileFiltersOpen(false);
                  }}
                >
                  Reset
                </Button>
                <Button 
                  className="flex-1 bg-skill-purple hover:bg-skill-darkPurple" 
                  onClick={() => {
                    handleSearch();
                    setMobileFiltersOpen(false);
                  }}
                >
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
          <Button onClick={handleSearch} className="bg-skill-purple hover:bg-skill-darkPurple">
            <Search size={18} />
          </Button>
        </div>
        
        {(searchTerm || selectedSkills.length > 0 || ratingFilter[0] > 0 || availability !== "all" || onlineOnly) && (
          <div className="flex items-center gap-2 my-2 overflow-x-auto pb-2">
            <span className="text-xs text-gray-500">Filters:</span>
            {selectedSkills.length > 0 && (
              <Badge variant="secondary" className="text-xs">
                {selectedSkills.length} skills
              </Badge>
            )}
            {ratingFilter[0] > 0 && (
              <Badge variant="secondary" className="text-xs">
                {ratingFilter[0]}+ rating
              </Badge>
            )}
            {availability !== "all" && (
              <Badge variant="secondary" className="text-xs">
                {availability}
              </Badge>
            )}
            {onlineOnly && (
              <Badge variant="secondary" className="text-xs">
                Online
              </Badge>
            )}
            <Button variant="ghost" onClick={handleReset} className="h-6 px-2 text-xs ml-auto">
              Clear
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorFilters;
