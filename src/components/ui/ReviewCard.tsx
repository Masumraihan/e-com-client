import { TReview } from "@/app/types";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { Check } from "lucide-react";
import moment from "moment";

const ReviewCard = ({ review }: { review: TReview }) => {
  const { rating, comment, user, product } = review;
  return (
    <div>
      <div className='p-3 space-y-2 border rounded-2xl border-lightGray/30 '>
        <div className='flex items-center gap-x-2'>
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
          />{" "}
          <span className='text-xs'>({rating})</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <h3 className='text-lg font-bold'>{user?.name}</h3>
          <div className='bg-green  size-[22px] rounded-full flex items-center justify-center'>
            <Check size={14} color='white' />
          </div>
        </div>
        <div>
          <h3 className='text-sm font-semibold'>{product?.title}</h3>
          <p className='text-xs font-light text-lightGray'>{comment}</p>
        </div>
        <p className='pt-3 text-xs font-semibold'>
          Review on {moment(review.createdAt).format("LL")}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
