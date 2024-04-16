"use client";
import Autoplay from "embla-carousel-autoplay";
import ReviewCard from "../ui/ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type TReview = {
  id: number;
  name: string;
  rating: number;
  message: string;
};

export const reviews: TReview[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum quam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum quam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
  {
    id: 3,
    name: "Sarah M.",
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum quam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
  {
    id: 4,
    name: "Sarah M.",
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum quam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
  {
    id: 5,
    name: "Sarah M.",
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum quam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
  {
    id: 6,
    name: "Sarah M.",
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum quam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
];
const Reviews = () => {
  return (
    <div className='container'>
      <h2 className='mb-2 text-xl font-bold md:text-3xl'>Our Happy Customer</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[Autoplay({ delay: 3000 })]}
        className='w-full mt-4 '
      >
        <CarouselPrevious className='absolute ml-auto right-10 -top-9 lg:-top-10' />
        <CarouselNext className='absolute right-0 -top-9 lg:-top-10' />

        <CarouselContent className='gap-2'>
          {reviews.map((item: TReview) => (
            <CarouselItem key={item.id} className='basis-2/3 md:basis-1/3 lg:basis-1/4'>
              <ReviewCard review={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Reviews;
