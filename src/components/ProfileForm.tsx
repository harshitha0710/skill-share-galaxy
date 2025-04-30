
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const skillsList = [
  "JavaScript", "Python", "React", "Node.js", "Web Development",
  "Data Science", "Machine Learning", "Digital Marketing", "UI/UX Design", 
  "Graphic Design", "Video Editing", "Photography", "Language Teaching",
  "Music Production", "Writing", "Cooking", "Fitness Training", "Yoga",
  "Public Speaking", "Finance", "Math Tutoring"
];

const profileSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters"),
  location: z.string().min(2, "Please provide your city or region"),
  bio: z.string().max(300, "Bio must be less than 300 characters"),
  education: z.string().min(2, "Please provide your education background"),
  skillsToTeach: z.array(z.string()).min(1, "Please select at least one skill to teach"),
  skillsToLearn: z.array(z.string()).min(1, "Please select at least one skill to learn"),
  availability: z.string(),
  isAvailableOnline: z.boolean()
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const ProfileForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: "",
      location: "",
      bio: "",
      education: "",
      skillsToTeach: [],
      skillsToLearn: [],
      availability: "weekends",
      isAvailableOnline: true
    },
  });

  const onSubmit = async (values: ProfileFormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Profile data:", values);
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Profile created!",
        description: "Your profile has been set up successfully.",
      });
      
      navigate("/discover");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to create profile",
        description: "There was a problem saving your profile. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src="" />
            <AvatarFallback className="bg-skill-purple text-white text-xl">
              {form.watch("displayName")?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">Upload Photo</Button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your display name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About Me</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell others about yourself, your interests, and experience..." 
                    className="resize-none min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Max 300 characters. This will be displayed on your public profile.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="education"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Education</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your educational background" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skillsToTeach"
            render={() => (
              <FormItem>
                <FormLabel>Skills I Can Teach</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {skillsList.map((skill) => (
                    <FormField
                      key={skill}
                      control={form.control}
                      name="skillsToTeach"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={skill}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(skill)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, skill])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== skill
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {skill}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skillsToLearn"
            render={() => (
              <FormItem>
                <FormLabel>Skills I Want to Learn</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {skillsList.map((skill) => (
                    <FormField
                      key={skill}
                      control={form.control}
                      name="skillsToLearn"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={skill}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(skill)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, skill])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== skill
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {skill}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="weeknights">Weekday evenings</SelectItem>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isAvailableOnline"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-8">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Available for online sessions
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button variant="outline">Cancel</Button>
            <Button 
              type="submit" 
              className="bg-skill-purple hover:bg-skill-darkPurple" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Profile"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
