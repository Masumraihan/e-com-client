import { TReview } from "@/app/types";
import ReviewCard from "../ui/ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Reviews = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/review/get-all-product-reviews`);
  const { data } = await res.json();

  return (
    <div className='container'>
      <h2 className='mb-2 text-xl font-bold md:text-3xl'>Our Happy Customer</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        //plugins={[Autoplay({ delay: 3000 })]}
        className='w-full mt-4 '
      >
        <CarouselPrevious className='absolute ml-auto right-10 -top-9 lg:-top-10' />
        <CarouselNext className='absolute right-0 -top-9 lg:-top-10' />

        <CarouselContent className='gap-2'>
          {data?.map((item: TReview) => (
            <CarouselItem key={item._id} className='basis-2/3 md:basis-1/3 lg:basis-1/4'>
              <ReviewCard review={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Reviews;
