"use client";
import { TReview } from "@/app/types";
import { useGetSingleProductReviewQuery } from "@/redux/features/reivew/reviewApi";
import ReviewCard from "../ui/ReviewCard";
import ReviewCardSkeleton from "../ui/ReviewCardSkeleton";
import ReviewFilter from "../ui/ReviewFilter";

const RatingAndReviews = ({ productId }: { productId: string }) => {
  const { data, isFetching } = useGetSingleProductReviewQuery(productId);

  return (
    <>
      <div className='flex justify-between md:items-center'>
        <>
          <ReviewFilter productId={productId} reviewCount={data?.data?.length || 0} />
        </>
      </div>
      {isFetching ? (
        <div className='grid gap-4 mt-4 md:grid-cols-2'>
          {[1, 2, 3, 4].map((i) => (
            <ReviewCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {!data?.data?.length ? (
            <p className='my-5 text-lg font-semibold text-center text-gray-500'> No Review yet </p>
          ) : (
            <div className='grid gap-4 mt-4 md:grid-cols-2'>
              {data?.data?.map((review: TReview) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </div>
          )}
          {/*<div className='text-center'>
            <Button size='lg' variant='outline' className='mt-6 rounded-full'>
              Load More Reviews
            </Button>
          </div>*/}
        </>
      )}
    </>
  );
};

export default RatingAndReviews;
