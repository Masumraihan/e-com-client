import { TSubCategory } from "@/app/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";
//import Autoplay from "embla-carousel-autoplay";
const getSubCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/sub-category/get-all-sub-categories`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const SubCategories = async () => {
  let subCategories = await getSubCategories();

  return (
    <div className='p-4 text-white bg-primary'>
      {!subCategories.length ? (
        <div className='text-4xl text-center'>No sub categories found</div>
      ) : (
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          //plugins={[Autoplay({ delay: 3000 })]}
          className='relative w-full'
        >
          <CarouselPrevious className='absolute left-0 z-10 ml-auto -translate-y-1/2 top-1/2 ' />
          <CarouselNext className='absolute right-0 z-10 -translate-y-1/2 top-1/2' />

          <CarouselContent className='items-center justify-center gap-2'>
            {subCategories.map((subCategory: TSubCategory) => (
              <CarouselItem key={subCategory._id} className='basis-1/3 md:basis-1/6 lg:basis-1/12'>
                <Link
                  href={`/category/${subCategory.category.category}/${subCategory.subCategory}`}
                  className='flex flex-col items-center justify-center gap-1 duration-200 hover:scale-105'
                >
                  {/*<Image
                    width={50}
                    height={50}
                    src={subCategory.icon}
                    alt={subCategory.subCategory}
                    className='rounded-full'
                  />*/}
                  <p>{subCategory.subCategory}</p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};

export default SubCategories;
