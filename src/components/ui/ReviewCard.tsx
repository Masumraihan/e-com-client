import { Rating, ThinStar } from "@smastrom/react-rating";
import { Check } from "lucide-react";

type TReview = {
  id: number;
  name: string;
  rating: number;
  message: string;
};
const ReviewCard = ({ review }: { review: TReview }) => {
  const { rating, name, message } = review;
  return (
    <div>
      <div className='p-3 space-y-2 border rounded-2xl border-lightGray/30 '>
        <Rating
          readOnly
          value={rating}
          style={{ maxWidth: 120 }}
          itemStyles={{
            itemShapes: ThinStar,
            activeFillColor: "#f59e0b",
            inactiveFillColor: "#ffedd5",
          }}
          className='text-yellow-400'
        />
        <div className='flex items-center gap-1.5'>
          <h3 className='text-lg font-bold'>{name}</h3>
          <div className='bg-green  size-[22px] rounded-full flex items-center justify-center'>
            <Check size={14} color='white' />
          </div>
        </div>
        <p className='text-sm text-lightGray'>{message}</p>
        <p className='pt-3 text-xs font-semibold'>Review on January 12, 2020</p>
      </div>
    </div>
  );
};

export default ReviewCard;
