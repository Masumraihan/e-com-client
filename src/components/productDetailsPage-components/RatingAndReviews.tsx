import { reviews } from "../homepage-components/Reviews";
import ReviewCard from "../ui/ReviewCard";
import ReviewFilter from "../ui/ReviewFilter";
import { Button } from "../ui/button";

const RatingAndReviews = () => {
  return (
    <div>
      <div className='flex justify-between md:items-center'>
        <>
          <ReviewFilter />
        </>
      </div>
      <div className='grid gap-4 mt-4 md:grid-cols-2'>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
      <div className='text-center'>
        <Button size='lg' variant='outline' className='mt-6 rounded-full'>
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default RatingAndReviews;
