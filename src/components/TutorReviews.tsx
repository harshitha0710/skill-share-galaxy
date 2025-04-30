
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  text: string;
}

interface TutorReviewsProps {
  reviews: Review[];
}

const TutorReviews = ({ reviews }: TutorReviewsProps) => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0]; // 5, 4, 3, 2, 1 stars
    
    reviews.forEach(review => {
      distribution[5 - review.rating]++;
    });
    
    return distribution.map(count => (count / reviews.length) * 100);
  };
  
  const ratingDistribution = getRatingDistribution();

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(averageRating)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < averageRating
                        ? "text-yellow-400 fill-yellow-400 opacity-50"
                        : "text-gray-300"
                    } mx-0.5`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on {reviews.length} reviews</p>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <span className="text-sm w-8">{rating} star</span>
                  <div className="mx-2 flex-1 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-yellow-400 h-2.5 rounded-full" 
                      style={{ width: `${ratingDistribution[5 - rating]}%` }}
                    ></div>
                  </div>
                  <span className="text-sm w-12 text-right">
                    {Math.round(ratingDistribution[5 - rating])}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={review.author.avatar} />
                    <AvatarFallback className="bg-gray-200">
                      {review.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.author.name}</p>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      } ml-0.5`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TutorReviews;
